'use client';

import { useState } from 'react';

export type DeferredIframeEmbedProps = {
  src: string;
  title: string;
  /** Shown before the user loads the iframe (third-party disclosure + performance). */
  description: string;
  buttonLabel: string;
};

/**
 * Defers loading a third-party map iframe until user action.
 * Improves initial load, INP, and mobile performance vs eager embeds.
 */
export default function DeferredIframeEmbed({ src, title, description, buttonLabel }: DeferredIframeEmbedProps) {
  const [loaded, setLoaded] = useState(false);

  if (!loaded) {
    return (
      <div className="mx-auto flex max-w-5xl min-h-[280px] flex-col items-center justify-center gap-4 rounded-xl border border-gray-200 bg-gray-100 p-10 shadow-sm md:min-h-[320px]">
        <p className="max-w-md text-center text-sm text-gray-600">{description}</p>
        <button
          type="button"
          onClick={() => setLoaded(true)}
          className="inline-flex items-center gap-2 rounded-lg bg-[#1a365d] px-6 py-3 font-semibold text-white transition-colors hover:bg-[#2d4a7c] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1a365d] focus-visible:ring-offset-2"
        >
          {buttonLabel}
        </button>
      </div>
    );
  }

  return (
    <div className="relative mx-auto max-w-5xl min-h-[480px] w-full overflow-hidden rounded-xl border border-gray-200 bg-gray-100 shadow-sm md:min-h-[560px] lg:min-h-[640px]">
      <iframe
        src={src}
        width="100%"
        height="100%"
        className="absolute inset-0 block h-full w-full border-0"
        loading="lazy"
        title={title}
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
