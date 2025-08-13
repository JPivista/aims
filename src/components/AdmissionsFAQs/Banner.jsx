import React from "react"
import Image from "next/image"
import ApplicationMarquee from "@/shared/ApplicationMarquee"

const HeroBanner = ({ announcements, pageType = "bba-aviation" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] md:h-[83vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/admission-faqs/faq-banner.jpg"
          alt="Admission process"
          width={1920}
          height={1080}
          className="w-full h-full object-cover"
          priority
        />

        {/* Empower Image*/}
        <div className="absolute right-20 top-10">
          <Image
            src="/bba/empower.svg"
            alt="Empower"
            width={100}
            height={100}
            className="w-full h-full"
            priority
          />
        </div>

        {/* Hero Text */}
        <div className="absolute inset-0 w-full md:w-3/4 flex flex-col justify-end">
          <div className="container mx-auto px-4 md:px-20 py-8 md:py-14">
            {/* Light Black Gradient Overlay for Text */}

            {/* Hero Text */}
            <div className="relative z-10">
              <h2 className="text-white text-3xl md:text-[70px] playfair-500">
                Admissions FAQs
              </h2>
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
