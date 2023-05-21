---
layout: post
title:  "Spring Boot 2.0.9 starters available now"
date:   2022-10-22 15:53:00 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
---
I'm pleased to announce that we have now released new versions of the spt-development-*-spring-boot projects for integrating the spt-development
libraries related to correlation IDs, logging and auditing, into Spring Boot applications. These new releases along with new releases of some of
the projects they relate to, have been updated to align with the recently released 
[Spring Boot 2.7.5](https://spring.io/blog/2022/10/20/spring-boot-2-7-5-available-now). As always, the source is available on 
[GitHub](https://github.com/spt-development) and the artifacts are also available in 
[Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own <em>Java</em> projects.
{: class="lead"}

The following projects have all been updated to v2.0.9:

* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)

Additionally, the following libraries have also been updated to align with version 2.7.5 of Spring Boot and/or to the latest versions of other 
dependencies:

* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) - v2.0.9
* [spt-development-test](https://github.com/spt-development/spt-development-test) - v2.0.9

We have also upgraded the [demo project](https://github.com/spt-development/spt-development-demo) to Spring Boot 2.7.5 and v2.0.9 of all the libraries above.
Additionally, we have also improved the quality checks in place for the demo project; we have switched on warnings as errors and resolved the warnings 
(mainly the usage of deprecated classes), integrated [JaCoCo](https://www.jacoco.org/jacoco/trunk/index.html) to ensure 100% [combined unit and integration] 
test coverage, added additional tests to ensure that the coverage requirement is met and migrated from [hamcrest](https://hamcrest.org/) to 
[assertj](https://joel-costigliola.github.io/assertj/).

---

We hope this helps the community, and if there are any questions or comments, please don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
