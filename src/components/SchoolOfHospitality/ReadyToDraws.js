import React from "react"
import Image from "next/image"
import Link from "next/link"
import Button from "../../shared/Button"

const ReadyToDraws = ({
  title = "Ready to \n Draw Your Bow?",
  subtitle = "From helping you define your goals to guiding you through every step, we're here to help you take that first shot.",
  primaryButtonText = "Apply Now",
  primaryButtonLink = "/apply",   // ✅ Dummy link
  secondaryButtonText = "Download Brochure",
  secondaryButtonLink = "/brochure.pdf",  // ✅ Dummy link
  // tertiaryButtonText = "Talk to a Counsellor",
  // tertiaryButtonLink = "/counsellor", 
  bgColor = "bg-[#A22877]",
  arrowImage = "/MBA/arrow.svg",
}) => {
  return (
    <div className={`${bgColor} py-6 sm:py-8 md:py-16`}>
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center gap-4 sm:gap-6 md:gap-8">
          {/* Left Side - Content */}
          <div className="space-y-3 sm:space-y-4 md:space-y-6">
            <h3 className="text-white text-2xl sm:text-3xl md:text-4xl playfair-300 leading-tight">
              {title.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </h3>

            <p className="text-white text-sm sm:text-base md:text-lg monser-400 leading-relaxed">
              {subtitle}
            </p>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 pt-2 text-[#002561]">
              {primaryButtonText && (
                <Link href={primaryButtonLink}>
                  <Button
                    variant="secondary"
                    className="whitespace-nowrap text-xs sm:text-sm md:text-base text-[#002561]"
                  >
                    {primaryButtonText}
                  </Button>
                </Link>
              )}

              {secondaryButtonText && (
                <Link href={secondaryButtonLink} target="_blank">
                  <Button
                    variant="secondary"
                    className="whitespace-nowrap text-xs sm:text-sm md:text-base text-[#002561]"
                  >
                    {secondaryButtonText}
                  </Button>
                </Link>
              )}

              {/* {tertiaryButtonText && (
                <Link href={tertiaryButtonLink}>
                  <Button
                    variant="secondary"
                    className="whitespace-nowrap text-xs sm:text-sm md:text-base text-[#002561]"
                  >
                    {tertiaryButtonText}
                  </Button>
                </Link>
              )} */}
            </div>
          </div>

          {/* Right Side - Arrow SVG */}
          <div className="md:w-1/3 justify-center md:justify-end hidden md:flex">
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
  )
}

export default ReadyToDraws
