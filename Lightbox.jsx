// Static fallback products carry bare filenames; live Supabase products carry full storage URLs.
function photoSrc(name) {
  return /^https?:\/\//.test(name) ? name : (window.SITE_BASE || '') + 'assets/photography/' + name;
}

function Lightbox({ product, index, onClose, onPrev, onNext, t }) {
  const { Icon } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const copy = t || window.COPY[window.SITE_LANG || 'fr'];
  const [fade, setFade] = React.useState(false);
  React.useEffect(() => {
    setFade(true);
    const id = setTimeout(() => setFade(false), 40);
    return () => clearTimeout(id);
  }, [index, product]);
  React.useEffect(() => {
    if (!product) return;
    const onKey = e => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [product, onClose, onPrev, onNext]);
  // Preload the neighbouring gallery images so next/prev feels instant.
  React.useEffect(() => {
    if (!product) return;
    const n = product.gallery.length;
    [(index + 1) % n, (index - 1 + n) % n].forEach(i => {
      const im = new Image();
      im.src = photoSrc(product.gallery[i]);
    });
  }, [product, index]);
  if (!product) return null;
  const src = photoSrc(product.gallery[index]);
  return (
    <div onClick={onClose} style={{
      position: 'fixed', inset: 0, background: 'oklch(from var(--canopy) l c h / 0.94)', backdropFilter: 'blur(14px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000, flexDirection: 'column', gap: 16,
    }}>
      <button onClick={onClose} aria-label={copy.lightboxClose} style={{ position: 'absolute', top: 24, right: 24, width: 44, height: 44, borderRadius: '50%', background: 'oklch(from var(--ivory) l c h / 0.1)', border: '1px solid var(--border-on-dark)', color: '#fff', cursor: 'pointer' }}>
        <Icon name="x" size={20} />
      </button>
      <div onClick={e => e.stopPropagation()} className="lightbox-row" style={{ position: 'relative', display: 'flex', alignItems: 'center', gap: 16 }}>
        <button onClick={onPrev} aria-label={copy.lightboxPrev} style={{ flex: '0 0 auto', width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border-on-dark)', background: 'oklch(from var(--canopy) l c h / 0.6)', color: '#fff', cursor: 'pointer' }}>
          <Icon name="chevron-left" size={22} />
        </button>
        <div className="lightbox-stage" style={{ flex: '0 0 auto', width: 'min(70vw, 880px)', height: 'min(68vh, 620px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <img src={src} alt={product.name} style={{ maxWidth: '100%', maxHeight: '100%', borderRadius: 'var(--radius-lg)', boxShadow: 'var(--shadow-lg)', objectFit: 'contain', opacity: fade ? 0 : 1, transition: 'opacity 220ms var(--ease-out)' }} />
        </div>
        <button onClick={onNext} aria-label={copy.lightboxNext} style={{ flex: '0 0 auto', width: 48, height: 48, borderRadius: '50%', border: '1px solid var(--border-on-dark)', background: 'oklch(from var(--canopy) l c h / 0.6)', color: '#fff', cursor: 'pointer' }}>
          <Icon name="chevron-right" size={22} />
        </button>
      </div>
      <div style={{ color: 'var(--text-on-dark-muted)', fontFamily: 'var(--font-mono)', fontSize: 13 }}>{index + 1} / {product.gallery.length} — {product.name}</div>
    </div>
  );
}
window.Lightbox = Lightbox;
