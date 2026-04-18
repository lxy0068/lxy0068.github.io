/**
 * Advanced particle canvas
 * Types: dot | ring | star | diamond | comet
 * Interactions: repulsion, attraction, click-explosion, velocity trail
 */
const Particles = {
    canvas: null,
    ctx: null,
    particles: [],
    mouse: { x: -3000, y: -3000 },
    _prevMx: -3000,
    _prevMy: -3000,
    _raf: null,
    _tick: 0,
    MAX: 130,
    /* ── bootstrap ──────────────────────────────────────────── */
    init() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this._resize();
        this._populate();
        this._bindEvents();
        this._loop();
    },
    /* ── helpers ────────────────────────────────────────────── */
    _accentRgb() {
        const v = getComputedStyle(document.documentElement)
            .getPropertyValue('--accent').trim();
        if (v.startsWith('#')) {
            const n = parseInt(v.slice(1), 16);
            return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
        }
        const m = v.match(/\d+/g);
        return m ? [+m[0], +m[1], +m[2]] : [0, 102, 204];
    },
    /* Convert accent RGB to approximate hue (0-360) */
    _accentHue() {
        const [r, g, b] = this._accentRgb().map(c => c / 255);
        const max = Math.max(r, g, b), min = Math.min(r, g, b), d = max - min;
        if (d === 0) return 0;
        let h = max === r ? ((g - b) / d) % 6
               : max === g ? (b - r) / d + 2
               :             (r - g) / d + 4;
        return ((h * 60) + 360) % 360;
    },
    _resize() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
    /* ── particle factory ───────────────────────────────────── */
    _TYPES: ['dot', 'ring', 'star', 'diamond', 'comet'],
    _make(opts = {}) {
        const type = opts.type
            || this._TYPES[Math.floor(Math.random() * this._TYPES.length)];
        const baseR = opts.r ?? (Math.random() * 2.2 + 0.9);
        return {
            x:         opts.x ?? Math.random() * this.canvas.width,
            y:         opts.y ?? Math.random() * this.canvas.height,
            vx:        opts.vx ?? (Math.random() - 0.5) * 0.55,
            vy:        opts.vy ?? (Math.random() - 0.5) * 0.55,
            baseR,
            r:         baseR,
            type,
            hueShift:  (Math.random() - 0.5) * 100,   // ±50° from accent hue
            satBoost:  Math.random() * 20,              // extra saturation
            phase:     Math.random() * Math.PI * 2,
            pulseSpd:  Math.random() * 0.035 + 0.008,
            rot:       Math.random() * Math.PI * 2,
            rotSpd:    (Math.random() - 0.5) * 0.025,
            alpha:     opts.alpha ?? (Math.random() * 0.45 + 0.2),
            // comet tail history
            tail:      type === 'comet' ? [] : null,
            // ephemeral properties (explosion / trail)
            ephemeral: opts.ephemeral ?? false,
            life:      1,
        };
    },
    _populate() {
        this.particles = [];
        const n = Math.min(60, Math.floor(
            (window.innerWidth * window.innerHeight) / 16000
        ));
        for (let i = 0; i < n; i++) this.particles.push(this._make());
    },
    /* ── events ─────────────────────────────────────────────── */
    _bindEvents() {
        window.addEventListener('resize', () => {
            this._resize();
            this._populate();
        });
        document.addEventListener('mousemove', e => {
            const dx = e.clientX - this._prevMx;
            const dy = e.clientY - this._prevMy;
            this._prevMx = this.mouse.x;
            this._prevMy = this.mouse.y;
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
            // velocity trail — only when moving briskly
            const spd = Math.sqrt(dx * dx + dy * dy);
            if (spd > 5 && this.particles.length < this.MAX && Math.random() < 0.4) {
                this.particles.push(this._make({
                    x: e.clientX, y: e.clientY,
                    vx: (Math.random() - 0.5) * 1.2,
                    vy: (Math.random() - 0.5) * 1.2,
                    r: Math.random() * 1.8 + 0.5,
                    alpha: 0.75,
                    ephemeral: true,
                    type: Math.random() < 0.6 ? 'dot' : 'ring',
                }));
            }
        });
        document.addEventListener('mouseleave', () => {
            this.mouse.x = -3000;
            this.mouse.y = -3000;
        });
        // Click → explosion burst
        document.addEventListener('click', e => {
            const burst = Math.min(18, this.MAX - this.particles.length);
            for (let i = 0; i < burst; i++) {
                const angle = (i / burst) * Math.PI * 2 + Math.random() * 0.4;
                const spd   = Math.random() * 4.5 + 1.5;
                this.particles.push(this._make({
                    x: e.clientX, y: e.clientY,
                    vx: Math.cos(angle) * spd,
                    vy: Math.sin(angle) * spd,
                    r: Math.random() * 2.8 + 0.8,
                    alpha: 0.9,
                    ephemeral: true,
                    type: this._TYPES[Math.floor(Math.random() * this._TYPES.length)],
                }));
            }
        });
    },
    /* ── drawing primitives ─────────────────────────────────── */
    _drawStar(ctx, r) {
        const spikes = 5;
        const inner  = r * 0.38;
        let   angle  = -Math.PI / 2;
        const step   = Math.PI / spikes;
        ctx.beginPath();
        for (let i = 0; i < spikes * 2; i++) {
            const rad = i % 2 === 0 ? r : inner;
            ctx.lineTo(Math.cos(angle) * rad, Math.sin(angle) * rad);
            angle += step;
        }
        ctx.closePath();
    },
    _drawParticle(p, fill, stroke) {
        const { ctx } = this;
        ctx.save();
        ctx.translate(p.x, p.y);
        ctx.rotate(p.rot);
        switch (p.type) {
            case 'dot':
                ctx.beginPath();
                ctx.arc(0, 0, p.r, 0, Math.PI * 2);
                ctx.fillStyle = fill;
                ctx.fill();
                break;
            case 'ring':
                ctx.beginPath();
                ctx.arc(0, 0, p.r, 0, Math.PI * 2);
                ctx.strokeStyle = stroke;
                ctx.lineWidth = 0.9;
                ctx.stroke();
                break;
            case 'star':
                this._drawStar(ctx, p.r);
                ctx.fillStyle = fill;
                ctx.fill();
                break;
            case 'diamond':
                ctx.beginPath();
                ctx.moveTo(0, -p.r);
                ctx.lineTo(p.r * 0.55, 0);
                ctx.lineTo(0, p.r);
                ctx.lineTo(-p.r * 0.55, 0);
                ctx.closePath();
                ctx.fillStyle = fill;
                ctx.fill();
                break;
            case 'comet': {
                // glowing core
                ctx.beginPath();
                ctx.arc(0, 0, p.r, 0, Math.PI * 2);
                ctx.fillStyle = fill;
                ctx.fill();
                // velocity tail
                const tvx = -(p.vx * 10), tvy = -(p.vy * 10);
                const tLen = Math.sqrt(tvx * tvx + tvy * tvy);
                if (tLen > 0.5) {
                    const grad = ctx.createLinearGradient(0, 0, tvx, tvy);
                    grad.addColorStop(0, fill);
                    grad.addColorStop(1, 'transparent');
                    ctx.beginPath();
                    ctx.moveTo(0, 0);
                    ctx.lineTo(tvx, tvy);
                    ctx.strokeStyle = grad;
                    ctx.lineWidth = p.r * 1.1;
                    ctx.lineCap = 'round';
                    ctx.stroke();
                }
                break;
            }
        }
        ctx.restore();
    },
    /* ── main loop ──────────────────────────────────────────── */
    _loop() {
        const { ctx, canvas, mouse } = this;
        this._tick++;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        const baseHue = this._accentHue();
        const isDark  = document.documentElement.getAttribute('data-theme') === 'dark';
        const [ar, ag, ab] = this._accentRgb();
        const REPEL   = 110;
        const ATTRACT = 220;
        const LINK    = 135;
        const MLINK   = 210;
        /* ── update physics ── */
        const alive = [];
        for (const p of this.particles) {
            // pulse radius
            p.phase += p.pulseSpd;
            p.r = p.baseR * (1 + 0.28 * Math.sin(p.phase));
            p.rot += p.rotSpd;
            // mouse forces
            const mdx = mouse.x - p.x;
            const mdy = mouse.y - p.y;
            const md  = Math.sqrt(mdx * mdx + mdy * mdy) || 1;
            if (md < REPEL) {
                const f = (1 - md / REPEL) * 1.1;
                p.vx -= (mdx / md) * f;
                p.vy -= (mdy / md) * f;
            } else if (md < ATTRACT) {
                const f = (1 - md / ATTRACT) * 0.04;
                p.vx += (mdx / md) * f;
                p.vy += (mdy / md) * f;
            }
            p.vx *= 0.97;
            p.vy *= 0.97;
            p.x  += p.vx;
            p.y  += p.vy;
            // wall bounce
            if (p.x < 0)             { p.x = 0;             p.vx *= -1; }
            if (p.x > canvas.width)  { p.x = canvas.width;  p.vx *= -1; }
            if (p.y < 0)             { p.y = 0;             p.vy *= -1; }
            if (p.y > canvas.height) { p.y = canvas.height; p.vy *= -1; }
            // comet tail
            if (p.tail !== null) {
                p.tail.push({ x: p.x, y: p.y });
                if (p.tail.length > 12) p.tail.shift();
            }
            // ephemeral decay
            if (p.ephemeral) {
                p.life -= 0.022;
                if (p.life <= 0) continue;
                p.alpha = p.life * 0.85;
            }
            alive.push(p);
        }
        this.particles = alive;
        /* ── draw connections ── */
        for (let i = 0; i < alive.length; i++) {
            const p1 = alive[i];
            // particle ↔ particle links
            for (let j = i + 1; j < alive.length; j++) {
                const p2   = alive[j];
                const dx   = p1.x - p2.x, dy = p1.y - p2.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist >= LINK) continue;
                // proximity boost near cursor
                const prox1 = Math.hypot(mouse.x - p1.x, mouse.y - p1.y);
                const prox2 = Math.hypot(mouse.x - p2.x, mouse.y - p2.y);
                const boost = Math.min(prox1, prox2) < 220
                    ? (1 - Math.min(prox1, prox2) / 220) * 0.35 : 0;
                const a = (1 - dist / LINK) * 0.13 + boost;
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(p2.x, p2.y);
                ctx.strokeStyle = `rgba(${ar},${ag},${ab},${a})`;
                ctx.lineWidth = 0.65;
                ctx.stroke();
            }
            // particle ↔ cursor — gradient line
            const md = Math.hypot(mouse.x - p1.x, mouse.y - p1.y);
            if (md < MLINK) {
                const a = (1 - md / MLINK) * 0.65;
                const g = ctx.createLinearGradient(p1.x, p1.y, mouse.x, mouse.y);
                g.addColorStop(0, `rgba(${ar},${ag},${ab},${a * 0.4})`);
                g.addColorStop(1, `rgba(${ar},${ag},${ab},${a})`);
                ctx.beginPath();
                ctx.moveTo(p1.x, p1.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = g;
                ctx.lineWidth = a * 1.6;
                ctx.stroke();
            }
        }
        /* ── draw particles ── */
        for (const p of alive) {
            const hue = ((baseHue + p.hueShift) + 360) % 360;
            const sat = 75 + p.satBoost;
            const lum = isDark ? 68 : 48;
            const fill   = `hsla(${hue},${sat}%,${lum}%,${p.alpha})`;
            const stroke = `hsla(${hue},${sat}%,${lum + 12}%,${p.alpha})`;
            // glow on prominent shapes
            if (p.type === 'star' || p.type === 'comet' || p.type === 'diamond') {
                ctx.shadowColor = `hsla(${hue},${sat}%,${lum}%,0.85)`;
                ctx.shadowBlur  = p.type === 'comet' ? 12 : 7;
            }
            this._drawParticle(p, fill, stroke);
            ctx.shadowBlur = 0;
        }
        /* ── cursor aura ── */
        if (mouse.x > -1000) {
            const grd = ctx.createRadialGradient(
                mouse.x, mouse.y, 0,
                mouse.x, mouse.y, 55
            );
            grd.addColorStop(0, `rgba(${ar},${ag},${ab},0.18)`);
            grd.addColorStop(1, `rgba(${ar},${ag},${ab},0)`);
            ctx.beginPath();
            ctx.arc(mouse.x, mouse.y, 55, 0, Math.PI * 2);
            ctx.fillStyle = grd;
            ctx.fill();
        }
        this._raf = requestAnimationFrame(() => this._loop());
    },
};
document.addEventListener('DOMContentLoaded', () => Particles.init());
