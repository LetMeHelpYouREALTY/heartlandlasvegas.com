'use client';

import DeferredIframeEmbed from '@/components/DeferredIframeEmbed';

type LocatorPlusEmbedProps = {
  src: string;
  title: string;
};

/** Google Maps Platform Locator Plus — deferred load (see DeferredIframeEmbed). */
export default function LocatorPlusEmbed({ src, title }: LocatorPlusEmbedProps) {
  return (
    <DeferredIframeEmbed
      src={src}
      title={title}
      description="The interactive locator uses Google Maps (third-party). Load it when you are ready to search—this keeps the rest of the page fast on mobile and slower connections."
      buttonLabel="Load interactive map"
    />
  );
}
