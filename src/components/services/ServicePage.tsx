import Image from 'next/image'
import { memo } from 'react'
import type { ServiceData, PriceV2Section } from '../../types'
import content from '../../../content/content.json'

interface ServicePageProps {
  data: ServiceData
  htmlTitles?: boolean
}

function PriceSectionBlock({ section }: { section: PriceV2Section }) {
  const isMultiCol = section.headers && section.headers.length > 2
  const hasTwoColRows = !isMultiCol && section.rows && section.rows.length > 0
  const hasMultiColRows = isMultiCol && section.rows && section.rows.length > 0

  return (
    <div className="w-full">
      {/* Section title bar */}
      {section.title && (
        <div className="bg-brand-black py-3 px-6 text-center">
          <h3 className="font-forum text-white uppercase tracking-[3px] text-[13px] font-normal m-0">
            {section.title}
          </h3>
        </div>
      )}

      {/* Badge */}
      {section.badge && (
        <p className="font-forum text-center text-[18px] text-gray-400 tracking-wide mt-5 mb-0 px-4">
          {section.badge}
        </p>
      )}

      {/* Subtitle */}
      {section.subtitle && (
        <p className="font-forum text-center text-[22px] text-brand-black mt-5 mb-1 leading-tight px-4 max-[480px]:text-[18px]">
          {section.subtitle}
        </p>
      )}

      {/* Spacer when no title but has table */}
      {!section.title && !section.subtitle && !section.badge && (
        <div className="h-0" />
      )}

      {/* Multi-column table (3+ columns) — fully responsive, no horizontal scroll */}
      {hasMultiColRows && (
        <div className="w-full mt-6">
          <table className="w-full border-collapse table-fixed">
            <thead>
              <tr className="bg-brand-black">
                {section.headers!.map((h, i) => {
                  const parts = h.split('\n')
                  return (
                    <th
                      key={i}
                      className={`py-4 px-3 font-forum font-normal text-[11px] tracking-[2px] uppercase text-white max-[540px]:py-3 max-[540px]:px-2 max-[540px]:text-[10px] max-[540px]:tracking-[1px] max-[400px]:py-2 max-[400px]:px-1.5 max-[400px]:text-[9px] max-[400px]:tracking-[0px] ${i === 0 ? 'text-left' : 'text-center'}`}
                    >
                      <span className="block">{parts[0]}</span>
                      {parts[1] && (
                        <span className="block text-[10px] opacity-60 font-light tracking-normal mt-0.5 max-[540px]:text-[9px] max-[400px]:text-[8px]">
                          {parts[1]}
                        </span>
                      )}
                    </th>
                  )
                })}
              </tr>
            </thead>
            <tbody>
              {section.rows!.map((row, i) => (
                <tr
                  key={i}
                  className="border-b border-gray-100 hover:bg-[#fafafa] transition-colors"
                >
                  {row.map((cell, j) => (
                    <td
                      key={j}
                      className={`py-3.5 px-3 font-forum text-[15px] max-[540px]:py-3 max-[540px]:px-2 max-[540px]:text-[14px] max-[400px]:py-2.5 max-[400px]:px-1.5 max-[400px]:text-[13px] ${
                        j === 0
                          ? 'text-left font-medium text-brand-black'
                          : 'text-center text-brand-black'
                      } ${cell === '' ? 'text-gray-300' : ''}`}
                    >
                      {cell === '' ? '—' : cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Two-column rows */}
      {hasTwoColRows && (
        <table className="w-full border-collapse">
          <tbody>
            {section.rows!.map((row, i) => (
              <tr
                key={i}
                className="border-b border-gray-100 hover:bg-[#fafafa] transition-colors"
              >
                <td className="py-3.5 px-5 font-forum text-[15px] text-left text-brand-black max-[480px]:py-3 max-[480px]:px-3 max-[480px]:text-[14px]">
                  {row[0]}
                </td>
                <td className="py-3.5 px-5 font-forum text-[15px] text-right whitespace-nowrap font-medium text-brand-black max-[480px]:py-3 max-[480px]:px-3 max-[480px]:text-[14px]">
                  {row[1]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Simple items list */}
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

      {/* Notes */}
      {section.notes && section.notes.length > 0 && (
        <div className="mt-4 mb-1 px-5 space-y-1 max-[480px]:px-3">
          {section.notes.map((note, i) => (
            <p key={i} className="font-forum text-[12px] text-gray-400 text-left leading-relaxed m-0">
              * {note}
            </p>
          ))}
        </div>
      )}

      {/* Bottom padding when no notes */}
      {(!section.notes || section.notes.length === 0) && (
        <div className="h-1" />
      )}
    </div>
  )
}

const ServicePage = memo(function ServicePage({ data, htmlTitles = false }: ServicePageProps) {
  return (
    <main className="pt-[80px] flex flex-col items-center justify-center text-center text-brand-black gap-[60px] max-[1200px]:gap-[80px]">
      {/* HERO */}
      <section className="service-hero relative bg-brand-black w-full h-[60vh] min-h-[400px] flex justify-center items-center uppercase overflow-hidden font-forum max-[1200px]:h-screen max-[1200px]:max-h-[1200px] max-[1200px]:min-h-[600px] max-[1199px]:h-[80vh] max-[1199px]:min-h-[500px] max-[768px]:h-[60vh] max-[540px]:h-[50vh] max-[480px]:h-[45vh] max-[420px]:h-[40vh] max-[350px]:h-[35vh]">
        {data.hero.image && (
          <Image
            src={data.hero.image}
            alt={data.hero.title}
            fill
            className="object-cover object-center service-hero-image"
            priority
          />
        )}
        <h1 className="service-hero-title absolute text-white z-[2] font-normal px-[25px] py-[15px] leading-[1.2] tracking-[0.5px] font-forum">
          {data.hero.title}
        </h1>
      </section>

      {/* INFORM */}
      {data.info.text && (
        <section className="px-4 w-full">
          <p className="font-forum max-w-[800px] mx-auto text-[24px] leading-[1.6] m-0 max-[540px]:text-[22px] max-[420px]:text-[20px]">
            {data.info.text}
          </p>
        </section>
      )}

      {/* PRICES — modern v2 design */}
      {data.priceV2 ? (
        <section className="w-full max-w-[860px] px-4 -mb-10 flex flex-col gap-8">
          {data.priceV2.sections.map((section, i) => (
            <div
              key={i}
              className="w-full border border-gray-200 overflow-hidden"
            >
              <PriceSectionBlock section={section} />
            </div>
          ))}
        </section>
      ) : (
        /* Legacy price display */
        <section className="text-[20px] font-forum flex flex-col items-center gap-0 -mb-10 px-4 w-full">
          {data.price.map((item, i) => (
            <div
              key={`${item.title}-${i}`}
              className="flex items-center w-full max-w-[800px] border-b border-gray-100 py-3 gap-3"
            >
              {htmlTitles ? (
                <span
                  className="text-left flex-1 text-[18px] max-[480px]:text-[16px]"
                  dangerouslySetInnerHTML={{ __html: item.title.replace(/<\/br>/g, '<br/>') }}
                />
              ) : (
                <span className="text-left flex-1 text-[18px] max-[480px]:text-[16px]">{item.title}</span>
              )}
              <span className="text-right whitespace-nowrap font-medium text-[18px] max-[480px]:text-[16px]">{item.price}</span>
            </div>
          ))}
        </section>
      )}

      {/* BOOKING */}
      <section className="pb-[60px] px-4 w-full flex flex-col items-center">
        {data.book.text && (
          <p className="font-forum text-[1.2rem] mb-10 max-w-[800px] w-full text-center">
            {data.book.text}
          </p>
        )}
        <a
          href={content.sing_up_link}
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
})

export default ServicePage
