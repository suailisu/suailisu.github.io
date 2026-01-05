---
layout: default
title: 爱力酥
---

<style>
  nav.container, hr, footer.container { display: none !important; }
</style>

<div class="index-container">
  <header class="home-intro">
    <h1 class="cipai-logo-bg">爱力酥</h1>
    <div class="intro-text">
      <h2 class="site-name">ALISU LAB</h2>
      <p class="tagline">文字、生活与光影的实验室</p>
    </div>
  </header>

  <div class="index-visual">
    <div class="heatmap-canvas-wrapper">
        <div id="heatmap-container" style="width: 100%; height: 160px;"></div>
    </div>
  </div>

  <nav class="index-links">
    <a href="/blog/" class="link-item">
      <span class="cn">青玉案</span>
      <span class="en">BLOG</span>
    </a>
    <a href="/reading/" class="link-item">
      <span class="cn">字字锦</span>
      <span class="en">READING</span>
    </a>
    <a href="/screen/" class="link-item">
      <span class="cn">苏幕遮</span>
      <span class="en">SCREEN</span>
    </a>
    <a href="/moments/" class="link-item">
      <span class="cn">相见欢</span>
      <span class="en">MOMENTS</span>
    </a>
  </nav>

  <footer class="index-footer">从头再来，反而轻盈。</footer>
</div>

<script>
  window.HEATMAP_CONFIG = [
    {% for cat in site.data.heatmap %}
    { gte: {{ cat.value_base }}, lt: {{ cat.value_base | plus: 10 }}, color: '{{ cat.color }}' }{% unless forloop.last %},{% endunless %}
    {% endfor %}
  ];

  window.HEATMAP_DATA = [
    {% assign first = true %}
    {% for cat in site.data.heatmap %}
      {% assign items = site[cat.id] | default: site.data[cat.id] %}
      {% for item in items %}
        {% unless first %},{% endunless %}
        { "date": "{{ item.date | date: '%Y-%m-%d' }}", "v": {{ cat.value_base }}, "t": "{{ item.title | escape }}" }
        {% assign first = false %}
      {% endfor %}
    {% endfor %}
  ];
</script>

<link rel="stylesheet" href="{{ '/assets/css/index.css' | relative_url }}">
<script src="https://cdnjs.cloudflare.com/ajax/libs/echarts/5.4.3/echarts.min.js"></script>
<script src="{{ '/assets/js/heatmap.js' | relative_url }}"></script>