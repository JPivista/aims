import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerRc = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/aicte/hero-banner.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/aicte/mobile-banner.webp')]" />

        {/* Empower Image - Desktop */}
        {/* <div className="absolute left-4 md:left-12 -top-8 md:-top-8 md:max-w-2xl">
          <Image
            src="/black-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="hidden md:block w-30 h-30 md:w-45 md:h-45"
            priority
          />
        </div> */}

        {/* Empower Image - Mobile */}
        {/* <div className="absolute left-4 md:left-12 -top-8 md:-top-8 md:max-w-2xl">
          <Image
            src="/white-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="block md:hidden w-30 h-30 md:w-45 md:h-45"
            priority
          />
        </div> */}

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 bottom-2 md:bottom-10">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-left">
                  <div className="flex justify-center md:justify-start mb-4">
                    <Image
                      src="/aicte/aicte-logo.svg"
                      alt="AICTE Logo"
                      width={200}
                      height={100}
                      className="w-40 h-20 md:w-2/3 md:h-2/3 object-cover rounded-lg"
                      priority
                    />
                  </div>
                  {/* Hero Text */}
                  <h1 className="text-white leading-tight tracking-wider">
                    <span className="playfair-300 text-5xl md:text-[60px]">
                      AICTE
                    </span>
                  </h1>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 left-0 right-0 md:hidden ">
          <div className="container mx-auto py-4 px-4">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/white-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-5 left-0 right-0 hidden md:block">
          <div className="container mx-auto py-4 px-4 ">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4 ">
              <div className="flex items-center">
                <Image
                  src="/black-empower.svg"
                  alt="Recruiters"
                  width={200}
                  height={200}
                />
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

export default HeroBannerRc
