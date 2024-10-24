---
layout: page
title: "Articles"
permalink: /articles/
---

<h1 class="articles-title">Articles</h1>

<p class="articles-intro">Welcome to the articles section! Here you can find a list of all articles published on this site.</p>

<ul class="articles-list">
  {% for post in site.posts %}
    <li class="article-item">
      <a href="{{ post.url }}" class="article-link">{{ post.title }}</a> - 
      <span class="article-date">{{ post.date | date: "%B %d, %Y" }}</span>
    </li>
  {% endfor %}
</ul>
