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
];

export function BeforeAfterGallery({ defaultCategory = 'Все' }) {
  const categories = ['Все', 'Кератин и ботокс', 'Холодная реконструкция', 'Биозавивка', 'Окрашивание'];
  
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
          Посмотрите удивительные преображения наших клиентов. Проведите пальцем по фото, чтобы увидеть результат "до и после"
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
                <BeforeAfterSlider
                  beforeImage={item.beforeImage}
                  afterImage={item.afterImage}
                />
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