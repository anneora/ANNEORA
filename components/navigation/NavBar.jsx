import React from 'react';

/**
 * Anneora NavBar — a sparse, transparent top bar. Wordmark left,
 * wide-tracked links right. Goes frosted on scroll (pass scrolled).
 */
export function NavBar({
  brand = 'ANNEORA',
  links = [],
  active,
  onNavigate,
  onBrandClick,
  menuLinks = links,
  right = null,
  scrolled = false,
  style = {},
  ...rest
}) {
  const [menuOpen, setMenuOpen] = React.useState(false);

  const navigate = (key) => {
    setMenuOpen(false);
    onNavigate && onNavigate(key);
  };

  return (
    <nav className="anneora-nav"
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '20px 40px',
        background: scrolled ? 'rgba(10,10,10,0.6)' : 'transparent',
        backdropFilter: scrolled ? 'blur(16px)' : 'none',
        borderBottom: `1px solid ${scrolled ? 'rgba(255,255,255,0.07)' : 'transparent'}`,
        transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
        ...style,
      }}
      {...rest}
    >
      <style>{`
        .anneora-nav__desktop { display: flex; align-items: center; gap: 32px; }
        .anneora-nav__menu-toggle, .anneora-nav__mobile-menu { display: none; }
        @media (max-width: 680px) {
          .anneora-nav { padding: 16px 20px !important; }
          .anneora-nav__desktop { display: none !important; }
          .anneora-nav__menu-toggle { display: inline-flex; flex-direction: column; gap: 5px; width: 34px; height: 34px; align-items: center; justify-content: center; padding: 0; border: 0; background: transparent; color: var(--bone-50, #f5f5f5); cursor: pointer; }
          .anneora-nav__menu-toggle span { width: 20px; height: 1px; background: currentColor; transition: transform 220ms ease, opacity 220ms ease; }
          .anneora-nav__menu-toggle[aria-expanded="true"] span:nth-child(1) { transform: translateY(6px) rotate(45deg); }
          .anneora-nav__menu-toggle[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
          .anneora-nav__menu-toggle[aria-expanded="true"] span:nth-child(3) { transform: translateY(-6px) rotate(-45deg); }
          .anneora-nav__mobile-menu { position: absolute; top: calc(100% + 8px); left: 12px; right: 12px; padding: 10px; border: 1px solid rgba(255,255,255,0.12); border-radius: 10px; background: rgba(8,8,8,0.78); backdrop-filter: blur(18px); box-shadow: 0 16px 40px rgba(0,0,0,0.38); }
          .anneora-nav__mobile-menu.is-open { display: grid; gap: 2px; }
          .anneora-nav__mobile-link { width: 100%; padding: 14px 12px; border: 0; background: transparent; color: var(--bone-100, #e5e5e5); cursor: pointer; font-family: 'Inter', system-ui, sans-serif; font-size: 0.7rem; font-weight: 400; letter-spacing: 0.18em; text-align: left; text-transform: uppercase; }
        }
      `}</style>
      <button
        type="button"
        onClick={onBrandClick}
        aria-label="Back to top"
        style={{
          padding: 0,
          border: 'none',
          background: 'transparent',
          cursor: onBrandClick ? 'pointer' : 'default',
          fontFamily: "'Cinzel', serif",
          fontWeight: 500,
          fontSize: '1.05rem',
          letterSpacing: '0.25em',
          color: 'var(--bone-50, #f5f5f5)',
          textShadow: '0 0 20px rgba(255,255,255,0.18)',
        }}
      >{brand}</button>

      <div className="anneora-nav__desktop" style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {links.map((l) => {
          const key = typeof l === 'string' ? l : l.label;
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => navigate(key)}
              style={{
                background: 'none',
                border: 'none',
                cursor: 'pointer',
                padding: '6px 0',
                fontFamily: "'Inter', system-ui, sans-serif",
                fontWeight: 400,
                fontSize: '0.72rem',
                letterSpacing: '0.18em',
                textTransform: 'uppercase',
                color: isActive ? 'var(--bone-50, #f5f5f5)' : 'var(--bone-400, #6b6b6b)',
                borderBottom: `1px solid ${isActive ? 'rgba(255,255,255,0.5)' : 'transparent'}`,
                transition: 'color 320ms, border-color 320ms',
              }}
              onMouseEnter={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--bone-100, #e5e5e5)'; }}
              onMouseLeave={(e) => { if (!isActive) e.currentTarget.style.color = 'var(--bone-400, #6b6b6b)'; }}
            >
              {key}
            </button>
          );
        })}
        {right}
      </div>
      <button
        type="button"
        className="anneora-nav__menu-toggle"
        aria-label="Open navigation menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(open => !open)}
      ><span /><span /><span /></button>
      <div className={`anneora-nav__mobile-menu${menuOpen ? ' is-open' : ''}`}>
        {menuLinks.map((l) => {
          const key = typeof l === 'string' ? l : l.label;
          return <button key={key} type="button" className="anneora-nav__mobile-link" onClick={() => navigate(key)}>{key}</button>;
        })}
      </div>
    </nav>
  );
}
