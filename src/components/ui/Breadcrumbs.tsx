import Link from 'next/link'

interface BreadcrumbsProps {
  /** Название текущей страницы. */
  current: string
  /** Инверсный вариант — на тёмном фото-хиро страницы услуги. */
  inverse?: boolean
}

/** Хлебные крошки страниц услуг (design.md 6.12). Скрыты на < sm. */
export default function Breadcrumbs({ current, inverse = false }: BreadcrumbsProps) {
  return (
    <nav
      aria-label="Хлебные крошки"
      className={`hidden sm:flex items-center gap-2 t-caption m-0 ${
        inverse ? '' : 'text-ink-muted'
      }`}
      style={inverse ? { color: 'rgba(251,246,240,0.78)' } : undefined}
    >
      <Link
        href="/"
        className={`no-underline transition-colors duration-[250ms] ${
          inverse ? 'hover:text-ink-inverse' : 'hover:text-accent'
        }`}
        style={inverse ? { color: 'inherit' } : { color: 'var(--lb-ink-muted)' }}
      >
        Главная
      </Link>
      <span aria-hidden="true" className="text-ink-faint">/</span>
      <Link
        href="/#services"
        className={`no-underline transition-colors duration-[250ms] ${
          inverse ? 'hover:text-ink-inverse' : 'hover:text-accent'
        }`}
        style={inverse ? { color: 'inherit' } : { color: 'var(--lb-ink-muted)' }}
      >
        Услуги
      </Link>
      <span aria-hidden="true" className="text-ink-faint">/</span>
      <span aria-current="page" style={inverse ? { color: 'var(--lb-ink-inverse)' } : { color: 'var(--lb-ink)' }}>
        {current}
      </span>
    </nav>
  )
}
