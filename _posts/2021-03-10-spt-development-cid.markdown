---
layout: post
title:  "Correlation ID"
date:   2021-03-10 19:14:19 +0000
author: Simon Taylor
categories: microservices correlation
redirect_from:
  - /microservices/correlation/2021/03/10/spt-devlopment-cid.html
image:
  path: /assets/images/cards/card-blog.jpg
  type: image/jpeg
  height: 1200
  width: 630
---
This is the first in a series of blog posts that go into detail about a number of [open source](/opensource) projects we have released, starting with [spt-development-cid](https://github.com/spt-development/spt-development-cid). `spt-development-cid` is a very simple library that utilises `ThreadLocal` for tracking a correlation ID similar to that described by Sam Newman, in Chapter 8 of his excellent book [Building Microservices](https://www.amazon.co.uk/Building-Microservices-Sam-Newman/dp/1491950358){:target="_blank"}. If you have ever tried to support a system consisting of multiple services that *doesn't* use correlation IDs, then you will understand their importance! Sam's book describes the concept better than I would, so I urge you to read that if you require a deeper understanding.
{: class="lead"}

The code in this library is not complicated and nothing that the average reader wouldn't be able to write themselves, however it is code that we have ended up copy/pasting on multiple projects and serves as the initial building block for the other projects we have open sourced.

The project is available in [Maven Central](https://mvnrepository.com/artifact/com.spt-development/spt-development-cid), so to use, add it as a dependency to your project,

{% gist 7dae831706306205e9513c585d46db46 %}

Then inititialise with the `set` method and call `get` to include the correlation ID in all your log statements.

{% gist 7bfcd2c16ea135706731e68df25c9217 %}

You are most likely to call `CorrelationId.set()` when you receive a new REST API request or process a new JMS message, as such we have open sourced projects for integrating `spt-development-cid` into a [web project](https://github.com/spt-development/spt-development-cid-web) and a [Spring JMS (listener)](https://github.com/spt-development/spt-development-cid-jms-spring) project.
