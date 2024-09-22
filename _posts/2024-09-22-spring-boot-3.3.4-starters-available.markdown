---
layout: post
title:  "Spring Boot 3.3.4 starters available now"
date:   2024-09-22 11:20:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
permalink: /microservices/correlation/spring/opensource/2024/09/22/spring-boot-3-3-4-starters-available-now
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
excerpt: |
  We are pleased to announce the release of new versions of the SPT Development [Spring Boot](https://spring.io/projects/spring-boot){: target="_blank"} 
  starter projects, for integrating the SPT Development libraries related to correlation IDs, logging and auditing, into Spring Boot applications. 
  <span class="d-inline d-md-none d-xl-inline">These new releases along with new releases of some of the projects they relate to, have been updated to 
  align with the recently released [Spring Boot 3.3.4](https://spring.io/blog/2024/09/19/spring-boot-3-3-4-available-now){: target="_blank" }. 
  As always, the source is available on [GitHub](https://github.com/spt-development) and the artifacts are also available in
  [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.</span>
  {: class="lead"}
news: true
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

The following projects have all been updated to v3.3.4:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated to align with version 3.3.4 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v3.0.22
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)- v3.0.22
* [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) - v2.0.19
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v3.2.3
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v3.1.11

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) and the 
[Micrometer demo project](https://github.com/spt-development/spt-development-micrometer-tracing-demo) to Spring Boot 3.3.4 and v3.3.4 of all the libraries above.

Additionally, as Spring Boot 3.3.4 adds support for JDK 23, the demo project as also been built and tested against JDK 23 (in addition to 17 and 21). The Micrometer demo project however, is just being built  against JDK 21 until Artemis supports JDK 23 - see [this issue](https://issues.apache.org/jira/browse/ARTEMIS-4975).

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
