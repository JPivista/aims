import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bba/bba-banner.jpg"
          alt="AIMS Student"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 md:left-12 top-4  md:top-12 md:max-w-2xl">
          <Image
            src="/white-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-40 h-40 md:w-full md:h-full "
            priority
          />
        </div>
        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end">
          <div className="container mx-auto px-4  md:px-2  py-4 sm:py-6 md:py-10 lg:py-14">
            {/* Hero Text */}
            <h1 className="text-white text-2xl md:text-[80px] playfair-300 leading-tight tracking-wider ">
              <span className="italic playfair-300">BBA</span> at AIMS
            </h1>
            <h3 className="playfair-300 text-[#C9FFF4] text-xl md:text-[60px] mt-2 leading-tight tracking-wider">
              Sharpen Your Aim. Step Into <br /> Business With Confidence.
            </h3>
          </div>
        </div>
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
