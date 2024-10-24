---
layout: page
title: "Categories"
permalink: /categories/
---
<h1 class="categories-title">Daftar Kategori dan Postingan</h1>
<p class="categories-intro">Here are the categories of articles available on this site:</p>

<ul class="category-list">
  {% for category in site.categories %}
    <li class="category-item">
      <h2 class="category-title">{{ category[0] }}</h2>
      <ul class="post-category-list">
        {% for post in category[1] %}
          <li class="post-category-item">
            <a href="{{ site.baseurl }}{{ post.url }}" class="post-link">{{ post.title }}</a>
          </li>
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>