---
layout: post
title:  "Auditing"
date:   2021-10-03 16:56:31 +0000
author: Simon Taylor
categories: auditing spring microservices correlation
---
In this post I introduce the features of [spt-development-audit-spring](https://github.com/spt-development/spt-development-audit-spring) and describe how to integrate it into a Spring Boot application with the [spt-development-audit-spring-boot](https://github.com/spt-development/spt-development-audit-spring-boot) starter, demonstrated with the [demo project](https://github.com/spt-development/spt-development-demo) created as part of the [v2.0.0 release]({% post_url 2021-09-10-spt-development-release %}) of the spt-development-* projects. `spt-development-audit-spring` has a dependency on [spt-development-cid](https://github.com/spt-development/spt-development-cid) which is integrated into the demo project with [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) as described in an [earlier post]({% post_url 2021-05-30-spt-development-cid-part-2 %}). The demo project also integrates [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) and [spt-development-cid-jms-spring](https://github.com/spt-development/spt-development-cid-jms-spring) and has tests that use [spt-development-test](https://github.com/spt-development/spt-development-test).
{: class="lead"}

## Demo project

The demo project provides a simple 'books' REST API backed by and in-memory H2 database with basic authentication configured with Spring Security. Once running, the REST API can then be exercised with cURL as follows:

{% gist 4630ea068a9422bec426f9c94a12b157 %}

See the [README](https://github.com/spt-development/spt-development-demo/blob/main/README.md) for more detail.


## Auditing

There are many reasons why you might want to add auditing to your application. The main reason we wanted to add auditing to [SPT Contractors](https://spt.contractors/) was to be able to trace through how records reached a particular state; having this information has been invaluable on past projects for replaying when things go wrong and answering user queries when records are in a state they don't expect. We wanted an auditing solution that was simple to implement without polluting my business logic with calls to persist the audit records. Additionally, we wanted another service to be responsible for persisting the audit records which could potentially be extended to perform analysis or transformations at a later date. Out of these requirements `spt-development-audit-spring` was born.

## spt-development-audit-spring

The demo project uses the `spt-development-audit-spring-boot-starter` to pull in the required dependencies and automatically configure the auditor. The demo project also has a dependency on the [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot) starter in order to pull in and configure `spt-development-cid-web` and its dependencies so that the correlation ID on the audit event records is set correctly (see [earlier post]({% post_url 2021-05-30-spt-development-cid-part-2 %}) for more details). The demo project also uses the [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot) starter (also discussed in my earlier post) and the [spt-development-cid-jms-spring-boot](https://github.com/spt-development/spt-development-cid-jms-spring-boot) starter that I will talk about in greater depth, later in this post.

{% gist 3c3de989b01d73d5100ad0230984da9d %}

Auditing with `spt-development-audit-spring` is implemented at the method level, usually a service method, by decorating the method with an `@Audited` annotation that has a `type` (typically this will be an identifier for the domain that the audit event relates to) and a `subType` (typically this will be an identifier for the type of action that is being audited, such as CREATE or DELETE).

{% gist 59135b01f32fe080a5937e95caa8cc6a %}

With this in place when we successfully create a new book, the audit event is written to the logs.

{% gist 9e029d94142a8741a0125f95fdaee48d %}

We now know when a book is created which is OK, but for the auditing to be really useful we need the audit events to include details about the record being created. We do this wth the `@Audited.Id` and `@Audited.Detail` annotations.

{% gist 6c833e35129d1bb17b66e28eef15d90e %}

In this example we are telling the auditor to extract the ID from the the `id` field of the object returned by the `BookService::create()` method and to populate the `details` field of the audit event record with the parameters annotated with `@Auited.Detail`. Now we see the book details and the ID of the book record that was created in the audit event log.

{% gist 110e2155de4537854ed10983c7a18302 %}

Multiple parameters can be annotated with `@Audited.Detail` but if you do, the `name` [of the parameters] must be specified. The `@Audited.Id` parameter can also be applied to a parameter as shown in the `BookService::update()` method.

{% gist 99f18eb85d52dc9acdab8ed87dc6d35c %}

The `spt-development-audit-spring-boot-starter` configures the `Slf4jAuditEventWriter` bean by default, which is an instance of the `AuditEventWriter` interface. In a production service you probably want your adit event records persisted to some kind of database, in which case you will need to create a bean that is an instance of `AuditEventWriter` or if your service methods are transactional, an instance of `TransactionAwareAuditEventWriter` so that the audit events are only written if the transaction is successfully committed. For SPT Contractors, we developed a separate service responsible for persisting the audit event records read from a JMS queue and would recommend this approach in general. Creating a `JmsTemplate` bean and setting the `spt.audit.jms.destination` property results in the `spt-development-audit-spring-boot-starter` instantiating a `JmsAuditEventWriter` bean which writes the audit event records to the configured JMS queue, rather than to the logs with `Slf4jAuditEventWriter`. The demo project uses an in-memory Artemis JMS queue to demonstrate this.

## Actuator audit events

It is very straight forward to integrate `spt-development-auditor` with [Actuator Auditing](https://docs.spring.io/spring-boot/docs/2.5.5/reference/html/actuator.html#actuator.auditing) which allows you to treat business audit events and actuator audit events (for example generated by Spring Security) in a consistent manner. Simply create a class that extends `AbstractAuditListener` inject a `AuditEventWriter` bean and in the `AbstractAuditListener::onAuditEvent()` method write the audit events with the audit event writer. The demo project uses this approach to audit successful and unsuccessful login attempts.

{% gist bf66f89f8c3e49d23bb4850255c76814 %}

## spt-development-cid-jms-spring

`spt-development-cid-jms-spring` integrates `spt-development-cid` into a Spring JMS (listener) project, initialising the correlation ID from the correlation ID of the received JMS message. The demo project shows the easiest way to integrate `spt-development-cid-jms-spring` into a Spring Boot application, with `spt-development-cid-jms-spring-boot-starter`. If your listener methods have a single `Message` parameter, there is nothing further to do. If your listener methods accept a `@Payload` annotated parameter, they will need an additional parameter annotated with the `@Header` annotation and the name set to `jms_correlationId` as shown in the `AuditListener::onMessage` method of the demo project.

{% gist c986eaaf5b4e0317e9b502bf867d48f4 %}

With this in place we can pass `CorrelationId.get()` into our log statements and/or integrate `spt-development-logging-spring` and see the correlation ID set on the JMS messages in our logs. This makes it very simple to propagate the correlation ID from service to service when communicating via JMS, by setting the correlation ID as shown by this code from `spt-development-audit-spring`.

{% gist 0ad8d89ee67178c18cacce31e55208f7 %}


