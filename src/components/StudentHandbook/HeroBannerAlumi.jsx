import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerRc = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/alumni-association/alumni-association-banner.png"
          alt="Alumni Association"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        <div className="absolute right-4 md:right-20 -top-10 md:top-12">
          <Image
            src="/black-empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-35 h-35 md:w-full md:h-full"
            priority
          />
        </div>

        {/* Gradient Overlay - Figma Design */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto py-4">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <h1 className="text-white text-3xl lg:text-[60px] playfair-300">
                  Students Handbook
                </h1>
              </div>
              {/* <div className="flex items-center">
                                <Image
                                    src="/school-of-business/iacbe.png"
                                    alt="IACBE"
                                    width={400}
                                    height={100}
                                    className="object-contain"
                                />
                            </div> */}
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
