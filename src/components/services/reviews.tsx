import React from 'react'
import content from '../../../content/content.json'
import type { Review } from '../../types'

const reviews: Review[] = content.reviews

const Reviews = React.memo(function Reviews() {
  return (
    <>
      <div className="flex flex-wrap justify-center gap-10 bg-white px-10 py-10 font-forum text-[20px] leading-[27px] max-[600px]:px-[10px]">
        {reviews.map((item, index) => (
          <div
            key={index}
            className="bg-white border border-brand-black rounded-[10px] p-3 w-[320px] box-border max-[760px]:w-[620px] max-[680px]:w-[520px] max-[680px]:text-lg max-[540px]:w-[420px] max-[480px]:w-[360px]"
          >
            <div className="font-bold mb-[6px]">{item.author}</div>
            <div>{item.text}</div>
          </div>
        ))}
      </div>
      <a
        target="_blank"
        rel="noopener noreferrer"
        className="no-underline font-forum text-[20px] text-brand-black flex justify-center mb-10 hover:underline hover:decoration-[1px]"
        href="https://yandex.ru/maps/org/laribrand/103694209198/reviews/?ll=46.029038%2C51.522243&z=16"
      >
        Все отзывы
      </a>
    </>
  )
})

export default Reviews
