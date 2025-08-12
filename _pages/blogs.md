---
permalink: /blogs/
title: "My Blogs"
excerpt: "My thoughts and insights"
author_profile: true
layout: single
classes: wide
header:
  overlay_image: /images/blog-header.jpg
  overlay_filter: rgba(0, 0, 0, 0.5)
  caption: "Photo credit: [**Unsplash**](https://unsplash.com)"
---

<div class="name-header">
  <div class="name-container">
    <span class="name-first">Xingyan LIU</span>
    <span class="name-alias">刘兴琰</span>
  </div>
  <div class="subtitle">Reflecting on the Path of Growth</div>
</div>

<div class="blog-grid">
  {% for post in site.posts %}
    <article class="blog-card">
      <div class="blog-media">
        {% if post.image %}
          <img src="{{ post.image }}" alt="{{ post.title }}" class="blog-thumbnail">
        {% else %}
          <div class="default-thumbnail">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.5 21a3 3 0 003-3V9a3 3 0 00-3-3h-5.379a.75.75 0 01-.53-.22L11.47 3.66A2.25 2.25 0 009.879 3H4.5a3 3 0 00-3 3v12a3 3 0 003 3h15z"/>
            </svg>
          </div>
        {% endif %}
        <div class="blog-date">
          {{ post.date | date: "%Y.%m.%d" }}
        </div>
        <div class="blog-overlay">
          <a href="{{ post.url }}" class="blog-link">Read</a>
        </div>
      </div>
      <div class="blog-content">
        <h2 class="blog-title">
          <a href="{{ post.url }}">{{ post.title }}</a>
        </h2>
        <p class="blog-excerpt">
          {% if post.excerpt %}
            {{ post.excerpt | strip_html | truncate: 120 }}
          {% else %}
            {{ post.content | strip_html | truncate: 120 }}
          {% endif %}
        </p>
        <div class="blog-meta">
          {% if post.categories %}
            <span class="blog-category">
              {{ post.categories | first }}
            </span>
          {% endif %}
          <span class="blog-readtime">
            {% assign content_length = post.content | strip_html | size %}
            {% assign read_time = content_length | divided_by: 300.0 | round %}
            {% if read_time < 1 %}
              1 min read
            {% else %}
              {{ read_time }} min read
            {% endif %}
          </span>
        </div>
      </div>
    </article>
  {% endfor %}
</div>

