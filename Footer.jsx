function FooterLink({ label, href = '#', small }) {
  const [hover, setHover] = React.useState(false);
  return (
    <a href={href} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)} style={{
      color: hover ? 'var(--mango)' : 'var(--text-on-dark-muted)', fontSize: small ? 12 : 13, textDecoration: 'none',
      transition: 'color var(--motion-fast) var(--ease-standard)', padding: '6px 2px', display: 'inline-block',
    }}>{label}</a>
  );
}

// `base` prefixes the legal pages, which sit next to the homepage; `home` prefixes the
// homepage anchors. They differ on product pages, which live one directory down: the legal
// docs need '../' while the anchors need '../index.html'. On the homepage `home` stays ''
// so the links are bare fragments — a full navigation back to index.html would reload the
// page and land on the hero, since the anchor target is only rendered after React runs.
function Footer({ t, base = '', home = '' }) {
  const anchors = ['accueil', 'presentation', 'produits', 'certifications', 'process', 'faq', 'contact'];
  return (
    <footer style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark-muted)', padding: '40px clamp(16px,5vw,24px)', textAlign: 'center', borderTop: '1px solid var(--border-on-dark)' }}>
      <img src={(window.SITE_BASE || '') + 'assets/logo.svg'} alt="SOSAF-CI" style={{ height: 40, opacity: 0.7, marginBottom: 16, transition: 'opacity var(--motion-base) var(--ease-standard)' }} onMouseEnter={e => { e.currentTarget.style.opacity = 1; }} onMouseLeave={e => { e.currentTarget.style.opacity = 0.7; }} />
      <nav style={{ display: 'flex', justifyContent: 'center', gap: 20, flexWrap: 'wrap', marginBottom: 8 }}>
        {t.nav.map((item, i) => <FooterLink key={item} label={item} href={home + '#' + anchors[i]} />)}
      </nav>
      <nav style={{ display: 'flex', justifyContent: 'center', gap: 18, flexWrap: 'wrap', marginBottom: 16, paddingTop: 12, borderTop: '1px solid var(--border-on-dark)', maxWidth: 620, marginLeft: 'auto', marginRight: 'auto' }}>
        {(t.legal || []).map(([label, href]) => <FooterLink key={href} small label={label} href={base + href} />)}
      </nav>
      <p style={{ fontSize: 12, margin: 0 }}>{t.footerNote}</p>
      <p style={{ fontFamily: 'var(--font-mono)', fontSize: 11, letterSpacing: 'var(--tracking-wide)', margin: '8px 0 0', opacity: 0.7 }}>{t.footerLegal}</p>
    </footer>
  );
}
window.Footer = Footer;
