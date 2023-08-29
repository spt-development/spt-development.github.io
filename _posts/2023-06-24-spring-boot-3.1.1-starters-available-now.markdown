---
layout: post
title:  "Spring Boot 3.1.1 starters available now"
date:   2023-06-24 13:23:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
permalink: /microservices/correlation/spring/opensource/2023/06/24/spring-boot-3-1-1-starters-available-now
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
excerpt: |
  I'm pleased to announce that we have now released new versions of the SPT Development 
  [Spring Boot](https://spring.io/projects/spring-boot){: target="_blank"} starter projects, for integrating the SPT Development libraries related 
  to correlation IDs, logging and auditing, into Spring Boot applications. <span class="d-inline d-md-none d-xl-inline">These new releases along 
  with new releases of some of the projects they relate to, have been updated to align with the recently released 
  [Spring Boot 3.1.1](https://spring.io/blog/2023/06/22/spring-boot-3-1-1-available-now){: target="_blank" }. 
  As always, the source is available on [GitHub](https://github.com/spt-development) and the artifacts are also available in
  [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.</span>
  {: class="lead"}
news: true
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

The following projects have all been updated to v3.1.1:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated to align with version 3.1.1 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v3.0.7
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)- v3.0.7
* [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) - v2.0.10
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v3.0.7
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v3.0.7

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) and the 
[Micrometer demo project](https://github.com/spt-development/spt-development-micrometer-tracing-demo) to Spring Boot 3.1.1 and v3.1.1 of all the libraries above.

<h2 class="fs-4">Improved Testcontainers and Docker compose support in Spring Boot 3.1</h2>

The release of [Spring Boot 3.1.0](https://spring.io/blog/2023/05/18/spring-boot-3-1-0-available-now) introduced improved 
[Testcontainers](https://docs.spring.io/spring-boot/docs/3.1.0/reference/html/features.html#features.testing.testcontainers.at-development-time) and
[Docker Compose Support](https://docs.spring.io/spring-boot/docs/3.1.0/reference/html/features.html#features.docker-compose). These features are a
fantastic addition to the Spring Boot application development process; both the 
[Testcontainers support](https://spring.io/blog/2023/06/23/improved-testcontainers-support-in-spring-boot-3-1) and the 
[Docker Compose support](https://spring.io/blog/2023/06/21/docker-compose-support-in-spring-boot-3-1) have been blogged about widely. We have 
updated the demo project to make use of these new features as part of an ongoing drive to make the demo project more production quality (whilst
keeping the feature set relatively simple). There are more details on making use of the Docker Compose support in particular, in the demo project
[README](https://github.com/spt-development/spt-development-demo/blob/main/README.md).

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
