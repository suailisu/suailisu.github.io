---
layout: default
title: 破阵乐
permalink: /games/
---
<link rel="stylesheet" href="{{ '/assets/css/games.css' | relative_url }}">

<div class="games-container">
  <input type="radio" name="filter" id="all" checked>
  <input type="radio" name="filter" id="f-action"><input type="radio" name="filter" id="f-strategy">
  <input type="radio" name="filter" id="f-narrative"><input type="radio" name="filter" id="f-coop">

  <main class="games-content">
    <div class="games-legend">
      <div class="legend-item"><span class="dot blue"></span><span class="txt">在研 Researching</span></div>
      <div class="legend-item"><span class="dot green"></span><span class="txt">结项 Archived</span></div>
      <div class="legend-item"><span class="dot gold"></span><span class="txt">完美 Perfect</span></div>
      <div class="legend-item"><span class="dot grey"></span><span class="txt">挂起 Suspended</span></div>
    </div>

    <div class="game-grid">
      {% assign sorted_games = site.games | sort: "date" | reverse %}
      {% for item in sorted_games %}
        <div class="game-item" data-cat="{{ item.category }}">
          <a href="{{ item.url | relative_url }}" class="game-card-link">
            <div class="game-card">
              <div class="game-cover-wrapper">
                <img src="{{ item.img | relative_url }}" class="game-img" alt="{{ item.title }}">
                
                <div class="status-badge-floating" data-status="{{ item.status }}">
                  <span class="badge-score">{% if item.rating == 6 %}5.0{% else %}{{ item.rating | plus: 0.0 }}{% endif %}</span>
                </div>

                {% if item.rating == 6 %}
                <div class="heart-badge-red">
                  <svg viewBox="0 0 32 32" class="heart-icon-white"><path d="M16 28.5L14.1 26.8C7.3 20.6 2.8 16.5 2.8 11.5 2.8 7.4 6 4.2 10.1 4.2c2.3 0 4.5 1.1 5.9 2.8 1.4-1.7 3.6-2.8 5.9-2.8 4.1 0 7.3 3.2 7.3 7.3 0 5-4.5 9.1-11.3 15.3L16 28.5z"/></svg>
                </div>
                {% endif %}
              </div>
              
              <div class="game-info-box-minimal">
                <span class="game-title">{{ item.title }}</span>
                <span class="platform-badge-tag" data-plat="{{ item.platform | downcase }}">{{ item.platform }}</span>
              </div>
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
      <li><label for="f-action" class="lab-action">入破 <span>Action</span></label></li>
      <li><label for="f-strategy" class="lab-strategy">筹海 <span>Strategy</span></label></li>
      <li><label for="f-narrative" class="lab-narrative">游仙 <span>Narrative</span></label></li>
      <li><label for="f-coop" class="lab-coop">合欢 <span>Co-op</span></label></li>
    </ul>
  </nav>
</div>