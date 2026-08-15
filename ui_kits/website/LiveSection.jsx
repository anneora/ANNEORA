// Anneora website — Live / shows. A sparse list of tour dates as glass rows,
// each with city, venue, date, and a ghost "RSVP" action.
const { Button, SectionLabel } = window;

const SHOWS = [
  { date: 'Jul 12', city: 'London',    venue: 'St Pancras Old Church', status: 'rsvp' },
  { date: 'Aug 03', city: 'Berlin',    venue: 'Funkhaus · Saal 3',      status: 'rsvp' },
  { date: 'Sep 19', city: 'Reykjavík', venue: 'Harpa · Norðurljós',     status: 'soldout' },
];

function LiveSection() {
  return (
    <section id="live" style={{ padding: '70px 24px 100px', maxWidth: 700, margin: '0 auto' }}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 10, marginBottom: 44 }}>
        <span style={{ fontSize: '0.65rem', letterSpacing: '0.3em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>In the room</span>
        <window.SectionLabel>Live</window.SectionLabel>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        {SHOWS.map((s) => (
          <div key={s.city} style={{
            display: 'flex',
            alignItems: 'center',
            gap: 22,
            padding: '18px 22px',
            borderRadius: 10,
            background: 'var(--veil-02)',
            border: '1px solid var(--veil-08)',
            backdropFilter: 'blur(10px)',
          }}>
            <div style={{
              fontFamily: "'Cinzel', serif", fontWeight: 500, fontSize: '0.95rem',
              letterSpacing: '0.1em', color: 'var(--bone-50)', minWidth: 64,
            }}>{s.date}</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontWeight: 400, fontSize: '0.95rem', letterSpacing: '0.06em', color: 'var(--bone-100)' }}>{s.city}</div>
              <div style={{ marginTop: 4, fontSize: '0.72rem', letterSpacing: '0.12em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>{s.venue}</div>
            </div>
            {s.status === 'soldout'
              ? <span style={{ fontSize: '0.65rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bone-400)' }}>Sold out</span>
              : <window.AnneoraDesignSystem_7f3db2.Button size="sm" variant="ghost">RSVP</window.AnneoraDesignSystem_7f3db2.Button>}
          </div>
        ))}
      </div>
    </section>
  );
}

window.LiveSection = LiveSection;
