// Anneora website — Footer. Wordmark, social icon row (Lucide), mailing-list
// capsule, and a faint copyright. Social glyphs use Lucide via IconButton.
const { IconButton, Input } = window.AnneoraDesignSystem_7f3db2;

// Minimal inline Lucide-style paths (stroke, 1.5) — Spotify-ish / IG / mail / yt
function Glyph({ d, viewBox = '0 0 24 24', fill = false }) {
  return (
    <svg width="18" height="18" viewBox={viewBox} fill={fill ? 'currentColor' : 'none'}
      stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round">
      {d}
    </svg>
  );
}

function Footer() {
  const [email, setEmail] = React.useState('');
  const [toast, setToast] = React.useState('');
  const toastTimer = React.useRef(null);

  React.useEffect(() => () => window.clearTimeout(toastTimer.current), []);

  const showToast = (message) => {
    setToast(message);
    window.clearTimeout(toastTimer.current);
    toastTimer.current = window.setTimeout(() => setToast(''), 2800);
  };

  const openExternal = (url) => window.open(url, '_blank', 'noopener,noreferrer');
  const validEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
  const gmailComposeUrl = 'https://mail.google.com/mail/?view=cm&fs=1&to=anneora2504%40gmail.com';

  return (
    <footer id="contact" style={{
      borderTop: '1px solid var(--veil-08)',
      padding: '54px 24px 40px',
      textAlign: 'center',
    }}>
      <div style={{
        fontFamily: "'Cinzel', serif", fontWeight: 500, fontSize: '1.1rem',
        letterSpacing: '0.28em', color: 'var(--bone-50)', textShadow: '0 0 20px rgba(255,255,255,0.15)',
      }}>ANNEORA</div>

      <div style={{ display: 'flex', justifyContent: 'center', gap: 14, margin: '28px 0' }}>
        <IconButton label="Instagram" size="md" onClick={() => openExternal('https://www.instagram.com/anne_ora_/')}><Glyph d={<><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="0.6" fill="currentColor"/></>} /></IconButton>
        <IconButton label="Spotify" size="md" onClick={() => openExternal('https://open.spotify.com/artist/2Ny3eT14SfY0h8owBDWgGQ')}><Glyph d={<><circle cx="12" cy="12" r="9"/><path d="M7 9.5c3-1 6-0.8 9 0.8M7.5 12.6c2.4-0.8 4.8-0.6 7 0.7M8 15.4c1.9-0.6 3.7-0.4 5.4 0.5"/></>} /></IconButton>
        <IconButton label="YouTube" size="md" onClick={() => openExternal('https://www.youtube.com/@anne_ora')}><Glyph d={<><rect x="3" y="6" width="18" height="12" rx="3"/><path d="M11 9.5l4 2.5-4 2.5z" fill="currentColor" stroke="none"/></>} /></IconButton>
      </div>

      <div style={{ maxWidth: 420, margin: '0 auto 30px' }}>
        <div style={{
          marginBottom: 8, fontSize: '0.7rem', letterSpacing: '0.18em', textTransform: 'uppercase',
          color: 'var(--bone-400, #6b6b6b)', textAlign: 'center',
        }}>Reach out to Anneora</div>
        <div style={{ position: 'relative' }}>
          <Input
            variant="capsule"
            type="email"
            placeholder="enter your mail"
            aria-label="Reach out to Anneora"
            value={email}
            onChange={(event) => setEmail(event.target.value)}
            onKeyDown={(event) => { if (event.key === 'Enter' && validEmail) window.location.href = gmailComposeUrl; }}
            style={{ flex: 1 }}
          />
          <a
            href={validEmail ? gmailComposeUrl : undefined}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Send"
            aria-disabled={!validEmail}
            onClick={(event) => {
              if (!validEmail) event.preventDefault();
              else showToast('opening Gmail');
            }}
            style={{
              position: 'absolute', left: 'calc(100% + 10px)', top: '50%', transform: 'translateY(-50%)',
              width: 44, height: 44, borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              color: 'var(--bone-50, #f5f5f5)', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)', cursor: validEmail ? 'pointer' : 'not-allowed', opacity: validEmail ? 1 : 0.35,
              transition: 'all 320ms cubic-bezier(0.22,0.61,0.36,1)', textDecoration: 'none',
            }}
          >
            <Glyph d={<><path d="M21 3L10 14"/><path d="M21 3l-6.5 18-4.5-7-7-4.5z"/></>} />
          </a>
        </div>
      </div>

      {toast && (
        <div role="status" aria-live="polite" style={{
          position: 'fixed', left: '50%', bottom: 28, transform: 'translateX(-50%)', zIndex: 60,
          padding: '12px 18px', borderRadius: 999, background: 'rgba(18,18,18,0.82)',
          border: '1px solid rgba(255,255,255,0.14)', backdropFilter: 'blur(16px)',
          boxShadow: '0 0 24px rgba(255,255,255,0.08)', color: 'var(--bone-100)',
          fontSize: '0.72rem', letterSpacing: '0.15em', textTransform: 'uppercase',
        }}>{toast}</div>
      )}

      <div style={{ fontSize: '0.65rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>
        © 2025 Anneora
      </div>
    </footer>
  );
}

window.Footer = Footer;
