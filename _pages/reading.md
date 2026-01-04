---
layout: default
title: 字字锦
permalink: /reading/
---
<link rel="stylesheet" href="{{ '/assets/css/reading.css' | relative_url }}">
<link rel="stylesheet" href="{{ '/assets/css/blog.css' | relative_url }}">

<div class="container">
  <div class="row">
    <div class="col-md-9">
      {% assign reading_by_year = site.reading | group_by_exp: "item", "item.date | date: '%Y'" %}
      {% assign sorted_years = reading_by_year | sort: "name" | reverse %}

      <div class="reading-list">
        {% for year in sorted_years %}
          <div class="year-group mb-5">
            <h2 class="year-indicator">{{ year.name }}</h2>
            <div class="entry-wrapper mt-3">
              {% assign items = year.items | sort: "date" | reverse %}
              {% for item in items %}
                <a href="{{ item.url | relative_url }}" class="text-decoration-none">
                  <article class="reading-entry">
                    <div class="entry-cover-wrapper">
                      <img src="{{ item.thumbnail | relative_url }}" class="entry-cover-img" alt="{{ item.title }}">
                    </div>
                    <div class="entry-info">
                      <span class="entry-title">{{ item.title }}</span>
                      <div class="entry-tags">
                        {% for tag in item.tags %}
                          <span class="entry-tag">#{{ tag }}</span>
                        {% endfor %}
                      </div>
                    </div>
                  </article>
                </a>
              {% endfor %}
            </div>
          </div>
        {% endfor %}
      </div>
    </div>

    <aside class="col-md-3 d-none d-md-block">
      <div class="blog-sidebar-minimal">
        <h6 class="sidebar-label">标签索引 / TAGS</h6>
        <ul class="category-minimal-list">
          <li class="active"><a href="/reading/">全部</a></li>
          {% assign all_tags = site.reading | map: "tags" | flatten | uniq | sort %}
          {% for tag in all_tags %}
            <li><a href="#">{{ tag }}</a></li>
          {% endfor %}
        </ul>
      </div>
    </aside>
  </div>
</div>