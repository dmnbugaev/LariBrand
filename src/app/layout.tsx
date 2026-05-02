import type { Metadata } from 'next'
import localFont from 'next/font/local'
import CookieConsent from '../components/CookieConsent'
import YandexMetrika from '../components/YandexMetrika'
import LocalBusinessSchema from '../components/LocalBusinessSchema'
import FloatingBookingButton from '../components/ui/FloatingBookingButton'
import './globals.css'

const forum = localFont({
  src: '../../public/fonts/Forum-1.woff2',
  variable: '--font-forum',
  display: 'swap',
  fallback: ['Georgia', 'Times New Roman', 'serif'],
  preload: true,
})

const canelope = localFont({
  src: '../../public/fonts/CanelopeDemo.woff2',
  variable: '--font-canelope',
  display: 'swap',
  fallback: ['Palatino Linotype', 'Palatino', 'Georgia', 'serif'],
  preload: true,
})

const BASE_URL = 'https://laribrand.ru'

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Салон красоты LariBrand в Саратове | Кератин, ботокс, стрижки, окрашивание',
    template: '%s | LariBrand Саратов',
  },
  description:
    'Салон красоты LariBrand в Саратове: кератиновое выпрямление, ботокс для волос, биозавивка, стрижки, окрашивание балаяж, омбре, AirTouch. Профессиональный уход за волосами.',
  keywords: [
    'салон красоты Саратов',
    'кератиновое выпрямление Саратов',
    'ботокс волос Саратов',
    'биозавивка Саратов',
    'холодная реконструкция волос Саратов',
    'безопасное выпрямление волос Саратов',
    'окрашивание волос Саратов',
    'балаяж Саратов',
    'омбре Саратов',
    'AirTouch Саратов',
    'стрижка волос Саратов',
    'стрижка каскад Саратов',
    'стрижка каре Саратов',
    'мужская стрижка Саратов',
    'афроплетение Саратов',
    'укладка волос Саратов',
    'тотальная реконструкция волос',
    'восстановление волос Саратов',
    'парикмахерская Саратов',
    'мастер по волосам Саратов',
    'LariBrand',
  ],
  alternates: {
    canonical: BASE_URL,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-snippet': -1,
      'max-image-preview': 'large',
      'max-video-preview': -1,
    },
  },
  openGraph: {
    title: 'LariBrand — Дом эстетики волос в Саратове',
    description: 'Профессиональный уход за волосами в Саратове: кератин, ботокс, биозавивка, окрашивание, стрижки.',
    type: 'website',
    locale: 'ru_RU',
    url: BASE_URL,
    siteName: 'LariBrand',
    images: [
      {
        url: '/upload/1762277381106-IMG_5217.JPG',
        width: 1200,
        height: 630,
        alt: 'Салон красоты LariBrand Саратов',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'LariBrand — Дом эстетики волос в Саратове',
    description: 'Профессиональный уход за волосами в Саратове: кератин, ботокс, биозавивка, окрашивание, стрижки.',
    images: ['/upload/1762277381106-IMG_5217.JPG'],
  },
}

interface RootLayoutProps {
  children: React.ReactNode
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="ru" className={`${forum.variable} ${canelope.variable}`}>
      <body>
        <LocalBusinessSchema />
        {children}
        <FloatingBookingButton />
        <CookieConsent />
        <YandexMetrika />
      </body>
    </html>
  )
}
