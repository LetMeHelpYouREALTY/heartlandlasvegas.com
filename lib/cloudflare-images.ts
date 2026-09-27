/**
 * Cloudflare Images (hosted) — public delivery settings.
 * Account hash is shown in the dashboard under Images → Developer Resources
 * and is safe in the client bundle. Do not put CLOUDFLARE_API_TOKEN here.
 *
 * Delivery: https://imagedelivery.net/<ACCOUNT_HASH>/<IMAGE_ID>/<VARIANT>
 * @see https://developers.cloudflare.com/images/optimization/hosted-images/serve-uploaded-images/
 */
export const CF_IMAGES_ACCOUNT_HASH = 'byE6BTe9lNqo21V57n4aPQ' as const
export const CF_IMAGES_VARIANT = 'public' as const
export const CF_IMAGES_DELIVERY_ORIGIN = 'https://imagedelivery.net' as const

export function cloudflareAccountHash(): string {
  return process.env.NEXT_PUBLIC_CF_IMAGES_HASH?.trim() || CF_IMAGES_ACCOUNT_HASH
}

export function cloudflareVariant(): string {
  return process.env.NEXT_PUBLIC_CF_IMAGES_VARIANT?.trim() || CF_IMAGES_VARIANT
}

export function cloudflareDeliveryUrl(imageId: string, variant = cloudflareVariant()): string {
  return `${CF_IMAGES_DELIVERY_ORIGIN}/${cloudflareAccountHash()}/${imageId}/${variant}`
}
