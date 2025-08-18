import React from "react";
import Image from "next/image";

const AveragePackage = () => {
  return (
    <>
      <div className="container mx-auto flex lg:flex-row flex-col-reverse py-10 justify-center items-center gap-10">
        <div className="flex flex-col items-center justify-center gap-5 lg:px-x px-4 lg:w-1/2">
          <h1 className="text-[#8A1D64]">MBA/PGDM Average Package: ₹8 LPA</h1>
          <p>
            In just three years, AIMS Institutes has raised the bar for career
            outcomes, elevating its average MBA/PGDM package from ₹7 LPA to ₹8
            LPA. This steady rise reflects our sharpened focus on industry
            alignment, practical training, and placement-readiness. It’s a clear
            indicator of our commitment to being among the top business schools
            in India for postgraduate studies.
          </p>
        </div>
        <div className="lg:w-1/2">
          <Image
            src="/placements-mba/pgdm/average.png"
            alt="Recruiters"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
      </div>
    </>
  );
};

export default AveragePackage;
