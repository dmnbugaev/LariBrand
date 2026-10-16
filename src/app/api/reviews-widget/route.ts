import { NextResponse } from 'next/server'

/**
 * Прокси официального виджета отзывов Яндекс Карт с заменой фирменных
 * синих элементов Яндекса на красный LariBrand. Виджет полностью
 * статичный (CSS и отзывы зашиты в HTML, XHR нет), поэтому достаточно
 * переписать цвета в ответе. Синие подложки аватаров заменяются на
 * тёплые тона из палитры сайта.
 */
const YANDEX_REVIEWS_WIDGET_URL =
  'https://yandex.ru/maps-reviews-widget/103694209198?comments'

const BRAND_RED = '#891d1a'
const BRAND_RED_DARK = '#6e1513'

const COLOR_REPLACEMENTS: Array<[RegExp, string]> = [
  // интерфейсные элементы Яндекса → фирменный красный
  [/#258ffb/gi, BRAND_RED], // кнопка «Перейти на карту»
  [/#1a6df2/gi, BRAND_RED_DARK], // её hover
  [/#198cff/gi, BRAND_RED], // ссылка «ещё отзывы»
  // синие подложки аватаров без фото → тёплые тона
  [/#5798d9/gi, '#b57b6b'],
  [/#50c0e6/gi, '#d99985'],
  [/#8585cc/gi, '#c48282'],
]

export async function GET() {
  try {
    const res = await fetch(YANDEX_REVIEWS_WIDGET_URL, {
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/128.0 Safari/537.36',
        'Accept-Language': 'ru,en;q=0.9',
      },
      next: { revalidate: 3600 },
    })
    if (!res.ok) throw new Error(`Widget fetch failed: ${res.status}`)

    let html = await res.text()
    for (const [pattern, replacement] of COLOR_REPLACEMENTS) {
      html = html.replace(pattern, replacement)
    }

    return new NextResponse(html, {
      headers: {
        'Content-Type': 'text/html; charset=utf-8',
        'Cache-Control': 'public, max-age=600, stale-while-revalidate=3600',
      },
    })
  } catch {
    // запасной вариант — оригинальный виджет Яндекса (без перекраски)
    return NextResponse.redirect(YANDEX_REVIEWS_WIDGET_URL, 302)
  }
}
