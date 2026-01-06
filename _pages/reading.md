---
layout: default
title: 字字锦
permalink: /reading/
---
<link rel="stylesheet" href="{{ '/assets/css/sidebar-shared.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/reading.css' | relative_url }}">

<div class="reading-container">
  {% for item in site.data.sidebar.reading %}
    {% assign parts = item | split: ":" %}
    <input type="radio" name="filter" id="{% if parts[2] == 'all' %}all{% else %}f-{{ parts[2] }}{% endif %}" {% if parts[2] == 'all' %}checked{% endif %}>
  {% endfor %}

  <main class="reading-content">
    <div class="book-grid">
      {% assign sorted = site.reading | sort: "date" | reverse %}
      {% for b in sorted %}
      <div class="book-item" data-cat="{{ b.category | downcase }}">
        <a href="{{ b.url | relative_url }}" class="book-card">
          <div class="book-cover-wrapper"><img src="{{ b.thumbnail | relative_url }}" class="book-img"></div>
          <div class="book-info-box">
            <span class="book-title">{{ b.title }}</span>
            <span class="book-author">{{ b.authors | join: ', ' }}</span>
          </div>
        </a>
      </div>
      {% endfor %}
    </div>
  </main>

  <nav class="topic-nav right-side">
    <div class="topic-label">CATEGORIES</div>
    <ul class="filter-menu">
      {% for item in site.data.sidebar.reading %}
        {% assign parts = item | split: ":" %}
        <li><label for="{% if parts[2] == 'all' %}all{% else %}f-{{ parts[2] }}{% endif %}" class="lab-{{ parts[2] }}">{{ parts[0] }} <span>{{ parts[1] }}</span></label></li>
      {% endfor %}
    </ul>
  </nav>
</div>