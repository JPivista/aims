import Image from "next/image";
import React from "react";

const BridgingCampus = () => {
  return (
    <>
      <div className="justify-center items-center py-7 flex flex-col lg:px-0 px-4 relative overflow-hidden ">
        <div className="absolute -top-[15%] right-0 md:block hidden rotate-180">
          <Image
            src="/school-circle.svg"
            alt="School Circle Background"
            width={150}
            height={150}
            className=" rotate-120"
          />
        </div>
        <div className="container mx-auto">
          <div className="flex flex-col lg:px-0 px-4 bg-transparent relative z-10">
            <div className="w-full text-center text-[#0C2165] lg:py-5">
              <h1>Bridging Campus and Career</h1>
            </div>
            <div className="text-center text-lg lg:w-[75%] mx-auto">
              <p>
                At AIMS Institutes, the <span className="monser-600">Corporate & Public Relations (C&PR)</span> Cell
                is your training ground between the classroom and the corporate
                world. Just as an archer prepares before taking aim, we equip
                you with the insights, tools, and discipline to hit your career
                targets with precision.
              </p>
              <p className="py-5">
                C&PR bridges the gap between academic knowledge and industry
                expectations. From internships and dissertations to final
                placements, every opportunity is a chance to take aim at
                real-world goals.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BridgingCampus;
