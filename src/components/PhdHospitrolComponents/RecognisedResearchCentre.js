import React from "react";
import Image from "next/image";

const RecognisedResearchCentre = () => {
  return (
    <div className="flex flex-col md:flex-row items-center bg-white py-4 md:py-12 gap-6 lg:gap-20 max-w-6xl mx-auto md:px-0 px-4">
      {/* Logo */}
      <div className="flex-shrink-0 h-full w-[200px]">
        <Image
          src="/business_school/phd/research_image.png"
          alt="University of Mysore Logo"
          width={128}
          height={128}
          className="object-contain w-full h-full"
          priority
        />
      </div>

      {/* Text */}
      <div className="text-center md:text-left space-y-2">
        <h3 className="text-2xl sm:text-3xl font-semibold text-[#531675]">
          Recognised Research Centre
        </h3>
        <p className="text-gray-700 text-sm sm:text-base md:text-lg">
          Affiliated to the <strong>University of Mysore (UoM)</strong>, AIMS Centre for Advanced Research Centre (ACARC) is a recognised research centre offering PhDs in Management and Commerce. Guided by experienced faculty, the program encourages purposeful research with practical application.
        </p>
      </div>
    </div>
  );
};

export default RecognisedResearchCentre;
