---
permalink: /
title: ""
excerpt: ""
author_profile: true
redirect_from: 
  - /about/
  - /about.html

---

{% if site.google_scholar_stats_use_cdn %}
{% assign gsDataBaseUrl = "https://cdn.jsdelivr.net/gh/" | append: site.repository | append: "@" %}
{% else %}
{% assign gsDataBaseUrl = "https://raw.githubusercontent.com/" | append: site.repository | append: "/" %}
{% endif %}
{% assign url = gsDataBaseUrl | append: "google-scholar-stats/gs_data_shieldsio.json" %}

# ⌨️ About Me

<span class='anchor' id='about-me'></span>
<strong> welcome to my personal website! </strong> 😃

I’m Xingyan Liu (you can also call me Ethan), currently a junior undergraduate student at the School of Future Technology, South China University of Technology in Guangzhou, China, advised by [Prof. Qi Liu (IEEE Senior Member)](https://drliuqi.github.io/).

My research focuses on multimodal learning, data mining, and pattern recognition to decode complex, heterogeneous datasets through cross-modal integration, extracting domain-invariant patterns that drive generalizable AI frameworks.

🔥I employ systematic deconstruction of complex challenges into actionable subproblems, coupled with iterative refinement through empirical validation, to establish goal-oriented pathways for measurable progress.🔥


<strong><span style="color:red; font-size:larger;">Sincerely looking for a Ph.D position!</span></strong>
<!-- My research interest includes neural machine translation and computer vision. I have published more than 100 papers at the top international AI conferences with total <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'>google scholar citations <strong><span id='total_cit'>260000+</span></strong></a> (You can also use google scholar badge <a href='https://scholar.google.com/citations?user=DhtAFkwAAAAJ'><img src="https://img.shields.io/endpoint?url={{ url | url_encode }}&logo=Google%20Scholar&labelColor=f6f6f6&color=9cf&style=flat&label=citations"></a>). -->


# 🔥 News
- *2025.05*: &nbsp;🎉🎉 Win the first prize <span style="color:red;">(Top 2%)</span> in the 18th China University Student Computer Design Competition in Guangdong, Hong Kong and Macao Greater Bay Area! See you in the national competition!
- *2025.04*: &nbsp;🎉🎉 Win the second prize <span style="color:red;">(Top 3%)</span> in the National English Competition for College Students (NECCS)!
- *2025.03*: &nbsp;🎉🎉 Our work [Hyper-Relation Fusion for Solving Multi-depot Vehicle Routing Problems](images/firstblood_IJCNN.pdf) has been accepted by IJCNN2025<span style="color:red;">(Oral)</span>. This is my starting point and will be my path forward!
- *2024.10*: &nbsp;🎉🎉 Proud to share, as the monitor, that our class has been awarded SCUT's "Advanced Class" title!
- *2024.07*: &nbsp;🎉🎉 [Go to Wuxi Future Technology Joint Research Center for internship!](https://www2.scut.edu.cn/ft/2024/0826/c29757a560023/page.htm)
- *2024.06*: &nbsp;🎉🎉 Win the National College Student Innovation and Entrepreneurship Training Program Great Completion <span style="color:red;">(Top 5%)</span>! 
- *2024.06*: &nbsp;🎉🎉 Win the Taihu Future Technology Innovation Award <span style="color:red;">(Top 3%)</span> by Wuxi government!
- *2024.04*: &nbsp;🎉🎉 Authorized a software copyright!
- *2024.02*: &nbsp;🎉🎉 Win the Bronze Award of the 14th SCUT "Xinwanda Cup" China University Students' Entrepreneurship Plan Competition!
- *2023.11*: &nbsp;🎉🎉 Win the second place and the most popular award in the Creative Huayuan Challenge!
- *2023.09*: &nbsp;🎉🎉 Win the Second-Class South China University of Technology Scholarship!
- *2023.09*: &nbsp;🎉🎉 Win the first prize in the Guangdong Division of the National Undergraduate Mathematical Modeling Contest!
- *2023.05*: &nbsp;🎉🎉 Win the Meritorious Award in the American Undergraduate Mathematical Contest in Modeling<span style="color:red;">(Top 7%)</span>!
- *2022.12*: &nbsp;🎉🎉 Win the Second Prize of Asia and Pacific Mathematical Contest in Modeling (APMCM)!


# 🎖 Honors and Awards
- *2024.10* Second Prize Scholarship for the Hongping Evergreen Fund Student Innovation Competition, Hong Ping Evergreen Fund.
- *2024.09* Outstanding student<span style="color:red;"> (Top 1)</span> of Baidu Pinecone Elite Class of SCUT.
- *2024.06* Second-class Academic Innovation Award, Future Technology Taihu Innovation Award by Wuxi government.
- *2024.06* Taihu Future Innovation Award<span style="color:red;">(Top 3%)</span>, Future Technology Taihu Innovation Award by Wuxi government.
- *2024.05* Star Volunteer, SCUT.
- *2023.11* Second Prize Scholarship for the Hongping Evergreen Fund Student Innovation Competition，Hong Ping Evergreen Fund.
- *2023.10* Excellent student cadres，SCUT.
- *2023.10* Merit Student Honors, SCUT. 
- *2023.09* Second-Class South China University of Technology Scholarship.
- *2023.04* Outstanding student of the Entrepreneurship Elite Class by SCUT.

# 📝 Publications
<div class='paper-box'><div class='paper-box-image'><div><div class="badge">IJCNN 2025 <span style="color:red;">(Oral)</span></div><img src='images/IJCNN2025.png' alt="sym" width="100%"></div></div>
<div class='paper-box-text' markdown="1">

[Hyper-Relation Fusion for Solving Multi-depot Vehicle Routing Problems](images/firstblood_IJCNN.pdf)

**Xingyan Liu**, Yang Wang, Fansen Meng, <a href="https://flyki.github.io/" target="_blank" rel="noopener noreferrer">Yahui Jia*</a>
<!-- [**Project**](https://scholar.google.com/citations?view_op=view_citation&hl=zh-CN&user=DhtAFkwAAAAJ&citation_for_view=DhtAFkwAAAAJ:ALROH1vI_8AC) <strong><span class='show_paper_citations' data='DhtAFkwAAAAJ:ALROH1vI_8AC'></span></strong>
-->
- We propose a novel Homogeneous-Heterogeneous Relational Fusion (HRF) mechanism for the MDVRP that integrates spatial, topological, and task-specific features through two specialized GNNs: a) a GCN-based Homogeneous GNN (HoGNN) capturing node similarities, and b) a graph attention-based Heterogeneous GNN (HeGNN) modeling depot-customer constraints like vehicle capacity, with their fused outputs enhancing feature representations to optimize routing decisions.
</div>
</div>

# 🤖 projects
<!-- Projects Section Start -->
<section id="projects">
  <div class="section-header">
    <h2 class="section-title">
      <span class="emoji-icon">🤖</span>
      Projects
    </h2>
    <div class="section-divider"></div>
  </div>

  <div class="projects-grid">
    <!-- Project 1 -->
    <div class="project-card">
      <div class="project-media">
        <img 
          src="https://github.com/user-attachments/assets/7d316aa8-aa2d-406c-b741-1044124c3387" 
          alt="Stock platform dashboard" 
          class="project-image"
          onerror="this.parentElement.classList.add('image-error')"
        >
        <div class="project-overlay">
          <a href="https://github.com/lxy0068/Stock-quantitative-analysis-and-visualization-platform" 
             target="_blank" 
             class="view-project-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H9M17 7V15"></path>
            </svg>
            View Project
          </a>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">
          <a href="https://github.com/lxy0068/Stock-quantitative-analysis-and-visualization-platform" 
             target="_blank"
             class="project-link">
            Quantitative Stock Analysis Platform
          </a>
        </h3>
        
        <p class="project-description">
          Full-stack financial analytics system with real-time market data processing,
          algorithmic strategy backtesting, and interactive visualization dashboards
        </p>
        
        <div class="project-meta">
          <div class="tech-tags">
            <span>Python</span>
            <span>Django</span>
            <span>React</span>
            <span>Machine Learning</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project 2 -->
    <div class="project-card">
      <div class="project-media">
        <img 
          src="https://github.com/user-attachments/assets/3532da12-12b1-42ce-a894-0f20a3a16254" 
          alt="Traffic sign recognition interface" 
          class="project-image"
          onerror="this.parentElement.classList.add('image-error')"
        >
        <div class="project-overlay">
          <a href="https://github.com/lxy0068/DLCV" 
             target="_blank" 
             class="view-project-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H9M17 7V15"></path>
            </svg>
            View Project
          </a>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">
          <a href="https://github.com/lxy0068/DLCV" 
             target="_blank"
             class="project-link">
            Traffic Sign Recognition (YOLOv8)
          </a>
        </h3>
        
        <p class="project-description">
          Real-time small-object detection system achieving 92% precision with spatial-attention
          mechanisms optimized for urban environments
        </p>
        
        <div class="project-meta">
          <div class="tech-tags">
            <span>Computer Vision</span>
            <span>YOLOv8</span>
            <span>PyTorch</span>
            <span>Flask</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project 3 -->
    <div class="project-card">
      <div class="project-media">
        <img 
          src="https://github.com/user-attachments/assets/4d0ea7d6-1a54-43d2-84a5-5d8cd4617c70" 
          alt="AlphaZero game interface" 
          class="project-image"
          onerror="this.parentElement.classList.add('image-error')"
        >
        <div class="project-overlay">
          <a href="https://github.com/lxy0068/AlphaZero-Gobang" 
             target="_blank" 
             class="view-project-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H9M17 7V15"></path>
            </svg>
            View Project
          </a>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">
          <a href="https://github.com/lxy0068/AlphaZero-Gobang" 
             target="_blank"
             class="project-link">
            AlphaZero Reinforcement Learning Agent
          </a>
        </h3>
        
        <p class="project-description">
          Monte Carlo Tree Search implementation achieving 85% win rate against professional
          players in tournament settings
        </p>
        
        <div class="project-meta">
          <div class="tech-tags">
            <span>Reinforcement Learning</span>
            <span>MCTS</span>
            <span>PyGame</span>
            <span>AI Algorithms</span>
          </div>
        </div>
      </div>
    </div>
    
    <!-- Project 4 -->
    <div class="project-card">
      <div class="project-media">
        <img 
          src="https://github.com/user-attachments/assets/b02462a7-07d0-4554-a69c-1f3b81331e65" 
          alt="GWO-LSSVM-Adaboost classification system" 
          class="project-image"
          onerror="this.parentElement.classList.add('image-error')"
        >
        <div class="project-overlay">
          <a href="https://github.com/lxy0068/Data-classification-prediction-based-on-Grey-Wolf-Optimization-Algorithm-GWO_LSSVM-Adaboost" 
             target="_blank" 
             class="view-project-btn">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor">
              <path d="M7 17L17 7M17 7H9M17 7V15"></path>
            </svg>
            View Project
          </a>
        </div>
      </div>
      
      <div class="project-content">
        <h3 class="project-title">
          <a href="https://github.com/lxy0068/Data-classification-prediction-based-on-Grey-Wolf-Optimization-Algorithm-GWO_LSSVM-Adaboost" 
             target="_blank"
             class="project-link">
            GWO-LSSVM-Adaboost Classification
          </a>
        </h3>
        
        <p class="project-description">
          Mathematical modeling competition solution using Grey Wolf Optimization to optimize
          LSSVM parameters with Adaboost ensemble for robust data classification
        </p>
        
        <div class="project-meta">
          <div class="tech-tags">
            <span>Matlab</span>
            <span>GWO Algorithm</span>
            <span>LSSVM</span>
            <span>Ensemble Learning</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<style>
  /* Projects Section */
  #projects {
    margin: 4rem auto;
    max-width: 1280px;
    padding: 0 2rem;
  }
  
  .section-header {
    text-align: center;
    margin-bottom: 3rem;
  }
  
  .section-title {
    font-size: 2.5rem;
    font-weight: 700;
    background: linear-gradient(135deg, #6a11cb 0%, #2575fc 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    display: inline-flex;
    align-items: center;
    gap: 12px;
  }
  
  .emoji-icon {
    font-size: 2.2rem;
    display: inline-block;
  }
  
  .section-divider {
    height: 4px;
    width: 120px;
    background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
    margin: 1.2rem auto;
    border-radius: 2px;
  }
  
  .projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: 2.5rem;
  }
  
  .project-card {
    border-radius: 18px;
    background: white;
    overflow: hidden;
    box-shadow: 0 20px 40px -15px rgba(0, 0, 0, 0.1);
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    height: 100%;
    display: flex;
    flex-direction: column;
    border: 1px solid rgba(0, 0, 0, 0.05);
  }
  
  .project-card:hover {
    transform: translateY(-8px) scale(1.01);
    box-shadow: 0 30px 60px -20px rgba(0, 0, 0, 0.15);
  }
  
  .project-media {
    position: relative;
    width: 100%;
    height: 240px;
    overflow: hidden;
  }
  
  .project-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }
  
  .project-media:hover .project-image {
    transform: scale(1.05);
  }
  
  .project-overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(37, 99, 235, 0.85);
    display: flex;
    align-items: center;
    justify-content: center;
    opacity: 0;
    transition: opacity 0.3s ease;
  }
  
  .project-card:hover .project-overlay {
    opacity: 1;
  }
  
  .view-project-btn {
    display: inline-flex;
    align-items: center;
    gap: 8px;
    padding: 12px 24px;
    background: white;
    color: #2563eb;
    border-radius: 50px;
    font-weight: 600;
    text-decoration: none;
    transition: all 0.3s ease;
  }
  
  .view-project-btn:hover {
    background: #f0f7ff;
    transform: translateY(-3px);
  }
  
  .project-content {
    padding: 1.8rem;
    flex-grow: 1;
    display: flex;
    flex-direction: column;
  }
  
  .project-title {
    font-size: 1.55rem;
    font-weight: 700;
    margin-bottom: 1rem;
    line-height: 1.3;
  }
  
  .project-link {
    color: #1e40af;
    text-decoration: none;
    transition: color 0.3s;
  }
  
  .project-link:hover {
    color: #1d4ed8;
    text-decoration: underline;
  }
  
  .project-description {
    color: #4b5563;
    line-height: 1.6;
    flex-grow: 1;
    margin-bottom: 1.2rem;
    font-size: 1.05rem;
  }
  
  .project-meta {
    margin-top: auto;
  }
  
  .tech-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.5rem;
  }
  
  .tech-tags span {
    background: rgba(37, 99, 235, 0.1);
    color: #1d4ed8;
    padding: 0.4rem 0.9rem;
    border-radius: 50px;
    font-size: 0.85rem;
    font-weight: 500;
  }
  
  /* Error state for images */
  .project-media.image-error {
    background: linear-gradient(135deg, #f0f4ff 0%, #e6edff 100%);
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  .project-media.image-error::after {
    content: "Image Preview";
    color: #93c5fd;
    font-weight: 600;
    font-size: 1.2rem;
  }
  
  /* Responsive */
  @media (max-width: 1100px) {
    .projects-grid {
      grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
    }
  }
  
  @media (max-width: 768px) {
    .projects-grid {
      grid-template-columns: 1fr;
      max-width: 600px;
      margin: 0 auto;
    }
    
    .section-title {
      font-size: 2rem;
    }
    
    .project-media {
      height: 220px;
    }
  }
  
  @media (max-width: 480px) {
    #projects {
      padding: 0 1.25rem;
    }
    
    .project-content {
      padding: 1.4rem;
    }
    
    .project-title {
      font-size: 1.4rem;
    }
    
    .project-media {
      height: 200px;
    }
  }
</style>
<!-- Projects Section End -->


# 📖 Educations

<table>
  <tr>
    <td valign="top" width="80">
      <img src="images/SCUT_logo.jpg" alt="South China University of Technology" width="70"/>
    </td>
    <td valign="top">
      <strong>South China University of Technology</strong><br>
      B.Eng, major in Artificial Intelligence (Sep. 2022 - Jun. 2026)<br>
    </td>
  </tr>
</table>

<table>
  <tr>
    <td valign="top" width="80">
      <img src="images/Cornell_University_Logo.png" alt="Cornell University" width="70"/>
    </td>
    <td valign="top">
      <strong>Cornell University</strong><br>
      International Innovative Talents Science Training Program (Feb. 2025 - Jun. 2025)<br>
      Focus on Cognitive Psychology and Neuroscience: Analyzing the correlation mechanisms between brain, thinking, and memory<br>
      under the guidance of <a href="https://www.human.cornell.edu/people/djc457">Prof. Daniel Casasanto</a>.<br>
      <br>
    </td>
  </tr>
</table>

<!-- # 💬 Invited Talks

- *2021.06*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet. 
- *2021.03*, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus ornare aliquet ipsum, ac tempus justo dapibus sit amet.  \| [\[video\]](https://github.com/) -->


# 💻 Internships

<table>
  <tr>
    <td valign="top" width="80">
      <img src="images/Rt-thread_logo.png" alt="Ruiside Electronic Technology" width="70"/>
    </td>
    <td valign="top">
      - 2023.07 - 2023.10, Embedded Development Programmer, <a href="https://www.rt-thread.com/">Ruiside Electronic Technology Co., Ltd.</a>, GuangZhou, China.
    </td>
  </tr>
  <tr>
    <td valign="top" width="80">
      <img src="images/HSBC_BIG.png" alt="HSBC Technology" width="70"/>
    </td>
    <td valign="top">
      - 2024.12 - 2025.04, Digital Business Services - Engineering Internship, <a href="https://www.about.hsbc.com.cn/zh-cn/careers/technology">HSBC Technology</a>, GuangZhou, China.
    </td>
  </tr>
</table>

# 🎓 Social Service
- *2022.09 - present* I Volunteer cumulative volunteer time 120h+.
- *2022.09 - present* Monitor of Artificial Intelligence Class 1, 2022, School of Future Technology, South China University of Technology.
- *2022.09 - 2024.05* Secretary of Cooperation and Development Department of Artificial Intelligence Association of SCUT.


# 🩴 My Interesting Life

- *2024.08*, I traveled to Nanjing, Suzhou and Shanghai to experience the traditional Chinese culture and modern charm！<br>

<div style="display:flex; justify-content:center; align-items:flex-start; flex-wrap:wrap;">
    <img src="images/nanjing1.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/nanjing2.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/nanjing3.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/suzhou1.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/suzhou2.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/suzhou3.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/shanghai1.jpg" alt="Jianghu Trip" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/shanghai2.jpg" alt="Jianghu Trip" width="330" height="270">
</div>
<br>

- *2024.04*, My partners and I were invited to attend the 2024 Baidu Create AI Developer Conference! <br>

<div style="display:flex; justify-content:center; align-items:flex-start; flex-wrap:wrap;">
    <img src="images/baidu1.jpg" alt="baidu" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/baidu2.jpg" alt="baidu" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/baidu3.jpg" alt="baidu" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/baidu4.jpg" alt="baidu" width="330" height="270">  
</div>


- *2023.08*, I participated in the 2023 "Bay Entrepreneurship Camp" - a youth maker exchange activity in the Guangdong-Hong Kong-Macao Greater Bay Area, visited well-known companies such as Tencent, BYD, and INSEPP, and received entrepreneurship-themed training and "face-to-face" guidance from professional mentors!<br>

<div style="display:flex; justify-content:center; align-items:flex-start; flex-wrap:wrap;">
    <img src="images/wanchuang1.jpg" alt="wanchuang" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/wanchuang2.jpg" alt="wanchuang" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/wanchuang3.jpg" alt="wanchuang" width="330" height="270">
</div>
<br>

- *2023.05*, I participated in the Entrepreneurship Elite Class held by the School of Entrepreneurship Education of South China University of Technology and communicated with Microsoft mentor Guan Zhen!<br>

<div style="display:flex; justify-content:center; align-items:flex-start; flex-wrap:wrap;">
    <img src="images/chuangyuan1.jpg" alt="chuangyuan" width="330" height="270">&nbsp;&nbsp;&nbsp;
    <img src="images/chuangyuan2.jpg" alt="chuangyuan" width="330" height="270">
</div>
<br>

- **Precious memories with my friends.**<br>

<div id="slider" style="width: 900px; overflow: hidden; margin-left: 56px;">
    <div id="slider-inner">
        <img src="images/wuxi1.jpg" alt="Image 5">
        <img src="images/wuxi2.jpg" alt="Image 6">
        <img src="images/friends1.jpg" alt="Image 1">
        <img src="images/friends2.jpg" alt="Image 2">
        <img src="images/friends3.jpg" alt="Image 3">
        <img src="images/friends4.jpg" alt="Image 4">
    </div>
</div>


<script>
var slider = document.getElementById('slider');
var sliderInner = document.getElementById('slider-inner');
var images = sliderInner.getElementsByTagName('img');
var totalWidth = 0;
var currentOffset = 0;
var animationSpeed = 1;


// 计算所有图片的总宽度
function calculateTotalWidth() {
    totalWidth = Array.from(images).reduce((acc, img) => acc + img.offsetWidth + 10, 0); // 加上margin的宽度
}

// 动态移动图片以实现无限滚动
function cycleImages() {
    var firstImageWidth = images[0].offsetWidth + 10; // 加上margin的宽度

    if (currentOffset >= firstImageWidth) {
        sliderInner.appendChild(images[0]); // 将第一张图片移动到最后
        currentOffset -= firstImageWidth; // 调整当前偏移量
        sliderInner.style.transform = 'translateX(-' + currentOffset + 'px)';
    }

}

// 更新滚动动画
function updateAnimation() {
    currentOffset += animationSpeed;
    sliderInner.style.transform = 'translateX(-' + currentOffset + 'px)';
    cycleImages(); // 检查是否需要循环图片
    requestAnimationFrame(updateAnimation);
}

// 初始化
calculateTotalWidth();
requestAnimationFrame(updateAnimation);

// 当窗口大小变化时重新计算宽度
window.addEventListener('resize', calculateTotalWidth);
</script>

<style>
#slider img {
    max-height: 280px;
    height: auto;
    min-width: 100px; /* 根据实际情况调整 */
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    border: 1px solid #ddd;
    margin-right: 10px; /* 增加间距 */
    border-radius: 10px; /* 圆角边框 */
    flex-shrink: 0;
}


#slider-inner {
    display: flex;
    align-items: center;
    transition: none; /* 移除过渡效果以避免移动时的跳动 */
}

@keyframes scroll {
    0% { transform: translateX(0); }
    100% { transform: translateX(calc(-1 * var(--totalWidth))); }
}

#slider img:hover {
    transform: scale(1.50); /* 鼠标悬停时放大 */
    box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2); /* 鼠标悬停时增加阴影 */
}

/* 如果图片未加载，显示一个简单的加载动画 */
#slider img:not([src]), 
#slider img:empty {
    min-width: 100px;
    background: linear-gradient(130deg, #e6e9f0 0%, #eef1f5 50%, #e6e9f0 100%);
    background-size: 200% 100%;
    animation: loadingAnimation 1s infinite;
}

@keyframes loadingAnimation {
    0% { background-position: 100% 0; }
    100% { background-position: 0 0; }
}
</style>

<br>

<div style="width: 500px; height: 500px; margin: auto;"> <!-- 设置您想要的宽度和高度 -->
  <script type="text/javascript" id="clstr_globe" src="//clustrmaps.com/globe.js?d=2s-htcTGkAQeYFcX8GpFLwsALncUnFBuHttQsTxseE0"></script>
</div>

<br>



