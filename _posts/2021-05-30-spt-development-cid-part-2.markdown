---
layout: post
title:  "Correlation ID (Part 2)"
date:   2021-05-30 18:26:19 +0000
author: Simon Taylor
categories: microservices correlation spring
---
This post continues on from the [first blog in the series]({% post_url 2021-03-10-spt-development-cid %}) and describes how to integrate [spt-development-cid](https://github.com/spt-development/spt-development-cid) into a Spring Boot web project with [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot) and how this can be used in conjunction with [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) to quickly add useful logging to all layers of your web application.
{: class="lead"}

The demo project for this post was created using [spring initializr](https://start.spring.io/) and is available in [github](https://github.com/spt-development/spt-development-cid-web-demo).

![spring initializr](/assets/images/2021-05-30-spt-development-cid-web/spring-initializr.png){:class="img-fluid"}

The project consist of a simple `HelloController` class along with a simple `HelloService` class and a slightly contrived `UserRepository` class which can be run using the spring boot maven plugin by issuing the following command from the top-level project directory: `./mvnw -DskipTests clean install spring-boot:run`. Once running, the application can be tested with curl as shown below:

`$ curl http://localhost:8080/api/v1.0/hello # Hello, world`

`$ curl http://localhost:8080/api/v1.0/hello/1 # Hello, Arthur Dent`

`$ curl http://localhost:8080/api/v1.0/hello/2 # 404`

To start including a correlation ID in our log statements we need to add the [spt-development-cid-web-spring-boot](https://github.com/spt-development/spt-development-cid-web-spring-boot) starter to our pom which will pull in [spt-development-cid](https://github.com/spt-development/spt-development-cid) and [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) as dependencies and automatically configure a `FilterRegistrationBean` to intialise the correlation ID for each request.

{% gist 901eb3fd1d8297581ebb7ccb5125dd69 %}

We then need to add some log statements and include the correlation ID in those log statements, for example:

{% gist a9697605e30a3da20d9df0fb17dc3c9d %}

It is worth hilighting the design decision taken which requires the developer to *explicitly* include the correlation ID in each log statement. An alternative solution would have been to use the [Mapped Diagnostic Context (MDC)](http://logback.qos.ch/manual/mdc.html) and automatically include the correlation ID through configuration, without having to include the correlation ID each time. The downside with the MDC solution is that it becomes problematic when going multi-threaded. There are [solutions](https://stackoverflow.com/questions/6073019/how-to-use-mdc-with-thread-pools) to this problem however these solutions don't tend to work with libraries that make use of multiiple threads - a perfect example of this is [Hystrix](https://github.com/Netflix/Hystrix) which I've used extensively for implementing the circuit breaker pattern. In my experience, rather than have to solve the multi-threading issue in such scenarios, it is much easier to explicitly include the correlation ID in your log statements, and once in the habit it isn't particularly onerous.

Now when we restart the application and run our curl tests, we get the following logging output:

{% gist dc8f1728b84880c68e3a0c45c32a342f %}

As touched upon in my [first post]({% post_url 2021-03-10-spt-development-cid %}) correlation IDs are most useful/important in an application consisting of multiple services in order to track requests through each of the services involved in servicing an initial request. [spt-development-cid-web](https://github.com/spt-development/spt-development-cid-web) facilitates this by including the ability to set the correlation ID to a value read from an incoming request header, by default `X-Correlation-ID`. This feature is off by default but can be switched on via the config file (there are also options for changing the header name, and controlling the `FilterRegistration` bean config, see the [javadoc](https://github.com/spt-development/spt-development-cid-web-spring-boot/blob/main/spt-development-cid-web-spring-boot-autoconfigure/src/main/java/com/spt/development/cid/web/spring/boot/autoconfigure/CidWebProperties.java) for more info).

{% gist 4e2fc4b5c38e88bf606560d8ef410fe5 %}

This time, if we specify the correlation ID header when issuing our curl commands:

`$ curl -H "X-Correlation-ID: my-cid-set-via-header" http://localhost:8080/api/v1.0/hello`

`$ curl -H "X-Correlation-ID: my-cid-set-via-header-2" http://localhost:8080/api/v1.0/hello/1`

we see the correlation ID from the header appear in our log statements.

{% gist 5c51a857ca699444f23674a8cc6bd6e0 %}

The log statements I have added to the project so far are useful and similar to ones that I like to add to all controller methods, so that I get logging for all requests handled. I also like to add log statements at the end of controller methods, log any exceptions thrown by controller methods and add logging at the begining and end of service methods and repository methods. I have found this approach invaluable when debugging production issues especially in conjunction with [setting the log level](https://docs.spring.io/spring-boot/docs/current/actuator-api/htmlsingle/#loggers.setting-level) with actuator at runtime. Adding these log statements to every method, soon becomes tedious and makes your code hard to read however. This is where [spt-development-logging-spring](https://github.com/spt-development/spt-development-logging-spring) comes in, easily integrated into a Spring Boot project by adding the [spt-development-logging-spring-boot](https://github.com/spt-development/spt-development-logging-spring-boot) starter to your pom. 

{% gist 3d629c9aecad5ff7f83f713e5cebf11a %}

Now when we run the curl tests, we get the following logging, without making any further code changes that would otherwise clutter up the code.

{% gist e72712b84ebe91283940f78e98bba4b0 %}

For demonstration purposes the repository will throw a runtime exception if the user ID is 99, which results in the logging below. Note how this exception is logged at ERROR, whereas the `UnknownUserException` exception was logged at INFO and the stacktrace at DEBUG. Only 'unexpected' or 5XX exceptions are logged as errors; any exception that is *not* an instance of `HttpStatusCodeException` or is *not* annotated with `ResponseStatus` is an unexpected exception; any exception annotated with `ResponseStatus` and a 5XX status or `HttpStatusCodeException` exception with a 5XX status code is treated as a 5XX exception.

{% gist 26dea8fd5e1a5050bc72c1abd13f6ed9 %}
