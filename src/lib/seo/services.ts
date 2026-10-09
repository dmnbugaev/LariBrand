// Реестр услуг: единый источник для FAQ, перелинковки, sitemap-проверок и аналитики.
// Цены «от» сверены с прайсами в content.json; тексты FAQ опираются только
// на факты, опубликованные на страницах услуг (без выдуманных гарантий).

export interface FaqItem {
  question: string
  answer: string
}

export interface ServiceEntry {
  slug: string
  name: string
  priceFrom: number
  faq: FaqItem[]
  related: string[]
}

const bookingFaq = (): FaqItem => ({
  question: 'Как записаться на процедуру?',
  answer:
    'Онлайн-запись через форму на сайте или по телефону +7 (987) 329-89-96. Салон LariBrand работает ежедневно с 10:00 до 20:00.',
})

const addressFaq = (): FaqItem => ({
  question: 'Где находится салон?',
  answer:
    'г. Саратов, ул. Н.Г. Чернышевского, 145. Ориентир и схему проезда смотрите в блоке с картой в подвале сайта.',
})

const priceFaq = (priceFrom: number, what: string): FaqItem => ({
  question: `Сколько стоит ${what}?`,
  answer: `В прайсе указана цена от ${priceFrom.toLocaleString('ru-RU')} ₽ — итоговая стоимость зависит от длины и густоты волос и рассчитывается мастером на консультации перед процедурой.`,
})

