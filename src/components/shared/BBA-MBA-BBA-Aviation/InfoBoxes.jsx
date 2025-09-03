import React from "react"
import Image from "next/image"

const InfoBoxes = ({
  boxes,
  className = "",
  boxBg = "bg-white",
  boxHoverBg = "hover:bg-[#C9FFF4]",
  numberColor = "text-[#A22877]",
  titleColor = "text-[#A22877]",
  descColor = "text-[#0C2165]",
}) => {
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className={`container mx-auto ${className}`}>
          <div>
            {/* Mobile: Column Layout */}
            <div className="flex flex-col gap-4 lg:hidden">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`group relative ${boxBg} ${boxHoverBg} transition-all duration-300 transform hover:translate-y-2 cursor-pointer w-full rounded-lg py-4 md:px-4`}
                >
                  {/* Content */}
                  <div className="ml-4">
                    <div
                      className={`text-xl font-bold mb-2 ${numberColor}`}
                      style={{ fontFamily: "Helvetica Neue" }}
                    >
                      {box.number}
                    </div>
                    <h5
                      className={`text-base ${titleColor} mb-2 monser-600 leading-tight`}
                    >
                      {box.title}
                    </h5>
                    <p
                      className={`text-sm ${descColor} monser-400 leading-relaxed`}
                    >
                      {box.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Desktop: Horizontal Layout */}
            <div className="hidden lg:grid overflow-x-auto gap-2 lg:gap-4 pb-8 lg:grid-cols-5">
              {boxes.map((box, index) => (
                <div
                  key={index}
                  className={`group relative ${boxBg} ${boxHoverBg} transition-all duration-300 transform hover:translate-y-4 cursor-pointer flex-shrink-0 w-[140px] lg:w-[250px] rounded-lg h-[200px] flex flex-col justify-center`}
                >
                  {/* Arrow */}
                  <div className="absolute left-1 top-2 bottom-2 opacity-100 group-hover:opacity-0 transition-opacity duration-300 flex items-center group-hover:hidden">
                    <Image
                      src="/bba/arrow.svg"
                      alt="Arrow"
                      width={8}
                      height={149}
                      className="w-full h-full object-contain"
                    />
                  </div>

                  {/* Content */}
                  <div className="ml-4 sm:ml-6 md:ml-8 group-hover:ml-2 transition-all duration-300">
                    <div
                      className={`text-lg sm:text-xl md:text-2xl lg:text-[24px] font-bold mb-1 sm:mb-2 ${numberColor}`}
                      style={{ fontFamily: "Helvetica Neue" }}
                    >
                      {box.number}
                    </div>
                    <h5
                      className={`text-xs md:text-base lg:text-[20px] ${titleColor} mb-1 sm:mb-2 monser-600 leading-tight`}
                    >
                      {box.title}
                    </h5>
                    <p
                      className={`text-[10px] md:text-sm lg:text-[14px] ${descColor} monser-400 leading-tight break-words`}
                    >
                      {box.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default InfoBoxes
