import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerRc = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/eresources/banner.jpg"
          alt="Eresources"
          width={1920}
          height={1080}
          className="hidden md:block w-full h-full object-cover"
          priority
        />

        {/* Mobile Background Image */}
        <Image
          src="/eresources/mobile-banner.png"
          alt="Eresources"
          width={1920}
          height={1080}
          className="block md:hidden w-full h-full object-cover"
          priority
        />

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

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

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 md:bottom-12 left-0 right-0 md:ml-20 px-2 md:px-0">
          <h2 className="text-white text-4xl md:text-[60px] playfair-300 whitespace-nowrap text-center md:text-left">
            Library
            <br className="block md:hidden" />
            <span className="hidden md:inline"> </span>
            Subscribed Resources
            <br className="block md:hidden" />
            <br className="hidden md:block" />
            (E-Resources)
          </h2>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBannerRc
