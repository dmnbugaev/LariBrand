import { safeJsonLd, sanitizeHref } from './security'

describe('safeJsonLd', () => {
  it('escapes characters that can break out of a JSON-LD script tag', () => {
    const result = safeJsonLd({
      value: '</script><script>alert("xss")</script>&',
    })

    expect(result).not.toContain('</script>')
    expect(result).toContain('\\u003c/script\\u003e')
    expect(result).toContain('\\u0026')
  })
})

describe('sanitizeHref', () => {
  it('allows safe relative paths and telephone links', () => {
    expect(sanitizeHref('/promo')).toBe('/promo')
    expect(sanitizeHref('tel:+79873298996')).toBe('tel:+79873298996')
  })

  it('allows only approved HTTPS hosts', () => {
    expect(sanitizeHref('https://n782275.yclients.com/company/734555')).toBe(
      'https://n782275.yclients.com/company/734555',
    )
    expect(sanitizeHref('http://n782275.yclients.com/company/734555')).toBe('#')
    expect(sanitizeHref('https://example.com')).toBe('#')
  })

  it('blocks protocol-relative URLs, javascript URLs, and malformed values', () => {
    expect(sanitizeHref('//example.com')).toBe('#')
    expect(sanitizeHref('javascript:alert(1)')).toBe('#')
    expect(sanitizeHref('not a url')).toBe('#')
  })
})
