function App() {
  const { Nav } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + 'assets/';
  const [gallery, setGallery] = React.useState({ product: null, index: 0 });
  const t = window.COPY[lang];
  const [products, setProducts] = React.useState(window.PRODUCTS[lang]);

  React.useEffect(() => {
    let cancelled = false;
    if (window.fetchLiveProducts) {
      window.fetchLiveProducts(lang).then(live => {
        if (!cancelled && live && live.length) setProducts(live);
      });
    }
    return () => { cancelled = true; };
  }, [lang]);

  React.useEffect(() => { window.trackVisit && window.trackVisit(); }, []);

  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'];
  const links = t.nav.slice(0, -1).map((label, i) => ({ label, href: '#' + anchors[i] }));
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const otherHref = lang === 'fr' ? 'en/index.html' : '../index.html';

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <Nav logo={assets + 'logo.svg'} links={links} cta={t.navCta} lang={otherLang} onLangToggle={() => { window.location.href = otherHref; }} />
      <div id="accueil"><window.Hero t={t} /></div>
      <div id="presentation"><window.Presentation t={t} /></div>
      <window.ProductsSection t={t} products={products} onOpenGallery={p => setGallery({ product: p, index: 0 })} />
      <div id="certifications"><window.CertificationsSection t={t} /></div>
      <div id="process"><window.ProcessSection t={t} /></div>
      <div id="faq"><window.FaqSection t={t} /></div>
      <window.ContactSection t={t} />
      <window.Footer t={t} />
      <window.WhatsAppFloat />
      <window.Lightbox
        product={gallery.product}
        index={gallery.index}
        onClose={() => setGallery({ product: null, index: 0 })}
        onPrev={() => setGallery(g => ({ ...g, index: (g.index - 1 + g.product.gallery.length) % g.product.gallery.length }))}
        onNext={() => setGallery(g => ({ ...g, index: (g.index + 1) % g.product.gallery.length }))}
      />
    </div>
  );
}

// The compiled design-system bundle also contains this file; without the guard it would paint
// the landing page for a split second on legal pages before their own render replaces it.
// `__ds_ns` only exists inside the compiled design-system bundle, which also contains this file.
// Rendering from there too would mount the app twice (visible flicker, replayed reveal animations)
// and would paint the landing page for a split second on legal pages.
if (typeof __ds_ns === 'undefined' && (window.SITE_PAGE || 'home') === 'home') {
  window.__root = window.__root || ReactDOM.createRoot(document.getElementById('root'));
  window.__root.render(<App />);
}
