/** @type {import('next').NextConfig} */
const securityHeaders = [
  {
    key: 'Content-Security-Policy',
    value: [
      "default-src 'self'",
      "script-src 'self' 'unsafe-inline' https://mc.yandex.ru https://*.yandex.ru https://*.yandex.net https://yastatic.net https://*.yastatic.net",
      "style-src 'self' 'unsafe-inline'",
      "img-src 'self' data: blob: https://mc.yandex.ru https://*.yandex.ru https://*.yandex.net",
      "font-src 'self' data:",
      "connect-src 'self' https://mc.yandex.ru https://*.yandex.ru https://*.yandex.net",
      "frame-src https://*.yandex.ru https://*.yandex.net",
      "object-src 'none'",
      "base-uri 'self'",
      "form-action 'self' https://n782275.yclients.com",
      "frame-ancestors 'none'",
      'upgrade-insecure-requests',
    ].join('; '),
  },
  {
    key: 'Referrer-Policy',
    value: 'strict-origin-when-cross-origin',
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'X-Frame-Options',
    value: 'DENY',
  },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=(), usb=(), bluetooth=(), accelerometer=(), gyroscope=(), magnetometer=()',
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=31536000; includeSubDomains; preload',
  },
]

const uploadHeaders = [
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff',
  },
  {
    key: 'Content-Disposition',
    value: 'inline',
  },
]

const nextConfig = {
  poweredByHeader: false,
  productionBrowserSourceMaps: false,
  async headers() {
    return [
      {
        source: '/:path*',
        headers: securityHeaders,
      },
      {
        source: '/upload/:path*',
        headers: uploadHeaders,
      },
    ]
  },
};

export default nextConfig;
