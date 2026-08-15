import React from 'react';

/**
 * Anneora Badge — a small overline token: a year, a tag, "new",
 * a genre. Uppercase, wide-tracked, hairline or faint-fill.
 */
export function Badge({ children, variant = 'outline', style = {}, ...rest }) {
  const variants = {
    outline: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.16)',
      color: 'var(--bone-200, #c8c8c8)',
    },
    soft: {
      background: 'rgba(255,255,255,0.06)',
      border: '1px solid transparent',
      color: 'var(--bone-100, #e5e5e5)',
    },
    glow: {
      background: 'transparent',
      border: '1px solid rgba(255,255,255,0.4)',
      color: 'var(--bone-50, #f5f5f5)',
      boxShadow: '0 0 14px rgba(255,255,255,0.1)',
    },
  };

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '5px 12px',
        borderRadius: '999px',
        fontFamily: "'Inter', system-ui, sans-serif",
        fontWeight: 400,
        fontSize: '0.65rem',
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </span>
  );
}
