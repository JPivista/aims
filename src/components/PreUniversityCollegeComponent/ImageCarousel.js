"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const images = [
  "/pre-university-college/apply_now.webp",
  "/pre-university-college/pu_distinction.webp",
  "/pre-university-college/aims.webp",
  "/pre-university-college/tennikoit.webp",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Start from 1 because of cloned slide
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const slideRef = useRef(null);
  const intervalRef = useRef(null);

  const totalSlides = images.length;

  const slides = [
    images[totalSlides - 1], // Clone of last image at the start
    ...images,
    images[0], // Clone of first image at the end
  ];

  // Auto-slide every 4 seconds
  const startAutoPlay = useCallback(() => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      if (isAutoPlaying) {
        nextSlide();
      }
    }, 4000);
  }, [isAutoPlaying]);

  useEffect(() => {
    startAutoPlay();
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [startAutoPlay]);

  const nextSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  }, [isTransitioning]);

  const prevSlide = useCallback(() => {
    if (isTransitioning) return;
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  }, [isTransitioning]);

  // Handle transition end to reset position if needed
  const handleTransitionEnd = useCallback(() => {
    setIsTransitioning(false);
    if (activeIndex === slides.length - 1) {
      // Moved to the cloned first slide
      setActiveIndex(1);
      if (slideRef.current) {
        slideRef.current.style.transition = "none";
        slideRef.current.style.transform = `translateX(-100%)`;
      }
    } else if (activeIndex === 0) {
      // Moved to the cloned last slide
      setActiveIndex(totalSlides);
      if (slideRef.current) {
        slideRef.current.style.transition = "none";
        slideRef.current.style.transform = `translateX(-${totalSlides * 100}%)`;
      }
    }
  }, [activeIndex, totalSlides]);

  useEffect(() => {
    if (slideRef.current) {
      if (!isTransitioning) {
        // Prevent animation when jump happens
        slideRef.current.style.transition = "none";
      } else {
        slideRef.current.style.transition = "transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)";
      }
      slideRef.current.style.transform = `translateX(-${activeIndex * 100}%)`;
    }
  }, [activeIndex, isTransitioning]);

  // Touch handlers for mobile swipe
  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
    setIsAutoPlaying(false);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      nextSlide();
    } else if (isRightSwipe) {
      prevSlide();
    }

    // Resume auto-play after 2 seconds
    setTimeout(() => {
      setIsAutoPlaying(true);
    }, 2000);
  };

  // Pause auto-play on hover (desktop)
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  return (
    <div className="bg-[#E6FAF7]">
      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col items-center gap-4 sm:gap-6 py-8 sm:py-12">
          {/* Carousel Container */}
          <div
            className="relative w-full max-w-xs sm:max-w-md md:max-w-2xl lg:max-w-3xl xl:max-w-4xl h-[250px] sm:h-[400px] md:h-[500px] lg:h-[600px] overflow-hidden rounded-lg shadow-lg"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div
              ref={slideRef}
              className="flex h-full"
              onTransitionEnd={handleTransitionEnd}
            >
              {slides.map((img, index) => (
                <div
                  key={index}
                  className="relative w-full h-full flex-shrink-0"
                >
                  <Image
                    src={img}
                    alt={`Slide ${index}`}
                    fill
                    className="object-contain"
                    priority={index <= 2} // Prioritize first few images
                  />
                </div>
              ))}
            </div>

            {/* Mobile Indicators */}
            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex gap-2 md:hidden">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsTransitioning(true);
                    setActiveIndex(index + 1);
                  }}
                  className={`w-2 h-2 rounded-full transition-all duration-300 ${activeIndex === index + 1
                    ? "bg-white scale-125"
                    : "bg-white/50"
                    }`}
                />
              ))}
            </div>
          </div>

          {/* Thumbnails - Hidden on mobile, shown on tablet and desktop */}
          <div className="hidden sm:flex gap-2 md:gap-4 px-4 max-w-full">
            {images.map((img, index) => (
              <div
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setActiveIndex(index + 1);
                }}
                className={`relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 rounded-lg overflow-hidden cursor-pointer border-2 flex-shrink-0 transition-all duration-300 ${activeIndex === index + 1
                  ? "border-[#a22978] scale-105 shadow-lg"
                  : "border-gray-300 hover:border-[#a22978] hover:scale-105"
                  }`}
              >
                <Image
                  src={img}
                  alt={`Thumb ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="flex gap-3 sm:gap-4 mt-2">
            <button
              onClick={prevSlide}
              disabled={isTransitioning}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-[#a22978] rounded-full bg-white shadow-md hover:bg-[#a22978] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              aria-label="Previous slide"
            >
              <HiArrowSmallLeft size={16} className="sm:w-5 sm:h-5" />
            </button>
            <button
              onClick={nextSlide}
              disabled={isTransitioning}
              className="w-8 h-8 sm:w-10 sm:h-10 flex items-center justify-center border-2 border-[#a22978] rounded-full bg-white shadow-md hover:bg-[#a22978] hover:text-white transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed active:scale-95"
              aria-label="Next slide"
            >
              <HiArrowSmallRight size={16} className="sm:w-5 sm:h-5" />
            </button>
          </div>

          {/* Slide Counter - Desktop only */}
          {/* <div className="hidden lg:flex items-center gap-2 text-sm text-gray-600">
          <span className="font-medium">{activeIndex > totalSlides ? 1 : activeIndex < 1 ? totalSlides : activeIndex}</span>
          <span>/</span>
          <span>{totalSlides}</span>
        </div> */}
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
