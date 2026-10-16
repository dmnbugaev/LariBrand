'use client'

import { useCookieConsent } from '../../hooks/useCookieConsent'

const YANDEX_MAP_URL =
  'https://yandex.ru/map-widget/v1/?ll=46.029315%2C51.522283&mode=search&oid=103694209198&ol=biz&z=16'

const YANDEX_ORG_URL = 'https://yandex.ru/maps/org/laribrand/103694209198/'

/**
 * Карта проезда (виджет Яндекс Карт). Загружается только при согласии на
 * cookie: iframe передаёт Яндексу IP-адрес и технические данные посетителя.
 * Без согласия показывается карточка со ссылкой на карту в Яндекс Картах.
 */
export default function Map() {
  const hasConsent = useCookieConsent()

  return (
    <div className="h-[380px] w-full overflow-hidden border border-brand-black">
      {hasConsent ? (
        <iframe
          src={YANDEX_MAP_URL}
          title="Карта проезда в LariBrand"
          className="h-full w-full border-0"
          loading="lazy"
          allowFullScreen
        />
      ) : (
        <div className="h-full w-full flex flex-col items-center justify-center gap-3 bg-brand-bg px-6 text-center">
          <p className="font-forum text-[16px] text-brand-black m-0">
            Карта проезда — Яндекс Карты
          </p>
          <p className="font-forum text-[13px] text-brand-black opacity-60 m-0">
            Виджет включается после согласия на использование cookie
          </p>
          <a
            href={YANDEX_ORG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-forum text-[15px] text-brand-red no-underline transition-opacity duration-200 hover:opacity-80"
          >
            Открыть в Яндекс Картах →
          </a>
        </div>
      )}
    </div>
  )
}
