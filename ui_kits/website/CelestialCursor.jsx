// Desktop-only custom cursor. It is deliberately visual-only: pointer-events
// remain disabled so clicks and native text selection are never intercepted.
function CelestialCursor() {
  const cursorRef = React.useRef(null);

  React.useEffect(() => {
    const finePointer = window.matchMedia('(hover: hover) and (pointer: fine)');
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
    if (!finePointer.matches || reducedMotion.matches) return undefined;

    const root = document.documentElement;
    const cursor = cursorRef.current;
    const ghostOne = cursor.querySelector('.celestial-cursor__ghost--one');
    const ghostTwo = cursor.querySelector('.celestial-cursor__ghost--two');
    const particleField = cursor.querySelector('.celestial-cursor__particles');
    const position = { x: -100, y: -100, gx1: -100, gy1: -100, gx2: -100, gy2: -100 };
    let target = { x: -100, y: -100 };
    let mode = 'default';
    let visible = false;
    let frame = 0;

    const setMode = (nextMode) => {
      if (mode === nextMode) return;
      mode = nextMode;
      cursor.dataset.mode = mode;
    };

    const hasPointerCursor = (element) => {
      for (let current = element; current && current !== document.body; current = current.parentElement) {
        if (getComputedStyle(current).cursor === 'pointer') return true;
      }
      return false;
    };

    const getMode = (element) => {
      if (!(element instanceof Element)) return 'default';
      if (element.closest('[data-cursor="wings"]')) return 'wings';
      if (element.closest('input:not([type="range"]):not([type="button"]):not([type="submit"]), textarea, [contenteditable="true"], p, h1, h2, h3, h4, h5, h6, li, blockquote, [data-cursor="text"]')) return 'text';
      if (element.closest('a, button, [role="button"], input[type="range"], input[type="button"], input[type="submit"], select, label, [data-cursor="pointer"]') || hasPointerCursor(element)) return 'pointer';
      return 'default';
    };

    const animate = () => {
      position.x += (target.x - position.x) * 0.42;
      position.y += (target.y - position.y) * 0.42;
      position.gx1 += (target.x - position.gx1) * 0.18;
      position.gy1 += (target.y - position.gy1) * 0.18;
      position.gx2 += (target.x - position.gx2) * 0.1;
      position.gy2 += (target.y - position.gy2) * 0.1;
      cursor.style.transform = `translate3d(${position.x}px, ${position.y}px, 0)`;
      ghostOne.style.transform = `translate3d(${position.gx1 - position.x}px, ${position.gy1 - position.y}px, 0)`;
      ghostTwo.style.transform = `translate3d(${position.gx2 - position.x}px, ${position.gy2 - position.y}px, 0)`;
      frame = requestAnimationFrame(animate);
    };

    const onPointerMove = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      target = { x: event.clientX, y: event.clientY };
      if (!visible) {
        visible = true;
        cursor.dataset.visible = 'true';
        position.x = position.gx1 = position.gx2 = target.x;
        position.y = position.gy1 = position.gy2 = target.y;
      }
      setMode(getMode(event.target));
    };

    const onPointerDown = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      cursor.dataset.pressed = 'true';
    };

    const releaseParticles = () => {
      particleField.replaceChildren();
      for (let index = 0; index < 4; index += 1) {
        const particle = document.createElement('i');
        const angle = (Math.PI * 2 * index) / 4 + (Math.random() - 0.5) * 0.55;
        const distance = 7 + Math.random() * 7;
        particle.style.setProperty('--particle-x', `${Math.cos(angle) * distance}px`);
        particle.style.setProperty('--particle-y', `${Math.sin(angle) * distance}px`);
        particleField.appendChild(particle);
      }
      window.setTimeout(() => particleField.replaceChildren(), 340);
    };

    const onPointerUp = (event) => {
      if (event.pointerType && event.pointerType !== 'mouse') return;
      delete cursor.dataset.pressed;
      releaseParticles();
    };

    const onLeave = () => {
      visible = false;
      delete cursor.dataset.visible;
    };

    root.classList.add('has-celestial-cursor');
    cursor.dataset.mode = mode;
    document.addEventListener('pointermove', onPointerMove, { passive: true });
    document.addEventListener('pointerdown', onPointerDown, { passive: true });
    document.addEventListener('pointerup', onPointerUp, { passive: true });
    document.documentElement.addEventListener('mouseleave', onLeave);
    frame = requestAnimationFrame(animate);

    return () => {
      root.classList.remove('has-celestial-cursor');
      cancelAnimationFrame(frame);
      document.removeEventListener('pointermove', onPointerMove);
      document.removeEventListener('pointerdown', onPointerDown);
      document.removeEventListener('pointerup', onPointerUp);
      document.documentElement.removeEventListener('mouseleave', onLeave);
    };
  }, []);

  return (
    <div className="celestial-cursor" ref={cursorRef} aria-hidden="true">
      <span className="celestial-cursor__ghost celestial-cursor__ghost--two" />
      <span className="celestial-cursor__ghost celestial-cursor__ghost--one" />
      <svg className="celestial-cursor__sigil" viewBox="-24 -24 48 48" fill="none">
        <path className="celestial-cursor__halo" d="M-9-13Q0-18 9-13M13-9Q18 0 13 9M9 13Q0 18-9 13M-13 9Q-18 0-13-9M-12-12l-2.8-2.8M12-12l2.8-2.8M12 12l2.8 2.8M-12 12l-2.8 2.8" />
        <path className="celestial-cursor__cross" d="M0-8.5 2-2 8.5 0 2 2 0 8.5-2 2-8.5 0-2-2Z" />
        <path className="celestial-cursor__dagger" d="M0-16 2.2-9 1.1-3.3H4V3.3H1.1L2.2 9 0 16-2.2 9-1.1 3.3H-4V-3.3H-1.1L-2.2-9Z" />
        <g className="celestial-cursor__wings">
          <path d="M-3-1C-8-10-14-12-19-10c4 2 6.3 5.1 8.1 8.5-3.4-1.8-6.2-2-8.6-.4 4.2 1.6 7.3 4.1 10.2 7.4" />
          <path d="M3-1C8-10 14-12 19-10c-4 2-6.3 5.1-8.1 8.5 3.4-1.8 6.2-2 8.6-.4-4.2 1.6-7.3 4.1-10.2 7.4" />
        </g>
      </svg>
      <span className="celestial-cursor__particles" />
    </div>
  );
}

window.CelestialCursor = CelestialCursor;
