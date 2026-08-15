import React from 'react';

/**
 * Anneora Input — a quiet field that sits on a hairline underline or
 * inside a glass capsule. Light, wide-tracked, calm.
 */
export function Input({
  variant = 'line',
  type = 'text',
  placeholder = '',
  value,
  onChange,
  label,
  disabled = false,
  style = {},
  ...rest
}) {
  const [focus, setFocus] = React.useState(false);

  const shared = {
    width: '100%',
    fontFamily: "'Inter', system-ui, sans-serif",
    fontWeight: 300,
    fontSize: '0.95rem',
    letterSpacing: '0.02em',
    color: 'var(--bone-50, #f5f5f5)',
    background: variant === 'capsule' ? 'rgba(255,255,255,0.04)' : 'transparent',
    outline: 'none',
    transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
    opacity: disabled ? 0.4 : 1,
  };

  const variants = {
    line: {
      border: 'none',
      borderBottom: `1px solid ${focus ? 'rgba(255,255,255,0.5)' : 'rgba(255,255,255,0.14)'}`,
      borderRadius: 0,
      padding: '10px 2px',
    },
    capsule: {
      border: `1px solid ${focus ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.1)'}`,
      borderRadius: '999px',
      padding: '12px 20px',
      backdropFilter: 'blur(10px)',
      boxShadow: focus ? '0 0 18px rgba(255,255,255,0.07)' : 'none',
    },
  };

  return (
    <label style={{ display: 'block', ...style }}>
      {label && (
        <span style={{
          display: 'block',
          marginBottom: '8px',
          fontSize: '0.7rem',
          letterSpacing: '0.18em',
          textTransform: 'uppercase',
          color: 'var(--bone-400, #6b6b6b)',
        }}>{label}</span>
      )}
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        disabled={disabled}
        onFocus={() => setFocus(true)}
        onBlur={() => setFocus(false)}
        style={{ ...shared, ...variants[variant] }}
        {...rest}
      />
    </label>
  );
}
