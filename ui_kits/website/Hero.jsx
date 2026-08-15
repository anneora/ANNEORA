// Anneora website — Hero. Full-bleed void with the wordmark breathing in
// the center, a one-line tagline, and a single glow CTA. Grain overlays all.
const { Button } = window.AnneoraDesignSystem_7f3db2;

function Hero({ onListen }) {
  return (
    <section style={{
      minHeight: '92vh',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: '0 24px',
      position: 'relative',
    }}>
      <div style={{
        fontFamily: "'Inter', sans-serif",
        fontWeight: 400,
        fontSize: '0.7rem',
        letterSpacing: '0.32em',
        textTransform: 'uppercase',
        color: 'var(--bone-400)',
        marginBottom: '34px',
      }}>Singer · Songwriter</div>

      <h1 style={{
        margin: 0,
        fontFamily: "'Cinzel', serif",
        fontWeight: 500,
        fontSize: 'clamp(3rem, 11vw, 6.5rem)',
        letterSpacing: '0.26em',
        color: 'var(--bone-50)',
        textShadow: '0 0 30px rgba(255,255,255,0.22)',
        textIndent: '0.26em',
      }}>ANNEORA</h1>

      <p style={{
        marginTop: '20px',
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
        fontSize: '1rem',
        letterSpacing: '0.22em',
        color: 'var(--bone-300)',
        opacity: 0.85,
      }}>voice from the void</p>

      <div style={{ marginTop: '46px' }}>
        <Button variant="glow" size="lg" onClick={onListen}>Listen</Button>
      </div>

      <div style={{
        position: 'absolute',
        bottom: '34px',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '0.65rem',
        letterSpacing: '0.3em',
        textTransform: 'uppercase',
        color: 'var(--bone-400)',
        opacity: 0.6,
      }}>scroll ↓</div>
    </section>
  );
}

window.Hero = Hero;
