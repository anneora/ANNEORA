// Anneora website — About section. Quiet centered prose, low contrast,
// flanked by hairline dividers. A glass portrait placeholder sits above.
const { Badge } = window.AnneoraDesignSystem_7f3db2;

const BIO_PARAGRAPHS = [
  'Anneora is a 19-year-old singer, songwriter, and artist who creates art that portrays a longing for cosmic love and a constant metamorphosis as a being. Her art usually plays around these themes, channeling different perspectives from different consciousness.',
  'Anneora, though having an everlasting love for music, only started pursuing this path around 2020. She’s been an artist on Spotify since 2023.',
  'Anneora claims that music is the language of her soul. She finds music and art in every stage of life, and all that the world has to offer — like the little chimes of a wind chime, the songs of the river as it flows, the way the wind moves so carefreely through the leaves, the beauty of the gloom — in nature and life & death.',
  'Anneora believes that the relationship between the art and the artist is a never-ending cycle — from birth to decay. She also believes that when an artist creates art, the art also creates the artist: it shapes them for better or for worse. The art is the reflection of the artist and, in doing so, the artist becomes their art. You create it, and it creates you. It changes you as you birth it.',
  'She believes that the relationship between the artist and the art is an intimate and vulnerable one. To create true, authentic art, you need to be honest with yourself. An artist can only create art by going deep within themselves and surfacing all that has been dormant — not just within themselves, but within the collective.',
  'And that is where her art takes you.',
];

function Divider() {
  return <div style={{ width: 1, height: 60, background: 'linear-gradient(var(--veil-12), transparent)', margin: '0 auto' }} />;
}

function AboutSection() {
  const [isStoryOpen, setIsStoryOpen] = React.useState(false);

  return (
    <section id="about" style={{ padding: '90px 24px 70px', maxWidth: 680, margin: '0 auto', textAlign: 'center' }}>
      <Divider />
      <div style={{ display: 'flex', justifyContent: 'center', margin: '40px 0 26px' }}>
        <div className="about-vinyl" tabIndex="0" aria-label="Anneora portrait — hover to spin the vinyl record">
          <div className="about-vinyl__record">
            <img src="https://i.scdn.co/image/ab6761610000e5eb67568745a8d4d5348827036d" alt="Anneora" />
          </div>
        </div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '30px' }}>
        <Badge variant="outline">The artist</Badge>
      </div>

      <p style={{
        margin: 0,
        fontFamily: "'Inter', sans-serif",
        fontWeight: 300,
        fontSize: 'clamp(1rem, 2vw, 1.12rem)',
        lineHeight: 1.8,
        letterSpacing: '0.02em',
        color: 'var(--bone-100)',
        textWrap: 'pretty',
      }}>
        Anneora is a singer, songwriter, and artist drawn to cosmic love, metamorphosis, and the shifting consciousness within art. Her work turns inward, finding music in nature, life, and all that changes us.
      </p>

      <button
        type="button"
        onClick={() => setIsStoryOpen(open => !open)}
        aria-expanded={isStoryOpen}
        aria-controls="anneora-story"
        style={{
          marginTop: 28,
          padding: '12px 22px',
          borderRadius: 999,
          border: '1px solid rgba(255,255,255,0.18)',
          background: 'rgba(255,255,255,0.055)',
          color: 'var(--bone-50)',
          fontFamily: "'Inter', sans-serif",
          fontSize: '0.7rem',
          fontWeight: 400,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          cursor: 'pointer',
          backdropFilter: 'blur(12px)',
          boxShadow: '0 0 24px rgba(255,255,255,0.05)',
          transition: 'transform 220ms ease, border-color 220ms ease, background 220ms ease, box-shadow 220ms ease',
        }}
      >
        {isStoryOpen ? 'Close' : 'Read more'}
      </button>

      <div style={{
        maxHeight: isStoryOpen ? 650 : 0,
        opacity: isStoryOpen ? 1 : 0,
        transform: isStoryOpen ? 'translateY(0)' : 'translateY(12px)',
        overflow: 'hidden',
        transition: 'max-height 520ms cubic-bezier(0.16,1,0.3,1), opacity 420ms ease, transform 520ms cubic-bezier(0.16,1,0.3,1)',
      }}>
        <div id="anneora-story" style={{ position: 'relative', marginTop: 28 }}>
          <div style={{
            maxHeight: '56vh',
            overflowY: 'auto',
            padding: '30px 28px 88px',
            borderRadius: 12,
            border: '1px solid rgba(255,255,255,0.1)',
            background: 'rgba(8,8,8,0.28)',
            backdropFilter: 'blur(18px)',
            boxShadow: '0 0 36px rgba(0,0,0,0.18), inset 0 1px rgba(255,255,255,0.06)',
            scrollbarWidth: 'thin',
            scrollbarColor: 'rgba(255,255,255,0.28) transparent',
          }}>
            <div style={{ display: 'grid', gap: 28, textAlign: 'left' }}>
              {BIO_PARAGRAPHS.slice(0, 5).map(paragraph => (
                <p key={paragraph} style={{
                  margin: 0,
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '0.98rem',
                  fontWeight: 300,
                  lineHeight: 1.8,
                  letterSpacing: '0.015em',
                  color: 'var(--bone-100)',
                  textWrap: 'pretty',
                }}>{paragraph}</p>
              ))}
              <p style={{
                margin: 0,
                fontFamily: "'Inter', sans-serif",
                fontSize: '1.05rem',
                fontWeight: 400,
                lineHeight: 1.7,
                color: 'var(--bone-50)',
                textAlign: 'center',
              }}>{BIO_PARAGRAPHS[5]}</p>
            </div>
          </div>
          <div aria-hidden="true" style={{
            position: 'absolute',
            left: 1,
            right: 1,
            bottom: 1,
            height: 92,
            borderRadius: '0 0 12px 12px',
            background: 'linear-gradient(transparent, rgba(8,8,8,0.74))',
            pointerEvents: 'none',
          }} />
        </div>
      </div>

      <div style={{ marginTop: 44 }}><Divider /></div>
    </section>
  );
}

window.AboutSection = AboutSection;
