---
layout: default
title: Cloud First
permalink: /cloud-first
description: >- 
  We take a cloud first approach to all the projects we are involved in. Whilst there are often good reasons not to deploy your software to the
  cloud, in our opinion there is seldom a good reason not to consider it for new software projects.
image:
  path: /assets/images/cards/card-cloud.jpg
  type: image/jpeg
  height: 1200
  width: 630
---

<section class="row">
  <div class="col">
    <div class="col-12 col-md-6 ms-md-2 mb-3 mb-md-1 float-md-end">
      <div class="splash-img position-relative">
        {% picture jpt-webp /assets/images/splash-cloud.jpg --img class="d-block w-100" loading="eager" --alt {{ page.title }} %}
      </div>
    </div>
    <h1 class="fs-3 mt-3">{{ page.title | escape }}</h1>
    {%- include /leads/cloud-first.html %}
    <h3 class="fs-4 mt-5">Benefits of Cloud Computing</h3>
    <p>Cloud computing refers to the delivery of on-demand computing resources via a network (usually the Internet) and gives users the ability to 
    spin up new instances of hardware, storage, databases, networks etc, or tear them down in seconds. This allows our software consultants to
    develop software at a much faster pace due to the ability to quickly prototype, test and deploy new versions of software. Tools such as 
    <a href="https://www.terraform.io/" target="_blank">Terraform</a> allow our consultants to automate the provisioning of infrastructure which 
    helps further minimize the time to market</p>
    <div class="card info col-12 col-md-5 col-lg-4 float-md-start me-md-2 mb-3 mb-md-0">
      <ul class="list-group list-group-flush border-top-0 mt-2">
        <li class="list-group-item border-bottom-0 text-truncate" title="Minimize Time To Market">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Minimize Time To Market
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Help You Scale">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Help You Scale
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Reduce Costs">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Reduce Costs
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Improve Security">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Improve Security
        </li>
      </ul>
    </div>
    <p>Unlike on-premise or traditional data centres, you only pay for the cloud resources you actually use rather than what you think you might use in the future. This allows you to reduce 
    costs as well as the impact your business has on the environment, without constraining the potential for growth. Our consultants have the expertise to design cloud solutions that not only
    keep your costs down but can automatically scale as your business or user base grows.</p>
    <p>Cloud resources come with a breadth of security features, automatic maintenance and centralized management providing  improved security out of the box.
    With cloud resources, patches can be applied in seconds, data can be easily encrypted at rest and networks are locked down by default. Additionally, the major cloud providers all hire top security 
    experts and employ best in class solutions that provide extremely robust protection.</p>
    <p>With the cloud, disaster recovery and data backup no longer needs to be an expensive after-thought. Building a disaster recovery site and testing a business continuity plan 
    can be an extremely complex and expensive task with fixed assets. When built in the cloud alongside automated provisioning of infrastructure and automatic backups, production sites
    can be replicated in minutes. For the most critical systems, our consultants can implement multi-cloud disaster recovery solutions, making use of multiple vendors to provide even more certainty 
    around business continuity.</p>
    <p>To discus hosting your new or existing applications in the cloud, <a href="{{ "/contact-us" | relative_url }}">get in touch</a>.</p>
    <hr />
  </div>
</section>

<div class="row mb-md-3">
  <div class="col-12 col-md-6">
    <div class="position-relative">
      {% picture jpt-webp /assets/images/splash-multi-cloud.jpg --img class="d-block w-100" loading="eager" --alt Multiple cloud providers %}
    </div>
  </div>
  <div class="d-flex align-items-center col-12 col-md-6">
    <section class="pt-2 pt-md-0 mb-lg-5">
      <h2 class="fs-3">All Major Cloud Providers</h2>
      <p>Our consultants have experience working with all the major cloud providers:</p>
      <ul>
        <li>Amazon Web Services (AWS)</li>
        <li>Microsoft Azure</li>
        <li>Google Cloud Platform (GCP)</li>
        <li>Oracle Cloud</li>
      </ul>
      <p>There are many factors that can influence which is the most suitable platform; rest assured our consultants will pick the platform that suits our customer's needs the best.</p>
    </section>
  </div>
</div>

<div id="industries" class="row mb-md-3">
  <div class="d-flex align-items-center col-12 order-2 col-md-6 order-md-1">
    <section class="pt-2 pt-md-0 mb-lg-5">
      <h2 class="fs-3">Supporting A New Normal</h2>
      <p>During and after the Covid-19 pandemic, there was a huge shift to home and hybrid working arrangements not least within the IT industry. Taking away the need to commute five days
      a week has positive effects on employees' mental health <span class="fst-italic">and</span> the environment. Employers who don't offer these modern working arrangements will struggle to recruit and
      retain the best staff. The cloud has been a massive enabler for working from home, providing collaboration tools that can be accessed anywhere there is an Internet connection
      as well as allowing IT operations to be supported and maintained remotely.</p>
    </section>
  </div>
  <div class="col-12 order-1 col-md-6 order-md-2">
    <div class="splash-img position-relative">
      {% picture jpt-webp /assets/images/splash-wfh.jpg --img class="d-block w-100" loading="lazy" --alt Working from home %}
    </div>
  </div>
</div>
