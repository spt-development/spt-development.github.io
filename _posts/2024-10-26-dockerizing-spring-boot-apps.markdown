---
layout: post
title:  "Dockerizing Spring Boot Apps"
date:   2024-10-26 10:00:00 +0000
author: Simon Taylor
categories: spring docker
permalink: /spring/docker/2024/10/26/dockerizing-spring-boot-apps
excerpt: |
  Creating a Docker image for a Spring Boot application allows you to containerize your app, making it easier to run in various environments without 
  worrying about dependencies. In this blog, I'll guide you through creating a Docker image for a Spring Boot app using the 
  [spt-development-demo project](https://github.com/spt-development/spt-development-demo) as a reference.
  {: class="lead"}
news: false
---
{{ page.excerpt | remove: '<span class="d-inline d-md-none d-xl-inline">' | remove: '</span>' }}

## Steps to Create a Docker Image for Spring Boot Application
{: class="fs-4" }

### 1. Clone the Demo Project
{: class="fs-5" }

First, clone the `spt-development-demo` project from GitHub:

{% gist 5255265b3e4f0c6d2e7adc61c81b7438 %}

### 2. Build the Application with Spring Boot’s Built-in Docker Support
{: class="fs-5" }

Spring Boot’s `build-image` goal uses Cloud Native Buildpacks to package the application into a Docker image without needing a `Dockerfile`. Simply run the following command:

{% gist d56b35801afef1e49957680bcaf0d123 %}

This command builds the Docker image with the tag spt-development-demo using the JAR created by Spring Boot.

### 3. Run the Docker Container
{: class="fs-5" }

Once the image is built, run it using Docker. Map port 8080 on your local machine to port 8080 in the container:

{% gist b3168e2443c57f08c6f42c0853f1b722 %}

After running this command, your Spring Boot application will be accessible at `http://localhost:8080`.

### Optional: Push the Docker Image to a Registry
{: class="fs-5" }

If you want to share your Docker image, you can tag and push it to Docker Hub (or another container registry):

1. Tag the image with your Docker Hub username:
{% gist 4cfd14d2d1241a07b1a3e399b9385639 %}
2. Push the image to Docker Hub:
{% gist 92817e14676f6a5c689b5bdc96248708 %}

## Conclusion
{: class="fs-4" }

Using Spring Boot’s built-in `build-image` support simplifies the Docker build process. With just a single Maven command, you can package your Spring Boot application as a Docker image without a `Dockerfile`. The `spt-development-demo` project demonstrates this easy method, making it a great choice for deploying Spring Boot apps in Docker.

Happy containerizing!
