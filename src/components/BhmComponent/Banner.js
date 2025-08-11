import React from "react"
import Image from "next/image"
import ApplicationMarquee from "../../shared/ApplicationMarquee"
import Button from "../../shared/Button"
import Link from "next/link"

const HeroBannerSoH = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[100vh] overflow-hidden">
        {/* Background Image */}
        <Image
          src="/BHM/BHMbanner_img.jpg"
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

      <div className="container mx-auto px-7 lg:py-16 py-5 flex flex-col items-center justify-center gap-5 lg:gap-8">
        <p className="text-center lg:text-xl">
          Our BHM program equips you with the mindset, skills and
          professionalism to thrive in the hospitality sector, from luxury
          hotels to global food chains. With a legacy of excellence as one of
          the top hotel management colleges in Bangalore with placement services
          and a strong focus on real-world readiness. Discover a hospitality
          degree that blends global industry standards with local career
          opportunities.
        </p>
        {/* <Button showReadMore={true} hoverText="Our Programs">
          <Link href="/about">Choose Your Arrow</Link>
        </Button> */}
      </div>
    </>
  )
}

export default HeroBannerSoH
