---
layout: default
title: 相见欢
permalink: /moments/
extra_css: 
  - moments
extra_js:
  - moments
---

<div class="moments-layout-wrapper">
  <div class="moment-container">
    {% assign last_month = "" %}
    {% for item in site.data.moments %}
      {% assign profile_key = item.profile | default: "me" %}
      {% assign profile = site.data.profiles[profile_key] %}

      {% assign current_month = item.date | date: "%Y-%m" %}
      {% if current_month != last_month %}
        <div id="month-{{ current_month }}" class="month-anchor"></div>
        {% assign last_month = current_month %}
      {% endif %}

      <div class="moment-item">
        <div class="moment-left">
          <img src="{{ profile.avatar | relative_url }}" class="moment-avatar">
        </div>
    
        <div class="moment-right">
          <div class="moment-name">{{ profile.name }}</div>
          <div class="moment-content">{{ item.content | strip | newline_to_br }}</div>

          {% if item.images %}
            <div class="moment-gallery count-{{ item.images.size }}">
              {% for img_path in item.images %}
              <div class="moment-img-wrapper">
                {% include figure.liquid path=img_path class="moment-img" zoomable=true %}
              </div>
              {% endfor %}
            </div>
          {% endif %}

          {% if item.location %}
            <div class="moment-location">
              <i class="fa-solid fa-location-dot"></i>
              
              {% if item.location.link %}
                <a href="https://www.google.com/maps/search/?api=1&query={{ item.location.name | url_encode }}" target="_blank">
                  {{ item.location.name }}
                </a>
              {% else %}
                <span class="location-text">{{ item.location.name }}</span>
              {% endif %}
            </div>
          {% endif %}

          <div class="moment-footer">
            <time class="moment-date">{{ item.date | date: "%Y-%m-%d %H:%M" }}</time>
            {% assign moment_id = item.date | date: "%Y%m%d%H%M%S" %}
            <a href="javascript:void(0)" class="comment-btn" onclick="openComment('{{ moment_id }}', this)">评论</a>
          </div>
          <div id="anchor-{{ moment_id }}" class="comment-anchor"></div>
        </div>
      </div>
    {% endfor %}
  </div>

  <aside class="moments-sidebar">
    <div class="timeline-sticky-card">
      <div class="timeline-title">时光机</div>
      <ul class="timeline-list">
        {% assign grouped = site.data.moments | group_by_exp: "item", "item.date | date: '%Y年%m月'" %}
        {% for group in grouped %}
          {% assign month_id = group.items.first.date | date: "%Y-%m" %}
          <li><a href="#month-{{ month_id }}" class="timeline-link">{{ group.name }}</a></li>
        {% endfor %}
      </ul>
    </div>
  </aside>
</div>

<div id="unified-giscus-container" style="display:none;" class="giscus-wrapper">
  <div class="giscus"></div>
</div>

<script src="https://cdn.jsdelivr.net/npm/medium-zoom@1.0.6/dist/medium-zoom.min.js"></script>
<script>
  window.giscusConfig = {
    repo: "{{ site.giscus.repo }}",
    repoId: "{{ site.giscus.repo_id }}",
    category: "{{ site.giscus.category }}",
    categoryId: "{{ site.giscus.category_id }}"
  };
</script>