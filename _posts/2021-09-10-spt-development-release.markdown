---
layout: post
title:  "Spring Boot 2.0.0 starters available now"
date:   2021-09-10 19:55:12 +0000
author: Simon Taylor
categories: microservices correlation spring opensource
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
---
I'm pleased to announced that we have now released new and up to date versions of all of the spt-development-* projects related to correlation IDs, logging and 
auditing. The main change to all of the projects is to support JDK8+ and Spring Boot 2.5.4. We will endeavor to release new versions of the libraries, soon after 
each new release of Spring Boot, moving forward. As always, the source is available on [GitHub](https://github.com/spt-development) where there are more detailed
release notes and the artifacts are also available in [Maven Central](https://mvnrepository.com/artifact/com.spt-development) for easy inclusion in your own 
<em>Java</em> projects.
{: class="lead"}

The following projects have all been updated to v2.0.0:

* [spt-development-cid](https://github.com/spt-development/spt-development-cid)
* [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring)
* [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot)
* [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web)
* [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot)
* [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring)
* [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot)
* [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring)
* [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot)
* [spt-development-test](https://github.com/spt-development/spt-development-test)

We have also created a new [demo project](https://github.com/spt-development/spt-development-demo) that demonstrates how to easily integrate all of the 
spt-development-* projects into a Spring Boot application and the features they provide. I hope to blog in more detail on this in the coming weeks and months.

---

We hope this helps the community, and if there are any questions or comments, don't hesitate to [get in touch]({{ "/contact-us" | relative_url }}){:title="Contact Us"}.
