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
          src="/articles-publications/hero-banner.png"
          alt="Articles Publications"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-6 md:left-18 -top-10 md:top-12">
          <Image
            src="/black-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-35 h-35 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end md:ml-15 mb-10 text-center md:text-left">
          {/* Hero Text */}
          <div className="relative z-10">
            <h2 className="text-white text-4xl md:text-[66px] playfair-300 leading-tight tracking-wider">
              Articles and <br /> Publications
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
