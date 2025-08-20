import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"

const HeroBannerRc = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/grievance-redressal/hero-banner.jpg"
          alt="Grievance Redressal"
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
        <div className="absolute bottom-10 left-0 right-0">
          <h1 className="text-white text-3xl lg:text-[60px] playfair-300 text-center">
            Grievance Redressal
          </h1>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  )
}

export default HeroBannerRc
