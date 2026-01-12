---
layout: default
title: 苏幕遮
permalink: /screen/
extra_css: 
  - screen
extra_js:
  - screen
---

{% comment %} 
   1. 数据统计逻辑：按年份统计电影与剧集数量
{% endcomment %}
{% assign current_year_num = "now" | date: "%Y" | plus: 0 %}
{% assign stats_labels = "" %}
{% assign movie_counts = "" %}
{% assign tv_counts = "" %}

{% for i in (2019..current_year_num) %}
  {% assign loop_year = i | append: "" %}
  {% assign movie_counter = 0 %}
  {% assign tv_counter = 0 %}
  
  {% for item in site.screen %}
    {% assign item_year = item.date | date: "%Y" %}
    {% if item_year == loop_year %}
      {% if item.category == "电影" %}
        {% assign movie_counter = movie_counter | plus: 1 %}
      {% elsif item.category == "剧集" %}
        {% assign tv_counter = tv_counter | plus: 1 %}
      {% endif %}
    {% endif %}
  {% endfor %}
  
  {% assign stats_labels = stats_labels | append: loop_year | append: "," %}
  {% assign movie_counts = movie_counts | append: movie_counter | append: "," %}
  {% assign tv_counts = tv_counts | append: tv_counter | append: "," %}
{% endfor %}

{% assign modern_groups = site.screen | group_by_exp: "item", "item.date | date: '%Y'" | sort: "name" | reverse %}

<div class="screen-layout">
  <script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
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
    <div class="stats-box">
      <canvas id="movieChart"></canvas>
    </div>

    {% comment %} 第一部分：2016 及以后的年份 {% endcomment %}
    {% for group in modern_groups %}
      {% assign g_year_num = group.name | plus: 0 %}
      {% if g_year_num >= 2016 %}
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

    {% comment %} 第二部分：2015 及以前的汇总 {% endcomment %}
    <section id="year-Archive" class="year-section">
      <h2 class="year-sticky-title">2015-</h2>
      <div class="movie-grid">
        {% assign all_sorted = site.screen | sort: 'date' | reverse %}
        {% for item in all_sorted %}
          {% assign item_year_num = item.date | date: "%Y" | plus: 0 %}
          {% if item_year_num <= 2015 %}
            {% include movie-card.html item=item is_legacy=true %}
          {% endif %}
        {% endfor %}
      </div>
    </section>
  </div>
</div>

{% comment %} 
   Chart.js 初始化脚本 
{% endcomment %}
<script>
document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('movieChart').getContext('2d');
    
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: [{{ stats_labels | split: "," | join: "," }}],
            datasets: [
                {
                    label: '电影',
                    data: [{{ movie_counts | split: "," | join: "," }}],
                    borderColor: '#0076df',
                    backgroundColor: 'rgba(0, 118, 223, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                },
                {
                    label: '剧集',
                    data: [{{ tv_counts | split: "," | join: "," }}],
                    borderColor: '#b7d12a',
                    backgroundColor: 'rgba(183, 209, 42, 0.1)',
                    borderWidth: 3,
                    tension: 0.4,
                    fill: true
                }
            ]
        },
        options: {
            responsive: true,
            maintainAspectRatio: false,
            plugins: {
                legend: { position: 'top', align: 'end' }
            },
            scales: {
                y: { beginAtZero: true, grid: { color: '#f5f5f5' } },
                x: { grid: { display: false } }
            }
        }
    });
});
</script>