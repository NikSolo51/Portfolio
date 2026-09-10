import React, { useRef, useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { EditorialVideo } from './EditorialVideo';

export interface PowerupItem {
  id: string;
  title: string;
  description: string;
  video: string;
}

interface PowerupsShowcaseProps {
  items: PowerupItem[];
}

export const PowerupsShowcase: React.FC<PowerupsShowcaseProps> = ({ items }) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const touchStartX = useRef<number | null>(null);

  // Track container width accurately with ResizeObserver
  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const updateWidth = () => {
      setContainerWidth(el.clientWidth);
    };

    updateWidth();
    const observer = new ResizeObserver(updateWidth);
    observer.observe(el);

    return () => {
      observer.disconnect();
    };
  }, []);

  // Card width and gap sizing
  const isMobile = containerWidth < 640;
  const cardWidth = containerWidth > 0
    ? isMobile
      ? Math.max(270, Math.min(containerWidth * 0.82, 380))
      : Math.min(containerWidth * 0.65, 880)
    : 760;
  const gap = isMobile ? 16 : 32;

  // Center the active card in the showcase container
  const centerOffset = containerWidth / 2;
  const activeCenter = activeIndex * (cardWidth + gap) + cardWidth / 2;
  const translateX = containerWidth > 0 ? centerOffset - activeCenter : 0;

  // Touch swipe support
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartX.current === null) return;
    const deltaX = e.changedTouches[0].clientX - touchStartX.current;
    if (deltaX > 45 && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (deltaX < -45 && activeIndex < items.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
    touchStartX.current = null;
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowLeft' && activeIndex > 0) {
      setActiveIndex((prev) => prev - 1);
    } else if (e.key === 'ArrowRight' && activeIndex < items.length - 1) {
      setActiveIndex((prev) => prev + 1);
    }
  };

  return (
    <div
      ref={containerRef}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      role="region"
      aria-label="Интерактивная галерея способностей диска"
      className="relative w-full bg-[#f5f5f7] py-8 sm:py-12 lg:py-16 overflow-hidden select-none focus-visible:outline-none"
    >
      {/* Horizontal Carousel Track */}
      <div
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
        className="w-full relative overflow-visible"
      >
        <div
          className="flex items-start transition-transform duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] will-change-transform"
          style={{
            transform: `translateX(${translateX}px)`,
            gap: `${gap}px`,
          }}
        >
          {items.map((item, index) => {
            const isActive = index === activeIndex;

            return (
              <div
                key={item.id}
                onClick={() => {
                  if (!isActive) setActiveIndex(index);
                }}
                className={`shrink-0 flex flex-col transition-all duration-500 ease-[cubic-bezier(0.2,0.8,0.2,1)] ${
                  isActive
                    ? 'opacity-100 scale-100 cursor-default'
                    : 'opacity-40 hover:opacity-75 scale-[0.93] sm:scale-[0.95] cursor-pointer'
                }`}
                style={{ width: `${cardWidth}px` }}
              >
                {/* Media frame: Aspect 16:9, rounded-[16px] */}
                <div className="relative w-full aspect-[16/9] rounded-[14px] sm:rounded-[18px] overflow-hidden bg-black/5 shadow-xs">
                  {isActive ? (
                    <EditorialVideo
                      key={item.id}
                      src={item.video}
                      aspectRatio="aspect-[16/9]"
                      ariaTitle={`${item.title}: демонстрация способности`}
                    />
                  ) : (
                    <div className="relative w-full h-full">
                      <video
                        src={item.video}
                        preload="metadata"
                        muted
                        playsInline
                        tabIndex={-1}
                        aria-hidden="true"
                        className="w-full h-full object-cover pointer-events-none block"
                      />
                      <div className="absolute inset-0 bg-transparent" />
                    </div>
                  )}
                </div>

                {/* Card Title & Description */}
                <div className={`mt-4 sm:mt-5 transition-opacity duration-300 ${isActive ? 'opacity-100' : 'opacity-70'}`}>
                  <h4 className="text-[19px] sm:text-[21px] md:text-[22px] font-semibold text-[#1d1d1f] leading-snug">
                    {item.title}
                  </h4>
                  <p className="text-[14px] sm:text-[15px] md:text-[16px] leading-[1.5] text-[#6e6e73] font-normal mt-1 m-0 [text-wrap:pretty]">
                    {item.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Indicators & Controls */}
      <div className="flex items-center justify-center gap-3 sm:gap-4 mt-7 sm:mt-9">
        <button
          type="button"
          onClick={() => setActiveIndex((prev) => Math.max(0, prev - 1))}
          disabled={activeIndex === 0}
          aria-label="Предыдущая способность"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-[#1d1d1f] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f]"
        >
          <ChevronLeft className="w-4 h-4" />
        </button>

        {/* Pill indicators */}
        <div className="flex items-center gap-2">
          {items.map((item, idx) => (
            <button
              key={item.id}
              type="button"
              onClick={() => setActiveIndex(idx)}
              aria-label={`Перейти к способности: ${item.title}`}
              aria-current={idx === activeIndex ? 'true' : undefined}
              className={`transition-all duration-300 rounded-full cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f] ${
                idx === activeIndex
                  ? 'w-7 sm:w-8 h-2 sm:h-2.5 bg-[#1d1d1f]'
                  : 'w-2 sm:w-2.5 h-2 sm:h-2.5 bg-[#d2d2d7] hover:bg-[#86868b]'
              }`}
            />
          ))}
        </div>

        <button
          type="button"
          onClick={() => setActiveIndex((prev) => Math.min(items.length - 1, prev + 1))}
          disabled={activeIndex === items.length - 1}
          aria-label="Следующая способность"
          className="w-8 h-8 rounded-full flex items-center justify-center bg-white/80 hover:bg-white text-[#1d1d1f] disabled:opacity-30 disabled:cursor-not-allowed transition-all shadow-xs cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#1d1d1f]"
        >
          <ChevronRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
