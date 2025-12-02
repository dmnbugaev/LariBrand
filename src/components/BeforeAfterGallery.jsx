'use client';

import { useState } from 'react';
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
    beforeImage: './images/IMG_7995.jpg',
    afterImage: './images/IMG_7996.jpg',
  },
  {
    id: 10,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_7994.jpg',
    afterImage: './images/IMG_7993.jpg',
  },
  {
    id: 11,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_7990.jpg',
    afterImage: './images/IMG_7991.jpg',
  },
  {
    id: 12,
    title: 'Окрашивание волос',
    category: 'Окрашивание',
    beforeImage: './images/IMG_7988.jpg',
    afterImage: './images/IMG_7987.jpg',
  },

  {
    id: 13,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_8011.jpg',
    afterImage: './images/IMG_8012.jpg',
  },
  {
    id: 14,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_8009.jpg',
    afterImage: './images/IMG_8008.jpg',
  },
  {
    id: 15,
    title: 'Биозавивка волос',
    category: 'Биозавивка',
    beforeImage: './images/IMG_8002.jpg',
    afterImage: './images/IMG_8004.jpg',
  },
];

export function BeforeAfterGallery() {
  const [selectedCategory, setSelectedCategory] = useState('Все');
  
  const categories = ['Все', 'Кератин и ботокс', 'Холодная реконструкция', 'Биозавивка', 'Окрашивание'];
  
  const filteredItems = selectedCategory === 'Все' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === selectedCategory);

  // SVG иконка Sparkles
  const Sparkles = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className="before-after-gallery-sparkles-icon"
    >
      <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" 
        strokeLinecap="round" 
        strokeLinejoin="round"
      />
    </svg>
  );

  const handleBookAppointment = () => {
    console.log('Записаться на процедуру');
  };

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
              <BeforeAfterSlider
                beforeImage={item.beforeImage}
                afterImage={item.afterImage}
              />
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