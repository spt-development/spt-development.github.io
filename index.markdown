---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: home
title: "Software Consultants"
---

<h1 class="d-none">{{ page.title | escape }}</h1>
<div id="carousel" class="carousel slide" data-bs-ride="carousel" data-bs-interval="15000">
  <div class="carousel-indicators">
    <button type="button" class="active bg-dark" data-bs-target="#carousel" data-bs-slide-to="0" alt="Carousel item 1"></button>
    <button type="button" class="bg-dark" data-bs-target="#carousel" data-bs-slide-to="1" alt="Carousel item 2"></button>
    <button type="button" class="bg-dark" data-bs-target="#carousel" data-bs-slide-to="2" alt="Carousel item 3"></button>
  </div>
  <div class="carousel-inner pb-5">
    <div class="carousel-item active">
      <div class="row">
        <div class="d-flex align-items-center col-12 order-2 col-md-6 order-md-1">
          <section class="pt-2 pt-md-0 mb-lg-5">
            <h2 class="fs-3">Software Consultancy</h2>
            {%- include /leads/software-consultancy.html %}
            <a href="{{ "/software-consultancy" | relative_url }}" class="fs-4" title="Discover more about software consultancy">
                Discover more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </a>
          </section>
        </div>
        <div class="col-12 order-1 col-md-6 order-md-2">
          <div class="splash-img position-relative">
            <a href="{{ "/software-consultancy" | relative_url }}" class="fs-4" title="Discover more about software consultancy">
              {% picture jpt-webp /assets/images/splash-consultancy.jpg --img class="d-block w-100" loading="eager" --alt Software Consultancy %}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        <div class="d-flex align-items-center col-12 order-2 col-md-6 order-md-1">
          <section class="pt-2 pt-md-0 mb-lg-5">
            <h2 class="fs-3">Government</h2>
            {%- include /leads/government.html %}
            <a href="{{ "/government" | relative_url }}" class="fs-4" title="Discover more about government">
                Discover more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </a>
          </section>
        </div>
        <div class="col-12 order-1 col-md-6 order-md-2">
          <div class="splash-img position-relative">
            <a href="{{ "/government" | relative_url }}" class="fs-4" title="Discover more about government">
              {% picture jpt-webp /assets/images/splash-government.jpg --img class="d-block w-100" loading="lazy" --alt Government %}
            </a>
          </div>
        </div>
      </div>
    </div>
    <div class="carousel-item">
      <div class="row">
        <div class="d-flex align-items-center col-12 order-2 col-md-6 order-md-1">
          <section class="pt-2 pt-md-0 mb-lg-5">
            <h2 class="fs-3">Quality Software</h2>
            {%- include /leads/quality-software.html %}
            <a href="{{ "/quality-software" | relative_url }}" class="fs-4" title="Discover more about quality software">
                Discover more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </a>
          </section>
        </div>
        <div class="col-12 order-1 col-md-6 order-md-2">
          <div class="splash-img position-relative">
            <a href="{{ "/quality-software" | relative_url }}" class="fs-4" title="Discover more about quality software">
              {% picture jpt-webp /assets/images/splash-quality.jpg --img class="d-block w-100" loading="lazy" --alt Consultancy %}
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>

