---
layout: default
title: 苏幕遮
permalink: /screen/
extra_css: 
  - screen
extra_js:
  - screen
---

{% assign modern_groups = site.screen | group_by_exp: "item", "item.date | date: '%Y'" | sort: "name" | reverse %}

<div class="screen-layout">
  <nav class="year-nav">
    <div class="nav-title">时光机</div>
    <ul>
      {% for group in modern_groups %}
        {% assign year_num = group.name | plus: 0 %}
        {% if year_num >= 2016 %}
          <li><a href="#year-{{ group.name }}">{{ group.name }}</a></li>
        {% endif %}
      {% endfor %}
      <li><a href="#year-Archive">2015-</a></li>
    </ul>
  </nav>

  <div class="screen-content">
    {% comment %} 
       第一部分：渲染 2016 及以后的年份 
    {% endcomment %}
    {% for group in modern_groups %}
      {% assign year_num = group.name | plus: 0 %}
      {% if year_num >= 2016 %}
        <section id="year-{{ group.name }}" class="year-section">
          <h2 class="year-sticky-title">{{ group.name }}</h2>
          <div class="movie-grid">
            {% assign sorted_items = group.items | sort: 'date' | reverse %}
            {% for item in sorted_items %}
              {% include movie-card.html item=item is_legacy=false %}
            {% endfor %}
          </div>
        </section>
      {% endif %}
    {% endfor %}

    {% comment %} 
       第二部分：汇总渲染所有 2015 及以前的电影 
    {% endcomment %}
    <section id="year-Archive" class="year-section">
      <h2 class="year-sticky-title">2015-</h2>
      <div class="movie-grid">
        {% comment %} 
           从全量数据中筛选出年份 <= 2015 的电影
        {% endcomment %}
        {% assign all_sorted = site.screen | sort: 'date' | reverse %}
        {% for item in all_sorted %}
          {% assign item_year = item.date | date: "%Y" | plus: 0 %}
          {% if item_year <= 2015 %}
            {% include movie-card.html item=item is_legacy=true %}
          {% endif %}
        {% endfor %}
      </div>
    </section>
  </div>
</div>