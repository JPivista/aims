"use client"

import React from "react"

const StudentLeadSection = ({
  mobileImage,
  desktopImage,
  title,
  description,
  gradientOverlay = "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
}) => {
  // Handle case when required props are missing
  if (!mobileImage || !desktopImage || !title) {
    return (
      <div className="relative w-full md:h-[80vh] h-[90vh] overflow-hidden bg-gray-200 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-gray-600 text-2xl lg:text-3xl font-bold">
            Student Lead Section
          </h3>
          <p className="text-gray-500 mt-2">Content not available</p>
        </div>
      </div>
    )
  }

  return (
    <>
      <div
        className="relative w-full md:h-[75vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat px-4 lg:px-8"
        style={{
          backgroundImage: `url(${mobileImage})`,
        }}
      >
        {/* Desktop Background Image */}
        <div
          className="hidden md:block absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: `url(${desktopImage})`,
          }}
        ></div>
        {/* Gradient Overlay - Customizable */}
        <div
          className="absolute inset-0"
          style={{
            background: gradientOverlay,
          }}
        ></div>

        {/* Top Content Container */}
        <div className="relative z-10 h-full flex flex-col md:items-start items-center md:justify-center justify-end py-6">
          <div className="container mx-auto py-4">
            <div className="grid grid-cols-1 lg:grid-cols-5 md:grid-cols-3 gap-4 md:gap-10">
              <div className="col-span-1 md:col-span-2">
                <h3 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16 text-center md:text-left">
                  {title}
                </h3>
                {description && (
                  <p className="text-white text-lg lg:text-xl mt-4 max-w-2xl text-center md:text-left">
                    {description}
                  </p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default StudentLeadSection