<div class="row">
  <div class="col-12 col-md-6 col-lg-3 d-flex">
    <div class="card mb-4 w-100">
      <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-gear" viewBox="0 0 16 16">
          <path d="M11 5a3 3 0 1 1-6 0 3 3 0 0 1 6 0ZM8 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm.256 7a4.474 4.474 0 0 1-.229-1.004H3c.001-.246.154-.986.832-1.664C4.484 10.68 5.711 10 8 10c.26 0 .507.009.74.025.226-.341.496-.65.804-.918C9.077 9.038 8.564 9 8 9c-5 0-6 3-6 4s1 1 1 1h5.256Zm3.63-4.54c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
        </svg>
        Software Consultancy
      </div>
      <div class="card-body flex-fill">
        <p class="card-text">Let us support you in delivering the software your business needs.</p>
      </div>
      <ul class="list-group list-group-flush border-top-0">
        <li class="list-group-item border-bottom-0 text-truncate">Our services include:</li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Bespoke Software Development">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Bespoke Software Development
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Augmenting/Scaling-up Teams">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Augmenting/Scaling-up Teams
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Architecture Reviews">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Architecture Reviews
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Training">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Training
        </li>
      </ul>
      <div class="card-footer">
        <a href="{{ "/software-consultancy" | relative_url }}" title="More on software consultancy">
            More<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-3 d-flex">
    <div class="card mb-4 w-100">
      <div class="card-header">
        <svg fill="#000000" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="16px" height="16px" viewBox="0 0 121.834 121.834" xml:space="preserve">
          <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
          <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
          <g id="SVGRepo_iconCarrier">
            <g>
              <g>
                <path d="M101.111,46.447H85.848c-0.801-15.608-10.379-28.132-22.457-29.513C63.021,7.337,61.167,0,61.167,0 s-1.855,7.338-2.223,16.935c-12.08,1.381-21.657,13.905-22.458,29.513H21.223v5.927h79.888V46.447z"></path>
                <rect x="23.949" y="54.152" width="6.164" height="24.892"></rect> 
                <rect x="40.542" y="54.152" width="6.164" height="24.892"></rect> 
                <rect x="74.68" y="54.152" width="6.163" height="24.892"></rect> 
                <rect x="91.273" y="54.152" width="6.164" height="24.892"></rect> 
                <rect x="58.085" y="54.152" width="6.164" height="24.892"></rect> 
                <rect x="8.244" y="89.061" width="6.164" height="24.892"></rect> 
                <rect x="24.838" y="89.061" width="6.164" height="24.892"></rect> 
                <rect x="58.975" y="89.061" width="6.164" height="24.892"></rect> 
                <polygon points="101.111,81.178 21.223,81.178 6.719,81.178 6.719,87.105 115.115,87.105 115.115,81.178 "></polygon> 
                <rect x="6.719" y="115.908" width="108.396" height="5.926"></rect> 
                <rect x="75.568" y="89.061" width="6.164" height="24.892"></rect> 
                <rect x="90.639" y="89.061" width="6.164" height="24.892"></rect> 
                <rect x="107.232" y="89.061" width="6.164" height="24.892"></rect> 
                <rect x="42.38" y="89.061" width="6.164" height="24.892"></rect> 
              </g> 
            </g> 
          </g>
        </svg>
        Government
      </div>
      <div class="card-body flex-fill">
        <p class="card-text">We specialise in working with government.</p>
      </div>
      <ul class="list-group list-group-flush border-top-0">
        <li class="list-group-item border-bottom-0 text-truncate">We have experience of:</li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Defence">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Defence
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Cyber Security">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Cyber Security
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Policing">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Policing
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Education">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Education
        </li>
      </ul>
      <div class="card-footer">
        <a href="{{ "/government" | relative_url }}" title="More on government">
            More<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-3 d-flex">
    <div class="card mb-4 w-100">
      <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-award" viewBox="0 0 16 16">
          <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z"/>
          <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z"/>
        </svg>
        Quality Software
      </div>
      <div class="card-body flex-fill">
        <p class="card-text">Our developers produce software to the highest standards.</p>
      </div>
      <ul class="list-group list-group-flush border-top-0">
        <li class="list-group-item border-bottom-0 text-truncate">We ensure quality with:</li>
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
      <div class="card-footer">
        <a href="{{ "/quality-software" | relative_url }}" title="More on quality software">
            More<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
      </div>
    </div>
  </div>
  <div class="col-12 col-md-6 col-lg-3 d-flex">
    <div class="card mb-4 w-100">
      <div class="card-header">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-building-gear" viewBox="0 0 16 16">
          <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6.5a.5.5 0 0 1-1 0V1H3v14h3v-2.5a.5.5 0 0 1 .5-.5H8v4H3a1 1 0 0 1-1-1V1Z"/>
          <path d="M4.5 2a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm-6 3a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm3 0a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm4.386 1.46c.18-.613 1.048-.613 1.229 0l.043.148a.64.64 0 0 0 .921.382l.136-.074c.561-.306 1.175.308.87.869l-.075.136a.64.64 0 0 0 .382.92l.149.045c.612.18.612 1.048 0 1.229l-.15.043a.64.64 0 0 0-.38.921l.074.136c.305.561-.309 1.175-.87.87l-.136-.075a.64.64 0 0 0-.92.382l-.045.149c-.18.612-1.048.612-1.229 0l-.043-.15a.64.64 0 0 0-.921-.38l-.136.074c-.561.305-1.175-.309-.87-.87l.075-.136a.64.64 0 0 0-.382-.92l-.148-.045c-.613-.18-.613-1.048 0-1.229l.148-.043a.64.64 0 0 0 .382-.921l-.074-.136c-.306-.561.308-1.175.869-.87l.136.075a.64.64 0 0 0 .92-.382l.045-.148ZM14 12.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z"/>
        </svg>
        Integration
      </div>
      <div class="card-body flex-fill">
        <p class="card-text">Integrating software systems is hard, so let us do it for you.</p>
      </div>
      <ul class="list-group list-group-flush border-top-0">
        <li class="list-group-item border-bottom-0 text-truncate">We've expertise in:</li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Enterprise Integration Patterns">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Enterprise Integration Patterns
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Data Transformation">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Data Transformation
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Data Enrichment">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Data Enrichment
        </li>
        <li class="list-group-item border-bottom-0 text-truncate" title="Building APIs">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="#00b300" class="bi bi-check-lg" viewBox="0 0 16 16">
            <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
          </svg>
          Building APIs
        </li>
      </ul>
      <div class="card-footer">
        <a href="{{ "/integration" | relative_url }}" title="More on integration">
            More<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
            </svg>
        </a>
      </div>
    </div>
  </div>
