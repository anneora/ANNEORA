// Anneora — DropImage. A self-persisting image drop target (localStorage,
// works from any folder). Drag an image on, or click to browse. Calls
// onImage(dataURL) whenever the image changes (incl. on restore).
function DropImage({ id, placeholder = 'Drop image', caption, fit = 'cover', onImage, style = {} }) {
  const KEY = 'anneora:img:' + id;
  const [src, setSrc] = React.useState(null);
  const [over, setOver] = React.useState(false);
  const inputRef = React.useRef(null);

  React.useEffect(() => {
    try {
      const saved = localStorage.getItem(KEY);
      if (saved) { setSrc(saved); onImage && onImage(saved); }
    } catch (e) {}
  }, []);

  const load = (file) => {
    if (!file || !file.type.startsWith('image/')) return;
    const reader = new FileReader();
    reader.onload = () => {
      const data = reader.result;
      setSrc(data);
      try { localStorage.setItem(KEY, data); } catch (e) {}
      onImage && onImage(data);
    };
    reader.readAsDataURL(file);
  };

  return (
    <div
      onDragOver={(e) => { e.preventDefault(); setOver(true); }}
      onDragLeave={() => setOver(false)}
      onDrop={(e) => { e.preventDefault(); setOver(false); load(e.dataTransfer.files[0]); }}
      onClick={() => inputRef.current && inputRef.current.click()}
      style={{
        position: 'relative',
        cursor: 'pointer',
        overflow: 'hidden',
        borderRadius: 10,
        background: 'var(--veil-02, rgba(255,255,255,0.02))',
        border: `1px solid ${over ? 'rgba(255,255,255,0.4)' : 'var(--veil-08, rgba(255,255,255,0.08))'}`,
        backdropFilter: 'blur(10px)',
        transition: 'border-color 320ms, box-shadow 320ms',
        boxShadow: over ? '0 0 22px rgba(255,255,255,0.12)' : 'none',
        ...style,
      }}
    >
      <input ref={inputRef} type="file" accept="image/*" style={{ display: 'none' }}
        onChange={(e) => load(e.target.files[0])} />

      {src ? (
        <img src={src} alt="" style={{ width: '100%', height: '100%', objectFit: fit, display: 'block', filter: 'grayscale(0.25) contrast(1.05) brightness(0.92)' }} />
      ) : (
        <div style={{
          width: '100%', height: '100%', display: 'flex', flexDirection: 'column',
          alignItems: 'center', justifyContent: 'center', gap: 8, textAlign: 'center', padding: 16,
        }}>
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">
            <rect x="3" y="3" width="18" height="18" rx="3" /><path d="M3 16l5-5 4 4 3-3 6 6" /><circle cx="9" cy="9" r="1.5" />
          </svg>
          <span style={{ fontSize: '0.62rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--bone-400, #6b6b6b)' }}>{placeholder}</span>
        </div>
      )}

      {caption && (
        <div style={{
          position: 'absolute', left: 0, right: 0, bottom: 0,
          padding: '14px 14px 12px',
          background: 'linear-gradient(transparent, rgba(0,0,0,0.7))',
          fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase',
          color: 'var(--bone-200, #c8c8c8)', pointerEvents: 'none',
        }}>{caption}</div>
      )}
    </div>
  );
}

window.DropImage = DropImage;
