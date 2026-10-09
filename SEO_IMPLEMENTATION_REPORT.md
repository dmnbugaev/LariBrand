# Отчёт о реализации SEO-изменений LariBrand

**Дата:** 9 октября 2026 · **Ветка:** main (изменения не закоммичены — ждут ревью владельца)

---

## 1. Новые файлы

| Файл | Назначение |
|------|-----------|
| `src/lib/seo/site.ts` | Константы салона (URL, адрес, geo, часы, соцсети, телефон) — единый источник для схем |
| `src/lib/seo/services.ts` | Реестр 10 услуг: цены «от», FAQ (проверенные факты), карта перелинковки. Питает sitemap, FAQ-блоки, related-блоки, аналитику |
| `src/lib/analytics.ts` | Типобезопасная обёртка Метрики: `ymReachGoal` (union-тип целей), `ymHit` (SPA-просмотры), заглушка-очередь до загрузки tag.js, SSR-безопасность |
| `src/components/analytics/TrackedLink.tsx` | Ссылка с отправкой цели (reviews_click, messenger_click и др.) |
| `src/components/analytics/BookingButton.tsx` | Кнопка «Записаться» с целью `booking_click` + параметры `service`/`placement`; варианты solid/outline, пользовательский className |
| `src/components/WebSiteSchema.tsx` | WebSite JSON-LD для главной, связан `@id` с HairSalon |
| `src/components/services/ServiceFaq.tsx` | Блок «Частые вопросы» (нативные details/summary) + FAQPage JSON-LD |
| `src/components/services/RelatedServices.tsx` | Блок «Смотрите также» — перелинковка релевантных услуг |
| `src/lib/seo/seo.test.ts` | 8 SEO-тестов (см. раздел 6) |
| `public/yandex_5103e65f2910a91e.html` | Подтверждение прав Яндекс Вебмастера (строго заданное содержимое) |
| `public/upload/*IMG_1885.jpg` ×2 | JPEG-версии фото биозавивки (конвертация из DNG, оригиналы сохранены) |
| `SEO_AUDIT.md`, `SEO_KEYWORDS.md`, `SEO_ANALYTICS.md`, `SEO_ROADMAP.md`, этот файл | Отчётность |

## 2. Изменённые файлы

### Маршруты и метаданные
- `src/app/layout.tsx` — убран `title.template` (дубль бренда в выдаче), title строкой; Canelope `preload: false`.
- `src/app/robots.ts` — снята блокировка `/_next/` и `/api/`, убран устаревший `Host`.
- `src/app/sitemap.ts` — состав из реестра услуг; фактические `lastmod` вместо `new Date()`.
- `src/app/page.tsx` — подключён WebSiteSchema.
- **Все 10 страниц услуг** (`bioavailability`, `keratin_and_botox`, `safe_hair_straightening`, `cold_hair_reconstruction`, `total_reconstruction`, `hair_coloring`, `hair_cutting`, `afro_weaving`, `hair_styling`, `additional_services`) — подключены `<ServiceFaq slug>` и `<RelatedServices slug>` перед футером.
- `src/app/bioavailability/page.tsx` — og:image и schema-изображение DNG→JPEG, истинные размеры 2268×4032.
- `src/app/safe_hair_straightening/page.tsx` — удалена опечатка в keywords.
- `src/app/promo/page.tsx` — 5 CTA переведены на BookingButton (`placement="promo"`).

