/**
 * GLVAR / Las Vegas Realtors® MLS attribution shown with listing widgets.
 * Do not alter IDX widget internals; this is site-level copy under the embed.
 */
export default function MlsDisclaimer() {
  return (
    <p className="mt-4 text-xs text-gray-500 leading-relaxed max-w-4xl mx-auto text-center">
      Listing data is provided by the Greater Las Vegas Association of REALTORS® MLS and is deemed
      reliable but not guaranteed. © {new Date().getFullYear()} GLVAR. All rights reserved. Equal
      Housing Opportunity. Dr. Jan Duffy, Berkshire Hathaway HomeServices Nevada Properties, Nevada
      license S.0197614.LLC, represents buyers—not the builder.
    </p>
  )
}
