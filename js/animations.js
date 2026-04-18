/**
 * Interactive animations:
 * loading screen, scroll progress, scroll-reveal, card tilt,
 * ripple, magnetic buttons, typewriter, name glitch
 */
const Animations = {
    init() {
        this._initScrollProgress();
    },
    // Called by App after all content is rendered
    onContentReady() {
        this._initScrollReveal();
        this._initTilt();
        this._initRipple();
        this._initMagnetic();
        this._initTypewriter();
        this._initGlitch();
    },
    // Re-run after language switch (typewriter + glitch re-init)
    onLanguageSwitch() {
        this._initTypewriter();
        this._initGlitch();
    },
    // ── Scroll progress bar ───────────────────────────────────────
    _initScrollProgress() {
        const bar = document.getElementById('scroll-progress');
        if (!bar) return;
        const update = () => {
            const total = document.documentElement.scrollHeight - window.innerHeight;
            bar.style.width = (total > 0 ? (window.scrollY / total) * 100 : 0) + '%';
        };
        window.addEventListener('scroll', update, { passive: true });
        update();
    },
    // ── Scroll reveal (Intersection Observer) ────────────────────
    _initScrollReveal() {
        const targets = document.querySelectorAll(
            '.news-item, .education-item, .publication-card, ' +
            '.experience-item, .award-item, .section-title, .home-content'
        );
        targets.forEach(el => {
            el.classList.add('reveal-hidden');
            // stagger siblings
            const siblings = Array.from(el.parentElement?.children || []);
            const idx = siblings.indexOf(el);
            if (idx > 0) el.style.transitionDelay = `${idx * 0.07}s`;
        });
        const io = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.replace('reveal-hidden', 'reveal-visible');
                    io.unobserve(entry.target);
                }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        targets.forEach(el => io.observe(el));
    },
    // ── 3-D card tilt on hover ────────────────────────────────────
    _initTilt() {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const cards = document.querySelectorAll(
            '.publication-card, .education-item, .experience-item'
        );
        cards.forEach(card => {
            card.style.transition = 'transform 0.15s ease, box-shadow 0.3s ease';
            card.addEventListener('mousemove', e => {
                const r  = card.getBoundingClientRect();
                const cx = r.left + r.width  / 2;
                const cy = r.top  + r.height / 2;
                const tx = ((e.clientY - cy) / (r.height / 2)) * -7;
                const ty = ((e.clientX - cx) / (r.width  / 2)) *  7;
                card.style.transform = `perspective(900px) rotateX(${tx}deg) rotateY(${ty}deg) translateZ(6px)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = '';
            });
        });
    },
    // ── Ripple click effect ────────────────────────────────────────
    _initRipple() {
        const sel = '.cv-link, .social-link, .publication-link, .theme-toggle, .lang-toggle';
        document.querySelectorAll(sel).forEach(btn => {
            btn.style.position = 'relative';
            btn.style.overflow = 'hidden';
            btn.addEventListener('click', e => {
                const r    = btn.getBoundingClientRect();
                const size = Math.max(r.width, r.height) * 2;
                const rpl  = document.createElement('span');
                rpl.className = 'ripple-effect';
                rpl.style.cssText = `
                    width:${size}px; height:${size}px;
                    left:${e.clientX - r.left - size / 2}px;
                    top:${e.clientY  - r.top  - size / 2}px;
                `;
                btn.appendChild(rpl);
                setTimeout(() => rpl.remove(), 650);
            });
        });
    },
    // ── Magnetic pull on social / CV buttons ─────────────────────
    _initMagnetic() {
        if (window.matchMedia('(pointer: coarse)').matches) return;
        const btns = document.querySelectorAll('.cv-link, .social-link');
        const S = 0.28;
        btns.forEach(btn => {
            btn.addEventListener('mousemove', e => {
                const r  = btn.getBoundingClientRect();
                const dx = (e.clientX - (r.left + r.width  / 2)) * S;
                const dy = (e.clientY - (r.top  + r.height / 2)) * S;
                btn.style.transform = `translate(${dx}px, ${dy}px)`;
            });
            btn.addEventListener('mouseleave', () => {
                btn.style.transform = '';
            });
        });
    },
    // ── Typewriter on the title ───────────────────────────────────
    _initTypewriter() {
        const el = document.getElementById('profile-title');
        if (!el) return;
        const text = el.textContent.trim();
        if (!text) return;
        el.textContent = '';
        el.classList.add('typewriter-active');
        let i = 0;
        const tick = () => {
            el.textContent += text[i++];
            if (i < text.length) setTimeout(tick, 75);
            else setTimeout(() => el.classList.remove('typewriter-active'), 1200);
        };
        setTimeout(tick, 400);
    },
    // ── Glitch hover on name ──────────────────────────────────────
    _initGlitch() {
        const el = document.getElementById('profile-name');
        if (!el) return;
        el.dataset.text = el.textContent;
        el.classList.add('glitch-text');
    },
};
document.addEventListener('DOMContentLoaded', () => Animations.init());
