---
layout: default
title: 苏幕遮
permalink: /screen/
extra_css: 
  - screen
---

{% assign movies_by_year = site.screen | group_by_exp: "item", "item.date | date: '%Y'" %}
{% assign sorted_years = movies_by_year | sort: "name" | reverse %}

<div class="screen-layout">
  <nav class="year-nav">
    <div class="nav-title">时光机</div>
    <ul>
      {% for year_group in sorted_years %}
        <li><a href="#year-{{ year_group.name }}">{{ year_group.name }}</a></li>
      {% endfor %}
    </ul>
  </nav>

  <div class="screen-content">
    {% for year_group in sorted_years %}
      <section id="year-{{ year_group.name }}" class="year-section">
        <h2 class="year-sticky-title">{{ year_group.name }}</h2>
        <div class="movie-grid">
          {% comment %} 
          3. 对年内的影片按日期进行倒序，让最近看的在最前面 
          {% endcomment %}
          {% assign sorted_items = year_group.items | sort: 'date' | reverse %}
          {% for item in sorted_items %}
            <a href="{{ item.url | relative_url }}" class="movie-card">
              <div class="poster-wrapper">
                <img src="{{ item.image | relative_url }}" alt="{{ item.title }}" loading="lazy">
                <div class="rating-badge">⭐ {{ item.rating }}</div>
              </div>
              <div class="movie-info">
                <h3>{{ item.title }}</h3>
                <time>{{ item.date | date: "%m-%d" }}</time>
              </div>
            </a>
          {% endfor %}
        </div>
      </section>
    {% endfor %}
  </div>
</div>