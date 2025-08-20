import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/admission-process/hero-banner.png"
          alt="Admission process"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 md:left-10 top-4 md:top-13 md:max-w-2xl">
          <Image
            src="/white-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-40 h-40 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end">
          <div className="mx-4 sm:mx-8 md:mx-12 lg:mx-20 py-14">
            {/* Hero Text */}
            <h2 className="text-white text-2xl md:text-[65px] playfair-500 leading-tight tracking-wider">
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
