---
layout: page
title: 苏幕遮
permalink: /movies/
description:
nav: false
display_categories: ["电影", "剧集", "纪录片"]
toc:
  sidebar: right
---

{% assign movies_by_year = site.movies | group_by_exp: "movie", "movie.date | date: '%Y'" %}
{% assign sorted_years = movies_by_year | sort: "name" | reverse | where_exp: "year", "year.name >= '2016'" %}

{% assign legacy_movies = site.movies | where_exp: "movie", "movie.date < '2016-01-01'" %}

<div class="movies">
    {% for year in sorted_years %}
        <h2 class="year">{{ year.name }}</h2>
        {% assign movies = year.items | sort: "date" | reverse %}
        <div class="grid">
        {% for movie in movies %}
            {% include movie.liquid movie=movie %}
        {% endfor %}
        </div>
    {% endfor %}
    {% if legacy_movies != "" %}
        {% assign movies = legacy_movies | sort: "date" | reverse %}
        <h2 class="year">更久之前</h2>
        <div class="grid">
        {% for movie in movies %}
            {% include movie.liquid movie=movie %}
        {% endfor %}
        </div>
    {% endif %}
</div>
