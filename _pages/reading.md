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
      {% assign book_status_value = b.status | default: "reading" %}
      {% if book_status_value == "finished" or book_status_value == "读完" %}
        {% assign book_status = "finished" %}
        {% assign book_status_label = "读完" %}
      {% else %}
        {% assign book_status = "reading" %}
        {% assign book_status_label = "在读" %}
      {% endif %}
      <div class="book-item" data-cat="{{ b.category | downcase }}" data-status="{{ book_status }}">
        <a href="{{ b.url | relative_url }}" class="book-card">
          <div class="book-cover-wrapper">
            <img src="{{ b.thumbnail | relative_url }}" alt="{{ b.title }}" class="book-img">
            <span class="book-status-badge" data-status="{{ book_status }}">{{ book_status_label }}</span>
          </div>
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
