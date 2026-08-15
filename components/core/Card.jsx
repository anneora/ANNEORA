import React from 'react';

/**
 * Anneora Card — frosted glass panel floating in the void.
 * Hairline veil border, barely-there fill, 10px radius, soft blur.
 */
export function Card({ children, padding = '1rem', glow = false, style = {}, ...rest }) {
  return (
    <div
      style={{
        background: 'rgba(255,255,255,0.04)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '10px',
        backdropFilter: 'blur(10px)',
        padding,
        color: 'var(--bone-100, #e5e5e5)',
        boxShadow: glow ? '0 0 32px rgba(255,255,255,0.06), inset 0 0 24px rgba(255,255,255,0.03)' : 'none',
        ...style,
      }}
      {...rest}
    >
      {children}
    </div>
  );
}
