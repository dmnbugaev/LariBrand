'use client'

import { useState, useRef, useEffect, useCallback, memo } from 'react'

interface BeforeAfterSliderProps {
  beforeImage: string
  afterImage: string
  className?: string
}

export const BeforeAfterSlider = memo(function BeforeAfterSlider({
  beforeImage,
  afterImage,
  className = '',
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState<number>(50)
  const [isDragging, setIsDragging] = useState<boolean>(false)
  const [imageLoaded, setImageLoaded] = useState<boolean>(false)
  const containerRef = useRef<HTMLDivElement>(null)

  const handleMove = useCallback((clientX: number): void => {
    if (!containerRef.current) return
    const rect = containerRef.current.getBoundingClientRect()
    const x = clientX - rect.left
    const percentage = (x / rect.width) * 100
    setSliderPosition(Math.min(Math.max(percentage, 0), 100))
  }, [])

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>): void => {
    if (!isDragging) return
    handleMove(e.clientX)
  }, [isDragging, handleMove])

  const handleTouchMove = useCallback((e: React.TouchEvent<HTMLDivElement>): void => {
    if (e.touches.length > 0) handleMove(e.touches[0].clientX)
  }, [handleMove])

  useEffect(() => {
    const handleGlobalMouseUp = () => setIsDragging(false)
    const handleGlobalMouseMove = (e: MouseEvent) => {
      if (!isDragging || !containerRef.current) return
      handleMove(e.clientX)
    }

    if (isDragging) {
      document.addEventListener('mouseup', handleGlobalMouseUp)
      document.addEventListener('mousemove', handleGlobalMouseMove)
    }

    return () => {
      document.removeEventListener('mouseup', handleGlobalMouseUp)
      document.removeEventListener('mousemove', handleGlobalMouseMove)
    }
  }, [isDragging, handleMove])

  const ChevronLeft = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="absolute left-[4px] w-4 h-4 text-[#374151]"
    >
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  const ChevronRight = () => (
    <svg
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      className="absolute right-[4px] w-4 h-4 text-[#374151]"
    >
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )

  return (
    <div
      ref={containerRef}
      className={`relative w-full h-full overflow-hidden cursor-ew-resize select-none rounded-[8px] shadow-[0_4px_20px_rgba(0,0,0,0.15)] bg-[#f5f5f5] ${className}`}
      onMouseMove={handleMouseMove}
      onMouseDown={() => setIsDragging(true)}
      onMouseUp={() => setIsDragging(false)}
      onTouchMove={handleTouchMove}
      onTouchStart={() => setIsDragging(true)}
      onTouchEnd={() => setIsDragging(false)}
    >
      {/* Before Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`, zIndex: 10 }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center">
          <img
            src={beforeImage}
            alt="До"
            className="w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => { (e.target as HTMLImageElement).src = '/fallback-image.jpg' }}
          />
        </div>
        <div className="absolute top-4 left-4 text-white py-[6px] px-4 rounded-full text-sm font-medium z-20 backdrop-blur-sm bg-black/70 pointer-events-none max-[640px]:top-3 max-[640px]:left-3 max-[640px]:text-[13px] max-[640px]:px-3">
          До
        </div>
      </div>

      {/* After Image */}
      <div
        className="absolute top-0 left-0 w-full h-full"
        style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)`, zIndex: 5 }}
      >
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden flex justify-center items-center">
          <img
            src={afterImage}
            alt="После"
            className="w-full h-full object-cover object-center pointer-events-none transition-opacity duration-300"
            onLoad={() => setImageLoaded(true)}
            onError={(e) => { (e.target as HTMLImageElement).src = '/fallback-image.jpg' }}
          />
        </div>
        <div className="absolute top-4 right-4 text-white py-[6px] px-4 rounded-full text-sm font-medium z-20 backdrop-blur-sm bg-black/70 pointer-events-none max-[640px]:top-3 max-[640px]:right-3 max-[640px]:text-[13px] max-[640px]:px-3">
          После
        </div>
      </div>

      {/* Slider Line */}
      <div
        className="absolute top-0 bottom-0 w-[2px] bg-white shadow-lg pointer-events-none z-[15] -translate-x-1/2"
        style={{ left: `${sliderPosition}%` }}
      >
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center pointer-events-none z-[16] max-[640px]:w-10 max-[640px]:h-10">
          <ChevronLeft />
          <ChevronRight />
        </div>
      </div>

      {/* Instruction overlay */}
      {!imageLoaded && (
        <div className="before-after-instruction absolute inset-0 pointer-events-none flex items-end justify-center pb-5 transition-[background-color] duration-150 z-[25]">
          <div className="before-after-instruction-text opacity-0 bg-white/95 backdrop-blur-sm py-[10px] px-5 rounded-full text-sm text-[#374151] font-medium transition-opacity duration-150">
            Перетащите ползунок
          </div>
        </div>
      )}
    </div>
  )
})
