import React from "react"
import Image from "next/image"
import Button from "../../shared/Button"

const ReadyToDraw = ({
  title = (
    <>
      Ready to <br />
      Draw Your Bow?
    </>
  ),
  subtitle = "From helping you define your goals to guiding you through every step, we're here to help you take that first shot.",
  primaryButtonText = "Apply Now",
  secondaryButtonText = "Download Brochure",
  tertiaryButtonText = null,
  bgColor = "bg-[#A22877]",
  arrowImage = "/MBA/arrow.svg",
}) => {
  return (
    <div className={`${bgColor} px-4 lg:px-8`}>
      <div className="py-6 md:py-10">
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8 container mx-auto">
          {/* Left Side - Content */}
          <div className="w-full space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-white text-2xl md:text-5xl playfair-300">
              {title}
            </h3>

            <p className="text-white text-sm sm:text-base md:text-lg montser-400 leading-relaxed">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2">
              {primaryButtonText && (
                <Button
                  variant="secondary"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                  href="https://apply.theaims.ac.in/login"
                  target="_blank"
                >
                  {primaryButtonText}
                </Button>
              )}

              {secondaryButtonText && (
                <Button
                  variant="secondary"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                  href="https://enquiry.theaims.ac.in/"
                  target="_blank"
                >
                  {secondaryButtonText}
                </Button>
              )}

              {tertiaryButtonText && tertiaryButtonText.trim() !== "" && (
                <Button
                  variant="secondary"
                  className="whitespace-nowrap text-xs sm:text-sm md:text-base"
                  href="https://enquiry.theaims.ac.in/"
                  target="_blank"
                >
                  {tertiaryButtonText}
                </Button>
              )}
            </div>
          </div>

          {/* Right Side - Arrow SVG */}
          <div className="md:w-1/3 hidden md:flex justify-center md:justify-end">
            <Image
              src={arrowImage}
              alt="Arrow"
              width={1028}
              height={1028}
              className="w-44 h-44"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ReadyToDraw