### Компоненты
- `YandexMetrika.tsx` — SPA-трекинг переходов (`ym hit` + referer), цель `service_view` на страницах услуг, ID вынесен в константу.
- `LocalBusinessSchema.tsx` — `@id`, logo, hasMap, currenciesAccepted; данные из `lib/seo/site.ts`.
- `ServiceSchema.tsx` — `@id`, provider связан `@id` с HairSalon, добавлен BreadcrumbList.
- `ServicePage.tsx`, `BioavailabilityComponent.tsx` — BookingButton вместо `<a>`, sr-only H2 прайса, информативные alt hero-изображений.
- `FloatingBookingButton.tsx` — цели booking_click / messenger_click.
- `Header.tsx` — цели на телефоны, запись, Max; alt логотипа.
- `Footer.tsx` — цели на телефоны, мессенджер, «Записаться онлайн» (BookingButton outline).
- `home/hero.tsx` — BookingButton (placement hero), alt логотипа.
- `ui/LinkSingUp.tsx` — цель booking_click (singup_section).
- `services/reviews.tsx` — переход к отзывам с целью reviews_click (TrackedLink).
- `PromoPopup.tsx` — кнопка записи с целью booking_click (promo_popup).
- `lib/security.ts` — yandex.ru добавлен в белый список внешних хостов (ссылки на отзывы/карту); тест дополнен.

### Контент
- `content/content.json` — `grid_4` и hero биозавивки переведены на JPEG.

## 3. Настройки Sitemap / Robots (итог)

- `robots.txt`: `User-Agent: * / Allow: / / Sitemap: https://laribrand.ru/sitemap.xml` — ничего не блокируется.
- `sitemap.xml`: 12 URL (главная, промо-акция пока активна, 10 услуг), абсолютные HTTPS, фактические lastmod. Юридические noindex-страницы не включены.

## 4. Структурированные данные (итог)

| Тип | Где |
|-----|-----|
| HairSalon (+ OfferCatalog, OpeningHours, GeoCoordinates, hasMap, logo, sameAs, @id) | Все страницы (layout) |
| WebSite (@id → HairSalon) | Главная |
| Service (+ Offer с ценой «от», provider @id, areaServed) | Все страницы услуг |
| BreadcrumbList (Главная › Услуга) | Все страницы услуг |
| FAQPage | Все страницы услуг |

Все JSON-LD проходят через `safeJsonLd` (экранирование `<`, `>`, `&`).

## 5. Оптимизация изображений

- DNG (RAW, 1,7 МБ) → JPEG для биозавивки; `/_next/image` отдаёт оптимизированный вариант (проверено, 200 image/jpeg).
- LCP hero-изображения услуг и главной — `priority` (сохранено).
- Отзывы/галерея — lazy (next/image по умолчанию, сохранено).
- Alt-тексты уточнены без спама: hero услуг «{услуга} — салон LariBrand, Саратов», логотипы.

## 6. Результаты тестирования

- `npm run lint` (eslint, 0 warnings) — **чисто**.
- `npm test` (jest) — **21/21 тестов**, включая новые: уникальность slug/названий, ≥3 FAQ на услугу с уникальными вопросами, валидность и без-само-ссылок перелинковки, достижимость всех услуг из навигации, `serviceFromPath`, фиксированный набор целей, SSR-безопасность аналитики, yandex.ru в sanitizeHref.
- `npm run build` — **успешно**; 19 маршрутов, страницы услуг статичные (○), First Load JS: shared 102 kB, страницы услуг 125 kB (FAQ и перелинковка — серверные компоненты, 0 клиентского JS).
- Локальный prod-сервер (`next start`), проверено curl: 
  - `robots.txt`, `sitemap.xml`, `yandex_…html` (200, text/html, точное содержимое);
  - все 12 страниц: уникальные title 52–73 симв. без дубля бренда, self-canonical, ровно один H1;
  - FAQ-вопросы и related-ссылки присутствуют в SSR-HTML;
  - `og:image` биозавивки — JPEG;
  - CSP/HSTS/X-Frame-Options на месте; noindex на юридических страницах.

## 7. Что осталось сделать вручную (вне репозитория)

1. Задеплоить изменения и проверить `https://laribrand.ru/yandex_5103e65f2910a91e.html` (200).
2. В Яндекс Вебмастере: добавить сайт → подтверждение пройдёт автоматически по файлу; указать главное зеркало `laribrand.ru`; добавить sitemap.xml.
3. Настроить 301 `www.laribrand.ru → laribrand.ru` на хостинге.
4. Создать цели в интерфейсе Метрики (список идентификаторов — SEO_ANALYTICS.md).
5. Снять PageSpeed Insights после деплоя (базовые замеры).
