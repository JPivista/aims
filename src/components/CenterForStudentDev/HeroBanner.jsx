import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[83vh] xl:h-[83vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/student-development/student-dev-banner.png"
          alt="Admission process"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 xl:left-20 top-4 sm:top-6 md:top-8 lg:top-10 xl:top-10">
          <Image
            src="/bba/empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-full lg:h-full xl:w-full xl:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end px-4 sm:px-6 md:px-8 lg:ml-20 xl:ml-20 mb-4 sm:mb-6 md:mb-8 lg:mb-10 xl:mb-10">
          {/* Hero Text */}
          <div className="relative z-10">
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[65px] xl:text-[65px] playfair-300 leading-tight">
              AIMS Centre for <br /> Student Development (ACSD)
            </h2>
          </div>
        </div>
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
