import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"

const HeroBanner = ({ announcements, pageType = "mba" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden md:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/MBA/mba-herobanner.jpg')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/MBA/mobile-banner.png')]" />

        {/* Gradient Overlay - Figma Design */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(180deg, rgba(230, 187, 215, 0.40) 0%, rgba(230, 187, 215, 0.40) 38.94%, var(--Color, rgba(83, 22, 117, 0.40)) 100%)",
          }}
        ></div> */}

        {/* Empower Image*/}
        <div className="absolute left-4 md:left-auto md:right-20 -top-8 md:-top-8 md:max-w-2xl">
          <Image
            src="/black-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-30 h-30 md:w-45 md:h-45"
            priority
          />
        </div>

        {/* Bottom Content Container */}
        <div className="absolute left-0 right-0 px-4 lg:px-0 top-13">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center">
                <div className="text-center md:text-left">
                  {/* Hero Text */}
                  <h1 className="text-[#002561] !text-4xl md:!text-[60px] playfair-500 md:leading-tight md:tracking-wider">
                    Learn the Skills.
                    <br />
                    Build the Career.
                  </h1>
                  <h2 className="monser-500 text-3xl md:text-[40px]  leading-tight text-[#002561] md:text-black">
                    MBA at AIMS
                  </h2>
                  <h2 className="text-[#A22877] text-xl md:text-[34px] monser-400 leading-tight">
                    Placement Snapshot
                  </h2>

                  {/* Package */}
                  <div className="mt-4 sm:mt-6 md:mt-6">
                    {/* Mobile Package SVG */}
                    <div className="block md:hidden">
                      <Image
                        src="/MBA/mobile-package.svg"
                        alt="Package Information"
                        width={398}
                        height={96}
                        className="w-full h-auto px-4"
                        priority
                      />
                    </div>

                    {/* Desktop Package SVG */}
                    <div className="hidden md:block">
                      <Image
                        src="/MBA/desktop-pacakage.svg"
                        alt="Package Information"
                        width={418}
                        height={94}
                        className="w-80 h-auto"
                        priority
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="hidden md:flex mt-4">
            <Image
              src="/MBA/iacbe-final.svg"
              alt="IACBE"
              width={400}
              height={100}
              className="w-[800px] h-[200px] object-contain"
            />
          </div>
        </div>
      </div>
      <div className="block md:hidden">
        <Image
          src="/MBA/iacbe-mobile.svg"
          alt="Mobile Banner and IACBE"
          width={440}
          height={574}
          className="w-full h-auto"
          priority
        />
      </div>
      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBanner
