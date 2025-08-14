import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[83vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/admission-process/admission-banner.jpg"
          alt="Admission process"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 sm:left-6 md:left-10 top-4 sm:top-6 md:top-15 md:max-w-2xl">
          <Image
            src="/bba/empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 md:py-10 lg:py-14">
            {/* Hero Text */}
            <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[70px] playfair-500 leading-tight">
              Your Goal. Your AIM. <br /> Your Future.
            </h2>
            <h5 className="monser-500 text-[#C9FFF4] text-lg sm:text-xl md:text-3xl lg:text-[48px] mt-2 leading-tight">
              Admissions Process at <br /> AIMS Institutes
            </h5>
          </div>
        </div>
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
