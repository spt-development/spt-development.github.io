---
layout: post
title:  "Spring Boot 3.2.5 starters available now"
date:   2024-04-27 14:20:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
permalink: /microservices/correlation/spring/opensource/2024/04/27/spring-boot-3-2-5-starters-available-now
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
excerpt: |
  We are pleased to announce the release of new versions of the SPT Development [Spring Boot](https://spring.io/projects/spring-boot){: target="_blank"} 
  starter projects, for integrating the SPT Development libraries related to correlation IDs, logging and auditing, into Spring Boot applications. 
  <span class="d-inline d-md-none d-xl-inline">These new releases along with new releases of some of the projects they relate to, have been updated to 
  align with the recently released [Spring Boot 3.2.5](https://spring.io/blog/2024/04/18/spring-boot-3-2-5-available-now){: target="_blank" }. 
  As always, the source is available on [GitHub](https://github.com/spt-development) and the artifacts are also available in
  [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.</span>
  {: class="lead"}
news: true
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

The following projects have all been updated to v3.2.5:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated to align with version 3.2.5 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v3.0.17
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)- v3.0.17
* [spt-development-cid-web-spring](https://github.com/spt-development/spt-development-cid-web-spring)- v2.0.16
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v3.1.0
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v3.1.6

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) and the 
[Micrometer demo project](https://github.com/spt-development/spt-development-micrometer-tracing-demo) to Spring Boot 3.2.5 and v3.2.5 of all the libraries above.

### spt-development-logging-spring - DAO Support

Release 3.1.0 of `spt-development-logging-spring` introduces support for logging public methods of classes that extend `org.springframework.dao.support.DaoSupport`.
The new aspect can be registered as a spring bean as shown below:

{% gist f37f14a299320d3eccffd86c9456d596 %}

Alternatively, add the [spt-development/spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)
starter to your project's pom and enable by setting the `spt.logging.dao-support.enabled` property to `true` - this new functionality is disabled by
default as it results in warnings being logged by  `CglibAopProxy` when Spring Boot apps start. This can be hidden by configuring logging to log at
`ERROR` rather than `INFO` as demonstrated in the 
[demo project](https://github.com/spt-development/spt-development-demo/blob/main/src/test/resources/logback-test.xml).

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
