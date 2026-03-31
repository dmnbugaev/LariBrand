'use client'

import { useState, useEffect, useMemo, useCallback } from 'react'
import { BeforeAfterSlider } from './BeforeAfterSlider'
import type { GalleryItem } from '../types'

const galleryItems: GalleryItem[] = [
  { id: 1, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_7336.jpg', afterImage: '/images/IMG_7405.jpg' },
  { id: 2, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_7970.jpg', afterImage: '/images/IMG_7969.jpg' },
  { id: 3, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_7971.jpg', afterImage: '/images/IMG_7972.jpg' },
  { id: 4, title: 'Холодная реконструкция волос', category: 'Холодная реконструкция', beforeImage: '/images/IMG_7973.jpg', afterImage: '/images/IMG_7974.jpg' },
  { id: 5, title: 'Холодная реконструкция волос', category: 'Холодная реконструкция', beforeImage: '/images/IMG_7986.jpg', afterImage: '/images/IMG_7985.jpg' },
  { id: 6, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_7982.jpg', afterImage: '/images/IMG_7983.jpg' },
  { id: 7, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_7981.jpg', afterImage: '/images/IMG_7980.jpg' },
  { id: 8, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_7976.jpg', afterImage: '/images/IMG_7979.jpg' },
  { id: 9, title: 'Окрашивание волос', category: 'Окрашивание', beforeImage: '/images/IMG_7994.jpg', afterImage: '/images/IMG_7993.jpg' },
  { id: 10, title: 'Окрашивание волос', category: 'Окрашивание', beforeImage: '/images/IMG_7988.jpg', afterImage: '/images/IMG_7987.jpg' },
  { id: 11, title: 'Биозавивка волос', category: 'Биозавивка', beforeImage: '/images/IMG_8011.jpg', afterImage: '/images/IMG_8012.jpg' },
  { id: 12, title: 'Биозавивка волос', category: 'Биозавивка', beforeImage: '/images/IMG_8009.jpg', afterImage: '/images/IMG_8008.jpg' },
  { id: 13, title: 'Биозавивка волос', category: 'Биозавивка', beforeImage: '/images/IMG_8002.jpg', afterImage: '/images/IMG_8004.jpg' },
  { id: 14, title: 'Холодная реконструкция волос', category: 'Холодная реконструкция', beforeImage: '/images/IMG_3315.jpg', afterImage: '/images/IMG_3373.jpg' },
  { id: 15, title: 'Холодная реконструкция волос', category: 'Холодная реконструкция', beforeImage: '/images/IMG_3678.JPG', afterImage: '/images/IMG_3311.jpg' },
  { id: 16, title: 'Окрашивание и контуринг волос', category: 'Окрашивание', beforeImage: '/images/IMG_2573.jpg', afterImage: '/images/IMG_2655.jpg' },
  { id: 17, title: 'Биозавивка волос', category: 'Биозавивка', beforeImage: '/images/IMG_3648.JPG', afterImage: '/images/IMG_3647.jpg' },
  { id: 18, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_2163.jpg', afterImage: '/images/IMG_3653.jpg' },
  { id: 19, title: 'Окрашивание волос', category: 'Окрашивание', beforeImage: '/images/IMG_3657.JPG', afterImage: '/images/IMG_3658.JPG' },
  { id: 20, title: 'Кератиновое выпрямление', category: 'Кератин и ботокс', beforeImage: '/images/IMG_1501.jpg', afterImage: '/images/IMG_1531.jpg' },
  { id: 21, title: 'Окрашивание волос', category: 'Окрашивание', beforeImage: '/images/IMG_0936.jpg', afterImage: '/images/IMG_3660.jpg' },
  { id: 22, title: 'Биозавивка волос', category: 'Биозавивка', beforeImage: '/images/IMG_3651.jpg', afterImage: '/images/IMG_3652.jpg' },
  { id: 23, title: 'Тотальная реконструкция', category: 'Тотальная реконструкция', beforeImage: '/images/IMG_3665.jpg', afterImage: '/images/IMG_3664.jpg' },
  { id: 24, title: 'Окрашивание сложное', category: 'Окрашивание', beforeImage: '/images/IMG_3666.jpg', afterImage: '/images/IMG_0258.JPG' },
  { id: 25, title: 'Окрашивание волос', category: 'Окрашивание', beforeImage: '/images/IMG_2898.jpg', afterImage: '/images/IMG_3685.JPG' },
  { id: 26, title: 'Стрижка каскад + укладка на стайлер Dyson', category: 'Стрижка волос', singleImage: '/images/IMG_3121.jpg' },
  { id: 27, title: 'Женская стрижка', category: 'Стрижка волос', singleImage: '/images/IMG_3114.jpg' },
  { id: 28, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3703.jpg' },
  { id: 29, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3704.jpg' },
  { id: 30, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3705.jpg' },
  { id: 31, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3706.jpg' },
  { id: 32, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3707.jpg' },
  { id: 33, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3708.jpg' },
  { id: 34, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3709.jpg' },
  { id: 35, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3710.jpg' },
  { id: 36, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3711.jpg' },
  { id: 37, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3712.jpg' },
  { id: 38, title: 'Мужская стрижка', category: 'Мужская стрижка', singleImage: '/images/IMG_3713.jpg' },
  { id: 39, title: 'Горячая реконструкция', category: 'Кератин и ботокс', beforeImage: '/images/IMG_9826.jpg', afterImage: '/images/IMG_9863.jpg' },
]

const CATEGORIES = [
  'Все',
  'Кератин и ботокс',
  'Холодная реконструкция',
  'Биозавивка',
  'Окрашивание',
  'Стрижка волос',
  'Тотальная реконструкция',
  'Мужская стрижка',
]

interface BeforeAfterGalleryProps {
  defaultCategory?: string
}

export function BeforeAfterGallery({ defaultCategory = 'Все' }: BeforeAfterGalleryProps) {
  const initialCategory = CATEGORIES.includes(defaultCategory) ? defaultCategory : 'Все'
  const [selectedCategory, setSelectedCategory] = useState<string>(initialCategory)

  useEffect(() => {
    setSelectedCategory(CATEGORIES.includes(defaultCategory) ? defaultCategory : 'Все')
  }, [defaultCategory])

  const filteredItems = useMemo(
    () =>
      selectedCategory === 'Все'
        ? galleryItems
        : galleryItems.filter((item) => item.category === selectedCategory),
    [selectedCategory]
  )

  const isCutCategory = useMemo(
    () => selectedCategory === 'Стрижка волос' || selectedCategory === 'Мужская стрижка',
    [selectedCategory]
  )

  const handleCategorySelect = useCallback((category: string) => {
    setSelectedCategory(category)
  }, [])

  return (
    <section className="py-16 px-4 max-w-[1280px] mx-auto -mt-[60px] font-forum max-[768px]:py-12 max-[768px]:px-3 max-[768px]:-mt-10">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-[1.875rem] font-bold text-brand-black mb-4 md:text-[2.25rem]">
          Примеры наших работ
        </h2>
        <p className="text-brand-black opacity-60 max-w-[42rem] mx-auto text-lg leading-7">
          {isCutCategory
            ? 'Примеры наших работ по стрижкам. Для других услуг проведите пальцем по фото, чтобы увидеть результат "до и после"'
            : 'Посмотрите удивительные преображения наших клиентов. Проведите пальцем по фото, чтобы увидеть результат "до и после"'}
        </p>
      </div>

      {/* Filter */}
      <div className="flex flex-wrap justify-center gap-3 mb-12 max-[768px]:gap-2 max-[768px]:mb-8">
        {CATEGORIES.map((category) => (
          <button
            key={category}
            onClick={() => handleCategorySelect(category)}
            aria-pressed={selectedCategory === category}
          className={`py-2 px-6 rounded-full transition-all duration-300 border text-sm cursor-pointer max-[768px]:py-[6px] max-[768px]:px-4 max-[768px]:text-[13px] ${
              selectedCategory === category
                ? 'bg-brand-red text-white border-brand-red shadow-lg'
                : 'bg-white text-brand-black border-black hover:bg-brand-bg hover:text-brand-red'
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3 max-[768px]:gap-6">
        {filteredItems.map((item) => (
          <div
            key={item.id}
            className="transition-transform duration-300 hover:-translate-y-1"
          >
            <div className="bg-white rounded-2xl overflow-hidden shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1),0_4px_6px_-2px_rgba(0,0,0,0.05)] transition-shadow duration-300 h-full flex flex-col hover:shadow-[0_20px_25px_-5px_rgba(0,0,0,0.1),0_10px_10px_-5px_rgba(0,0,0,0.04)]">
              <div className="w-full aspect-[4/3] relative overflow-hidden bg-brand-bg max-[640px]:aspect-[3/4]">
                {item.singleImage ? (
                  <div className="single-image-container relative w-full h-full">
                    <img
                      src={item.singleImage}
                      alt={item.title}
                      loading="lazy"
                      className="single-image w-full h-full object-cover block transition-transform duration-300"
                    />
                  </div>
                ) : (
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage!}
                    afterImage={item.afterImage!}
                  />
                )}
              </div>
              <div className="p-6 flex-grow flex flex-col">
                <span className="inline-block py-1 px-3 bg-brand-bg text-brand-black rounded-full text-sm mb-2 self-start">
                  {item.category}
                </span>
                <h3 className="text-[1.25rem] font-semibold text-brand-black mt-auto">
                  {item.title}
                </h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
