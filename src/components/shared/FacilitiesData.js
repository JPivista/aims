"use client"
import React from "react"
import Image from "next/image"

const Facilities = ({ title, items = [], imageSrc, imageAlt }) => {
  if (!items.length) return null

  return (
    <div className="lg:px-8 px-4">
      <div className="container mx-auto py-10">
        {title && (
          <h3 className="text-4xl font-bold text-[#1D3160] text-center md:text-left mb-2">
            {title}
          </h3>
        )}

        <div className="w-full flex flex-col lg:flex-row items-center bg-white md:gap-10 gap-5 pt-5 md:pt-0">
          {/* Left Content */}
          <div className="w-full md:w-full lg:w-[60%] flex justify-center md:justify-start my-auto order-2 lg:order-1 pt-5 lg:pt-0">
            <ul className="space-y-4 list-disc pl-6">
              {items.map((item, index) => (
                <li style={{ fontSize: '18px' }} key={index}>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Right Image */}
          {imageSrc && (
            <div className="w-full md:w-full lg:w-[40%] flex justify-center items-center my-auto order-1 lg:order-2">
              <Image
                src={imageSrc}
                alt={imageAlt || "Facilities"}
                width={800}
                height={600}
                className="object-contain"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Facilities
