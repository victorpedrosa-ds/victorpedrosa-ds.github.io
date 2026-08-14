document.addEventListener('DOMContentLoaded', async () => {
  const container = document.getElementById('hero-particles');
  if (!container || typeof loadSlim !== 'function' || typeof tsParticles === 'undefined') {
    return;
  }

  await loadSlim(tsParticles);

  const accent = getComputedStyle(document.documentElement)
    .getPropertyValue('--color-accent')
    .trim() || '#38bdf8';

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  await tsParticles.load({
    id: 'hero-particles',
    options: {
      fullScreen: { enable: false },
      background: { color: { value: 'transparent' } },
      fpsLimit: 60,
      detectRetina: true,
      particles: {
        number: {
          value: 60,
          density: { enable: true, area: 900 },
        },
        color: { value: accent },
        opacity: { value: 0.35 },
        size: { value: { min: 1, max: 3 } },
        links: {
          enable: true,
          distance: 130,
          color: accent,
          opacity: 0.18,
          width: 1,
        },
        move: {
          enable: !reducedMotion,
          speed: 0.6,
          direction: 'none',
          random: false,
          straight: false,
          outModes: { default: 'out' },
        },
      },
      interactivity: {
        events: {
          onHover: { enable: !reducedMotion, mode: 'grab' },
          resize: true,
        },
        modes: {
          grab: {
            distance: 140,
            links: { opacity: 0.45 },
          },
        },
      },
      responsive: [
        {
          maxWidth: 768,
          options: {
            particles: {
              number: { value: 28 },
              links: { distance: 100 },
            },
          },
        },
      ],
    },
  });
});
