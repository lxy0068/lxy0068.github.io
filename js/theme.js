/**
 * Theme Manager
 * Handles light/dark theme switching with system preference detection
 */

const ThemeManager = {
    STORAGE_KEY: 'theme-preference',
    THEME_LIGHT: 'light',
    THEME_DARK: 'dark',

    init() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.themeIcon = document.getElementById('theme-icon');

        // Load saved preference or detect system preference
        const savedTheme = localStorage.getItem(this.STORAGE_KEY);
        if (savedTheme) {
            this.setTheme(savedTheme);
        } else {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            this.setTheme(prefersDark ? this.THEME_DARK : this.THEME_LIGHT);
        }

        // Listen for toggle click
        this.themeToggle.addEventListener('click', () => this.toggle());

        // Listen for system preference changes
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
            if (!localStorage.getItem(this.STORAGE_KEY)) {
                this.setTheme(e.matches ? this.THEME_DARK : this.THEME_LIGHT);
            }
        });
    },

    setTheme(theme) {
        document.documentElement.setAttribute('data-theme', theme);
        this.currentTheme = theme;
        this.updateIcon();
    },

    toggle() {
        const newTheme = this.currentTheme === this.THEME_DARK ? this.THEME_LIGHT : this.THEME_DARK;
        this.setTheme(newTheme);
        localStorage.setItem(this.STORAGE_KEY, newTheme);
    },

    updateIcon() {
        if (this.currentTheme === this.THEME_DARK) {
            this.themeIcon.className = 'fas fa-moon';
        } else {
            this.themeIcon.className = 'fas fa-sun';
        }
    },

    getTheme() {
        return this.currentTheme;
    }
};

// Initialize theme on DOM ready
document.addEventListener('DOMContentLoaded', () => {
    ThemeManager.init();
});
