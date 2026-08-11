function FaqSection({ t }) {
  const { FaqAccordion } = window.ComptoirTropicalSOSAFCIDesignSystem_8722e7;
  const { Reveal } = window;
  return (
    <section style={{ background: 'var(--surface-dark)', color: 'var(--text-on-dark)', padding: '96px 48px' }}>
      <div style={{ maxWidth: 760, margin: '0 auto' }}>
        <Reveal>
        <div style={{ textAlign: 'center', marginBottom: 40 }}>
          <span style={{ fontFamily: 'var(--font-mono)', fontSize: 12, textTransform: 'uppercase', letterSpacing: 'var(--tracking-wider)', color: 'var(--mango)', fontWeight: 600 }}>{t.faqEyebrow}</span>
          <h2 style={{ fontFamily: 'var(--font-display)', fontSize: 'var(--text-3xl)', fontWeight: 500, margin: '10px 0 0' }}>{t.faqTitle}</h2>
        </div>
        </Reveal>
        <Reveal delay={120}>
          <FaqAccordion items={t.faq.map(([q, a]) => ({ q, a }))} />
        </Reveal>
      </div>
    </section>
  );
}
window.FaqSection = FaqSection;
