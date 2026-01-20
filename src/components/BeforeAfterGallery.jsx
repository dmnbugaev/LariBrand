'use client';

import { useState, useEffect } from 'react';
import { BeforeAfterSlider } from './BeforeAfterSlider';
import '../styles/components_styles/BeforeAfterGallery.css';

const galleryItems = [
  {
    id: 1,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_7336.jpg',
    afterImage: './images/IMG_7405.jpg',
  },
  {
    id: 2,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_7970.jpg',
    afterImage: './images/IMG_7969.jpg',
  },
  {
    id: 3,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_7971.jpg',
    afterImage: './images/IMG_7972.jpg',
  },
  {
    id: 4,
    title: 'Холодная реконструкция волос',
    category: 'Холодная реконструкция',
    beforeImage: './images/IMG_7973.jpg',
    afterImage: './images/IMG_7974.jpg',
  },
  {
    id: 5,
    title: 'Холодная реконструкция волос',
    category: 'Холодная реконструкция',
    beforeImage: './images/IMG_7986.jpg',
    afterImage: './images/IMG_7985.jpg',
  },
  {
    id: 6,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_7982.jpg',
    afterImage: './images/IMG_7983.jpg',
  },
  {
    id: 7,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_7981.jpg',
    afterImage: './images/IMG_7980.jpg',
  },
  {
    id: 8,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_7976.jpg',
    afterImage: './images/IMG_7979.jpg',
  },
  {
    id: 9,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_7994.jpg',
    afterImage: './images/IMG_7993.jpg',
  },
  {
    id: 10,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_7988.jpg',
    afterImage: './images/IMG_7987.jpg',
  },
  {
    id: 11,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_8011.jpg',
    afterImage: './images/IMG_8012.jpg',
  },
  {
    id: 12,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_8009.jpg',
    afterImage: './images/IMG_8008.jpg',
  },
  {
    id: 13,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_8002.jpg',
    afterImage: './images/IMG_8004.jpg',
  },
  {
    id: 14,
    title: 'Холодная реконструкция волос',
    category: 'Холодная реконструкция',
    beforeImage: './images/IMG_3315.jpg',
    afterImage: './images/IMG_3373.jpg',
  },
  {
    id: 15,
    title: 'Холодная реконструкция волос',
    category: 'Холодная реконструкция',
    beforeImage: './images/IMG_3678.JPG',
    afterImage: './images/IMG_3311.jpg',
  },
  {
    id: 16,
    title: 'Окрашивание и контуринг волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_2573.jpg',
    afterImage: './images/IMG_2655.jpg',
  },
  {
    id: 17,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_3648.JPG',
    afterImage: './images/IMG_3647.jpg',
  },
  {
    id: 18,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_2163.jpg',
    afterImage: './images/IMG_3653.jpg',
  },
  {
    id: 19,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_3657.JPG',
    afterImage: './images/IMG_3658.JPG',
  },
  {
    id: 20,
    title: 'Кератиновое выпрямление',
    category: 'Кератин и ботокс',
    beforeImage: './images/IMG_1501.jpg',
    afterImage: './images/IMG_1531.jpg',
  },
  {
    id: 21,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_0936.jpg',
    afterImage: './images/IMG_3660.jpg',
  },
  {
    id: 22,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_3651.jpg',
    afterImage: './images/IMG_3652.jpg',
  },
  {
    id: 23,
    title: 'Тотальная реконструкция',
    category: 'Тотальная реконструкция',
    beforeImage: './images/IMG_3665.jpg',
    afterImage: './images/IMG_3664.jpg',
  },
  {
    id: 24,
    title: 'Окрашивание сложное',
    category: 'Окрашивание',
    beforeImage: './images/IMG_3666.jpg',
    afterImage: './images/IMG_0258.JPG',
  },
  {
    id: 25,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_2898.jpg',
    afterImage: './images/IMG_3685.JPG',
  },
  // Новые элементы для категорий "Стрижка волос" и "Мужская стрижка"
  {
    id: 26,
    title: 'Стрижка каскад + укладка на стайлер Dyson',
    category: 'Стрижка волос',
    singleImage: './images/IMG_3121.jpg',
  },
  {
    id: 27,
    title: 'Женская стрижка',
    category: 'Стрижка волос',
    singleImage: './images/IMG_3114.jpg',
  },
  {
    id: 28,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3703.jpg',
  },
  {
    id: 29,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3704.jpg',
  },
  {
    id: 30,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3705.jpg',
  },
  {
    id: 31,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3706.jpg',
  },
  {
    id: 32,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3707.jpg',
  },
  {
    id: 33,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3708.jpg',
  },
  {
    id: 34,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3709.jpg',
  },
  {
    id: 35,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3710.jpg',
  },
  {
    id: 36,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3711.jpg',
  },
  {
    id: 37,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3712.jpg',
  },
  {
    id: 38,
    title: 'Мужская стрижка',
    category: 'Мужская стрижка',
    singleImage: './images/IMG_3713.jpg',
  },
];

export function BeforeAfterGallery({ defaultCategory = 'Все' }) {
  const categories = ['Все', 'Кератин и ботокс', 'Холодная реконструкция', 'Биозавивка', 'Окрашивание', 'Стрижка волос', 'Тотальная реконструкция', 'Мужская стрижка'];
  
  // Валидация категории
  const isValidCategory = defaultCategory && categories.includes(defaultCategory);
  const initialCategory = isValidCategory ? defaultCategory : 'Все';
  
  const [selectedCategory, setSelectedCategory] = useState(initialCategory);
  
  // Синхронизация, если defaultCategory изменится
  useEffect(() => {
    if (defaultCategory && categories.includes(defaultCategory)) {
      setSelectedCategory(defaultCategory);
    } else {
      setSelectedCategory('Все');
    }
  }, [defaultCategory]);
  
  const filteredItems = selectedCategory === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  return (
    <section className="before-after-gallery">
      {/* Header */}
      <div className="before-after-gallery-header">
        <h2 className="before-after-gallery-title">
          Примеры наших работ
        </h2>
        <p className="before-after-gallery-description">
          {selectedCategory === 'Стрижка волос' || selectedCategory === 'Мужская стрижка'
            ? 'Примеры наших работ по стрижкам. Для других услуг проведите пальцем по фото, чтобы увидеть результат "до и после"'
            : 'Посмотрите удивительные преображения наших клиентов. Проведите пальцем по фото, чтобы увидеть результат "до и после"'
          }
        </p>
      </div>

      {/* Category Filter */}
      <div className="before-after-gallery-filter">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`before-after-gallery-filter-button ${
              selectedCategory === category ? 'before-after-gallery-filter-button-active' : ''
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Gallery Grid */}
      <div className="before-after-gallery-grid">
        {filteredItems.map((item) => (
          <div key={item.id} className="before-after-gallery-item-wrapper">
            <div className="before-after-gallery-card">
              {/* Контейнер с фиксированным соотношением сторон */}
              <div className="before-after-gallery-slider-container">
                {item.singleImage ? (
                  // Отображение одиночного изображения для стрижек
                  <div className="single-image-container">
                    <img 
                      src={item.singleImage} 
                      alt={item.title}
                      className="single-image"
                    />
                  </div>
                ) : (
                  // Отображение слайдера "до/после" для других категорий
                  <BeforeAfterSlider
                    beforeImage={item.beforeImage}
                    afterImage={item.afterImage}
                  />
                )}
              </div>
              <div className="before-after-gallery-card-content">
                <span className="before-after-gallery-category">
                  {item.category}
                </span>
                <h3 className="before-after-gallery-item-title">{item.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}