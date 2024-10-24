---
layout: page
title: "Tags"
permalink: /tags/
---

<h1 class="tags-title">Tags</h1>

<p class="tags-intro">Here are the tags used in our articles:</p>

<ul class="tags-list">
  {% for tag in site.tags %}
    <li class="tag-item">
      <a href="{{ site.baseurl }}/tags/{{ tag[0] | slugify }}/" class="tag-link">{{ tag[0] }}</a> 
      <span class="tag-count">({{ tag[1].size }})</span>
    </li>
  {% endfor %}
</ul>
