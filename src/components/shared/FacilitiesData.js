"use client"
import React from "react"
import Image from "next/image"

const Facilities = ({ title, items = [], imageSrc, imageAlt }) => {
  // If no items are provided, don't render the whole section
  if (!items.length) return null

  return (
    <>
      <div className="lg:px-8 px-4">
        <div className="container mx-auto py-10">
          {title && (
            <h3 className="text-4xl font-bold text-[#1D3160] text-center md:text-left" style={{ marginBottom: "10px" }}>
              {title}
            </h3>
          )}
          <div className="w-full flex flex-col lg:flex-row items-center bg-white">
            {/* Right Image */}
            {imageSrc && (
              <div className="w-full md:w-full lg:w-[40%] flex justify-center items-center my-auto order-1">
                <Image
                  src={imageSrc}
                  alt={imageAlt || "Facilities"}
                  width={800}
                  height={600}
                  className="object-contain"
                />
              </div>
            )}

            {/* Left Content */}
            <div className="w-full md:w-full lg:w-[60%] my-auto flex justify-center md:justify-start pt-5 md:pt-5 lg:pt-0 order-2">
              <ul className="space-y-4 list-disc pl-6">
                {items.map((item, index) => (
                  <li style={{ fontSize: '18px' }} key={index}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </>
  )
}

export default Facilities
