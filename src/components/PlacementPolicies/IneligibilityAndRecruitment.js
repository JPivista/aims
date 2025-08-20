import Button from "@/shared/Button";
import Image from "next/image";
import React from "react";

const IneligibilityAndRecruitment = () => {
  return (
    <>
      <div className="container mx-auto lg:pt-16 flex lg:flex-row flex-col gap-10">
        <div className="lg:w-1/2 mx-auto">
          <div className="bg-[#FAE5E6] sm:h-full sm:w-[750px] xl:w-full md:w-[750px] lg:h-[540px] rounded-lg border border-[#A22877] p-8 relative">
            {/* Arrow icon positioned in top right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/placement-policies/peach-arrow.svg"
                alt="Arrow"
                width={60}
                height={60}
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl monser-600 text-[#531574] mb-6">
              Ineligibility for Placement
            </h2>

            {/* Content */}
            <div className="text-gray-800 space-y-4">
              <p className="text-lg">
                Students will be considered ineligible for campus placements if:
              </p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Attendance is below 75%</li>
                <li>They don&apos;t complete 100% of pre-placement training</li>
                <li>
                  They register to attend, but fail to appear for a scheduled
                  company interview/process.
                </li>
                <li>
                  They attend 5 interviews and still do not secure a single
                  offer
                </li>
                <li>They misbehave or breach conduct during interviews</li>
                <li>They have pending tuition or fee dues</li>
              </ul>

              <p className="text-lg mt-6">
                Ineligible students will be considered for placements only after
                all other students are placed. Re-entry into the process depends
                on improved performance and approval by the placement committee.
              </p>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mx-auto">
          <div className="bg-[#E0F8F3] sm:h-full sm:w-[750px] xl:w-full md:w-[750px] lg:h-[540px] rounded-lg border border-[#88BBB1] p-8 relative">
            {/* Arrow icon positioned in top right */}
            <div className="absolute top-4 right-4">
              <Image
                src="/placement-policies/green-arrow.svg"
                alt="Arrow"
                width={60}
                height={60}
              />
            </div>

            {/* Title */}
            <h2 className="text-3xl monser-600 text-[#0C2165] mb-6">
              Recruitment Committee
            </h2>

            {/* Content */}
            <div className="text-black space-y-4">
              <p className="text-lg monser-600">The Ones Guiding Your Aim.</p>

              <ul className="list-disc list-inside space-y-2 ml-4">
                <li>Principal and Chief Executive Officer</li>
                <li>Director – Corporate & Public Relations</li>
                <li>Dean(s)</li>
                <li>Program Director(s)</li>
                <li>Senior Manager – C&PR</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container mx-auto text-center py-10 flex flex-col gap-4">
        <p className="monser-600">
          Have questions about placements or need guidance? We’re here to help.
        </p>
        <Button className="w-fit mx-auto">Contact Us</Button>
      </div>
    </>
  );
};

export default IneligibilityAndRecruitment;
