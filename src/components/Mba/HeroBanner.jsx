import ApplicationMarquee from "@/shared/ApplicationMarquee"
import Image from "next/image"
import React from "react"

const HeroBanner = ({ announcements, pageType = "mba" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh]  md:h-[100vh] overflow-hidden">
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
        <div className="absolute right-4 md:right-20 -top-8 md:top-10 md:max-w-2xl">
          <Image
            src="/black-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-40 h-40 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full flex flex-col justify-between">
          <div className="px-4 md:px-14 py-8 md:py-14 mt-20 md:mt-10 ml-5">
            {/* Hero Text */}
            <h1 className="text-[#002561] text-[60px] md:text-[72px] playfair-500 leading-tight tracking-wider">
              Learn the Skills.
              <br />
              Build the Career.
            </h1>
            <h2 className="monser-500 text-[30px] md:text-[40px] mt-2 leading-tight">
              MBA at AIMS
            </h2>
            <h2 className="text-[#A22877] text-[30px] md:text-[34px] monser-400 mt-2 leading-tight">
              Placement Snapshot
            </h2>

            {/* Package */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mt-4 sm:mt-6 md:mt-6">
              <div className="rounded-lg border border-black p-3 md:px-4 py-4 text-center min-w-[120px] md:min-w-[150px] relative">
                <div className="text-xl sm:text-2xl md:text-3xl text-[#A22877] monser-500">
                  <span className="text-[60px] text-[#A22877] monser-700">
                    ₹8
                  </span>{" "}
                  LPA
                </div>
                <div className="absolute text-[16px]  top-22 left-4 px-2 bg-[#FAFAFA] monser-400">
                  Average Package
                </div>
              </div>
              <div className="rounded-lg border border-black p-3 md:px-4 py-4 text-center min-w-[120px] md:min-w-[140px] relative">
                <div className="text-xl sm:text-2xl md:text-3xl font-bold text-[#A22877] monser-500">
                  <span className="text-[60px] text-[#A22877] monser-700">
                    ₹27
                  </span>{" "}
                  LPA
                </div>
                <div className="absolute text-[16px]  top-22 left-8 px-2 bg-[#FAFAFA] monser-400">
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
                width={920}
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
