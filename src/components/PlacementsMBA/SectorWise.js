import React from "react";
import Image from "next/image";

const SectorWise = () => {
  return (
    <>
      <div className="container mx-auto flex lg:flex-row flex-col py-10 justify-center items-center gap-10">
        <div className="lg:w-1/2">
          <Image
            src="/placements-mba/pgdm/sector-wise.png"
            alt="Recruiters"
            width={1000}
            height={1000}
            className="rounded-lg"
          />
        </div>
        <div className="flex flex-col items-center justify-center lg:gap-5 lg:px-x px-4 lg:w-1/2">
          <h1 className="text-[#8A1D64]">Sector-Wise Placements Statistics</h1>
          <p>
            At AIMS, students step into varied, high-growth sectors. Our
            placement ecosystem equips them to pursue their individual career
            goals, whether in mainstream industries or emerging domains.
          </p>
        </div>
      </div>
    </>
  );
};

export default SectorWise;
