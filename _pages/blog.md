---
layout: default
permalink: /blog/
title: 人在楼上
extra_css: 
  - blog
---

<div class="post">
  <ul class="post-list">
    {% assign postlist = paginator.posts | default: site.posts %}
    {% for post in postlist %}      
      <li>
        <div class="row">
          {% if post.thumbnail %}
            <div class="col-sm-5">
              <img class="card-img" src="{{ post.thumbnail | relative_url }}" alt="{{ post.title }}" style="object-fit: cover; width: 100%; height: auto;">
            </div>
          {% endif %} 
                   
          <div class="{% if post.thumbnail %}col-sm-7{% else %}col-sm-12{% endif %}">
            <h3>
              <a class="post-title" href="{{ post.url | relative_url }}">{{ post.title }}</a>
            </h3>
            <p>{{ post.description }}</p>
            <div class="post-meta">
              {{ post.date | date: '%Y年%-m月%-d日' }} &nbsp; &middot; &nbsp;
              {% if post.categories.size > 0 %}
                {% for cat in post.categories %}
                  {{ cat }}
                {% endfor %}
              {% endif %}
            </div>
          </div>
        </div>
      </li>
    {% endfor %}
  </ul>

  {% if page.pagination.enabled %}
    {% include pagination.liquid %}
  {% endif %}
</div>