import React from "react"
import Image from "next/image"

const InfoBoxes = ({ boxes }) => {
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="">
        {/* Mobile: Column Layout with Horizontal Arrows */}
        <div className="flex flex-col  gap-4 md:hidden ">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="group relative bg-white hover:bg-[#C9FFF4] transition-all duration-300 transform hover:translate-y-2 cursor-pointer w-full rounded-lg py-4 px-4"
            >
              {/* Content */}
              <div className="ml-4">
                <div
                  className="text-xl font-bold mb-2"
                  style={{ color: "#A22877", fontFamily: "Helvetica Neue" }}
                >
                  {box.number}
                </div>
                <h5 className="text-base text-[#A22877] mb-2 monser-600 leading-tight">
                  {box.title}
                </h5>
                <p className="text-sm text-[#0C2165] monser-400 leading-relaxed">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Desktop: Horizontal Scroll Layout with Vertical Arrows */}
        <div className="hidden md:flex overflow-x-auto gap-2 sm:gap-3 md:gap-4 pb-4">
          {boxes.map((box, index) => (
            <div
              key={index}
              className="group relative bg-white hover:bg-[#C9FFF4] transition-all duration-300 transform hover:translate-y-4 cursor-pointer flex-shrink-0 w-[140px] sm:w-[160px] md:w-[200px] lg:w-[250px] rounded-lg py-3 sm:py-4"
            >
              {/* Vertical Arrow SVG - visible by default, disappears on hover */}
              <div className="absolute left-1 sm:left-2 top-2 bottom-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center">
                <svg
                  width="8"
                  height="80"
                  viewBox="0 0 8 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-1.5 sm:w-2 h-full"
                >
                  <path
                    d="M4.35355 0.146447C4.15829 -0.0488156 3.84171 -0.0488155 3.64645 0.146447L0.464466 3.32843C0.269204 3.52369 0.269204 3.84027 0.464466 4.03553C0.659728 4.2308 0.976311 4.2308 1.17157 4.03553L4 1.20711L6.82843 4.03553C7.02369 4.2308 7.34027 4.2308 7.53553 4.03553C7.7308 3.84027 7.7308 3.52369 7.53553 3.32843L4.35355 0.146447ZM4 0.5L3.5 0.5L3.50001 398.5L4.00001 398.5L4.50001 398.5L4.5 0.5L4 0.5Z"
                    fill="black"
                  />
                </svg>
              </div>

              {/* Content */}
              <div className="ml-4 sm:ml-6 md:ml-8">
                <div
                  className="text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold mb-1 sm:mb-2"
                  style={{ color: "#A22877", fontFamily: "Helvetica Neue" }}
                >
                  {box.number}
                </div>
                <h5 className="text-xs sm:text-sm md:text-base lg:text-[22px] text-[#A22877] mb-1 sm:mb-2 monser-600 leading-tight">
                  {box.title}
                </h5>
                <p className="text-[10px] sm:text-xs md:text-sm lg:text-xs text-[#A22877] monser-400 leading-tight">
                  {box.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default InfoBoxes
