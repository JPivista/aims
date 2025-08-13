import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[83vh] overflow-hidden">
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
        <div className="absolute left-4 md:left-10 top-4 md:top-15 md:max-w-2xl">
          <Image
            src="/bba/empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full md:w-3/4 flex flex-col justify-end">
          <div className="container mx-auto px-4 md:px-20 py-8 md:py-14">
            {/* Hero Text */}
            <h2 className="text-white text-3xl md:text-[70px] playfair-500">
              Your Goal. Your AIM. <br /> Your Future.
            </h2>
            <h5 className="monser-500 text-[#C9FFF4] text-xl sm:text-2xl md:text-[48px] mt-2">
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
