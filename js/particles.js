/**
 * Neural-network particle canvas — reacts to mouse and theme
 */
const Particles = {
    canvas: null,
    ctx: null,
    particles: [],
    mouse: { x: -2000, y: -2000 },
    _raf: null,
 
    init() {
        this.canvas = document.getElementById('particle-canvas');
        if (!this.canvas) return;
        this.ctx = this.canvas.getContext('2d');
        this._resize();
        this._createParticles();
        this._bindEvents();
        this._loop();
    },
 
    _accentRgb() {
        const v = getComputedStyle(document.documentElement)
            .getPropertyValue('--accent').trim();
        // v is either "#rrggbb" or "rgb(...)"
        if (v.startsWith('#')) {
            const n = parseInt(v.slice(1), 16);
            return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
        }
        const m = v.match(/\d+/g);
        return m ? [+m[0], +m[1], +m[2]] : [0, 102, 204];
    },
 
    _resize() {
        this.canvas.width  = window.innerWidth;
        this.canvas.height = window.innerHeight;
    },
 
    _createParticles() {
        this.particles = [];
        const count = Math.min(80, Math.floor((window.innerWidth * window.innerHeight) / 14000));
        for (let i = 0; i < count; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.35,
                vy: (Math.random() - 0.5) * 0.35,
                r: Math.random() * 1.8 + 0.8,
                alpha: Math.random() * 0.4 + 0.15,
            });
        }
    },
 
    _bindEvents() {
        window.addEventListener('resize', () => {
            this._resize();
            this._createParticles();
        });
        document.addEventListener('mousemove', e => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;
        });
        document.addEventListener('mouseleave', () => {
            this.mouse.x = -2000;
            this.mouse.y = -2000;
        });
    },
 
    _loop() {
        const { ctx, canvas, particles, mouse } = this;
        const [r, g, b] = this._accentRgb();
 
        ctx.clearRect(0, 0, canvas.width, canvas.height);
 
        const MAX_LINK = 130;
        const MOUSE_LINK = 180;
 
        particles.forEach((p, i) => {
            // drift
            p.x += p.vx;
            p.y += p.vy;
            if (p.x < 0 || p.x > canvas.width)  p.vx *= -1;
            if (p.y < 0 || p.y > canvas.height) p.vy *= -1;
 
            // subtle mouse pull
            const mdx = mouse.x - p.x, mdy = mouse.y - p.y;
            const md  = Math.sqrt(mdx * mdx + mdy * mdy);
            if (md < 160) {
                p.x += mdx * 0.008;
                p.y += mdy * 0.008;
            }
 
            // draw dot
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
            ctx.fillStyle = `rgba(${r},${g},${b},${p.alpha})`;
            ctx.fill();
 
            // particle-to-particle links
            for (let j = i + 1; j < particles.length; j++) {
                const q = particles[j];
                const dx = p.x - q.x, dy = p.y - q.y;
                const dist = Math.sqrt(dx * dx + dy * dy);
                if (dist < MAX_LINK) {
                    const a = (1 - dist / MAX_LINK) * 0.12;
                    ctx.beginPath();
                    ctx.moveTo(p.x, p.y);
                    ctx.lineTo(q.x, q.y);
                    ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
                    ctx.lineWidth = 0.6;
                    ctx.stroke();
                }
            }
 
            // mouse-to-particle links
            if (md < MOUSE_LINK) {
                const a = (1 - md / MOUSE_LINK) * 0.45;
                ctx.beginPath();
                ctx.moveTo(p.x, p.y);
                ctx.lineTo(mouse.x, mouse.y);
                ctx.strokeStyle = `rgba(${r},${g},${b},${a})`;
                ctx.lineWidth = 0.8;
                ctx.stroke();
            }
        });
 
        this._raf = requestAnimationFrame(() => this._loop());
    }
};
 
document.addEventListener('DOMContentLoaded', () => Particles.init());
