import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerSoH = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/bhm-img/banner-img.jpg"
          alt="School of Business Banner"
          width={1820}
          height={1080}
          className="w-full h-full object-cover"
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

        {/* Bottom Content Container */}
        <div className="absolute bottom-20 left-0 right-0">
          <div className="container mx-auto py-4 px-6 lg:px-8">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <h1 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                  <span className="text-[#FF6C02]">BHM</span> at AIMS
                  <br className="hidden lg:block" />
                  <span className="italic playfair-400 text-[#D7FCF4]">
                    The Right Training.
                  </span>
                  <br className="hidden lg:block" />
                  <span className="italic playfair-400 text-[#D7FCF4]">
                    The Right Trajectory.
                  </span>
                </h1>
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

export default HeroBannerSoH
