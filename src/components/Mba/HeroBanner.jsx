import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"

const HeroBanner = ({ announcements, pageType = "mba" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[83vh] overflow-hidden">

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
        <div className="absolute right-4 md:right-10 top-4 md:top-10 md:max-w-2xl">
        <Image
          src="/MBA/empower.svg"
          alt="Empower"
          width={100}
          height={100}
          className="w-full h-full"
          priority
        />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full md:w-3/5 flex flex-col justify-between ">
          <div className="container mx-auto px-4 md:px-14 py-8 md:py-14">
           
              {/* Hero Text */}
              <h1 className="text-[#002561] text-3xl md:text-[72px] playfair-500">
                Learn the Skills.
                <br />
                Build the Career.
              </h1>
              <h2 className="monser-500 text-xl sm:text-2xl md:text-[40px] mt-2">MBA at AIMS</h2>
              <h2 className="text-[#A22877] text-lg sm:text-xl md:text-[34px] monser-400 mt-2">
                Placement Snapshot
              </h2>

              {/* Package */}
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 md:mt-6">
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">
                    ₹8 LPA
                  </div>
                  <div className="text-xs md:text-sm text-gray-700 font-medium">
                    Average Package
                  </div>
                </div>
                <div className="bg-white/90 backdrop-blur-sm rounded-lg p-4 md:p-6 text-center min-w-[120px] md:min-w-[140px]">
                  <div className="text-2xl md:text-3xl font-bold text-purple-600">
                    ₹27 LPA
                  </div>
                  <div className="text-xs md:text-sm text-gray-700 font-medium">
                    Highest Package
                  </div>
                </div>
              </div>

            
          </div>

          {/* IABCE Section */}
          <div className="hidden lg:block absolute bottom-0 left-0 z-40">
                    <div className="bg-white/90 backdrop-blur-sm rounded-2xl ">
                        
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
