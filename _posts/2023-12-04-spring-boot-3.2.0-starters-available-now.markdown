---
layout: post
title:  "Spring Boot 3.2.0 starters available now"
date:   2023-12-04 19:12:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
permalink: /microservices/correlation/spring/opensource/2023/12/04/spring-boot-3-2-0-starters-available-now
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
excerpt: |
  We are pleased to announce the release of new versions of the SPT Development [Spring Boot](https://spring.io/projects/spring-boot){: target="_blank"} 
  starter projects, for integrating the SPT Development libraries related to correlation IDs, logging and auditing, into Spring Boot applications. 
  <span class="d-inline d-md-none d-xl-inline">These new releases along with new releases of some of the projects they relate to, have been updated to 
  align with the recently released [Spring Boot 3.2.0](https://spring.io/blog/2023/11/23/spring-boot-3-2-0-available-now){: target="_blank" }. 
  As always, the source is available on [GitHub](https://github.com/spt-development) and the artifacts are also available in
  [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.</span>
  {: class="lead"}
news: true
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

The following projects have all been updated to v3.2.0:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated to align with version 3.2.0 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v3.0.12
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)- v3.0.12
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v3.0.12
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v3.1.1

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) and the 
[Micrometer demo project](https://github.com/spt-development/spt-development-micrometer-tracing-demo) to Spring Boot 3.2.0 and v3.2.0 of all the libraries above.
The demo projects have also been extended/updated to make use of some of the new Spring Boot 3.2.0 features such as 
[support for virtual threads](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes#support-for-virtual-threads){: target="_blank" }
and [service connection support for ActiveMQ](https://github.com/spring-projects/spring-boot/wiki/Spring-Boot-3.2-Release-Notes#service-connection-support-for-activemq){: target="_blank" }.

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
