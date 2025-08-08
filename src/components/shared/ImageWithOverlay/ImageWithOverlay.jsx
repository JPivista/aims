import React from "react"
import Image from "next/image"

const ImageWithOverlay = ({ 
  imageSrc, 
  imageAlt, 
  heading, 
  paragraph, 
  gradientColor = "var(--Aims-Blue, #0C2165)",
  overlayWidth = "w-1/2"
}) => {
  return (
    <div className="relative">
      <div className="w-full h-auto">
        <Image
          src={imageSrc}
          alt={imageAlt}
          width={800}
          height={400}
          className="w-full h-auto"
          priority
        />
      </div>
      
      {/* Gradient Overlay */}
      <div 
        className={`absolute inset-0 ${overlayWidth} h-full`}
        style={{
          background: `linear-gradient(90deg, ${gradientColor} 1.84%, ${gradientColor} 64.13%, rgba(12, 33, 101, 0.00) 100%)`
        }}
      ></div>
      
      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center">
        <div className={`${overlayWidth} px-4 sm:px-6 md:px-8 lg:px-12 xl:px-16`}>
          <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-6xl playfair-300 mb-3 sm:mb-4 md:mb-6 leading-tight">
            {heading}
          </h2>
          <p className="text-white text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl monser-400 leading-relaxed">
            {paragraph}
          </p>
        </div>
      </div>
    </div>
  )
}

export default ImageWithOverlay
