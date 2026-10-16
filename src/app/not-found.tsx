import Link from 'next/link'
import Image from 'next/image'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'

/** 404 (design.md 7.6): минимальная редакционная страница. */
export default function NotFound() {
  return (
    <>
      <Header />
      <main className="pt-[72px] md:pt-[80px] min-h-[calc(100dvh-72px)] md:min-h-[calc(100dvh-80px)] bg-bg flex items-center">
        <div className="lb-container py-20">
          <div className="flex flex-col items-center gap-6 text-center">
            <Image
              src="/icons/logo_hero.svg"
              alt=""
              width={80}
              height={80}
              aria-hidden="true"
              className="w-20 h-20 opacity-80"
            />
            <h1 className="t-display-1 m-0">404</h1>
            <p className="t-body-l text-ink-muted m-0">
              Страница не найдена. Возможно, она переехала — начните с главной.
            </p>
            <Link href="/" className="btn btn-primary px-10">
              На главную
            </Link>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
