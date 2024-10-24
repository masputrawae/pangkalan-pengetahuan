---
layout: page
title: "Categories"
permalink: /categories/
---

<h1 class="categories-title">Categories</h1>

<p class="categories-intro">Here are the categories of articles available on this site:</p>

<ul class="categories-list">
  {% for category in site.categories %}
    <li class="category-item">
      <a href="{{ site.baseurl }}/categories/{{ category[0] | slugify }}/" class="category-link">{{ category[0] }}</a> 
      <span class="category-count">({{ category[1].size }})</span>
    </li>
  {% endfor %}
</ul>
