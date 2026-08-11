function productPhotoSrc(assets, name) {
  return /^https?:\/\//.test(name) ? name : assets + 'photography/' + name;
}

function ProductPage({ productId }) {
  const { Nav } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + 'assets/';
  const t = window.COPY[lang];
  const staticProduct = window.PRODUCTS[lang].find(p => p.id === productId);
  const [product, setProduct] = React.useState(staticProduct);

  React.useEffect(() => {
    let cancelled = false;
    if (window.fetchLiveProducts) {
      window.fetchLiveProducts(lang).then(live => {
        if (cancelled || !live) return;
        const match = live.find(p => p.slugId === productId);
        if (match) setProduct(match);
      });
    }
    return () => { cancelled = true; };
  }, [lang]);

  React.useEffect(() => { window.trackVisit && window.trackVisit(); }, []);
  React.useEffect(() => window.scrollToHash && window.scrollToHash(), []);

  // No Product JSON-LD here: Google requires at least one of offers/review/aggregateRating
  // for Product rich results, and pricing is quote-only (B2B, no public price) — faking a
  // price just to pass validation would be lying to search engines and users. The static
  // BreadcrumbList in each page's <head> already covers what's actually true and useful.

  // Both /produits/<slug>.html (1 level under root) and /en/products/<slug>.html (1 level
  // under /en/) sit exactly one directory below their own language's homepage, so the
  // relative path back up is identical for both: '../index.html'.
  const home = '../index.html';
  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'];
  const links = t.nav.slice(0, -1).map((label, i) => ({ label, href: home + '#' + anchors[i] }));
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const otherSlugs = window.PRODUCT_SLUGS[productId];
  const otherHref = lang === 'fr' ? '../en/products/' + otherSlugs.en + '.html' : '../../produits/' + otherSlugs.fr + '.html';

  if (!product) return null;

  return (
    <div style={{ fontFamily: 'var(--font-body)' }}>
      <Nav logo={assets + 'logo.svg'} links={links} cta={t.navCta} lang={otherLang} homeHref={home} onLangToggle={() => { window.location.href = otherHref; }} />
      <header style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '64px clamp(16px,5vw,48px) 48px' }}>
        <div style={{ maxWidth: 1000, margin: '0 auto' }}>
          <nav aria-label="Breadcrumb" style={{ fontSize: 13, color: 'var(--text-on-dark-muted)', marginBottom: 16 }}>
            <a href={home} style={{ color: 'inherit', textDecoration: 'none' }}>{lang === 'en' ? 'Home' : 'Accueil'}</a> / {product.name}
          </nav>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--mango)', fontWeight: 600 }}>{t.prodEyebrow}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,6vw,48px)', lineHeight: 'var(--leading-tight)', fontWeight: 500, letterSpacing: 'var(--tracking-tight)', margin: '10px 0 10px' }}>{product.name}</h1>
          <p style={{ fontSize: 'var(--text-lg)', color: 'var(--text-on-dark-muted)', maxWidth: 640, margin: 0 }}>{product.subtitle}</p>
        </div>
      </header>

      <div className="legal-grid" style={{ maxWidth: 1000, margin: '0 auto', padding: 'clamp(32px,6vw,56px) clamp(16px,5vw,48px) 80px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: 48, background: 'var(--surface-light)', color: 'var(--text-on-light)' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {product.gallery.map((g, i) => (
            <img key={i} src={productPhotoSrc(assets, g)} alt={product.name + ' — photo ' + (i + 1)} loading="lazy" decoding="async" style={{ width: '100%', aspectRatio: '4 / 5', objectFit: 'cover', borderRadius: 'var(--radius-lg)', border: '1px solid var(--border-on-light)' }} />
          ))}
        </div>
        <div>
          {product.certification && (
            <span style={{ display: 'inline-flex', alignItems: 'center', marginBottom: 24, padding: '8px 16px', borderRadius: 'var(--radius-pill)', background: 'var(--surface-card)', border: '1px solid var(--border-on-light)', fontSize: 13, fontWeight: 600, color: 'var(--palm)' }}>{product.certification}</span>
          )}
          <dl style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px 16px', margin: '0 0 32px' }}>
            {product.fields.map(f => (
              <div key={f.label}>
                <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--palm)', fontWeight: 600, margin: '0 0 4px' }}>{f.label}</dt>
                <dd style={{ margin: 0, fontSize: 16, color: 'var(--text-on-light)' }}>{f.value}</dd>
              </div>
            ))}
          </dl>
          <a href="#contact" style={{ display: 'inline-flex', alignItems: 'center', minHeight: 48, padding: '0 28px', borderRadius: 'var(--radius-pill)', background: 'var(--accent-primary)', color: 'var(--cocoa)', fontWeight: 600, textDecoration: 'none' }}>{t.navCta}</a>
        </div>
      </div>

      <window.ContactSection t={t} />
      <window.Footer t={t} base="../" home={home} />
      <window.WhatsAppFloat />
    </div>
  );
}
window.ProductPage = ProductPage;
