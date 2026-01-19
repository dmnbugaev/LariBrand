'use client';

import { useState, useRef, useEffect } from 'react';
import '../styles/components_styles/BeforeAfterSlider.css';

export function BeforeAfterSlider({ beforeImage, afterImage, className = '' }) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);
  const containerRef = useRef(null);

  const handleMove = (clientX) => {
    if (!containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = (x / rect.width) * 100;
    
    setSliderPosition(Math.min(Math.max(percentage, 0), 100));
  };

  const handleMouseDown = () => {
    setIsDragging(true);
  };

  const handleMouseUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  };

  const handleTouchMove = (e) => {
    if (e.touches.length > 0) {
      handleMove(e.touches[0].clientX);
    }
  };

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false);
    
    const handleGlobalMouseMove = (e) => {
      if (!isDragging || !containerRef.current) return;
      handleMove(e.clientX);
    };
    
    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp);
      document.addEventListener('mousemove', handleGlobalMouseMove);
    }
    
    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp);
      document.removeEventListener('mousemove', handleGlobalMouseMove);
    };
  }, [isDragging]);

  // SVG иконки
  const ChevronLeft = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className="before-after-chevron before-after-chevron-left"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  const ChevronRight = () => (
    <svg 
      width="16" 
      height="16" 
      viewBox="0 0 24 24" 
      fill="none" 
      stroke="currentColor" 
      strokeWidth="2"
      className="before-after-chevron before-after-chevron-right"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
  );

  return (
    <div
      ref={containerRef}
      className={`before-after-container ${className}`}
      onMouseMove={handleMouseMove}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Before Image */}
      <div
        className="before-after-image-wrapper"
        style={{
          clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
          zIndex: 10
        }}
      >
        <div className="before-after-image-container">
          <img
            src={beforeImage}
            alt="До"
            className="before-after-image"
            onLoad={handleImageLoad}
            onError={(e) => {
              const target = e.target;
              target.src = '/fallback-image.jpg';
            }}
          />
        </div>
        <div className="before-after-label before-after-label-before">
          До
        </div>
      </div>

      {/* After Image */}
      <div
        className="before-after-image-wrapper"
        style={{
          clipPath: `inset(0 0 0 ${sliderPosition}%)`,
          zIndex: 5
        }}
      >
        <div className="before-after-image-container">
          <img
            src={afterImage}
            alt="После"
            className="before-after-image"
            onLoad={handleImageLoad}
            onError={(e) => {
              const target = e.target;
              target.src = '/fallback-image.jpg';
            }}
          />
        </div>
        <div className="before-after-label before-after-label-after">
          После
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="before-after-slider-line"
        style={{ left: `${sliderPosition}%` }}
      >
        {/* Slider Handle */}
        <div className="before-after-slider-handle">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>

      {/* Instruction overlay */}
      {!imageLoaded && (
        <div className="before-after-instruction">
          <div className="before-after-instruction-text">
            Перетащите ползунок
          </div>
        </div>
      )}
    </div>
  );
}