"use client";

import Image from "next/image";

const data = [
  { title: "BFSI", percent: "51%" },
  {
    title: (
      <>
        ITES & Real <br className="hidden md:block" /> Estate
      </>
    ),
    percent: "9% each",
  },
  { title: "EdTech", percent: "8%" },
  { title: "Manufacturing", percent: "7%" },
  { title: "FMCG", percent: "5%" },
  { title: "Logistics", percent: "5%" },
  { title: "Others", percent: "6%" },
];

export default function IndustryStats() {
  return (
    <>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 sm:gap-8 md:gap-10 lg:gap-12 py-6 sm:py-8 md:py-10 p-4 lg:p-0 justify-items-center sm:justify-items-start">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative flex items-center justify-center lg:w-full w-52 h-32 sm:h-40 md:h-48 "
          >
            {/* Purple box */}
            <div className="absolute inset-0 bg-[#531574] rounded-xl sm:rounded-2xl shadow-md flex flex-col items-center justify-center text-white z-10">
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl monser-700 text-center px-2">
                {item.title}
              </h6>
              <h6 className="text-lg sm:text-xl md:text-2xl lg:text-3xl pt-1 sm:pt-2 md:pt-3">
                {item.percent}
              </h6>
            </div>

            {/* Pink arrow shape on right */}
            <div className="absolute right-[-15px] sm:right-[-20px] md:right-[-27px] bottom-0 -translate-y-3 z-0">
              <Image
                src="/placements-mba/pgdm/arrow.webp"
                alt="arrow"
                width={100}
                height={100}
                className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 lg:w-32 lg:h-32"
              />
            </div>
          </div>
        ))}
      </div>  
      <div className="lg:py-10 py-6">
        <p className="text-lg lg:text-xl lg:w-[95%]">
          These stats reinforce our position as one of the highly ranked
          management colleges in India, preparing graduates for a fast-changing,
          multi-sector economy.
        </p>
      </div>
    </>
  );
}
