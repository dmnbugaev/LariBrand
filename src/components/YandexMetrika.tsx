'use client'

import { useEffect, useRef } from 'react'
import { usePathname } from 'next/navigation'
import Script from 'next/script'
import { YM_COUNTER_ID, ymHit, ymReachGoal } from '../lib/analytics'
import { serviceFromPath } from '../lib/seo/services'
import { useCookieConsent } from '../hooks/useCookieConsent'

/**
 * Счётчик Яндекс Метрики № 105193463.
 *
 * Модель согласия: счётчик целиком (включая Вебвизор) загружается только при
 * сохранённом согласии на cookie — без согласия на сайт не уходит ни один
 * запрос к Метрике. Цели и hit'ы, отправленные до согласия, копятся в
 * стандартной очереди ym и обрабатываются после загрузки счётчика.
 *
 * Next.js App Router: tag.js отправляет первый hit сам; для клиентских
 * переходов (Link) дополнительно отправляются виртуальные hit'ы,
 * иначе Метрика не видела бы внутреннюю навигацию SPA.
 * На страницах услуг отправляется цель service_view.
 */
const YandexMetrika: React.FC = () => {
  const pathname = usePathname()
  const hasConsent = useCookieConsent()
  const lastTrackedPath = useRef<string | null>(null)

  useEffect(() => {
    const current = pathname ?? '/'

    if (lastTrackedPath.current !== null && lastTrackedPath.current !== current) {
      ymHit(
        `${window.location.origin}${current}`,
        `${window.location.origin}${lastTrackedPath.current}`,
      )
    }
    lastTrackedPath.current = current

    const service = serviceFromPath(current)
    if (service) {
      ymReachGoal('service_view', { service })
    }
  }, [pathname])

  if (!hasConsent) return null

  return (
    <>
      <Script
        id="yandex-metrika"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: `
            (function(m,e,t,r,i,k,a){
                m[i]=m[i]||function(){(m[i].a=m[i].a||[]).push(arguments)};
                m[i].l=1*new Date();
                for (var j = 0; j < document.scripts.length; j++) {if (document.scripts[j].src === r) { return; }}
                k=e.createElement(t),a=e.getElementsByTagName(t)[0],k.async=1,k.src=r,a.parentNode.insertBefore(k,a)
            })(window, document,'script','https://mc.yandex.ru/metrika/tag.js?id=${YM_COUNTER_ID}', 'ym');

            ym(${YM_COUNTER_ID}, 'init', {
              ssr:true,
              webvisor:true,
              clickmap:true,
              accurateTrackBounce:true,
              trackLinks:true
            });
          `,
        }}
      />
      <noscript>
        <div>
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={`https://mc.yandex.ru/watch/${YM_COUNTER_ID}`}
            style={{ position: 'absolute', left: '-9999px' }}
            alt=""
          />
        </div>
      </noscript>
    </>
  )
}

export default YandexMetrika
