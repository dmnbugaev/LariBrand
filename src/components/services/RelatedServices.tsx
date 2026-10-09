import Link from 'next/link'
import { getService } from '@/lib/seo/services'

/**
 * Блок внутренней перелинковки: связывает релевантные услуги
 * (источник связей — реестр src/lib/seo/services.ts).
 */
export default function RelatedServices({ slug }: { slug: string }) {
  const service = getService(slug)
  if (!service || service.related.length === 0) return null

  const related = service.related
    .map((relatedSlug) => getService(relatedSlug))
    .filter((entry): entry is NonNullable<typeof entry> => Boolean(entry))

  if (related.length === 0) return null

  return (
    <section className="w-full max-w-[860px] px-4 pb-[60px] mx-auto" aria-label="Смотрите также">
      <h2 className="font-forum text-[32px] text-center text-brand-black mb-8 max-[540px]:text-[26px]">
        Смотрите также
      </h2>
      <nav className="grid grid-cols-3 gap-4 max-[640px]:grid-cols-2 max-[400px]:grid-cols-1">
        {related.map((entry) => (
          <Link
            key={entry.slug}
            href={`/${entry.slug}`}
            className="font-forum text-[17px] text-brand-black no-underline border border-gray-200 rounded-[10px] px-5 py-6 text-center transition-all duration-300 hover:border-brand-red hover:text-brand-red hover:-translate-y-[2px] max-[480px]:text-[15px] max-[480px]:py-4"
          >
            {entry.name}
            {entry.priceFrom ? (
              <span className="block text-[13px] text-brand-black/50 mt-1 max-[480px]:text-[12px]">
                от {entry.priceFrom.toLocaleString('ru-RU')} ₽
              </span>
            ) : null}
          </Link>
        ))}
      </nav>
    </section>
  )
}
