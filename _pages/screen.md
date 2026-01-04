---
layout: default
title: 苏幕遮
permalink: /screen/
extra_css: 
  - screen
---

<header class="screen-header">
  <h1>{{ page.title }}</h1>
  <p class="subtitle">影与剧的留声机</p>
</header>

<div class="movie-grid">

  {% assign sorted_content = site.screen | sort: 'date' | reverse %}
  
  {% for item in sorted_content %}
    <a href="{{ item.url | relative_url }}" class="movie-card">
      <div class="poster-wrapper">
        {% if item.image %}
          <img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy">
        {% else %}
          <div class="no-poster"><span>{{ item.title }}</span></div>
        {% endif %}
        <div class="rating-badge">⭐ {{ item.rating }}</div>
      </div>
      
      <div class="movie-info">
        <h3>{{ item.title }}</h3>
        <time>{{ item.date | date: "%Y年%m月%d日" }}</time>
      </div>
    </a>
  {% endfor %}
</div>