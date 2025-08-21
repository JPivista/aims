import React from "react"
import Image from "next/image"

const ProgramHighlight = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/bba-aviation/student.png"
        alt="BBA Aviation Program Highlight"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/bba-aviation/mobile-student.png"
        alt="BBA Aviation Program Highlight"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col md:justify-center justify-end pb-20 md:pb-0 mt-10 md:mt-0">
        <div className="md:ml-20 md:pb-4 mb-10 md:mb-0">
          <div className="flex justify-end">
            <div className="w-full md:max-w-xl text-center md:text-left">
              <h3
                className="text-white text-xl md:text-[60px] playfair-300 leading-tight mb-3 sm:mb-4 md:mb-6"
                dangerouslySetInnerHTML={{
                  __html: "Where Our <br/> Graduates Fly",
                }}
              />
              <p className="text-white text-sm md:text-lg px-4 md:px-0 max-w-md">
                From check-in counters to corporate strategy roles, AIMers have
                landed across aviation giants and logistics leaders:
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramHighlight
