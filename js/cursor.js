/**
 * Custom cursor: precision dot + lagged ring with crosshair ticks
 * Auto-disabled on touch / coarse-pointer devices
 */
const Cursor = {
    init() {
        if (window.matchMedia('(hover: none), (pointer: coarse)').matches) return;
 
        const dot  = document.createElement('div');
        const ring = document.createElement('div');
        dot.className  = 'cursor-dot';
        ring.className = 'cursor-ring';
        document.body.append(dot, ring);
 
        let mx = -100, my = -100, rx = -100, ry = -100;
 
        document.addEventListener('mousemove', e => {
            mx = e.clientX;
            my = e.clientY;
        });
 
        const INTERACTIVE = 'a, button, [role="button"], input, textarea, select, label';
 
        document.addEventListener('mouseover', e => {
            if (e.target.closest(INTERACTIVE)) {
                dot.classList.add('is-hovering');
                ring.classList.add('is-hovering');
            }
        });
 
        document.addEventListener('mouseout', e => {
            if (e.target.closest(INTERACTIVE)) {
                dot.classList.remove('is-hovering');
                ring.classList.remove('is-hovering');
            }
        });
 
        document.addEventListener('mousedown', () => {
            dot.classList.add('is-clicking');
            ring.classList.add('is-clicking');
        });
 
        document.addEventListener('mouseup', () => {
            dot.classList.remove('is-clicking');
            ring.classList.remove('is-clicking');
        });
 
        document.addEventListener('mouseleave', () => {
            dot.style.opacity  = '0';
            ring.style.opacity = '0';
        });
 
        document.addEventListener('mouseenter', () => {
            dot.style.opacity  = '';
            ring.style.opacity = '';
        });

        // Hide cursor entirely when over the profile photo
        const avatar = document.getElementById('avatar-img');
        if (avatar) {
            avatar.addEventListener('mouseenter', () => {
                dot.style.opacity  = '0';
                ring.style.opacity = '0';
            });
            avatar.addEventListener('mouseleave', () => {
                dot.style.opacity  = '';
                ring.style.opacity = '';
            });
        }
 
        const LERP = 0.12;
        const tick = () => {
            rx += (mx - rx) * LERP;
            ry += (my - ry) * LERP;
            dot.style.transform  = `translate(${mx}px,${my}px) translate(-50%,-50%)`;
            ring.style.transform = `translate(${rx}px,${ry}px) translate(-50%,-50%)`;
            requestAnimationFrame(tick);
        };
        tick();
    }
};
 
document.addEventListener('DOMContentLoaded', () => Cursor.init());
