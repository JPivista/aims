import React from "react"
import Image from "next/image"

const ProgramHighlight = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[90vh] lg:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/MBA/student.webp"
        alt="MBA Program Highlight"
        fill
        className="hidden lg:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/MBA/mobile-student.webp"
        alt="MBA Program Highlight"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Tablet Background Image - Same as mobile but with different positioning */}
      <Image
        src="/MBA/mobile-student.webp"
        alt="MBA Program Highlight"
        fill
        className="hidden md:block lg:hidden object-cover object-top"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-end md:justify-end lg:justify-center pb-20 md:pb-0 lg:pb-0 mt-10 md:mt-0 lg:mt-0 px-4 md:px-8 lg:px-8">
        <div className="container mx-auto">
          <div className="flex justify-start md:justify-center lg:justify-start ">
            <div className="w-full md:max-w-2xl lg:max-w-2xl text-center md:text-center lg:text-left md:mb-10 lg:mb-0">
              <h3
                className="text-white text-lg sm:text-xl md:!text-5xl lg:!text-[60px] playfair-300 leading-tight mb-3 sm:mb-4 md:mb-6 lg:mb-6 tracking-wider"
                dangerouslySetInnerHTML={{
                  __html:
                    "Companies <br/> Our Students Have <br/> Been Placed In",
                }}
              />
              <p className="text-white text-sm md:text-lg lg:text-lg px-4 md:px-0 lg:px-0 lg:max-w-lg">
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
