---
layout: default
title: Open Source
permalink: /opensource
description: >- 
  Our consultants make extensive use of open source projects such as Spring in many of the software development projects we undertake.
  In an effort to give back to the open source community, we have released a number of open source projects ourselves.
image:
  path: /assets/images/cards/card-opensource.jpg
  type: image/jpeg
  height: 1200
  width: 630
---

<section class="row">
  <div class="col">
    <div class="col-12 col-md-6 ms-md-2 mb-3 mb-md-1 float-md-end">
      <div class="splash-img position-relative">
        {% picture jpt-webp /assets/images/splash-opensource.jpg --img class="d-block w-100" loading="eager" --alt {{ page.title }} %}
      </div>
    </div>
    <h1 class="fs-3 mt-3">{{ page.title | escape }}</h1>
    <p>Our consultants make extensive use of <em>open source</em> projects such as <em>Spring</em> in many of the software development projects we undertake. 
    In an effort to give back to the open source community, we have released a number of open source projects ourselves.</p>
    <h3 class="fs-4 mt-5">Projects</h3>
    <p>The source for all of these projects can be found on <a href="https://github.com/spt-development">GitHub</a>. The artifacts are also available in 
    <a href="https://mvnrepository.com/artifact/com.spt-development">Maven Central</a> for easy inclusion in your own <em>Java</em> projects. These 
    projects are mainly aimed at adding logging and auditing, and testing <em>Spring Boot</em> <em>microservices</em>.</p>
    <p>If you require development or consultancy related to any of these projects or the technologies they are based upon, then please <a href="{{ "/contact-us" | relative_url }}">get in touch</a>.</p>
    <dl class="row">
      <dt class="col-sm-3"><a href="https://github.com/spt-development/spt-development-cid">spt-development-cid</a></dt>
      <dd class="col-sm-9">A very simple library for getting/setting the current correlation ID, utilising ThreadLocal.</dd>
      
      <dt class="col-sm-3"><a href="https://github.com/spt-development/spt-development-cid-web">spt-development-cid-web</a></dt>
      <dd class="col-sm-9">Library for integrating spt-development-cid into a web project. See also <a href="https://github.com/spt-development/spt-development-cid-web-spring-boot">spt-development-cid-web-spring-boot</a>, to integrate spt-development-cid-web into a Spring Boot project.</dd>
      
      <dt class="col-sm-3"><a href="https://github.com/spt-development/spt-development-cid-jms-spring">spt-development-cid-jms-spring</a></dt>
      <dd class="col-sm-9">Library for integrating spt-development-cid into a Spring JMS (listener) project. See also <a href="https://github.com/spt-development/spt-development-cid-jms-spring-boot">spt-development-cid-jms-spring-boot</a>, to integrate spt-development-cid-jms-spring into a Spring Boot project.</dd>
      
      <dt class="col-sm-3"><a href="https://github.com/spt-development/spt-development-logging-spring">spt-development-logging-spring</a></dt>
      <dd class="col-sm-9">Library for adding logging to public @RestController, @Service and @Repository class methods and @JmsListener methods. See also <a href="https://github.com/spt-development/spt-development-logging-spring-boot">spt-development-logging-spring-boot</a>, to integrate spt-development-logging-spring into a Spring Boot project.</dd>
      
      <dt class="col-sm-3"><a href="https://github.com/spt-development/spt-development-audit-spring">spt-development-audit-spring</a></dt>
      <dd class="col-sm-9">Adds auditing to your project through the use of annotations typically added to Service methods. See also <a href="https://github.com/spt-development/spt-development-audit-spring-boot">spt-development-audit-spring-boot</a>, to integrate spt-development-audit-spring into a Spring Boot project.</dd>
      
      <dt class="col-sm-3"><a href="https://github.com/spt-development/spt-development-test">spt-development-test</a></dt>
      <dd class="col-sm-9">A collection of utility classes useful for unit and integration testing.</dd>
    </dl>
  </div>
</section>
