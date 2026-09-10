import React, { useRef, useState, useEffect } from 'react';

interface EditorialVideoProps {
  src?: string;
  fallbackImage?: string;
  caption?: string;
  aspectRatio?: string;
  className?: string;
  ariaTitle?: string;
}

export const EditorialVideo: React.FC<EditorialVideoProps> = ({
  src,
  fallbackImage,
  caption,
  aspectRatio = 'aspect-[16/9]',
  className = '',
  ariaTitle = 'Демонстрация игрового процесса',
}) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [manuallyPaused, setManuallyPaused] = useState(false);
  const [hasReducedMotion, setHasReducedMotion] = useState(false);

  // Check prefers-reduced-motion
  useEffect(() => {
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setHasReducedMotion(mediaQuery.matches);

    const handleMotionChange = (e: MediaQueryListEvent) => {
      setHasReducedMotion(e.matches);
      if (e.matches && videoRef.current) {
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    mediaQuery.addEventListener?.('change', handleMotionChange);
    return () => mediaQuery.removeEventListener?.('change', handleMotionChange);
  }, []);

  // IntersectionObserver to auto-play when ~45-50% visible, pause on exit
  useEffect(() => {
    const videoEl = videoRef.current;
    const containerEl = containerRef.current;
    if (!videoEl || !containerEl || !src) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && entry.intersectionRatio >= 0.45) {
            if (!manuallyPaused && !hasReducedMotion) {
              const playPromise = videoEl.play();
              if (playPromise !== undefined) {
                playPromise
                  .then(() => {
                    setIsPlaying(true);
                  })
                  .catch(() => {
                    // Autoplay prevented by browser
                  });
              }
            }
          } else {
            videoEl.pause();
            setIsPlaying(false);
          }
        });
      },
      {
        threshold: [0, 0.45, 0.5, 1.0],
      }
    );

    observer.observe(containerEl);

    return () => {
      observer.disconnect();
    };
  }, [src, manuallyPaused, hasReducedMotion]);

  const togglePlayPause = (e: React.MouseEvent) => {
    e.stopPropagation();
    const videoEl = videoRef.current;
    if (!videoEl) return;

    if (isPlaying) {
      videoEl.pause();
      setIsPlaying(false);
      setManuallyPaused(true);
    } else {
      videoEl
        .play()
        .then(() => {
          setIsPlaying(true);
          setManuallyPaused(false);
        })
        .catch(() => {});
    }
  };

  return (
    <div className={`w-full ${className}`}>
      <div
        ref={containerRef}
        className={`relative w-full ${aspectRatio} rounded-[12px] sm:rounded-[16px] overflow-hidden bg-black/5`}
      >
        {src ? (
          <>
            <video
              ref={videoRef}
              src={src}
              poster={fallbackImage}
              muted
              loop
              playsInline
              preload="metadata"
              aria-label={ariaTitle}
              className="w-full h-full object-cover block"
              onPlay={() => setIsPlaying(true)}
              onPause={() => setIsPlaying(false)}
            />
            {/* Minimal accessible Play/Pause button */}
            <button
              type="button"
              onClick={togglePlayPause}
              aria-label={isPlaying ? 'Приостановить видео' : 'Воспроизвести видео'}
              className="absolute bottom-3 right-3 sm:bottom-4 sm:right-4 w-[32px] h-[32px] sm:w-[36px] sm:h-[36px] rounded-full bg-black/40 hover:bg-black/60 text-white flex items-center justify-center backdrop-blur-md transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white z-10 cursor-pointer"
            >
              {isPlaying ? (
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current"
                  viewBox="0 0 24 24"
                >
                  <rect x="6" y="4" width="4" height="16" rx="1" />
                  <rect x="14" y="4" width="4" height="16" rx="1" />
                </svg>
              ) : (
                <svg
                  className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-current ml-0.5"
                  viewBox="0 0 24 24"
                >
                  <polygon points="6 4 20 12 6 20 6 4" />
                </svg>
              )}
            </button>
          </>
        ) : (
          <img
            src={fallbackImage}
            alt={ariaTitle}
            className="w-full h-full object-cover block"
            loading="lazy"
          />
        )}
      </div>

      {caption && (
        <p className="text-[13px] sm:text-[14px] leading-[1.4] text-[#6e6e73] mt-[10px] sm:mt-[12px] font-normal m-0">
          {caption}
        </p>
      )}
    </div>
  );
};
