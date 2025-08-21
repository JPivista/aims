"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import { HiArrowSmallLeft, HiArrowSmallRight } from "react-icons/hi2";

const images = [
  "/pre-university-college/apply_now.webp",
  "/pre-university-college/pu_distinction.webp",
  "/pre-university-college/aims.webp",
  "/pre-university-college/tennikoit.webp",
];

const ImageCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className=" bg-[#E6FAF7]">
      {/* Main Image */}
      <div className="container mx-auto flex flex-col items-center gap-6 py-12">
        <div className="relative w-full max-w-3xl h-[600px] overflow-hidden ">
          <Image
            src={images[activeIndex]}
            alt={`Slide ${activeIndex + 1}`}
            fill
            className="object-contain"
          />
        </div>

        {/* Thumbnails - show only images that are NOT active */}
        <div className="flex gap-4">
          {images
            .filter((_, index) => index !== activeIndex)
            .map((img, index) => (
              <div
                key={index}
                onClick={() => setActiveIndex(images.indexOf(img))}
                className="relative w-24 h-24 rounded-lg overflow-hidden cursor-pointer border border-gray-300 hover:border-blue-500 transition"
              >
                <Image src={img} alt={`Thumb`} fill className="object-cover" />
              </div>
            ))}
        </div>

        {/* Controls */}
        <div className="flex gap-4 mt-2">
          <button
            onClick={prevSlide}
            className="w-10 h-10 flex items-center justify-center border border-[#a22978] rounded-full bg-white shadow hover:bg-[#a22978] hover:text-white"
          >
            <HiArrowSmallLeft size={20} />
          </button>
          <button
            onClick={nextSlide}
            className="w-10 h-10 flex items-center justify-center border border-[#a22978] rounded-full bg-white shadow hover:bg-[#a22978] hover:text-white"
          >
            <HiArrowSmallRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
