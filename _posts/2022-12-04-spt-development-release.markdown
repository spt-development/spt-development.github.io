---
layout: post
title:  "spt-development-*-spring-boot 3.0.0"
date:   2022-12-04 15:30:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
---
I'm pleased to announced that I have now released new versions of the spt-development-*-spring-boot projects for integrating the spt-development
libraries related to correlation IDs, logging and auditing, into Spring Boot applications. These new releases along with new releases of some of
the projects they relate to, have been updated to align with the recently released 
[Spring Boot 3.0.0](https://spring.io/blog/2022/11/24/spring-boot-3-0-goes-ga). As always, the source is available on 
[GitHub](https://github.com/spt-development) and the artifacts are also available in 
[Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.
{: class="lead"}

The following projects have all been updated to v3.0.0:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

**NOTE** As the major version number suggests, these new versions contain some minor breaking changes - see the release notes for more details. 
The version number of these Spring Boot starter projects will align with the version number of Spring Boot they have been built against, going
forward.

Additionally, the following libraries have also been updated to align with version 3.0.0 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v3.0.0
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)- v3.0.0
* [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) - v2.0.6
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) - v3.0.0
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v3.0.0

I have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) to Spring Boot 3.0.0 and v3.0.0 of all the libraries above.

---

I hope this helps the community, and if there are any questions or comments, please don't hesitate to get in touch.
