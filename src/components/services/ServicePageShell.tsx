import type { ReactNode } from 'react'
import type { ServiceData } from '../../types'
import ServicePage from './ServicePage'
import { BeforeAfterGallery } from '../BeforeAfterGallery'
import Reviews from './reviews'
import ServiceFaq from './ServiceFaq'
import RelatedServices from './RelatedServices'
import CtaBand from '../ui/CtaBand'
import ScrollProgress from '../ui/ScrollProgress'

interface ServicePageShellProps {
  slug: string
  data: ServiceData
  /** Категория галереи по умолчанию; «Биозавивка» включает табы-подкатегории. */
  galleryCategory?: string
  /** Кастомное тело страницы (биозавивка с табами). По умолчанию — ServicePage. */
  body?: ReactNode
}

/**
 * Общий каркас страницы услуги (design.md 7.2):
 * hero → интро → прайс → галерея → отзывы → FAQ → перелинковка → CTA-бэнд.
 */
export default function ServicePageShell({
  slug,
  data,
  galleryCategory,
  body,
}: ServicePageShellProps) {
  return (
    <>
      <ScrollProgress />
      {body ?? <ServicePage data={data} />}
      <BeforeAfterGallery defaultCategory={galleryCategory} />
      <Reviews />
      <ServiceFaq slug={slug} />
      <RelatedServices slug={slug} />
      {data.book.text ? (
        <CtaBand text={data.book.text} placement="service_page" />
      ) : (
        <CtaBand placement="service_page" />
      )}
    </>
  )
}
