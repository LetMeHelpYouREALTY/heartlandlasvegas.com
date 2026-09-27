'use client';

import { useCallback } from 'react';

const CALENDLY_URL = 'https://calendly.com/drjanduffy';
const WIDGET_JS = 'https://assets.calendly.com/assets/external/widget.js';
const WIDGET_CSS = 'https://assets.calendly.com/assets/external/widget.css';

function loadCalendly(): Promise<void> {
  const w = typeof window === 'undefined' ? null : (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } });
  if (w?.Calendly) return Promise.resolve();

  return new Promise((resolve) => {
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = WIDGET_CSS;
    link.media = 'print';
    link.onload = () => { link.media = 'all'; };
    document.head.appendChild(link);

    const script = document.createElement('script');
    script.src = WIDGET_JS;
    script.async = true;
    script.onload = () => resolve();
    script.onerror = () => resolve();
    document.body.appendChild(script);
  });
}

export default function CalendlyLink() {
  const handleClick = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    loadCalendly().then(() => {
      const w = (window as Window & { Calendly?: { initPopupWidget: (opts: { url: string }) => void } });
      if (w.Calendly) {
        w.Calendly.initPopupWidget({ url: CALENDLY_URL });
      } else {
        window.open(CALENDLY_URL, '_blank');
      }
    });
    return false;
  }, []);

  return (
    <a
      href={CALENDLY_URL}
      onClick={handleClick}
      className="inline-block bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-semibold transition-colors duration-75 will-change-[background-color]"
    >
      Have a Question? Talk to a New Construction Homes Specialist
    </a>
  );
}
