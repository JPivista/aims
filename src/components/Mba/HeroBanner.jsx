import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"

const HeroBanner = ({ announcements, pageType = "mba" }) => {
  return (
    <>
      <div className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[83vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/MBA/mba-herobanner.jpg"
          alt="AIMS Student"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute right-4 sm:right-8 md:right-10 lg:right-10 top-4 sm:top-8 md:top-10 lg:top-10 md:max-w-2xl">
          <Image
            src="/MBA/empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-full lg:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-between">
          <div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-14 py-4 sm:py-6 md:py-10 lg:py-14">
            {/* Hero Text */}
            <h1 className="text-[#002561] text-2xl sm:text-3xl md:text-5xl lg:text-[72px] playfair-500 leading-tight">
              Learn the Skills.
              <br />
              Build the Career.
            </h1>
            <h2 className="monser-500 text-lg sm:text-xl md:text-3xl lg:text-[40px] mt-2 leading-tight">
              MBA at AIMS
            </h2>
            <h2 className="text-[#A22877] text-base sm:text-lg md:text-2xl lg:text-[34px] monser-400 mt-2 leading-tight">
              Placement Snapshot
            </h2>

            {/* Package */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6 md:mt-6">
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                  ₹8 LPA
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Average Package
                </div>
              </div>
              <div className="bg-white/90 backdrop-blur-sm rounded-lg p-3 sm:p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-purple-600">
                  ₹27 LPA
                </div>
                <div className="text-xs sm:text-sm text-gray-700 font-medium">
                  Highest Package
                </div>
              </div>
            </div>
          </div>

          {/* IABCE Section */}
          <div className="hidden lg:block absolute bottom-0 left-0 z-40">
            <div className="bg-white/90 backdrop-blur-sm rounded-2xl">
              <Image
                src="/MBA/iacbe-final.svg"
                alt="IACBE Accreditation"
                width={850}
                height={250}
                className="object-cover"
              />
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
