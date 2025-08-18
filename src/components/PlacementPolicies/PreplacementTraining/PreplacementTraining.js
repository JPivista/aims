import Image from "next/image";
import React from "react";
import SkillSection from "./SkillSection";

const PreplacementTraining = () => {
  return (
    <>
      <div className="justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden ">
        <div className="container mx-auto">
          <div className="flex flex-col lg:px-0 px-4 bg-transparent relative z-10">
            <div className="w-full text-center text-[#0C2165]">
              <h1>Pre-Placement Training</h1>
            </div>
            <div className="text-center text-lg lg:w-[85%] mx-auto pb-5">
              <p>
                Before the placement drive begins, students undergo a
                pre-placement training program. Training modules include:
              </p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <SkillSection />
      </div>
    </>
  );
};

export default PreplacementTraining;
