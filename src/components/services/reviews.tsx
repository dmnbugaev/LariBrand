'use client'

import React from 'react'
import TrackedLink from '../analytics/TrackedLink'
import { useCookieConsent } from '../../hooks/useCookieConsent'

const YANDEX_REVIEWS_URL =
  'https://yandex.ru/maps/org/laribrand/103694209198/reviews/?ll=46.029038%2C51.522243&z=16'

/**
 * Виджет отзывов грузится через собственный прокси
 * /api/reviews-widget: он отдаёт официальный виджет Яндекс Карт,
 * перекрашивая синие элементы Яндекса в фирменный красный. Виджет
 * устанавливает cookie Яндекса, поэтому загружается только при
 * сохранённом согласии на cookie; без согласия показывается
 * карточка-ссылка на отзывы.
 */
const REVIEWS_WIDGET_SRC = '/api/reviews-widget'

const Reviews = React.memo(function Reviews() {
  const hasConsent = useCookieConsent()

  return (
    <section className="bg-white py-12 px-4">
      <h2 className="font-forum text-[32px] text-center text-brand-black mb-4 max-[540px]:text-[26px]">
        Отзывы клиентов
      </h2>
      <p className="font-forum text-[16px] text-center text-brand-black/70 max-w-[620px] mx-auto mb-8">
        Отзывы загружаются напрямую из карточки LariBrand на Яндекс Картах
        и обновляются автоматически — мы ничего не переносим на сайт вручную.
      </p>

      {hasConsent ? (
        <div className="max-w-[760px] mx-auto h-[620px] max-[560px]:h-[560px] rounded-[14px] overflow-hidden border border-black/10 shadow-md">
          <iframe
            src={REVIEWS_WIDGET_SRC}
            title="Отзывы о LariBrand на Яндекс Картах"
            className="w-full h-full border-0"
            loading="lazy"
          />
        </div>
      ) : (
        <div className="max-w-[760px] mx-auto rounded-[14px] border border-black/10 bg-white py-12 px-6 text-center shadow-md">
          <p className="font-forum text-[18px] text-brand-black mb-2">
            Виджет отзывов Яндекс Карт
          </p>
          <p className="font-forum text-[15px] text-brand-black/70 max-w-[520px] mx-auto mb-6">
            Подключается после согласия на использование cookie — нажмите «Принять»
            в уведомлении внизу страницы. Все отзывы всегда доступны в карточке
            LariBrand на Яндекс Картах.
          </p>
          <TrackedLink
            href={YANDEX_REVIEWS_URL}
            goal="reviews_click"
            target="_blank"
            className="font-forum text-[16px] inline-block py-[12px] px-7 bg-brand-red text-white rounded-[14px] uppercase font-normal no-underline transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
          >
            Читать отзывы на Яндекс Картах
          </TrackedLink>
        </div>
      )}
    </section>
  )
})

export default Reviews
