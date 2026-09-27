'use client'

import Script from 'next/script'

/**
 * Load RealScout once. Script comes from em.realscout.com; API calls go to www.realscout.com.
 * Both hosts must stay in CSP script-src and connect-src.
 */
export default function RealScoutScript() {
  return (
    <Script
      src="https://em.realscout.com/widgets/realscout-web-components.umd.js"
      type="module"
      strategy="lazyOnload"
    />
  )
}
