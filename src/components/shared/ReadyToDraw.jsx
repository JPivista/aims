import React from "react"
import Image from "next/image"
import Button from "../../shared/Button"

const ReadyToDraw = ({ 
  title = "Ready to Draw Your Bow?",
  subtitle = "From helping you define your goals to guiding you through every step, we're here to help you take that first shot.",
  primaryButtonText = "Apply Now",
  secondaryButtonText = "Download Brochure",
  tertiaryButtonText = "Talk to a Counsellor",
  bgColor = "bg-[#A22877]",
  arrowImage = "/MBA/arrow.svg"
}) => {
  return (
    <>
      <div className={`${bgColor} py-6 sm:py-8 md:py-10`}>
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
            
            {/* Left Side - Content */}
            <div className="w-full md:w-1/2 space-y-3 sm:space-y-4 md:space-y-6">
              <h2 className="text-white text-2xl sm:text-3xl md:text-4xl playfair-300 leading-tight">
                {title}
              </h2>
              
              <p className="text-white text-sm sm:text-base md:text-lg monser-400 leading-relaxed">
                {subtitle}
              </p>
              
              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2">
                <Button 
                  variant="secondary"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                >
                  {primaryButtonText}
                </Button>
                
                <Button 
                  variant="secondary"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                >
                  {secondaryButtonText}
                </Button>
                
                <Button 
                  variant="secondary"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                >
                  {tertiaryButtonText}
                </Button>
              </div>
            </div>
            
            {/* Right Side - Arrow SVG */}
            <div className="w-full md:w-1/2 flex justify-center md:justify-end">
              <div className="relative w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48">
                <Image
                  src={arrowImage}
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
