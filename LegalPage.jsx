function LegalPage({ docKey }) {
  const { Nav } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const lang = window.SITE_LANG || 'fr';
  const base = window.SITE_BASE || '';
  const assets = base + 'assets/';
  const L = window.LEGAL[lang];
  const doc = L.docs[docKey];
  const t = window.COPY[lang];
  const home = 'index.html';
  const otherLang = lang === 'fr' ? 'EN' : 'FR';
  const links = t.nav.slice(0, -1).map((label, i) => ({ label, href: home + '#' + ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq'][i] }));
  const body = { fontSize: 16, lineHeight: 'var(--leading-body)', color: 'var(--text-on-light-muted)', margin: '0 0 14px' };

  return (
    <div style={{ fontFamily: 'var(--font-body)', background: 'var(--surface-light)', color: 'var(--text-on-light)', minHeight: '100vh' }}>
      <Nav logo={assets + 'logo.svg'} links={links} cta={t.navCta} lang={otherLang} homeHref={home} onLangToggle={() => { window.location.href = lang === 'fr' ? 'en/' + window.LEGAL.en.docs[docKey].slug + '.html' : '../' + window.LEGAL.fr.docs[docKey].slug + '.html'; }} />
      <header style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '72px clamp(16px,5vw,48px) 56px' }}>
        <div style={{ maxWidth: 1100, margin: '0 auto' }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--mango)', fontWeight: 600 }}>{doc.eyebrow}</span>
          <h1 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(32px,6vw,52px)', lineHeight: 'var(--leading-tight)', fontWeight: 500, letterSpacing: 'var(--tracking-tight)', margin: '12px 0 10px' }}>{doc.title}</h1>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--text-on-dark-muted)', margin: 0 }}>{doc.updated}</p>
        </div>
      </header>

      <div className="legal-grid" style={{ display: 'grid', gridTemplateColumns: '220px 1fr', gap: 56, maxWidth: 1100, margin: '0 auto', padding: 'clamp(40px,6vw,72px) clamp(16px,5vw,48px) 96px', alignItems: 'start' }}>
        <nav className="legal-side" style={{ position: 'sticky', top: 90, display: 'flex', flexDirection: 'column', gap: 2 }}>
          {L.nav.map(item => {
            const active = item.key === docKey;
            return (
              <a key={item.key} href={item.href} style={{
                fontSize: 14, fontWeight: active ? 600 : 500, textDecoration: 'none',
                color: active ? 'var(--text-on-light)' : 'var(--text-on-light-muted)',
                padding: '10px 14px', borderRadius: 'var(--radius-md)', minHeight: 44, display: 'flex', alignItems: 'center',
                background: active ? 'var(--surface-card)' : 'transparent',
                border: active ? '1px solid var(--border-on-light)' : '1px solid transparent',
              }}>{item.label}</a>
            );
          })}
          <a href={home} style={{ fontSize: 13, color: 'var(--papaya)', textDecoration: 'none', padding: '10px 14px', marginTop: 8, minHeight: 44, display: 'flex', alignItems: 'center' }}>{L.back}</a>
        </nav>

        <article style={{ maxWidth: 720 }}>
          <p style={{ ...body, fontSize: 'var(--text-lg)', color: 'var(--text-on-light)', marginBottom: 40 }}>{doc.intro}</p>
          {doc.sections.map(s => (
            <div key={s.h} style={{ marginBottom: 40 }}>
              <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'clamp(20px,3.5vw,26px)', fontWeight: 500, margin: '0 0 14px' }}>{s.h}</h2>
              {(s.p || []).map((p, i) => <p key={i} style={body}>{p}</p>)}
              {s.dl && (
                <dl style={{ display: 'grid', gridTemplateColumns: 'minmax(150px,220px) 1fr', gap: '0', margin: '18px 0 0', border: '1px solid var(--border-on-light)', borderRadius: 'var(--radius-lg)', overflow: 'hidden', background: 'var(--surface-card)' }} className="legal-dl">
                  {s.dl.map(([k, v], i) => (
                    <React.Fragment key={k}>
                      <dt style={{ fontFamily: 'var(--font-mono)', fontSize: 11, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wide)', color: 'var(--palm)', fontWeight: 600, padding: '14px 16px', borderTop: i ? '1px solid var(--border-on-light)' : 'none' }}>{k}</dt>
                      <dd style={{ fontSize: 15, color: 'var(--text-on-light)', margin: 0, padding: '14px 16px', borderTop: i ? '1px solid var(--border-on-light)' : 'none' }}>{v}</dd>
                    </React.Fragment>
                  ))}
                </dl>
              )}
              {s.ul && (
                <ul style={{ margin: '12px 0 0', paddingLeft: 20, display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {s.ul.map(li => <li key={li} style={{ fontSize: 16, lineHeight: 'var(--leading-body)', color: 'var(--text-on-light-muted)' }}>{li}</li>)}
                </ul>
              )}
            </div>
          ))}
        </article>
      </div>

      <window.Footer t={t} />
      <window.WhatsAppFloat />
    </div>
  );
}
window.LegalPage = LegalPage;
