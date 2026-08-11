function Reveal({ children, delay = 0, from = 'up', className }) {
  const ref = React.useRef(null);
  const [visible, setVisible] = React.useState(false);
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => { if (e.isIntersecting) { setVisible(true); io.unobserve(e.target); } });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const offsets = { up: 'translateY(36px)', left: 'translateX(-40px)', right: 'translateX(40px)', zoom: 'scale(0.94)' };
  return (
    <div ref={ref} className={className} style={{
      opacity: visible ? 1 : 0,
      transform: visible ? 'none' : offsets[from],
      transition: `opacity 800ms var(--ease-out) ${delay}ms, transform 800ms var(--ease-out) ${delay}ms`,
      willChange: 'opacity, transform',
    }}>{children}</div>
  );
}

function CountUp({ value }) {
  const ref = React.useRef(null);
  const [shown, setShown] = React.useState('0');
  React.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const num = parseInt(String(value).replace(/[^0-9]/g, ''), 10);
    const suffix = String(value).replace(/[0-9]/g, '');
    const io = new IntersectionObserver(entries => {
      entries.forEach(e => {
        if (!e.isIntersecting) return;
        io.unobserve(e.target);
        const start = performance.now();
        const tick = now => {
          const p = Math.min((now - start) / 1300, 1);
          const eased = 1 - Math.pow(1 - p, 3);
          setShown(Math.round(eased * num) + suffix);
          if (p < 1) requestAnimationFrame(tick);
        };
        requestAnimationFrame(tick);
      });
    }, { threshold: 0.5 });
    io.observe(el);
    return () => io.disconnect();
  }, [value]);
  return <span ref={ref}>{shown}</span>;
}

window.Reveal = Reveal;
window.CountUp = CountUp;
