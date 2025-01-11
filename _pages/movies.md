---
layout: page
title: 苏幕遮
permalink: /movies/
description:
nav: false
display_categories: ["电影", "剧集", "纪录片"]
---

{% assign movies_by_year = site.movies | group_by_exp: "movie", "movie.date | date: '%Y'" %}
{% assign sorted_year = movies_by_year | sort: "name" | reverse %}

<div class="movies">
    {% for year in sorted_year %}
        <h2 class="year">{{ year.name }}</h2>
        {% assign movies = year.items | sort: "date" | reverse %}
        <div class="grid">
            {% for movie in movies %}
                {% include movie.liquid movie=movie %}
            {% endfor %}
        </div>
    {% endfor %}
</div>
