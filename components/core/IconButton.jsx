import React from 'react';

/**
 * Anneora IconButton — a circular glass control for a single glyph
 * (play, pause, social, menu). Pass an SVG/icon node as children.
 */
export function IconButton({
  children,
  size = 'md',
  variant = 'ghost',
  label,
  disabled = false,
  onClick,
  style = {},
  ...rest
}) {
  const dims = { sm: 36, md: 44, lg: 56 };
  const d = dims[size] || 44;
  const [hover, setHover] = React.useState(false);

  const variants = {
    ghost: {
      background: 'rgba(255,255,255,0.03)',
      border: '1px solid rgba(255,255,255,0.12)',
      color: 'var(--bone-100, #e5e5e5)',
    },
    glow: {
      background: 'var(--bone-50, #f5f5f5)',
      border: '1px solid rgba(255,255,255,0.6)',
      color: '#0a0a0a',
      boxShadow: '0 0 22px rgba(255,255,255,0.18)',
    },
  };

  const hoverFx = !disabled && hover
    ? (variant === 'glow'
        ? { boxShadow: '0 0 34px rgba(255,255,255,0.4)' }
        : { borderColor: 'rgba(255,255,255,0.4)', color: '#f5f5f5', boxShadow: '0 0 18px rgba(255,255,255,0.08)' })
    : {};

  return (
    <button
      type="button"
      aria-label={label}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: d,
        height: d,
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: '50%',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.35 : 1,
        backdropFilter: 'blur(10px)',
        transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
        padding: 0,
        ...variants[variant],
        ...hoverFx,
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
