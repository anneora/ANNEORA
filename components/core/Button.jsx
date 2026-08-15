import React from 'react';

/**
 * Anneora Button — glass in the dark.
 * Variants: ghost (default, hairline outline), glow (filled bone with halo),
 * text (bare link). Quiet by default; light leaks on hover.
 */
export function Button({
  children,
  variant = 'ghost',
  size = 'md',
  disabled = false,
  type = 'button',
  onClick,
  style = {},
  ...rest
}) {
  const sizes = {
    sm: { padding: '8px 18px', fontSize: '0.75rem' },
    md: { padding: '12px 28px', fontSize: '0.8rem' },
    lg: { padding: '16px 40px', fontSize: '0.9rem' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '10px',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 400,
    letterSpacing: '0.18em',
    textTransform: 'uppercase',
    borderRadius: '999px',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.35 : 1,
    transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
    whiteSpace: 'nowrap',
    ...sizes[size],
  };

  const variants = {
    ghost: {
      background: 'rgba(255,255,255,0.02)',
      color: 'var(--bone-100, #e5e5e5)',
      border: '1px solid rgba(255,255,255,0.18)',
      backdropFilter: 'blur(10px)',
    },
    glow: {
      background: 'var(--bone-50, #f5f5f5)',
      color: '#0a0a0a',
      border: '1px solid rgba(255,255,255,0.6)',
      boxShadow: '0 0 24px rgba(255,255,255,0.16)',
    },
    text: {
      background: 'transparent',
      color: 'var(--bone-300, #9a9a9a)',
      border: '1px solid transparent',
      padding: '8px 4px',
    },
  };

  const [hover, setHover] = React.useState(false);
  const hoverFx = !disabled && hover ? (
    variant === 'glow'
      ? { boxShadow: '0 0 36px rgba(255,255,255,0.35)', transform: 'translateY(-1px)' }
      : variant === 'text'
      ? { color: 'var(--bone-50, #f5f5f5)' }
      : { borderColor: 'rgba(255,255,255,0.45)', boxShadow: '0 0 20px rgba(255,255,255,0.08)', color: '#f5f5f5' }
  ) : {};

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{ ...base, ...variants[variant], ...hoverFx, ...style }}
      {...rest}
    >
      {children}
    </button>
  );
}
