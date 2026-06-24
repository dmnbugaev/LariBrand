const ALLOWED_EXTERNAL_HOSTS = new Set([
  'api.whatsapp.com',
  'max.ru',
  'n782275.yclients.com',
  'vk.com',
])

const SAFE_RELATIVE_PATH = /^\/(?!\/)/
const SAFE_TEL = /^tel:\+?[0-9()\-.\s]+$/i

export function safeJsonLd(data: unknown): string {
  return JSON.stringify(data)
    .replace(/</g, '\\u003c')
    .replace(/>/g, '\\u003e')
    .replace(/&/g, '\\u0026')
    .replace(/\u2028/g, '\\u2028')
    .replace(/\u2029/g, '\\u2029')
}

export function sanitizeHref(href: string, fallback = '#'): string {
  const value = href.trim()

  if (SAFE_RELATIVE_PATH.test(value) || SAFE_TEL.test(value)) {
    return value
  }

  try {
    const url = new URL(value)
    if (url.protocol === 'https:' && ALLOWED_EXTERNAL_HOSTS.has(url.hostname)) {
      return url.toString()
    }
  } catch {
    return fallback
  }

  return fallback
}
