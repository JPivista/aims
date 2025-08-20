import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({
  announcements,
  pageType = "centre-for-community-service",
}) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/faculty-details/desktop-banner.png"
          alt="Faculty Details"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 md:left-20 -top-10 md:top-12">
          <Image
            src="/white-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-35 h-35 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end">
          <div className="container mx-auto px-4 md:px-0 py-4 md:py-10">
            {/* Hero Text */}
            <div className="relative z-10">
              <h2 className="text-white text-2xl sm:text-3xl md:text-[70px] playfair-300">
                Faculty Member Details
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
