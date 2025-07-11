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

# 📚 Latest Articles

<div class="blog-grid">
  <!-- Blog Post 1 -->
  <article class="blog-card">
    <div class="blog-media">
      <img src="/images/blog1-thumb.jpg" alt="Multimodal Learning" class="blog-thumbnail">
      <div class="blog-date">2025.06.15</div>
    </div>
    <div class="blog-content">
      <h2 class="blog-title">
        <a href="/blogs/multimodal-learning">Advancements in Multimodal Representation Learning</a>
      </h2>
      <p class="blog-excerpt">
        Exploring the latest techniques for integrating visual, textual and auditory data in unified embedding spaces...
      </p>
      <div class="blog-meta">
        <span class="blog-category">AI Research</span>
        <span class="blog-readtime">8 min read</span>
      </div>
    </div>
  </article>
  
  <!-- Blog Post 2 -->
  <article class="blog-card">
    <div class="blog-media">
      <img src="/images/blog2-thumb.jpg" alt="PhD Application" class="blog-thumbnail">
      <div class="blog-date">2025.05.22</div>
    </div>
    <div class="blog-content">
      <h2 class="blog-title">
        <a href="/blogs/phd-application">Navigating the PhD Application Process in AI</a>
      </h2>
      <p class="blog-excerpt">
        Practical advice for crafting a competitive PhD application based on my experience applying to top AI programs...
      </p>
      <div class="blog-meta">
        <span class="blog-category">Career</span>
        <span class="blog-readtime">12 min read</span>
      </div>
    </div>
  </article>
  
  <!-- Blog Post 3 -->
  <article class="blog-card">
    <div class="blog-media">
      <img src="/images/blog3-thumb.jpg" alt="Conference Experience" class="blog-thumbnail">
      <div class="blog-date">2025.04.10</div>
    </div>
    <div class="blog-content">
      <h2 class="blog-title">
        <a href="/blogs/ijcnn-experience">Reflections on Presenting at IJCNN 2025</a>
      </h2>
      <p class="blog-excerpt">
        Behind-the-scenes look at preparing for and presenting research at a top-tier AI conference...
      </p>
      <div class="blog-meta">
        <span class="blog-category">Conferences</span>
        <span class="blog-readtime">6 min read</span>
      </div>
    </div>
  </article>
</div>

<style>
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
    transition: all 0.3s ease;
    height: 100%;
    display: flex;
    flex-direction: column;
  }
  
  .blog-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 15px 40px rgba(0, 0, 0, 0.15);
  }
  
  .blog-media {
    position: relative;
    height: 200px;
    overflow: hidden;
  }
  
  .blog-thumbnail {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
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
  }
  
  .blog-readtime {
    color: #7f8c8d;
    font-size: 0.85rem;
  }
  
  /* Responsive adjustments */
  @media (max-width: 768px) {
    .blog-grid {
      grid-template-columns: 1fr;
    }
    
    .blog-media {
      height: 180px;
    }
  }
</style>
