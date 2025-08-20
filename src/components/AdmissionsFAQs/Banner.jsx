import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/admission-faqs/hero-banner.png"
          alt="Admission process"
          width={1920}
          height={1080}
          className="hidden md:block w-full h-full object-cover"
          priority
        />

        {/* Mobile Background Image */}
        <Image
          src="/admission-faqs/mobile-banner.png"
          alt="Admission process"
          width={1920}
          height={1080}
          className="block md:hidden w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute left-4 md:right-20 md:left-auto -top-5 md:top-10 max-w-[250px]">
          <Image
            src="/white-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-30 h-30 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-end">
          <div className="md:mx-20 py-14 md:py-18 px-4 md:px-0">
            {/* Light Black Gradient Overlay for Text */}

            {/* Hero Text */}
            <div className="relative z-10">
              <h2 className="text-white text-5xl  md:text-[70px] playfair-500 leading-tight text-center md:text-left">
                Admissions FAQs
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
