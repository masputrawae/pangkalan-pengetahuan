---
layout: page
title: "Articles"
---

# Articles

Welcome to the articles section! Here you can find a list of all articles published on this site.

<ul>
  {% for post in site.posts %}
    <li>
      <a href="{{ post.url }}">{{ post.title }}</a> - {{ post.date | date: "%B %d, %Y" }}
    </li>
  {% endfor %}
</ul>
