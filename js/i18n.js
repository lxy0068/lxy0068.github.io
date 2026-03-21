/**
 * Internationalization (i18n) Manager
 * Handles multi-language support with EN/ZH switching
 */

const I18n = {
    STORAGE_KEY: 'language-preference',
    LANG_EN: 'en',
    LANG_ZH: 'zh',

    // Static translations for UI elements
    translations: {
        en: {
            'nav.home': 'Home',
            'nav.news': 'News',
            'nav.education': 'Education',
            'nav.publications': 'Publications',
            'nav.experience': 'Experience',
            'nav.awards': 'Awards',
            'nav.cv': 'CV',
            'section.news': 'News',
            'section.education': 'Education',
            'section.publications': 'Publications',
            'section.experience': 'Experience',
            'section.awards': 'Awards',
            'section.cv': 'CV',
            'cv.download': 'Download CV',
            'links.pdf': 'PDF',
            'links.paper': 'Paper',
            'links.code': 'Code',
            'links.project': 'Project',
            'links.video': 'Video',
            'links.arxiv': 'arXiv',
            'links.github': 'GitHub',
            'links.demo': 'Demo',
            'links.cert': 'Certificate'
        },
        zh: {
            'nav.home': '首页',
            'nav.news': '动态',
            'nav.education': '教育经历',
            'nav.publications': '论文发表',
            'nav.experience': '工作经历',
            'nav.awards': '获奖荣誉',
            'nav.cv': '简历',
            'section.news': '动态',
            'section.education': '教育经历',
            'section.publications': '论文发表',
            'section.experience': '工作经历',
            'section.awards': '获奖荣誉',
            'section.cv': '简历',
            'cv.download': '下载简历',
            'links.pdf': '论文',
            'links.paper': '论文',
            'links.code': '代码',
            'links.project': '项目页',
            'links.video': '视频',
            'links.arxiv': 'arXiv',
            'links.github': 'GitHub',
            'links.demo': '演示',
            'links.cert': '证书'
        }
    },

    currentLang: 'en',

    init(defaultLang = 'en') {
        this.langToggle = document.getElementById('lang-toggle');

        // Load saved preference or use default
        const savedLang = localStorage.getItem(this.STORAGE_KEY);
        if (savedLang) {
            this.currentLang = savedLang;
        } else {
            this.currentLang = defaultLang;
        }

        this.updateToggleButton();

        // Listen for toggle click
        this.langToggle.addEventListener('click', () => this.toggle());
    },

    setLanguage(lang) {
        this.currentLang = lang;
        localStorage.setItem(this.STORAGE_KEY, lang);
        this.updateToggleButton();
        this.translatePage();

        // Dispatch event for other modules
        window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
    },

    toggle() {
        const newLang = this.currentLang === this.LANG_EN ? this.LANG_ZH : this.LANG_EN;
        this.setLanguage(newLang);
    },

    updateToggleButton() {
        // Show the opposite language (what clicking will switch to)
        this.langToggle.textContent = this.currentLang === this.LANG_EN ? '中' : 'EN';
    },

    translatePage() {
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const translation = this.t(key);
            if (translation) {
                // Check if element has icon child
                const icon = el.querySelector('i');
                if (icon) {
                    el.innerHTML = '';
                    el.appendChild(icon);
                    el.appendChild(document.createTextNode(' ' + translation));
                } else {
                    el.textContent = translation;
                }
            }
        });
    },

    // Translate function - returns translation for current language
    t(key) {
        return this.translations[this.currentLang]?.[key] || key;
    },

    // Get localized content from config object
    // Accepts { en: "...", zh: "..." } or plain string
    getLocalized(content) {
        if (!content) return '';
        if (typeof content === 'string') return content;
        return content[this.currentLang] || content['en'] || '';
    },

    getLang() {
        return this.currentLang;
    }
};
