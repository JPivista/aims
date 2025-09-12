import React from "react";
import Image from "next/image";
import GridBox from "./GridBox";

const TopRecruitingSectors = () => {
  return (
    <>
      <div className="lg:px-8 px-4">
        <div className="container mx-auto lg:px-0 px-4">
          <h1 className="text-[#8A1D64] text-start">
            Top Recruiting Sectors <br className="hidden md:block" /> (% of
            Students Placed):
          </h1>
          <GridBox />
        </div>
      </div>
    </>
  );
};

export default TopRecruitingSectors;
