import Link from 'next/link'
import Header from './Header'
import Footer from './Footer'

interface DocLayoutProps {
  children: React.ReactNode
}

export default function DocLayout({ children }: DocLayoutProps) {
  return (
    <>
      <Header />
      <main className="pt-[80px] min-h-screen bg-white">
        <div className="max-w-3xl mx-auto px-5 py-10 font-forum text-brand-black">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-[15px] text-brand-black opacity-50 no-underline hover:opacity-100 hover:text-brand-red transition-all duration-200 mb-10"
          >
            ← На главную
          </Link>
          {children}
        </div>
      </main>
      <Footer />
    </>
  )
}
