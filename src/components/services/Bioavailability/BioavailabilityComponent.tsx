'use client'

import { useState } from 'react'
import Image from 'next/image'
import content from '../../../../content/content.json'
import type { PriceV2Section } from '../../../types'

const data = content.bioavailability
const singUpLink = content.sing_up_link

const INFO_TEXT = {
  classic:
    'Классическая биозавивка создаёт мягкие и натуральные кудри без повреждения структуры волос. Щадящая технология с восстанавливающими компонентами обеспечивает стойкий результат до 6 месяцев.',
  korean:
    'Корейская биозавивка — более выраженные и объёмные кудри с эффектом живых локонов. Особая техника укладки и состав препаратов корейского производства создают чёткие кудри с K-beauty эстетикой.',
}

type Tab = 'classic' | 'korean'

export default function BioavailabilityComponent() {
  const [tab, setTab] = useState<Tab>('classic')

  const section = data.priceV2!.sections[0] as PriceV2Section
  const allRows = section.rows!
  const colIndex = tab === 'classic' ? 1 : 2

  const visibleRows = allRows.filter((row) => row[colIndex] !== '')

  return (
    <main className="pt-[80px] flex flex-col items-center justify-center text-center text-brand-black gap-[60px] max-[1200px]:gap-[80px]">
      {/* Hero */}
      <section className="service-hero relative bg-brand-black w-full h-[60vh] min-h-[400px] flex justify-center items-center uppercase overflow-hidden font-forum max-[1200px]:h-screen max-[1200px]:max-h-[1200px] max-[1200px]:min-h-[600px] max-[1199px]:h-[80vh] max-[1199px]:min-h-[500px] max-[768px]:h-[60vh] max-[540px]:h-[50vh] max-[480px]:h-[45vh] max-[420px]:h-[40vh] max-[350px]:h-[35vh]">
        <Image
          src={data.hero.image}
          alt="Биозавивка"
          fill
          className="object-cover object-center service-hero-image"
          priority
        />
        <h1 className="service-hero-title absolute text-white z-[2] font-normal px-[25px] py-[15px] leading-[1.2] tracking-[0.5px] font-forum">
          Биозавивка
        </h1>
      </section>

      {/* Tab switcher */}
      <section className="w-full px-4 -mb-4">
        <div className="flex justify-center max-w-[860px] mx-auto border border-brand-black overflow-hidden">
          {(['classic', 'korean'] as Tab[]).map((t) => (
            <button
              key={t}
              onClick={() => setTab(t)}
              className={`flex-1 py-4 px-6 font-forum text-[15px] uppercase tracking-[2px] transition-all duration-300 cursor-pointer max-[480px]:py-3 max-[480px]:text-[13px] max-[480px]:tracking-[1px] ${
                tab === t
                  ? 'bg-brand-black text-white'
                  : 'bg-white text-brand-black hover:bg-brand-bg'
              }`}
            >
              {t === 'classic' ? 'Классическая' : 'Корейская'}
            </button>
          ))}
        </div>
      </section>

      {/* Info */}
      <section className="px-4 w-full">
        <p className="font-forum max-w-[800px] mx-auto text-[24px] leading-[1.6] m-0 max-[540px]:text-[22px] max-[420px]:text-[20px]">
          {INFO_TEXT[tab]}
        </p>
      </section>

      {/* Price table */}
      <section className="w-full max-w-[860px] px-4 -mb-10">
        <div className="w-full border border-gray-200 overflow-hidden">
          <div className="bg-brand-black py-3 px-6 text-center">
            <h3 className="font-forum text-white uppercase tracking-[3px] text-[13px] font-normal m-0">
              {tab === 'classic' ? 'Классическая биозавивка' : 'Корейская биозавивка'}
            </h3>
          </div>
          <table className="w-full border-collapse">
            <tbody>
              {visibleRows.map((row, i) => (
                <tr key={i} className="border-b border-gray-100 hover:bg-[#fafafa] transition-colors">
                  <td className="py-3.5 px-5 font-forum text-[15px] text-left text-brand-black max-[480px]:py-3 max-[480px]:px-3 max-[480px]:text-[14px]">
                    {row[0]}
                  </td>
                  <td className="py-3.5 px-5 font-forum text-[15px] text-right whitespace-nowrap font-medium text-brand-black max-[480px]:py-3 max-[480px]:px-3 max-[480px]:text-[14px]">
                    {row[colIndex]}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          {section.simpleItems && section.simpleItems.length > 0 && (
            <div className="w-full">
              {section.simpleItems.map((item, i) => (
                <div
                  key={i}
                  className="flex items-start justify-between py-3.5 px-5 border-b border-gray-100 hover:bg-[#fafafa] transition-colors gap-4 max-[480px]:py-3 max-[480px]:px-3"
                >
                  <div className="flex-1">
                    <span className="font-forum text-[15px] text-brand-black block max-[480px]:text-[14px]">
                      {item.title}
                    </span>
                    {item.note && (
                      <span className="font-forum text-[12px] text-gray-400 block mt-0.5 leading-snug">
                        {item.note}
                      </span>
                    )}
                  </div>
                  <span className="font-forum text-[15px] text-brand-black font-medium shrink-0 text-right max-[480px]:text-[14px]">
                    {item.price}
                  </span>
                </div>
              ))}
            </div>
          )}
          {section.notes && section.notes.length > 0 && (
            <div className="mt-4 mb-1 px-5 space-y-1 max-[480px]:px-3">
              {section.notes.map((note, i) => (
                <p key={i} className="font-forum text-[12px] text-gray-400 text-left leading-relaxed m-0">
                  * {note}
                </p>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Book */}
      <section className="pb-[60px] px-4 w-full flex flex-col items-center">
        {data.book.text && (
          <p className="font-forum text-[1.2rem] mb-10 max-w-[800px] w-full text-center">
            {data.book.text}
          </p>
        )}
        <a
          href={singUpLink}
          className="font-forum text-[20px] inline-block py-[15px] px-[30px] bg-brand-red text-white rounded-[10px] no-underline uppercase font-normal transition-all duration-300 hover:scale-105 hover:shadow-[0_8px_24px_rgba(137,29,26,0.3)] active:scale-95"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Записаться онлайн"
        >
          Записаться
        </a>
      </section>
    </main>
  )
}
