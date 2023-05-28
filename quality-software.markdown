---
layout: default
title: Quality Software
permalink: /quality-software
description: >- 
  We insist on delivering software of the highest quality, that is beautifully crafted, thoroughly tested and been through a rigorous set of
  quality gates before being delivered to our customers. We believe this is the only way to develop software and
  to ensure successful outcomes for our customers.
image:
  path: /assets/images/cards/card-quality.jpg
  type: image/jpeg
  height: 1200
  width: 630
---

<section class="row">
  <div class="col">
    <div class="col-12 col-md-6 ms-md-2 mb-3 mb-md-1 float-md-end">
      <div class="splash-img position-relative">
        <img class="d-block w-100" src="{{ "/assets/images/splash-quality.jpg" | relative_url }}" alt="{{ page.title }}">
      </div>
    </div>
    <h1 class="fs-3 mt-3">{{ page.title | escape }}</h1>
    {%- include /leads/quality-software.html %}
    <h3 class="fs-4 mt-5">Ensuring Quality</h3>
    <p>The primary &#8216;gate&#8217; we use to ensure the quality of our software, is through the level of testing we put that software through. We 
    encourage our consultants to practice test-driven development but believe that how they code is a personal preference, so forcing them to write 
    software in a particular way is not useful; we <span class="fst-italic">do</span> mandate that every line of code written should be covered by 
    an automated unit or integration test and that the build should fail if this metric isn’t met - our general mantra is that if a line of code 
    warrants being written then it must be tested*. This may seem obvious, but it is rare that other companies commit to this level of testing and as 
    a result can and will, release untested code that is often the source of errors.</p>
    <div class="card info col-12 col-md-5 col-lg-4 float-md-start me-md-2 mb-3 mb-md-0">
      <ul class="list-group list-group-flush border-top-0">
        <li class="list-group-item border-bottom-0 text-truncate" title="Test Driven Development">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Test Driven Development
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Automated Quality Gates">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Automated Quality Gates
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Continuous Integration / Delivery">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Continuous Integration / Delivery
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Fully Automated Testing">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Fully Automated Testing
        </li>
      </ul>
    </div>
    <p>We increasingly use <a href="https://en.wikipedia.org/wiki/Mutation_testing" target="_blank">Mutation testing</a> across our projects to ensure the quality of our tests
    in complex areas of code - it is not practical to run mutation tests across an entire codebase - as well as performance tests and a mixture of end-to-end and 
    <a href="https://docs.gitlab.com/ee/development/testing_guide/contract/" target="_blank" title="Contract testing">contract tests</a>, depending on the architecture of the system being developed.</p>
    <p>Whilst testing is the most important quality gate, there are others that the code we develop must routinely pass through before being released to our customers.
    We have automated checks for common coding errors and security holes and also check all third-party libraries for any known security vulnerabilities. We ensure 
    all of the code we produce adheres to a standard set of style rules which helps increase maintainability and is particularly important if customers will ultimately
    become responsible for supporting and/or maintaining the codebase in the future. All of these quality gates are built into the continuous integration pipelines that 
    build the software we develop, this ensures that only versions of code that have passed all of the quality gates, are eligible for release.</p>
    <p>Creating releases and deploying new versions of applications is often prone to error, so we use our devops experience to go one step further than continuous integration
    and implement continuous delivery pipelines, automating the process of creating releases of an application. Where practical, and on a project by project basis, we will automate the deployment 
    of new releases, and when deploying to the cloud we can automate the provisioning of cloud infrastructure.</p>
    <p>If you want high quality bespoke software, then <a href="{{ "/contact-us" | relative_url }}">get in touch</a>.</p>
    <p class="text-muted">* In reality, this isn’t always practical so we do allow exceptions on a carefully managed, case by case basis.</p>
    <hr />
  </div>
</section>

<div class="row mb-md-3">
  <div class="col-12 col-md-6">
    <div class="splash-img position-relative">
      <img class="d-block w-100" src="{{ "/assets/images/splash-agile.jpg" | relative_url }}" alt="Agile">
    </div>
  </div>
  <div class="d-flex align-items-center col-12 col-md-6">
    <section class="pt-2 pt-md-0 mb-lg-5">
      <h2 class="fs-3">Agile</h2>
      <p>We run our bespoke development projects using agile methodologies. We strongly believe Agile development helps to ensure that development teams complete projects 
      on time and within budget. It also helps to improve communication between the development team and the customer. Additionally, Agile development methodologies can help 
      reduce the risks associated with complex projects and result in lower costs when requirements undoubtably change.</p>
    </section>
  </div>
</div>

<div class="row mb-md-3">
  <div class="d-flex align-items-center col-12 order-2 col-md-6 order-md-1">
    <section class="pt-2 pt-md-0 mb-lg-5">
      <h2 class="fs-3">Open Source</h2>
      <p>The <a href="{{ "opensource" | relative_url }}" title="Open source">open source</a> projects we have released are centred around logging and auditing and we integrate
      these libraries into all of the back-end services we develop, as experience tells us that good logging and auditing is imperative to making applications supportable. We 
      also ensure that these projects go through many of the quality gates our commercial code goes through, so provide a great opportunity to check the claims we make about 
      how we ensure the quality of the software we produce.</p>
    </section>
  </div>
  <div class="col-12 order-1 col-md-6 order-md-2">
    <div class="splash-img position-relative">
      <img class="d-block w-100" src="{{ "/assets/images/splash-opensource.jpg" | relative_url }}" alt="Open Source">
    </div>
  </div>
</div>
