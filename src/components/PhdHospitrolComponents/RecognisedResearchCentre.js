import React from "react";
import Image from "next/image";

const RecognisedResearchCentre = () => {
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className="flex flex-col md:flex-row items-center py-6 md:py-12 gap-6 container mx-auto">

          {/* Logo */}
          <div className="flex-shrink-0 w-48 md:w-1/4">
            <Image
              src="/business_school/phd/research_image.webp"
              alt="University of Mysore Logo"
              width={128}
              height={128}
              className="object-contain w-full h-auto"
              priority
            />
          </div>

          {/* Text */}
          <div className="text-center md:text-left space-y-4 md:w-2/3">
            <h3 className="text-2xl sm:text-3xl font-semibold text-[#531675]">
              Recognised Research Centre
            </h3>
            <p className="text-gray-700 text-sm sm:text-base md:text-lg">
              Affiliated to the <strong>University of Mysore (UoM)</strong>, AIMS Centre for Advanced Research Centre (ACARC) is a recognised research centre offering PhDs in Management and Commerce. Guided by experienced faculty, the program encourages purposeful research with practical application.
            </p>
          </div>

        </div>
      </div>
    </>
  );
};

export default RecognisedResearchCentre;
