import React from "react"
import Image from "next/image"

const ProgramHighlight = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/bba/one-degree.png"
        alt="BBA Program Highlight"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/bba/mobile-one-degree.png"
        alt="BBA Program Highlight"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center mt-30 md:mt-0 ml-0 md:ml-20">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex justify-end">
            <div className="w-full md:max-w-xl  text-center md:text-left">
              <h3
                className="text-white text-lg md:text-2xl lg:text-3xl playfair-300 leading-tight mb-3 md:mb-6 tracking-wider"
                dangerouslySetInnerHTML={{
                  __html: "One Degree. <br/> Multiple Targets.",
                }}
              />
              <p className="text-white text-sm md:text-lg max-w-md">
                Our graduates have been recruited by top companies across
                sectors.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramHighlight
