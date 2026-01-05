---
layout: default
title: 字字锦
permalink: /reading/
---
<link rel="stylesheet" href="{{ '/assets/css/reading.css' | relative_url }}">

<div class="reading-container">
  <input type="radio" name="filter" id="all" checked>
  <input type="radio" name="filter" id="f-格物">
  <input type="radio" name="filter" id="f-修身">
  <input type="radio" name="filter" id="f-致知">
  <input type="radio" name="filter" id="f-观世">
  <input type="radio" name="filter" id="f-游艺">

  <main class="reading-content">
    <div class="book-grid">
      {% assign all_books = site.reading | sort: "date" | reverse %}
      {% for item in all_books %}
        <div class="book-item" data-cat="{{ item.category }}">
          <a href="{{ item.url | relative_url }}" class="book-card">
            <div class="book-cover-wrapper">
              <img src="{{ item.thumbnail | relative_url }}" class="book-img">
            </div>
            <div class="book-info-box">
              <span class="book-title">{{ item.title }}</span>
              <span class="book-author">{{ item.authors | join: ', ' }}</span>
            </div>
          </a>
        </div>
      {% endfor %}
    </div>
  </main>

  <nav class="topic-nav right-side">
    <div class="topic-label">CATEGORIES</div>
    <ul class="filter-menu">
      <li><label for="all" class="lab-all">全部 <span>All</span></label></li>
      <li><label for="f-格物" class="lab-格物">格物 <span>Science</span></label></li>
      <li><label for="f-修身" class="lab-修身">修身 <span>Growth</span></label></li>
      <li><label for="f-致知" class="lab-致知">致知 <span>Thinking</span></label></li>
      <li><label for="f-观世" class="lab-观世">观世 <span>Society</span></label></li>
      <li><label for="f-游艺" class="lab-游艺">游艺 <span>Arts</span></label></li>
    </ul>
  </nav>
</div>