---
layout: page
title: "Tags"
---

# Tags

Here are the tags used in our articles:

<ul>
  {% for tag in site.tags %}
    <li><a href="{{ site.baseurl }}/tags/{{ tag[0] | slugify }}/">{{ tag[0] }}</a> ({{ tag[1].size }})</li>
  {% endfor %}
</ul>
