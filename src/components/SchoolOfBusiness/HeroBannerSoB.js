import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerSoB = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/school-of-business/school-of-business-banner.png"
          alt="School of Business Banner"
          width={1920}
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
                  AIMS School of <br className="hidden lg:block" />{" "}
                  <span className="italic playfair-400">Business</span>
                </h1>
              </div>
              <div className="flex items-center">
                <Image
                  src="/school-of-business/iacbe.png"
                  alt="IACBE"
                  width={400}
                  height={100}
                  className="object-contain"
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

export default HeroBannerSoB
