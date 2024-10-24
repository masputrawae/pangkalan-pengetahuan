---
layout: page
title: "Tags"
permalink: /tags/
---
<h1 class="tags-title">Daftar Tags dan Postingan</h1>
<p class="tags-intro">Berikut adalah tags dari artikel yang tersedia di situs ini:</p>

<ul class="tag-list">
  {% assign all_tags = site.posts | map: 'tags' | flatten | uniq %}
  {% for tag in all_tags %}
    <li class="tag-item">
      <h3 class="tag-title"> <i class="fas fa-tags"></i> {{ tag }}</h3>
      <ul class="post-tag-list">
        {% for post in site.posts %}
          {% if post.tags contains tag %}
            <li class="post-tag-item">
              <a href="{{ site.baseurl }}{{ post.url }}" class="post-link">{{ post.title }}</a>
            </li>
          {% endif %}
        {% endfor %}
      </ul>
    </li>
  {% endfor %}
</ul>