</div>

<div class="row mb-3">
  <div class="col-12 col-md-6">
    <div class="splash-img position-relative">
      <a href="{{ "/integration" | relative_url }}" class="fs-4" title="Discover more about integration">
        {% picture jpt-webp /assets/images/splash-integration.jpg --img class="d-block w-100" loading="eager" --alt Integration %}
      </a>
    </div>
  </div>
  <div class="d-flex align-items-center col-12 col-md-6">
    <section class="pt-2 pt-md-0 mb-lg-5">
      <h2 class="fs-3">Integration</h2>
      {%- include /leads/integration.html %}
      <a href="{{ "/integration" | relative_url }}" class="fs-4" title="Discover more about integration">
          Discover more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
      </a>
    </section>
  </div>
</div>

<div class="row mb-3">
  <div class="d-flex align-items-center col-12 order-2 col-md-6 order-md-1">
    <section class="pt-2 pt-md-0 mb-lg-5">
      <h2 class="fs-3">Cloud First</h2>
      {%- include /leads/cloud-first.html %}
      <a href="{{ "/cloud-first" | relative_url }}" class="fs-4" title="Discover more about the cloud">
          Discover more<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
          </svg>
      </a>
    </section>
  </div>
  <div class="col-12 order-1 col-md-6 order-md-2">
    <div class="splash-img position-relative">
      <a href="{{ "/cloud-first" | relative_url }}" class="fs-4" title="Discover more about the cloud">
        {% picture jpt-webp /assets/images/splash-cloud.jpg --img class="d-block w-100" loading="lazy" --alt Cloud First %}
      </a>
    </div>
  </div>
</div>
