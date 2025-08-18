"use client"
import React from "react"
import Image from "next/image"

const Facilities = ({ title, items = [], imageSrc, imageAlt }) => {
  // If no items are provided, don't render the whole section
  if (!items.length) return null

  return (
    <div className="container mx-auto py-10 px-4">
      {title && (
        <h3 className="text-4xl font-bold text-[#1D3160] mb-4">{title}</h3>
      )}
      <div className="w-full flex flex-col md:flex-row items-center md:items-start bg-white">
        {/* Right Image - Top in mobile */}
        {imageSrc && (
          <div className="w-full md:w-[40%] flex justify-center items-center my-auto order-1 md:order-2">
            <Image
              src={imageSrc}
              alt={imageAlt || "Facilities"}
              width={800}
              height={600}
              className="object-contain"
            />
          </div>
        )}

        {/* Left Content - Below in mobile */}
        <div className="w-full md:w-[60%] container my-auto order-2 md:order-1">

          <ul className="space-y-4 list-disc pl-6">
            {items.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Facilities
