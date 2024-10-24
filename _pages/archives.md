---
layout: page
title: "Archives"
permalink: /archives/
---

<h1 class="archive-title">Archives</h1>

<p class="archive-intro">Here you can find all our articles sorted by month and year.</p>

<ul class="archive-list">
  {% for post in site.posts %}
    <li class="archive-item">
      <span class="archive-date">{{ post.date | date: "%B %Y" }}:</span>
      <a href="{{ post.url }}" class="archive-link">{{ post.title }}</a>
    </li>
  {% endfor %}
</ul>