export const SERVICES: ServiceEntry[] = [
  {
    slug: 'keratin_and_botox',
    name: 'Кератин и ботокс для волос',
    priceFrom: 3700,
    faq: [
      {
        question: 'Чем кератиновое выпрямление отличается от ботокса для волос?',
        answer:
          'Обе процедуры выполняются в горячей технике. Кератин направлен на выпрямление и гладкость, ботокс — на восстановление, плотность и блеск волос. Финальный подбор процедуры делается после консультации и диагностики волос.',
      },
      priceFaq(3700, 'кератин или ботокс'),
      bookingFaq(),
    ],
    related: ['safe_hair_straightening', 'cold_hair_reconstruction', 'total_reconstruction'],
  },
  {
    slug: 'safe_hair_straightening',
    name: 'Безопасное выпрямление волос',
    priceFrom: 6700,
    faq: [
      {
        question: 'Почему выпрямление называется безопасным?',
        answer:
          'В процедуре сочетаются холодная реконструкция, которая восстанавливает и увлажняет волос изнутри, и горячая реконструкция, которая создаёт визуальный эффект прямых и блестящих волос. Это самая щадящая схема выпрямления в нашем прайсе.',
      },
      priceFaq(6700, 'безопасное выпрямление'),
      bookingFaq(),
    ],
    related: ['keratin_and_botox', 'cold_hair_reconstruction', 'total_reconstruction'],
  },
  {
    slug: 'cold_hair_reconstruction',
    name: 'Холодная реконструкция волос',
    priceFrom: 3000,
    faq: [
      {
        question: 'Что такое холодная реконструкция?',
        answer:
          'Это восстановление волос без нагрева. Процедура проходит в 2–3 этапа, составы работают в двух слоях — внутри и на поверхности волоса, восстанавливая, укрепляя и уплотняя его.',
      },
      {
        question: 'Подойдёт ли процедура повреждённым волосам?',
        answer:
          'Да, это её основная задача. Бренд холодной реконструкции мастер подбирает индивидуально — в зависимости от степени повреждения и структуры волоса.',
      },
      priceFaq(3000, 'холодная реконструкция'),
      bookingFaq(),
    ],
    related: ['total_reconstruction', 'hair_coloring', 'additional_services'],
  },
  {
    slug: 'bioavailability',
    name: 'Биозавивка волос',
    priceFrom: 6500,
    faq: [
      {
        question: 'Чем биозавивка отличается от обычной химической завивки?',
        answer:
          'Биозавивка использует щадящую технологию с восстанавливающими компонентами: вы получаете мягкие и натуральные кудри без повреждения структуры волос.',
      },
      {
        question: 'Какая разница между классической и корейской биозавивкой?',
        answer:
          'Классическая создаёт мягкие натуральные кудри, корейская — более выраженные и объёмные локоны. На странице прайса можно переключаться между двумя вариантами.',
      },
      priceFaq(6500, 'биозавивку'),
      bookingFaq(),
    ],
    related: ['hair_styling', 'hair_coloring', 'additional_services'],
  },
  {
    slug: 'total_reconstruction',
    name: 'Тотальная реконструкция волос',
    priceFrom: 7400,
    faq: [
      {
        question: 'Что такое тотальная реконструкция?',
        answer:
          'Процедура объединяет лечение и визуальный эффект. Для каждого волоса составляется индивидуальный протокол — исходя из степени повреждения, пористости и дефицитов, поэтому это не «универсальный состав».',
      },
      priceFaq(7400, 'тотальную реконструкцию'),
      bookingFaq(),
    ],
    related: ['cold_hair_reconstruction', 'keratin_and_botox', 'additional_services'],
  },
  {
    slug: 'hair_coloring',
    name: 'Окрашивание волос',
    priceFrom: 4500,
    faq: [
      {
        question: 'Какие техники окрашивания вы выполняете?',
        answer:
          'От сложных техник (балаяж, омбре, AirTouch, брондирование, контуринг, скрытое окрашивание) до однотонного окрашивания и тонирования — полный список с ценами смотрите в прайсе.',
      },
      {
        question: 'На каких красителях работает салон?',
        answer:
          'Только на профессиональных красителях премиум-класса. Оттенок подбирается под вашу внешность и стиль.',
      },
      priceFaq(4500, 'окрашивание'),
      bookingFaq(),
    ],
    related: ['cold_hair_reconstruction', 'hair_cutting', 'additional_services'],
  },
  {
    slug: 'hair_cutting',
    name: 'Стрижка волос',
    priceFrom: 1200,
    faq: [
      {
        question: 'Как выбрать стрижку?',
        answer:
          'Мастер подбирает форму под тип волос и черты лица так, чтобы стрижка легко укладывалась дома: каскад, каре, боб-каре, лесенка, слои, ровный срез и другие варианты из прайса.',
      },
      priceFaq(1200, 'стрижку'),
      bookingFaq(),
      addressFaq(),
    ],
    related: ['hair_styling', 'hair_coloring', 'additional_services'],
  },
  {
    slug: 'afro_weaving',
    name: 'Афроплетение',
    priceFrom: 2000,
    faq: [
      {
        question: 'Какие виды плетения вы делаете?',
        answer:
          'Афрокосы, боксёрские косы, брейды, афрохвост, водопад, афрокудри — любой сложности. Работаем бережно, без лишнего натяжения, сохраняя комфорт и здоровье волос.',
      },
      priceFaq(2000, 'афроплетение'),
      bookingFaq(),
    ],
    related: ['hair_styling', 'hair_cutting', 'additional_services'],
  },
  {
    slug: 'hair_styling',
    name: 'Укладки волос',
    priceFrom: 500,
    faq: [
      {
        question: 'Какие укладки вы делаете?',
        answer:
          'Голливудские волны, прикорневой объём, собранные причёски, выпрямление утюжком, укладка на DYSON — для съёмки, события или на каждый день.',
      },
      priceFaq(500, 'укладку'),
      bookingFaq(),
    ],
    related: ['hair_cutting', 'bioavailability', 'additional_services'],
  },
  {
    slug: 'additional_services',
    name: 'Дополнительные услуги',
    priceFrom: 700,
    faq: [
      {
        question: 'Какие дополнительные услуги доступны?',
        answer:
          'Ботокс на кончики, экспресс-уход, пилинг кожи головы, полировка волос, хелатное мытьё, чистка полотна, экспресс-смывка и укладка на DYSON — полный список с ценами в прайсе.',
      },
      priceFaq(700, 'дополнительные услуги'),
      bookingFaq(),
    ],
    related: ['cold_hair_reconstruction', 'keratin_and_botox', 'hair_styling'],
  },
]

export const SERVICE_SLUGS = SERVICES.map((s) => s.slug)

export function getService(slug: string): ServiceEntry | undefined {
  return SERVICES.find((s) => s.slug === slug)
}

/** Определяет услугу по pathname («/bioavailability» → «bioavailability»). */
export function serviceFromPath(pathname: string | null): string | null {
  if (!pathname) return null
  const slug = pathname.replace(/\/+$/, '').replace(/^\//, '')
  return SERVICE_SLUGS.includes(slug) ? slug : null
}
