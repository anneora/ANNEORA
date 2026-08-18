// Anneora website — Music section. The real discography from Spotify, as a
// column of glass TrackRows with album art. Click art to play; click title
// to open on Spotify.
const { PlayButton } = window.AnneoraDesignSystem_7f3db2;

const ART = (hash) => `https://i.scdn.co/image/ab67616d00001e02${hash}`;

// Real releases — open.spotify.com/artist/2Ny3eT14SfY0h8owBDWgGQ
const TRACKS = [
  { title: 'Beyond The Veil', meta: 'Single · 2025', art: ART('7db50b00803ac494607c12da'), audio: '../../assets/audio/beyond-the-veil.mp3', previewStart: 49, previewEnd: 82, href: 'https://open.spotify.com/album/0uxp5yJowPAsKvc233in1E' },
  { title: 'Angel Wings',     meta: 'Single · 2025', art: ART('c97e74d5b6618f91b522087f'), audio: '../../assets/audio/angel-wings.mp3', previewStart: 0, previewEnd: 29, href: 'https://open.spotify.com/album/7y2o2KHNtYdTrpmdulMSBc' },
  { title: 'ECHOS',           meta: 'Single · 2025', art: ART('12b4519cf8c515414ef003f1'), audio: '../../assets/audio/echos.mp3', previewStart: 44, previewEnd: 59, href: 'https://open.spotify.com/album/4Jk7gWeZcedfLUjwMEPtff' },
  { title: 'SPENTTIMEALONE',  meta: 'Single · 2025', art: ART('a94c4b8130bdc2c316c8b5d7'), audio: '../../assets/audio/spenttimealone.mp3', previewStart: 13, previewEnd: 42, href: 'https://open.spotify.com/album/7KawqYHuInjqwzXuhnjp3H' },
  { title: 'NO NAME',         meta: 'Single · 2023', art: ART('711986a98fcc645f9b35d506'), audio: '../../assets/audio/no-name.mp3', previewStart: 21, previewEnd: 41, href: 'https://open.spotify.com/album/481EtNXt19MdtdqfPXvk8U' },
  { title: 'BLEED TO SURVIVE',meta: 'Single · 2023', art: '../../assets/bleed-to-survive.png', audio: '../../Songs/BLEED%20TO%20SURVIVE.mp3', href: 'https://open.spotify.com/album/4lSKlt8Bk1hZBjuMg2RjAh' },
];

function SectionLabel({ children }) {
  return (
    <h2 style={{
      margin: 0,
      fontFamily: "'Cinzel', serif",
      fontWeight: 500,
      fontSize: '1.6rem',
      letterSpacing: '0.18em',
      color: 'var(--bone-50)',
      textShadow: '0 0 22px rgba(255,255,255,0.12)',
    }}>{children}</h2>
  );
}
window.SectionLabel = SectionLabel;

function PlayerTrackRow({ title, meta, art, href, progress, playing, active, onToggle, onSeek }) {
  const [hover, setHover] = React.useState(false);
  const lit = active || hover;
  const seekFromPointer = (event) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const value = Math.min(1, Math.max(0, (event.clientX - rect.left) / rect.width));
    onSeek(value);
  };

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex', alignItems: 'center', gap: 18, padding: '14px 18px', borderRadius: 10,
        background: lit ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
        border: `1px solid ${lit ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.07)'}`,
        backdropFilter: 'blur(10px)', boxShadow: active ? 'inset 0 0 24px rgba(255,255,255,0.03)' : 'none',
        transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)',
      }}
    >
      <div style={{ position: 'relative', width: 48, height: 48, flexShrink: 0 }}>
        <img src={art} alt="" style={{
          width: 48, height: 48, borderRadius: 8, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.12)',
          filter: playing ? 'none' : 'grayscale(0.3) brightness(0.85)', transition: 'filter 320ms',
        }} />
        <div style={{ position: 'absolute', inset: 0, borderRadius: 8, background: lit ? 'rgba(0,0,0,0.45)' : 'rgba(0,0,0,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <PlayButton playing={playing} size={34} onToggle={onToggle} />
        </div>
      </div>

      <div style={{ flex: 1, minWidth: 0 }}>
        <a href={href} target="_blank" rel="noreferrer" style={{
          display: 'inline-block', textDecoration: 'none', fontFamily: "'Inter', system-ui, sans-serif", fontWeight: 400,
          fontSize: '0.95rem', letterSpacing: '0.06em', color: active ? 'var(--bone-50, #f5f5f5)' : 'var(--bone-100, #e5e5e5)',
        }}>{title}</a>
        <div style={{ marginTop: 5, fontSize: '0.7rem', letterSpacing: '0.14em', textTransform: 'uppercase', color: 'var(--bone-400, #6b6b6b)' }}>{meta}</div>
        <input
          type="range"
          aria-label={`Seek ${title}`}
          min="0"
          max="1"
          step="0.001"
          value={progress}
          disabled={!active}
          onChange={(event) => onSeek(Number(event.target.value))}
          onInput={(event) => onSeek(Number(event.currentTarget.value))}
          onPointerDown={seekFromPointer}
          onPointerMove={(event) => { if (event.buttons === 1) seekFromPointer(event); }}
          style={{ width: '100%', display: 'block', marginTop: 10, accentColor: '#e5e5e5', cursor: active ? 'pointer' : 'default', opacity: active ? 1 : 0.45 }}
        />
      </div>
    </div>
  );
}

function MusicSection({ playing, selected, progress, onToggle, onSeek }) {
  return (
    <section id="music" style={{ padding: '90px 24px', maxWidth: 700, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 44 }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>Discography · Spotify</span>
        <SectionLabel>Music</SectionLabel>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {TRACKS.map((t) => (
          <PlayerTrackRow
            key={t.title}
            title={t.title}
            meta={t.meta}
            art={t.art}
            href={t.href}
            progress={selected === t.title ? progress : 0}
            playing={playing === t.title}
            active={selected === t.title}
            onToggle={() => onToggle(t)}
            onSeek={(value) => onSeek(t, value)}
          />
        ))}
      </div>
    </section>
  );
}

window.MusicSection = MusicSection;
window.TRACKS = TRACKS;
