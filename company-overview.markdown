---
layout: default
title: Company Overview
permalink: /company-overview
published: false
---

<section class="row">
  <div class="col">
    <div class="col-12 col-md-6 ms-md-2 mb-3 mb-md-1 float-md-end">
      <div class="splash-img position-relative">
        {% picture jpt-webp /assets/images/splash-logo.jpg --img class="d-block w-100" loading="eager" --alt {{ page.title }} %}
      </div>
    </div>
    <h1 class="fs-3 mt-3">{{ page.title | escape }}</h1>
    {%- include /leads/company-overview.html %}
    <h3 class="fs-4 mt-5">TODO</h3>
    <p>Could really do with a paragraph here, so that the style is then similar to the software consultancy page.</p>

    <h2>Values???</h2>
    <p>Reiterate USP - This could be more about doing an amazing job and producing extremely high quality software - everything we do starts with quality</p>
    
    <h2>Niche</h2>
    <p>Reiterate Government - should it be government or public sector???</p>
    
    <p>More ideas here: https://www.cgi.com/en/careers</p>
    <hr />
  </div>
</section>

