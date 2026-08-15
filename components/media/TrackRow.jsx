import React from 'react';
import { PlayButton } from './PlayButton.jsx';

/**
 * Anneora TrackRow — a single song in the list. Glass row holding a
 * play disc (or album-art disc), title + meta, a slim seek line, and
 * duration. Active rows brighten and leak a faint halo.
 */
export function TrackRow({
  title,
  meta,
  duration,
  art,                 // optional album-art URL — PlayButton overlays it
  href,                // optional external link (e.g. Spotify) on the title
  progress = 0,        // 0..1
  playing = false,
  active = false,
  onToggle,
  style = {},
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: '18px',
        padding: '14px 18px',
        borderRadius: '10px',
        background: lit ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${lit ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(10px)',
        boxShadow: active ? 'inset 0 0 24px rgba(255,255,255,0.03)' : 'none',
        transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
        ...style,
      }}
      {...rest}
    >
      {art ? (
        <div style={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
          <img src={art} alt="" style={{
            width: 48, height: 48, borderRadius: 8, objectFit: 'cover',
            border: '1px solid rgba(255,255,255,0.12)',
            filter: playing ? 'none' : 'grayscale(0.3) brightness(0.85)',
            transition: 'filter 320ms',
          }} />
          <div style={{
            position: 'absolute', inset: 0, borderRadius: 8,
            background: lit ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.2)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'background 320ms',
          }}>
            <PlayButton playing={playing} size={34} onToggle={onToggle} />
          </div>
        </div>
      ) : (
        <PlayButton playing={playing} size={42} onToggle={onToggle} />
      )}

      <div style={{ flex: 1, minWidth: 0 }}>
        {React.createElement(
          href ? 'a' : 'div',
          {
            ...(href ? { href, target: '_blank', rel: 'noreferrer' } : {}),
            style: {
              display: 'inline-block',
              textDecoration: 'none',
              fontFamily: "'Inter', system-ui, sans-serif",
              fontWeight: 400,
              fontSize: '0.95rem',
              letterSpacing: '0.06em',
              color: active ? 'var(--bone-50, #f5f5f5)' : 'var(--bone-100, #e5e5e5)',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              maxWidth: '100%',
            },
          },
          title
        )}

        {meta && (
          <div style={{
            marginTop: '5px',
            fontSize: '0.7rem',
            letterSpacing: '0.14em',
            textTransform: 'uppercase',
            color: 'var(--bone-400, #6b6b6b)',
          }}>{meta}</div>
        )}

        {/* seek line */}
        <div style={{
          marginTop: '10px',
          height: '2px',
          borderRadius: '2px',
          background: 'rgba(255,255,255,0.08)',
          overflow: 'hidden',
        }}>
          <div style={{
            width: `${Math.max(0, Math.min(1, progress)) * 100}%`,
            height: '100%',
            background: 'rgba(255,255,255,0.55)',
            boxShadow: '0 0 8px rgba(255,255,255,0.4)',
            transition: 'width 320ms linear',
          }} />
        </div>
      </div>

      {duration && (
        <span style={{
          fontFamily: "'Inter', system-ui, sans-serif",
          fontWeight: 300,
          fontSize: '0.78rem',
          letterSpacing: '0.08em',
          color: 'var(--bone-300, #9a9a9a)',
          fontVariantNumeric: 'tabular-nums',
        }}>{duration}</span>
      )}
    </div>
  );
}
