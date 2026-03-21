/**
 * Main Application
 * Loads YAML configs and renders content
 */

const App = {
    config: {},

    async init() {
        // Set current year in footer
        document.getElementById('current-year').textContent = new Date().getFullYear();

        // Initialize navigation
        this.initNavigation();

        // Load all config files
        await this.loadConfigs();

        // Initialize i18n with default language from config
        I18n.init(this.config.site?.default_language || 'en');

        // Render all sections
        this.renderProfile();
        this.renderSocial();
        this.renderNews();
        this.renderEducation();
        this.renderPublications();
        this.renderExperience();
        this.renderAwards();

        // Load and display last modified time
        await this.loadLastModified();

        // Store last modified time for language switching
        this.lastModifiedTime = null;

        // Listen for language changes
        window.addEventListener('languageChanged', () => {
            this.renderProfile();
            this.renderNews();
            this.renderEducation();
            this.renderPublications();
            this.renderExperience();
            this.renderAwards();
            // Update last modified time display when language changes
            if (this.lastModifiedTime) {
                this.renderLastModified(this.lastModifiedTime);
            }
        });

        // Initialize Google Analytics if configured
        this.initAnalytics();
    },

    // ==========================================
    // Config Loading
    // ==========================================
    async loadConfigs() {
        const configFiles = ['site', 'profile', 'news', 'education', 'publications', 'experience', 'awards', 'social'];

        await Promise.all(configFiles.map(async (name) => {
            try {
                const response = await fetch(`config/${name}.yaml`);
                if (response.ok) {
                    const text = await response.text();
                    this.config[name] = jsyaml.load(text);
                }
            } catch (error) {
                console.warn(`Failed to load config/${name}.yaml:`, error);
            }
        }));

        // Update page title and meta
        if (this.config.site) {
            document.title = this.config.site.title || 'Academic Homepage';
            const metaDesc = document.querySelector('meta[name="description"]');
            if (metaDesc && this.config.site.description) {
                metaDesc.content = this.config.site.description;
            }
        }
    },

    // ==========================================
    // Navigation
    // ==========================================
    initNavigation() {
        const hamburger = document.getElementById('nav-hamburger');
        const navMenu = document.getElementById('nav-menu');
        const navLinks = document.querySelectorAll('.nav-link');

        // Hamburger menu toggle
        hamburger.addEventListener('click', () => {
            hamburger.classList.toggle('active');
            navMenu.classList.toggle('active');
        });

        // Close menu on link click
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                hamburger.classList.remove('active');
                navMenu.classList.remove('active');
            });
        });

        // Highlight active section on scroll
        window.addEventListener('scroll', () => this.updateActiveNav());
    },

    updateActiveNav() {
        const sections = document.querySelectorAll('.section');
        const navLinks = document.querySelectorAll('.nav-link');
        const navHeight = document.querySelector('.navbar').offsetHeight;

        let currentSection = 'home';

        sections.forEach(section => {
            const sectionTop = section.offsetTop - navHeight - 100;
            if (window.scrollY >= sectionTop) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    },

    // ==========================================
    // Profile Rendering
    // ==========================================
    renderProfile() {
        const profile = this.config.profile;
        if (!profile) return;

        // Name
        const nameEl = document.getElementById('profile-name');
        const navLogo = document.getElementById('nav-logo');
        const footerName = document.getElementById('footer-name');
        const name = I18n.getLocalized(profile.name);
        nameEl.textContent = name;
        navLogo.textContent = name;
        footerName.textContent = name;

        // Title
        document.getElementById('profile-title').textContent = I18n.getLocalized(profile.title);

        // Affiliation
        document.getElementById('profile-affiliation').textContent = I18n.getLocalized(profile.affiliation);

        // Bio (render as markdown)
        const bioEl = document.getElementById('profile-bio');
        const bioText = I18n.getLocalized(profile.bio);
        bioEl.innerHTML = marked.parse(bioText || '');

        // Avatar
        const avatarImg = document.getElementById('avatar-img');
        if (profile.avatar) {
            avatarImg.src = profile.avatar;
            avatarImg.alt = name;
        }
    },

    // ==========================================
    // Social Links Rendering
    // ==========================================
    renderSocial() {
        const socialData = this.config.social?.social || this.config.social || [];
        const container = document.getElementById('social-links');
        container.innerHTML = '';

        // Icon mapping
        const iconMap = {
            'github': 'fab fa-github',
            'google-scholar': 'fas fa-graduation-cap',
            'twitter': 'fab fa-twitter',
            'linkedin': 'fab fa-linkedin',
            'email': 'fas fa-envelope',
            'orcid': 'fab fa-orcid',
            'researchgate': 'fab fa-researchgate',
            'youtube': 'fab fa-youtube',
            'bilibili': 'fas fa-play-circle',
            'zhihu': 'fas fa-question-circle',
            'weibo': 'fab fa-weibo',
            'website': 'fas fa-globe',
            'wechat': 'fab fa-weixin',
            'xiaohongshu': 'fas fa-book'
        };

        socialData.forEach(item => {
            const link = document.createElement('a');
            link.href = item.url;
            link.className = 'social-link';
            link.target = '_blank';
            link.rel = 'noopener noreferrer';

            const iconClass = iconMap[item.icon] || 'fas fa-link';
            link.innerHTML = `<i class="${iconClass}"></i> ${item.name}`;

            container.appendChild(link);
        });
    },

    // ==========================================
    // News Rendering
    // ==========================================
    renderNews() {
        const newsData = this.config.news?.news || [];
        const container = document.getElementById('news-list');
        container.innerHTML = '';

        if (newsData.length === 0) {
            document.getElementById('news').style.display = 'none';
            return;
        }

        document.getElementById('news').style.display = '';

        newsData.forEach(item => {
            const newsItem = document.createElement('div');
            newsItem.className = 'news-item';

            const content = I18n.getLocalized(item.content);

            newsItem.innerHTML = `
                <span class="news-date">${item.date}</span>
                <span class="news-content">${marked.parseInline(content)}</span>
            `;

            container.appendChild(newsItem);
        });
    },

    // ==========================================
    // Education Rendering
    // ==========================================
    renderEducation() {
        const eduData = this.config.education?.education || [];
        const container = document.getElementById('education-list');
        container.innerHTML = '';

        if (eduData.length === 0) {
            document.getElementById('education').style.display = 'none';
            return;
        }

        document.getElementById('education').style.display = '';

        eduData.forEach(item => {
            const eduItem = document.createElement('div');
            eduItem.className = 'education-item';

            const school = I18n.getLocalized(item.school);
            const degree = I18n.getLocalized(item.degree);
            const details = I18n.getLocalized(item.details);

            let detailsHTML = '';
            if (details) {
                detailsHTML = `<div class="education-details">${marked.parse(details)}</div>`;
            }

            let linksHTML = '';
            if (item.links) {
                const linkItems = [];
                Object.entries(item.links).forEach(([key, url]) => {
                    linkItems.push(`<a href="${url}" target="_blank">${I18n.t('links.' + key) || key}</a>`);
                });
                if (linkItems.length > 0) {
                    linksHTML = `<div class="education-links">${linkItems.join(' | ')}</div>`;
                }
            }

            eduItem.innerHTML = `
                <div class="education-logo">
                    <img src="${item.logo || ''}" alt="${school}">
                </div>
                <div class="education-info">
                    <h3 class="education-school">${school}</h3>
                    <p class="education-degree">${degree}</p>
                    <p class="education-date">${item.date || ''}</p>
                    ${detailsHTML}
                    ${linksHTML}
                </div>
            `;

            container.appendChild(eduItem);
        });
    },

    // ==========================================
    // Publications Rendering
    // ==========================================
    renderPublications() {
        const pubs = this.config.publications?.publications || [];
        const container = document.getElementById('publications-list');
        container.innerHTML = '';

        if (pubs.length === 0) {
            document.getElementById('publications').style.display = 'none';
            return;
        }

        document.getElementById('publications').style.display = '';

        pubs.forEach(pub => {
            const card = document.createElement('div');
            card.className = 'publication-card';

            // Media (demo video/gif or thumbnail)
            let mediaHTML = '';
            if (pub.demo) {
                if (pub.demo_type === 'video') {
                    mediaHTML = `
                        <div class="publication-media">
                            <video autoplay muted loop playsinline>
                                <source src="${pub.demo}" type="video/mp4">
                            </video>
                        </div>
                    `;
                } else {
                    mediaHTML = `
                        <div class="publication-media">
                            <img src="${pub.demo}" alt="${pub.title}">
                        </div>
                    `;
                }
            } else if (pub.thumbnail) {
                mediaHTML = `
                    <div class="publication-media">
                        <img src="${pub.thumbnail}" alt="${pub.title}">
                    </div>
                `;
            }

            // Links
            let linksHTML = '';
            if (pub.links) {
                const linkItems = [];
                if (pub.links.Pdf) {
                    linkItems.push(`<a href="${pub.links.Pdf}" class="publication-link" target="_blank"><i class="fas fa-file-pdf"></i> ${I18n.t('Pdf')}</a>`);
                }
                if (pub.links.Arxiv) {
                    linkItems.push(`<a href="${pub.links.Arxiv}" class="publication-link" target="_blank"><i class="fas fa-file-alt"></i> ${I18n.t('Arxiv')}</a>`);
                }
                if (pub.links.Code) {
                    linkItems.push(`<a href="${pub.links.Code}" class="publication-link" target="_blank"><i class="fas fa-code"></i> ${I18n.t('Code')}</a>`);
                }
                if (pub.links.Project) {
                    linkItems.push(`<a href="${pub.links.Project}" class="publication-link" target="_blank"><i class="fas fa-globe"></i> ${I18n.t('Project')}</a>`);
                }
                if (pub.links.Video) {
                    linkItems.push(`<a href="${pub.links.Video}" class="publication-link" target="_blank"><i class="fas fa-video"></i> ${I18n.t('Video')}</a>`);
                }
                if (pub.links.Huggingface) {
                    linkItems.push(`<a href="${pub.links.Huggingface}" class="publication-link" target="_blank"><i class="fas fa-link"></i> ${I18n.t('Huggingface')}</a>`);
                }
                linksHTML = linkItems.join('');
            }

            // Parse authors for bold formatting
            const authorsHTML = marked.parseInline(pub.authors || '');

            // Description
            const description = I18n.getLocalized(pub.description);
            let descHTML = '';
            if (description) {
                descHTML = `<p class="publication-description">${marked.parseInline(description)}</p>`;
            }

            card.innerHTML = `
                ${mediaHTML}
                <div class="publication-info">
                    <h3 class="publication-title">${pub.title}</h3>
                    <p class="publication-authors">${authorsHTML}</p>
                    ${descHTML}
                    <div class="publication-meta">
                        <span class="publication-venue">${pub.venue || ''}</span>
                        <span class="publication-year">${pub.year || ''}</span>
                        ${pub.type ? `<span class="publication-type">${pub.type}</span>` : ''}
                        ${pub.status ? `<span class="publication-status">${pub.status}</span>` : ''}
                    </div>
                    <div class="publication-links">
                        ${linksHTML}
                    </div>
                </div>
            `;

            container.appendChild(card);
        });
    },

    // ==========================================
    // Experience Rendering
    // ==========================================
    renderExperience() {
        const expData = this.config.experience?.experience || [];
        const container = document.getElementById('experience-list');
        container.innerHTML = '';

        if (expData.length === 0) {
            document.getElementById('experience').style.display = 'none';
            return;
        }

        document.getElementById('experience').style.display = '';

        expData.forEach(item => {
            const expItem = document.createElement('div');
            expItem.className = 'experience-item';

            const company = I18n.getLocalized(item.company);
            const role = I18n.getLocalized(item.role);
            const description = I18n.getLocalized(item.description);

            let descHTML = '';
            if (description) {
                descHTML = `<div class="experience-description">${marked.parse(description)}</div>`;
            }

            expItem.innerHTML = `
                <div class="experience-logo">
                    <img src="${item.logo || ''}" alt="${company}">
                </div>
                <div class="experience-info">
                    <h3 class="experience-company">${company}</h3>
                    <p class="experience-role">${role}</p>
                    <p class="experience-date">${item.date || ''}</p>
                    ${descHTML}
                </div>
            `;

            container.appendChild(expItem);
        });
    },

    // ==========================================
    // Awards Rendering
    // ==========================================
    renderAwards() {
        const awardsData = this.config.awards?.awards || [];
        const container = document.getElementById('awards-list');
        container.innerHTML = '';

        if (awardsData.length === 0) {
            document.getElementById('awards').style.display = 'none';
            return;
        }

        document.getElementById('awards').style.display = '';

        awardsData.forEach(item => {
            const awardItem = document.createElement('div');
            awardItem.className = 'award-item';

            const content = I18n.getLocalized(item.content);

            awardItem.innerHTML = `
                <span class="award-date">${item.date || ''}</span>
                <span class="award-content">${marked.parseInline(content)}</span>
            `;

            container.appendChild(awardItem);
        });
    },

    // ==========================================
    // Last Modified Time
    // ==========================================
    async loadLastModified() {
        try {
            const response = await fetch('last-modified.json');
            if (response.ok) {
                const data = await response.json();
                if (data.lastModified) {
                    this.lastModifiedTime = data.lastModified;
                    this.renderLastModified(data.lastModified);
                }
            }
        } catch (error) {
            console.warn('Failed to load last-modified.json:', error);
        }
    },

    renderLastModified(isoString) {
        const lastModifiedEl = document.getElementById('last-modified');
        if (!lastModifiedEl) return;

        const date = new Date(isoString);
        const now = new Date();
        const diffMs = now - date;
        const diffDays = Math.floor(diffMs / (1000 * 60 * 60 * 24));

        // 根据当前语言显示
        const isZh = I18n.currentLang === 'zh';
        
        let timeText = '';
        if (diffDays === 0) {
            timeText = isZh ? '今天更新' : 'Updated today';
        } else if (diffDays === 1) {
            timeText = isZh ? '昨天更新' : 'Updated yesterday';
        } else if (diffDays < 7) {
            timeText = isZh ? `${diffDays} 天前更新` : `Updated ${diffDays} days ago`;
        } else if (diffDays < 30) {
            const weeks = Math.floor(diffDays / 7);
            timeText = isZh ? `${weeks} 周前更新` : `Updated ${weeks} week${weeks > 1 ? 's' : ''} ago`;
        } else {
            // 格式化日期
            const options = isZh 
                ? { year: 'numeric', month: 'long', day: 'numeric' }
                : { year: 'numeric', month: 'long', day: 'numeric' };
            const formattedDate = date.toLocaleDateString(isZh ? 'zh-CN' : 'en-US', options);
            timeText = isZh ? `最后更新：${formattedDate}` : `Last updated: ${formattedDate}`;
        }

        lastModifiedEl.textContent = timeText;
    },

    // ==========================================
    // Google Analytics
    // ==========================================
    initAnalytics() {
        const gaId = this.config.site?.google_analytics_id;
        if (!gaId || gaId === 'G-XXXXXXXXXX') return;

        // Load gtag.js
        const script = document.createElement('script');
        script.async = true;
        script.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`;
        document.head.appendChild(script);

        // Initialize gtag
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());
        gtag('config', gaId);
    }
};

// Initialize app when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
    App.init();
});
