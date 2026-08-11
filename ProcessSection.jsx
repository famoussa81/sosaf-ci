const PROCESS_ICONS = ['mail', 'file-text', 'check-circle-2', 'ship'];

function ProcessSection({ t }) {
  const { Icon } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const { Reveal } = window;
  return (
    <section style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '96px 48px' }}>
      <div style={{ maxWidth: 1100, margin: '0 auto' }}>
        <div style={{ textAlign: 'center', marginBottom: 56 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--mango)', fontWeight: 600 }}>{t.processEyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, margin: '10px 0 0' }}>{t.processTitle}</h2>
        </div>
        <div className="process-row" style={{ display: 'flex', gap: 0, alignItems: 'flex-start', justifyContent: 'center', flexWrap: 'wrap' }}>
          {t.steps.map(([num, title, desc], i) => (
            <React.Fragment key={num}>
              <Reveal delay={i * 110} from="up">
              <div style={{ flex: '1 1 220px', maxWidth: 240, textAlign: 'center', padding: '0 12px' }}>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: 13, letterSpacing: '0.1em', color: 'var(--mango)', marginBottom: 12 }}>{num}</div>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'oklch(from var(--mango) l c h / 0.1)', border: '1px solid oklch(from var(--mango) l c h / 0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', color: 'var(--mango)' }}>
                  <Icon name={PROCESS_ICONS[i]} size={26} />
                </div>
                <h4 style={{ fontFamily: 'var(--font-display)', fontWeight: 500, fontSize: 18, margin: '0 0 8px' }}>{title}</h4>
                <p style={{ fontSize: 14, color: 'var(--text-on-dark-muted)', lineHeight: 1.6, margin: 0 }}>{desc}</p>
              </div>
              </Reveal>
              {i < t.steps.length - 1 && <div className="process-connector" style={{ width: 40, height: 2, background: 'var(--border-on-dark)', marginTop: 42, flexShrink: 0 }} />}
            </React.Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}
window.ProcessSection = ProcessSection;
