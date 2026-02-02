---
layout: default
title: 字字锦
permalink: /reading/
---
<link rel="stylesheet" href="{{ '/assets/css/sidebar-shared.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/reading.css' | relative_url }}">

<div class="reading-container">
  {% include sidebar-filter-inputs.liquid sidebar_key="reading" %}

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

  {% include sidebar-filter-nav.liquid sidebar_key="reading" label="CATEGORIES" %}
</div>