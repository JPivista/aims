import React from "react";
import ApplicationMarquee from "../../shared/ApplicationMarquee";
import Image from "next/image";

const HeroBannerSoB = ({ announcements, pageType = "engineering" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[100vh] overflow-hidden">
        {/* Background Image - Desktop */}
        <div className="hidden lg:block w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/home/banner-003.webp')]" />

        {/* Background Image - Mobile */}
        <div className="md:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/home/mobile-banner-002.webp')]" />
        <div className="hidden md:block lg:hidden w-full h-full bg-cover bg-top bg-no-repeat bg-[url('/home/home-banner-tab.webp')]" />

        {/* Gradient Overlay - Figma Design */}
        {/* <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div> */}
        <div className="absolute lg:top-10 top-0 lg:right-0 -right-5">
          <div className="container mx-auto py-4 px-6 lg:px-8">
            <div className="flex lg:flex-row flex-col items-start justify-between md:gap-10 gap-4">
              <div className="flex items-center">
                <Image
                  src="/white-empower.svg"
                  alt="Recruiters"
                  width={150}
                  height={150}
                />
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Content Container */}
        <div className="absolute bottom-10 left-0 right-0 px-4 lg:px-0">
          <div className="container mx-auto">
            <div className="flex lg:flex-row flex-col items-center justify-between md:gap-4 gap-4">
              <div className="flex items-center"></div>
            </div>
          </div>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  );
};

export default HeroBannerSoB;

