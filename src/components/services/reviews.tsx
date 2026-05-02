import React from 'react'
import Image from 'next/image'

const YANDEX_REVIEWS_URL =
  'https://yandex.ru/maps/org/laribrand/103694209198/reviews/?ll=46.029038%2C51.522243&z=16'

const screenshots = [
  '{10E1F77B-642B-4A08-A770-895DE32C4D98}.png',
  '{26D9F826-C452-4EDF-A90B-4F177944CC0B}.png',
  '{28F0FC7B-D58C-42E4-A268-FC860DEE8B9E}.png',
  '{2A9FB163-1E83-4CD8-91C3-6B4068DECD52}.png',
  '{37F25474-CC2D-4D40-AB09-A2CFEC77D104}.png',
  '{52412E18-6336-494B-AFF3-84B166E39F52}.png',
  '{57085337-E022-4AD9-A4CD-E785F0692966}.png',
  '{58D5FD42-9E95-4CA5-8365-D10D5150A609}.png',
  '{6561E02D-7C2E-451D-8CB7-8856F1820142}.png',
  '{70C84523-ABC0-4A7F-B8B3-1E92991FAC00}.png',
  '{82DF31D1-D326-4B41-ACB1-DE9C27739A54}.png',
  '{98835F2E-10F5-4553-BEEB-3FCA78006E55}.png',
  '{99EBCB09-41D0-4CB7-9344-956F23DE66C7}.png',
  '{B593CFA5-0ED3-4313-A8E2-A217934BA870}.png',
  '{CBCF462B-3073-4E00-95DE-C874C5681249}.png',
  '{D28573D5-8BC3-4162-B6C3-092751B466BF}.png',
  '{E099B125-4E67-4EFC-A8A1-BDC4E3A84347}.png',
]

const Reviews = React.memo(function Reviews() {
  return (
    <section className="bg-white py-12 px-4">
      <h2 className="font-forum text-[32px] text-center text-brand-black mb-8 max-[540px]:text-[26px]">
        Отзывы клиентов
      </h2>

      <div className="grid grid-cols-3 gap-4 max-w-[1100px] mx-auto max-[768px]:grid-cols-2 max-[480px]:grid-cols-1">
        {screenshots.map((filename) => (
          <div
            key={filename}
            className="rounded-[14px] overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-200"
          >
            <Image
              src={`/images/reviews_screenshots/${filename}`}
              width={390}
              height={844}
              className="w-full h-auto"
              alt="Отзыв клиента LariBrand"
            />
          </div>
        ))}
      </div>

      <div className="flex flex-col items-center mt-10 gap-4">
        <p className="font-forum text-[18px] text-brand-black text-center">
          Больше отзывов на Яндекс картах
        </p>
        <a
          href={YANDEX_REVIEWS_URL}
          target="_blank"
          rel="noopener noreferrer"
          className="font-forum text-[18px] inline-block py-[14px] px-8 bg-brand-red text-white rounded-[14px] no-underline uppercase font-normal transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
        >
          Перейти к отзывам
        </a>
      </div>
    </section>
  )
})

export default Reviews