<style>
  /* Enhanced Header Styles */
  .name-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 50vh;
    padding: 2rem;
    position: relative;
    z-index: 1;
    background: linear-gradient(135deg, #0f172a, #1e293b);
    margin-bottom: 3rem;
    border-radius: 0 0 20px 20px;
    box-shadow: 0 15px 50px rgba(0, 0, 0, 0.3);
  }
  
  .name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 1.25rem;
    z-index: 2;
  }
  
  .name-first {
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: -2px;
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.3);
    margin-bottom: -0.2em;
    background: linear-gradient(90deg, #9d6cff, #6aafff, #9d6cff);
    background-size: 300% 100%;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gradient-flow 5s ease infinite;
  }
  
  @keyframes gradient-flow {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
  
  .name-alias {
    color: #e0f7ff;
    font-size: 1.8rem;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.2);
    background: rgba(255, 255, 255, 0.1);
    padding: 0.5rem 1.5rem;
    border-radius: 30px;
    backdrop-filter: blur(10px);
    transition: all 0.3s ease;
  }
  
  .name-alias:hover {
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  }
  
  .subtitle {
    font-size: 2rem;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: 'Segoe UI', 'Helvetica Neue', sans-serif;
    color: #c7e3ff;
    position: relative;
    padding: 1rem 2rem;
    border-radius: 8px;
    margin-top: 0;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    z-index: 3;
    text-align: center;
    background: rgba(157, 108, 255, 0.15);
    overflow: hidden;
    cursor: default;
    max-width: 80%;
    text-shadow: 1px 1px 2px rgba(0, 0, 0, 0.3);
  }
  
  .subtitle::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(45deg, rgba(157, 108, 255, 0.15), rgba(106, 175, 255, 0.15));
    z-index: -1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .subtitle:hover {
    color: #ffffff;
    transform: translateY(-5px);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
    background: rgba(157, 108, 255, 0.25);
  }
  
  .subtitle:hover::before {
    background: linear-gradient(135deg, #9d6cff, #6aafff);
    animation: gradient-pulse 2s ease infinite;
    opacity: 1;
  }
  
  @keyframes gradient-pulse {
    0% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }

  /* Blog Grid Layout */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
    padding: 0 2rem;
  }
  
  .blog-card {
    background: white;
    border-radius: 12px;
    overflow: hidden;
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.08);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
  }
  
  .blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  .blog-media {
    position: relative;
    height: 200px;
    overflow: hidden;
    background-color: #f8f9fa;
  }
  
  .blog-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .default-thumbnail {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: #3498db;
  }
  
  .default-thumbnail svg {
    width: 60px;
    height: 60px;
    opacity: 0.2;
  }
  
  .blog-card:hover .blog-thumbnail {
    transform: scale(1.05);
  }
  
  .blog-date {
    position: absolute;
    top: 15px;
    right: 15px;
    background: rgba(231, 76, 60, 0.85);
    color: white;
    padding: 5px 12px;
    border-radius: 20px;
    font-size: 0.9rem;
    font-weight: 600;
    z-index: 2;
  }
  
  .blog-overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: rgba(37, 99, 235, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
    z-index: 1;
  }
  
  .blog-card:hover .blog-overlay {
    opacity: 1;
  }
  
  .blog-link {
    color: white;
    font-weight: 600;
    text-decoration: none;
    padding: 8px 16px;
    border: 2px solid white;
    border-radius: 50px;
    transition: all 0.3s ease;
  }
  
  .blog-link:hover {
    background: white;
    color: #2563eb;
  }
  
  .blog-content {
    padding: 25px;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .blog-title {
    font-size: 1.4rem;
    margin-bottom: 12px;
    line-height: 1.4;
    transition: color 0.3s ease;
  }
  
  .blog-title a {
    color: #2c3e50;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .blog-title a:hover {
    color: #e74c3c;
    text-decoration: underline;
  }
  
  .blog-excerpt {
    color: #555;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 15px;
    font-size: 0.95rem;
  }
  
  .blog-meta {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: auto;
  }
  
  .blog-category {
    background: rgba(52, 152, 219, 0.1);
    color: #3498db;
    padding: 4px 12px;
    border-radius: 20px;
    font-size: 0.85rem;
    font-weight: 600;
    transition: all 0.3s ease;
  }
  
  .blog-category:hover {
    background: rgba(52, 152, 219, 0.2);
    transform: translateY(-2px);
  }
  
  .blog-readtime {
    color: #7f8c8d;
    font-size: 0.85rem;
    display: flex;
    align-items: center;
    gap: 4px;
  }
  
  .blog-readtime::before {
    content: '⏱️';
    font-size: 0.8rem;
  }
  
  /* Animation for cards */
  @keyframes fadeInUp {
    from {
      opacity: 0;
      transform: translateY(20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
  
  .blog-card {
    animation: fadeInUp 0.6s ease-out forwards;
    opacity: 0;
  }
  
  /* Responsive adjustments */
  @media (max-width: 900px) {
    .name-first {
      font-size: 3.5rem;
    }
    
    .name-alias {
      font-size: 1.5rem;
    }
    
    .subtitle {
      font-size: 1.6rem;
    }
    
    .blog-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .name-first {
      font-size: 2.8rem;
    }
    
    .name-alias {
      font-size: 1.3rem;
    }
    
    .subtitle {
      font-size: 1.3rem;
      padding: 0.8rem 1.6rem;
    }
    
    .blog-grid {
      grid-template-columns: 1fr;
    }
    
    .blog-media {
      height: 180px;
    }
    
    .blog-title {
      font-size: 1.3rem;
    }
  }
  
  @media (max-width: 480px) {
    .name-header {
      padding: 1rem;
      min-height: 40vh;
    }
    
    .name-first {
      font-size: 2.3rem;
    }
    
    .name-alias {
      font-size: 1.2rem;
      padding: 0.4rem 1.2rem;
      margin-top: 1rem;
      margin-bottom: 1rem;
    }
    
    .subtitle {
      font-size: 1.1rem;
      padding: 0.6rem 1.2rem;
    }
    
    .blog-content {
      padding: 20px;
    }
    
    .blog-excerpt {
      font-size: 0.9rem;
    }
  }
</style>
