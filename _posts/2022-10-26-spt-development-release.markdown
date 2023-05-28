---
layout: post
title:  "Spring Boot 2.0.10 starters available now"
date:   2022-10-26 19:53:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource slf4j MDC
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
---
I'm pleased to announce that we have now released new versions of the spt-development-*-spring-boot projects for integrating the spt-development
libraries related to correlation IDs, logging and auditing, into Spring Boot applications. These new releases along with new releases of some of
the projects they relate to, have been updated to integrate with the [slf4j MDC](https://www.slf4j.org/api/org/slf4j/MDC.html) context. Providing
a simpler way of including the correlation ID in your logs. As always, the source is available on [GitHub](https://github.com/spt-development) and 
the artifacts are also available in [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own 
<em>Java</em> projects.
{: class="lead"}

The following projects have all been updated to v2.0.10:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v2.0.10
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring) - v2.0.8
* [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) - v2.0.5
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v2.0.8

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) to v2.0.10 of all the libraries above.

### Mapped Diagnostic Context
{: class="fs-4" }

Simply adding v2.0.10 spt-development-cid-web-spring-boot-starter or spt-development-cid-jms-spring-boot-starter (depending on your requirements)
as a dependency to your project, will be enough to have the correlation ID added to the [Mapped Diagnostic Context](https://logback.qos.ch/manual/mdc.html) 
of the underlying logging system you are using. The correlation ID will be added with [slf4j's MDC](https://www.slf4j.org/api/org/slf4j/MDC.html) class, 
for each new HTTP request or JMS message received. In order for the correlation ID to appear in your logs, you will need to update your logging pattern to 
include a reference to the MDC key as shown in a section of 
[application.yml](https://github.com/spt-development/spt-development-demo/blob/main/src/main/resources/application.yml) taken from the
[demo](https://github.com/spt-development/spt-development-demo), project below.

{% gist c45317e824c89eaab1eefdf23659fda0 %}

Here the default key of `cid` is being used. You will also notice the use of the `replace` function; `replace` is being used so that the correlation ID
is only output when set, so that any logging output by Spring Boot before the request filter or JMS listener fires, is output *without* the 
correlation ID. **NOTE** the default key can be customised with the `spt.cid.mdc.cid-key` property.

If you are upgrading from [v2.0.9]({% post_url 2022-10-22-spt-development-release %}) and you have followed the suggested approach of including the
correlation ID in all of your application's log statements demonstrated in [this post]({% post_url 2021-03-10-spt-development-cid %}), you will need
to remove the `CorrelationId.get()` call or accept that you will have the correlation ID appear twice each for each entry in your logs. 
[This changeset](https://github.com/spt-development/spt-development-demo/commit/72358a18c912f7395cb71c4df3962860c97dade1#diff-431ef65f9135a677edec67313f319a2a122952c150df775cb0796db7a2ccb43a)
shows the changes made to the demo project to remove the explicit inclusion of correlation IDs in the logs. On the plus side, if you are using
spt-development-logging-spring-boot, the number of changes will be reduced.

#### Disable MDC
{: class="fs-5" }

Although it is the default functionality and recommended approach, if you don't want to use MDC, maybe because you already have `CorrelationId.get()` calls
in log statements scattered throughout your code, then it it is possible to disable this new functionality by setting the `spt.cid.mdc.disabled` property to `true`.
The demo project build has been extended to run with a new `mdc-disabled` profile to prove that the libraries function correctly when this property is set. This
is purely for demonstration and testing purposes however and not expected to be used to switch this functionality on and off in production, although there is 
no reason why it couldn't be.

### Why the U-turn
{: class="fs-4" }

It was a conscious decision [early on]({% post_url 2021-05-30-spt-development-cid-part-2 %}) *not* to use the MDC. However, having had feedback from various
users, it became eveident that this was a feature that was lacking in the library and having to explicitly add `CorrelationId.get()` explicitly to log
statements was putting some people off from using the library.

Integration with ~~[Spring Cloud Sleuth](https://spring.io/projects/spring-cloud-sleuth)~~ 
[Micrometer](https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/#actuator.micrometer-tracing)
is on the road map and the use of MDC is expected to make that integration 
simpler in the future.

[EDIT] There is now a [post]({% post_url 2023-05-14-micrometer-trace-integration %}) describing how to integrate the logging and auditing libraries with Micrometer.

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
