import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/admission-faqs/hero-banner.png')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/admission-faqs/mobile-banner.png')]" />

        {/* Empower Image*/}
        <div className="absolute left-4 md:left-12 -top-8 md:-top-8 md:max-w-2xl">
          <Image
            src="/white-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-30 h-30 md:w-45 md:h-45"
            priority
          />
        </div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 bottom-20 md:bottom-15">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-left">
                  {/* Hero Text */}
                  <h1 className="text-white text-4xl leading-tight tracking-wider">
                    <span className="playfair-500 text-4xl md:text-[60px]">
                      Admissions FAQs
                    </span>
                  </h1>
                </div>
              </div>
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
