---
# Feel free to add content and custom Front Matter to this file.
# To modify the layout, see https://jekyllrb.com/docs/themes/#overriding-theme-defaults

layout: default
title: Tech Radar
permalink: /tech-radar
description: >- 
  The SPT Development Tech Radar is inspired by the Zalando Tech Radar and is built with the code that Zalando have kindly open sourced.
  The Tech Radar is a list of technologies with an assessment called a ring assessment.
cdn-scripts:
  - https://d3js.org/d3.v4.min.js
scripts:
  - /assets/js/radar-0.7.js
  - /assets/js/radar-data-202402.js
---
<h1 class="d-none">{{ page.title | escape }}</h1>
<div class="svg-container">
  <svg id="radar" version="1.1" preserveAspectRatio="xMinYMin meet" class="svg-content"></svg>
</div>

<h2 class="fs-4">What is a Tech Radar</h2>

The SPT Development <em>Tech Radar</em> is inspired by the [Zalando Tech Radar](https://opensource.zalando.com/tech-radar/){:target="_blank" title="Zalando Tech Radar"} 
and is built with the code that Zalando have kindly [open sourced](https://github.com/zalando/tech-radar){:target="_blank" title="Tech Radar Source"}. The Tech
Radar is a list of technologies with an assessment called a <span class="fst-itallic">ring assessment</span>. We use the same four rings that Zalando use, with
the following semantics:

* ADOPT — Technologies we have high confidence in to serve our purpose. Technologies that our software consultants are experienced using, low risk and recommended to be used across all current and future projects.

* TRIAL — Technologies that our consultants have successfully used to solve a problem but have not been used widely across multiple projects. TRIAL technologies are slightly more risky.

* ASSESS — Technologies that are promising and have potential to be useful in upcoming projects. ASSESS technologies have higher risks as they are usually brand new and/or our consultants have limited real-world
experience with them. A Proof Of Concept must exist or be created for technologies in this ring, before using on a customer project.

* HOLD — Technologies not recommended to be used for new projects. Technologies that we think are not (yet) worth (further) investing in or have been found to be problematic in the past.

The Tech Radar is a constantly evolving record of the technology choices we have made and helps our software consultants to pick the best technologies for new 
projects.

