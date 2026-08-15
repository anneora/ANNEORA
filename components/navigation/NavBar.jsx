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
  right = null,
  scrolled = false,
  style = {},
  ...rest
}) {
  return (
    <nav
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

      <div style={{ display: 'flex', alignItems: 'center', gap: '32px' }}>
        {links.map((l) => {
          const key = typeof l === 'string' ? l : l.label;
          const isActive = active === key;
          return (
            <button
              key={key}
              type="button"
              onClick={() => onNavigate && onNavigate(key)}
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
    </nav>
  );
}
