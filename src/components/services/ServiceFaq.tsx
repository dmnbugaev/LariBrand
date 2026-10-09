import { getService } from '@/lib/seo/services'
import { safeJsonLd } from '@/lib/security'

/**
 * Блок «Частые вопросы» на странице услуги.
 * Нативные details/summary — работают без JS и доступны с клавиатуры.
 * Тексты берутся из реестра услуг (только проверенные факты).
 */
export default function ServiceFaq({ slug }: { slug: string }) {
  const service = getService(slug)
  if (!service || service.faq.length === 0) return null

  const faqSchema = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: service.faq.map((item) => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  }

  return (
    <section className="w-full max-w-[860px] px-4 py-8 mx-auto" aria-labelledby={`faq-${slug}`}>
      <h2
        id={`faq-${slug}`}
        className="font-forum text-[32px] text-center text-brand-black mb-8 max-[540px]:text-[26px]"
      >
        Частые вопросы
      </h2>
      <div className="flex flex-col gap-3 text-left">
        {service.faq.map((item) => (
          <details
            key={item.question}
            className="group border border-gray-200 rounded-[10px] bg-white"
          >
            <summary className="font-forum text-[18px] text-brand-black py-4 px-5 cursor-pointer list-none flex items-center justify-between gap-4 max-[480px]:text-[16px] max-[480px]:px-4">
              <span>{item.question}</span>
              <span
                aria-hidden="true"
                className="text-brand-red text-[22px] leading-none shrink-0 transition-transform duration-300 group-open:rotate-45"
              >
                +
              </span>
            </summary>
            <p className="font-forum text-[16px] leading-[1.6] text-brand-black/80 px-5 pb-5 m-0 max-w-[720px] max-[480px]:px-4 max-[480px]:text-[15px]">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: safeJsonLd(faqSchema) }}
      />
    </section>
  )
}
