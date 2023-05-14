---
layout: post
title:  "Micrometer Tracing Integration"
date:   2023-05-14 14:30:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
excerpt: |
  The [Spring Cloud Sleuth](https://spring.io/projects/spring-cloud-sleuth){:target="_blank"} project provided functionality for distributed tracing; 
  the core of this project has now been moved to [Micrometer](https://micrometer.io/){:target="_blank"}. The distributed tracing provided by Micrometer
  is fully featured and has some overlap with the functionality provided by the spt-development-cid-* projects. In this post I will demonstrate how to 
  combine [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) and 
  [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) with Micrometer to get production quality
  logging and auditing together with the distributed tracing features of Micrometer.
  {: class="lead"}
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

## Micrometer Tracing
{: class="fs-3" }

All of the code from this post can be found in the 
[spt-development-micrometer-tracing-demo](https://github.com/spt-development/spt-development-micrometer-tracing-demo) project, which was forked
from the [spt-development-demo](https://github.com/spt-development/spt-development-demo) project. The `spt-development-demo` project already included 
the `spring-boot-starter-actuator` dependency, so the only other dependency required to get tracing working was to add the tracing bridge dependency.

{% gist 5797d3d366bc8ddb882a89d4cc69bf73 %}

And to see the trace ID (and span ID) included in the logs, the loggging pattern needed updating.

{% gist b5c925abaa17b230d8c27878c53e14f8 %}

Specifically `[%X{traceId:-},%X{spanId:-}]` was included in the pattern.

Further detail around configuring tracing and shipping logs to a distributed tracing system such as
[Zipkin](https://zipkin.io/){:target="_blank"}, can be found in the
[documentation](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#actuator.micrometer-tracing){:target="_blank"}. Note, by default 
Spring Boot samples only 10% of requests to prevent overwhelming the trace backend, so it may be necessary to change the `management.tracing.sampling.probability`
property; this is not necessary for this demo where we are only logging to the console.

### Gotcha!
{: class="fs-4" }

One thing that I struggled to find mentioned in the documentation was that tracing is *switched off* by default in tests. This is 
[intended](https://github.com/spring-projects/spring-boot/issues/31308){:target="_blank"} and therefore when I ran the tests initially, the trace 
ID and span ID were <span class="fst-italic">not set</span>. To override this default behaviour it was necessary to add the `AutoConfigureObservability` 
annotation to the integration tests, which can be used to enable/disable metrics and tracing independently.

{% gist b785e325630c7dcb1eeaefab50df29b0 %}

## Auditing
{: class="fs-3" }

Adding the `spt-development-audit-spring-boot-starter` dependency to the project pulls in the required dependencies and automatically configures the
auditor. Since we are going to be using the Micrometer trace ID in place of the correlation ID, we can exclude the `spt-development-cid` 
dependency. This is not a mandatory step and the demo would work as expected without this exclusion; in the future we may change the audit 
libraries so that `spt-development-cid` is no longer brought in as a transitive dependency automatically.

{% gist 5747bcfc47e8c7aca20c7c930969f172 %}

To use the trace ID in place of the correlation ID implementation we need a custom `CorrelationIdProvider` bean that returns the current trace ID.

{% gist cf078dc9e44912d4e222fcd7fb18cc86 %}

With this in place and methods annotated as described in [this post]({% post_url 2021-10-03-spt-development-audit-spring %}), your application will be 
fully audited and audit events can be correlated using the trace ID.

### Actuator audit events
{: class="fs-4" }

If you are capturing actuator events as described in the previous [auditing post]({% post_url 2021-10-03-spt-development-audit-spring %}) you 
need to inject the `Tracer` bean into your audit event listener and again use the current trace ID in place of the correlation ID.

{% gist c7af3532347d0d14fb35646d27d88eae %}

### JMS Propagation
{: class="fs-4" }

The demo project makes use of `JmsAuditEventWriter` simply by configuring the `spt.audit.jms.destination` property. The Micrometer trace context
is not currently propagated in JMS messages by default; there is currently an 
[outstanding issue](https://github.com/spring-projects/spring-framework/issues/30335){:target="_blank"} to add this feature. For now, it is necessary 
to add custom code to propagate the trace context and for the trace ID to be included in the logs when the JMS messages are processed asynchronously. 
For this demo, a simple aspect has been added which extracts the trace ID from the JMS correlation ID header - this header is populated with
the correlation ID returned by the `CorrelationIdProvider`.

{% gist e442d6398602902177ff622bcfbf786e %}

## Logging
{: class="fs-3" }

As previously written about in more detail [here]({% post_url 2021-05-30-spt-development-cid-part-2 %}) simply add the `spt-development-logging-spring-boot-starter`
as a dependency to get production quality logging added to your application without any further code changes. With the logging format changes above, you will then
see logging for all of your public methods with the trace ID and span ID referenced.

{% gist 1dcd13217623a264464f6fd7ab570bfb %}

As with the audit starter, we can again exclude the `spt-development-cid` dependency if we want to reduce the number of libraries brought into the
project.

{% gist d7a6427a4910c4e1116e27c05c783910 %}

---

All of the changes required to migrate the original demo project to use Micrometer tracing, can be seen in 
[this commit](https://github.com/spt-development/spt-development-micrometer-tracing-demo/commit/1d9449246ecdd5f819b3d36cbc07d3e8867f34de).
