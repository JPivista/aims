import React from "react"
import Image from "next/image"

const ProgramHighlight = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/MBA/student.png"
        alt="MBA Program Highlight"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/MBA/mobile-student.png"
        alt="MBA Program Highlight"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col md:justify-center justify-end pb-20 md:pb-0 mt-10 md:mt-0">
        <div className="container mx-auto px-4 md:px-0">
          <div className="flex justify-start">
            <div className="w-full md:max-w-2xl text-center md:text-left">
              <h3
                className="text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[60px] playfair-300 leading-tight mb-3 sm:mb-4 md:mb-6 tracking-wider"
                dangerouslySetInnerHTML={{
                  __html:
                    "Companies <br/> Our Students Have <br/> Been Placed In",
                }}
              />
              <p className="text-white text-sm md:text-lg px-4 md:px-0 max-w-lg">
                Our MBA graduates have found opportunities with a wide range of
                dependable recruiters from across industries, including:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramHighlight
