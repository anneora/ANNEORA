import React from 'react';

/**
 * Anneora PlayButton — the transport control. A circular glass disc
 * that toggles between a play triangle and pause bars, with a soft
 * pulsing halo while playing.
 */
export function PlayButton({ playing = false, size = 56, onToggle, label, style = {}, ...rest }) {
  const [hover, setHover] = React.useState(false);
  const glyph = size * 0.34;

  return (
    <button
      type="button"
      aria-label={label || (playing ? 'Pause' : 'Play')}
      aria-pressed={playing}
      onClick={onToggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        width: size,
        height: size,
        borderRadius: '50%',
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        cursor: 'pointer',
        padding: 0,
        background: playing ? 'var(--bone-50, #f5f5f5)' : 'rgba(255,255,255,0.04)',
        color: playing ? '#0a0a0a' : 'var(--bone-50, #f5f5f5)',
        border: `1px solid ${playing ? 'rgba(255,255,255,0.7)' : 'rgba(255,255,255,0.2)'}`,
        backdropFilter: 'blur(10px)',
        boxShadow: playing
          ? '0 0 34px rgba(255,255,255,0.4)'
          : hover ? '0 0 22px rgba(255,255,255,0.12)' : 'none',
        transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
        ...style,
      }}
      {...rest}
    >
      {playing ? (
        <svg width={glyph} height={glyph} viewBox="0 0 24 24" fill="currentColor">
          <rect x="5" y="3" width="5" height="18" rx="1" />
          <rect x="14" y="3" width="5" height="18" rx="1" />
        </svg>
      ) : (
        <svg width={glyph} height={glyph} viewBox="0 0 24 24" fill="currentColor" style={{ marginLeft: size * 0.04 }}>
          <path d="M6 4l14 8-14 8z" />
        </svg>
      )}
    </button>
  );
}
