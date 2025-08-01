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

<!-- Enhanced Xingyan Liu Header Section -->
<div class="name-header">
  <div class="name-container">
    <span class="name-first">Xingyan</span>
    <span class="name-last">LIU</span>
    <span class="name-alias">刘兴琰 / Ethan</span>
  </div>
  <div class="subtitle">Reflecting on the Path of Growth</div>
</div>

<div class="blog-grid">
  {% for post in site.posts %}
    <article class="blog-card">
      <!-- 博客卡片内容保持不变 -->
    </article>
  {% endfor %}
</div>

<style>
  /* Enhanced Xingyan Liu Header Styles */
  .name-header {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 60px 0 40px;
    padding: 0 20px;
    text-align: center;
  }
  
  .name-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-bottom: 20px;
    position: relative;
  }
  
  .name-row {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
  }
  
  .name-first {
    color: #9d6cff;
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: -1.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    display: inline-block;
  }
  
  .name-last {
    color: #ffffff;
    font-size: 4.5rem;
    font-weight: 800;
    letter-spacing: -1.5px;
    text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.2);
    display: inline-block;
  }
  
  .name-alias {
    font-size: 1.5rem;
    color: #6aafff;
    font-weight: 500;
    letter-spacing: 1px;
    margin-top: 12px;
    display: block;
  }
  
  .subtitle {
    font-size: 1.8rem;
    color: #8fa8ee;
    font-weight: 400;
    letter-spacing: 1px;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    text-shadow: 1px 1px 3px rgba(0, 0, 0, 0.1);
    position: relative;
    display: inline-block;
    padding: 12px 30px;
    border-radius: 8px;
    margin-top: 25px;
    transition: all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    background: linear-gradient(45deg, transparent, transparent);
    background-size: 200% 200%;
  }
  
  .subtitle::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: 8px;
    background: linear-gradient(135deg, rgba(157, 108, 255, 0.15), rgba(106, 175, 255, 0.15));
    z-index: -1;
    transition: opacity 0.5s ease;
    opacity: 0;
  }
  
  .subtitle:hover {
    color: #ffffff;
    transform: translateY(-3px);
    background: linear-gradient(135deg, #9d6cff, #6aafff);
    background-size: 200% 200%;
    animation: gradient-pulse 2s ease infinite;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
  
  .subtitle:hover::before {
    opacity: 1;
  }
  
  @keyframes gradient-pulse {
    0% {
      background-position: 0% 50%;
      box-shadow: 0 8px 18px rgba(157, 108, 255, 0.3);
    }
    50% {
      background-position: 100% 50%;
      box-shadow: 0 8px 25px rgba(106, 175, 255, 0.4);
    }
    100% {
      background-position: 0% 50%;
      box-shadow: 0 8px 18px rgba(157, 108, 255, 0.3);
    }
  }
  
  /* 以下是原有博客样式保持不变 */
  /* Blog Grid Layout */
  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 30px;
    margin-top: 40px;
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
    .name-first, .name-last {
      font-size: 3.5rem;
    }
    
    .subtitle {
      font-size: 1.5rem;
    }
    
    .blog-grid {
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .name-first, .name-last {
      font-size: 2.8rem;
    }
    
    .name-alias {
      font-size: 1.3rem;
    }
    
    .subtitle {
      font-size: 1.3rem;
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
      margin: 40px 0 30px;
    }
    
    .name-first, .name-last {
      font-size: 2.3rem;
    }
    
    .name-alias {
      font-size: 1.1rem;
    }
    
    .subtitle {
      font-size: 1.1rem;
      padding: 8px 20px;
    }
    
    .blog-content {
      padding: 20px;
    }
    
    .blog-excerpt {
      font-size: 0.9rem;
    }
  }
</style>
