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
      <div className="relative z-10 h-full flex flex-col md:justify-center justify-end pb-20 md:pb-0 mt-10 md:mt-0">
        <div className="md:ml-20 md:pb-4">
          <div className="flex justify-end">
            <div className="w-full md:max-w-xl  md:mb-0 mb-15 text-center md:text-left">
              <h3
                className="text-white text-lg md:text-2xl lg:text-3xl xl:text-[60px] playfair-300 leading-tight mb-3 sm:mb-4 md:mb-6 tracking-wider"
                dangerouslySetInnerHTML={{
                  __html: "One Degree. <br/> Multiple Targets.",
                }}
              />
              <p className="text-white text-sm md:text-lg px-4 md:px-0 max-w-md">
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
