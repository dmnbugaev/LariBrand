"use client";

import { useState, useCallback, useEffect } from 'react';
import './BeautySalonGallery.css';
import content from "../../../content/content.json";

const BeautySalonGallery = () => {
  const works = content.works || [];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const nextSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev === works.length - 1 ? 0 : prev + 1
    );
  }, [works.length]);

  const prevSlide = useCallback(() => {
    setCurrentIndex(prev => 
      prev === 0 ? works.length - 1 : prev - 1
    );
  }, [works.length]);

  const onTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }
  };

  // Автопрокрутка
  useEffect(() => {
    if (works.length === 0) return;
    
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(timer);
  }, [currentIndex, nextSlide, works.length]);

  // Обработка клавиатуры
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowLeft') {
        prevSlide();
      } else if (e.key === 'ArrowRight') {
        nextSlide();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [prevSlide, nextSlide]);

  if (works.length === 0) {
    return <div className="gallery"></div>;
  }

  return (
    <div className="gallery">
      <div className="gallery-container">
        <div 
          className="slides-container"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          {works.map((work) => (
            <div key={work.id} className="slide">
              <img 
                src={work.image} 
                alt={work.title}
                className="slide-image"
                loading="lazy"
              />
              <div className="slide-info">
                <h3 className="slide-title">{work.title}</h3>
                <p className="slide-description">{work.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Навигационные стрелки - скрываются если всего 1 изображение */}
        {works.length > 1 && (
          <>
            <button 
              className="nav-button prev-button" 
              onClick={prevSlide}
              aria-label="Предыдущий слайд"
            >
              ‹
            </button>
            <button 
              className="nav-button next-button" 
              onClick={nextSlide}
              aria-label="Следующий слайд"
            >
              ›
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default BeautySalonGallery;