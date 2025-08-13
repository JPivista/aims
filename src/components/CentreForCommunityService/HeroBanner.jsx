import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({
  announcements,
  pageType = "centre-for-community-service",
}) => {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[83vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/community-service/cs-banner.png"
          alt="Community Service"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 sm:left-8 md:left-12 lg:left-20 top-4 sm:top-8 md:top-12 lg:top-20">
          <Image
            src="/bba/empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-4 sm:py-6 md:py-10 lg:py-14">
            {/* Hero Text */}
            <div className="relative z-10">
              <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[70px] playfair-500 leading-tight">
                Centre for Community Service
              </h2>
            </div>
          </div>
        </div>
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
