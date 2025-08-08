import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const ReadyToDraw = () => {
  return (
    <>
      <div className="bg-[#A22877] py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
          <div className="flex flex-col lg:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            
            {/* Left Side - Content */}
            <div className="w-full lg:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl 3xl:text-[68px] playfair-300 leading-tight">
                Ready to <br/> Draw Your Bow?
              </h2>
              
              <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl monser-400 leading-relaxed">
                From helping you define your goals to guiding you through every step, we're here to help you take that first shot.
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-8 pt-2">
                <Button 
                  variant="secondary"
                  className="bg-white text-[#A22877] hover:bg-gray-100 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Apply Now
                </Button>
                
                <Button 
                  variant="secondary"
                  className="bg-white text-[#A22877] hover:bg-gray-100 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Download Brochure
                </Button>
                
                <Button 
                  variant="secondary"
                  className="bg-white text-[#A22877] hover:bg-gray-100 whitespace-nowrap text-xs sm:text-sm md:text-base lg:text-lg"
                >
                  Talk to a Counsellor
                </Button>
              </div>
            </div>
            
            {/* Right Side - Arrow SVG */}
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-56 lg:h-56 xl:w-64 xl:h-64">
                <Image
                  src="/MBA/arrow.svg"
                  alt="Arrow"
                  width={256}
                  height={256}
                  className="w-full h-full object-contain"
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ReadyToDraw
