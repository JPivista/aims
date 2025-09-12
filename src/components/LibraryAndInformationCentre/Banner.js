import React from "react";
import Image from "next/image";
import ApplicationMarquee from "@/shared/ApplicationMarquee";

const CentreForResearchBanner = ({ announcements, pageType = "phd" }) => {
  return (
    <>
      <div className="relative w-full h-[83vh] md:h-[76vh] overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <div className="w-full h-full bg-cover bg-top bg-no-repeat md:bg-[url('/library-and-information-centre/library-and-information-centre-banner.webp')] bg-[url('/library-and-information-centre/library_and_information_centre_mob.webp')]" />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
          }}
        ></div>

        {/* Text/Logo Content */}
        <div className="absolute inset-0 flex flex-col justify-between z-10">
          {/* Logo Block */}
          <div className="container mx-auto px-4 pt-8 text-center lg:text-left">
            <Image
              src="/recruiters/since.svg"
              alt="Pre-University College Logo"
              width={160}
              height={60}
              className="object-contain mx-auto lg:mx-0"
              priority
            />
          </div>

          {/* Bottom Heading */}
          <div className="container mx-auto px-4 pb-12 flex flex-col items-center lg:items-start text-center lg:text-left">
            <h1 className="text-white font-bold text-3xl md:text-4xl">
              Library and <br className="hidden lg:block" />
              Information Centre
            </h1>
          </div>
        </div>
      </div>

      {/* Application Announcements Marquee */}
      <ApplicationMarquee announcements={announcements} pageType={pageType} />
    </>
  );
};

export default CentreForResearchBanner;
