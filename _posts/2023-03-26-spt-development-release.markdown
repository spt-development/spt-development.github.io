---
layout: post
title:  "Spring Boot 3.0.5 starters available now"
date:   2023-03-26 18:21:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
excerpt: |
  I'm pleased to announce that we have now released new versions of the spt-development-*-spring-boot projects for integrating the spt-development
  libraries related to correlation IDs, logging and auditing, into Spring Boot applications. <span class="d-inline d-md-none d-xl-inline">These new 
  releases along with new releases of some of the projects they relate to, have been updated to align with the recently released 
  [Spring Boot 3.0.5](https://spring.io/blog/2023/03/23/spring-boot-3-0-5-available-now). As always, the source is available on 
  [GitHub](https://github.com/spt-development) and the artifacts are also available in
  [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.</span>
  {: class="lead"}
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

The following projects have all been updated to v3.0.5:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated to align with version 3.0.5 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v3.0.4
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)- v3.0.4
* [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) - v2.0.8
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v3.0.4
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v3.0.4

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) to Spring Boot 3.0.5 and v3.0.5 of all the libraries above.
Additionally, as Spring Boot 3.0.5 adds support for JDK 20, the demo project has also been built and tested against JDK 20 (in addition to 17).

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
