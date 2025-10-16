"use client";

import { useState, useEffect } from "react";

const MASK_SVG = encodeURIComponent(
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 259 375" preserveAspectRatio="none">
     <path d="M259 81.5584V375H0V81.5584C0 74.2921 4.56593 67.354 12.6192 62.3613L101.493 7.27803C117.168 -2.42601 141.76 -2.42601 157.435 7.27803L246.309 62.3613C254.362 67.354 258.928 74.2921 258.928 81.5584H259Z" fill="black"/>
   </svg>`
);

export default function SkillsSection() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  const data = [
    {
      title: "Current Affairs & General Aptitude",
      description: "To enhance awareness and critical thinking skills",
      color: "#FAD4D4",
    },
    {
      title: "Technical Aptitude & Industrial Analytics Workshops",
      description:
        "To build role-specific capabilities aligned with industry expectations",
      color: "#C5E3DF",
    },
    {
      title: "Presentation, Group Discussion, and Debate Skills",
      description: "To stand out in group settings",
      color: "#FAD4D4",
    },
    {
      title: "Interview Skills & Mock Interviews",
      description:
        "To prepare for real-world interview scenarios with precision and poise",
      color: "#C5E3DF",
    },
    {
      title: "Psychometric Testing & Career Counselling",
      description: "To align your aim with your personality and potential",
      color: "#FAD4D4",
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center gap-4 p-2 lg:gap-0 xl:p-6 2xl:p-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="
              relative 
              w-full sm:w-[48%] md:w-[30%] lg:w-[14%] xl:w-[14.7%] 2xl:w-[13%] 
              h-[150px] md:h-[280px] lg:h-[300px] 
              flex flex-col justify-center items-center text-center px-4 py-6
              transition-transform duration-300 hover:scale-105
            "
            style={{
              backgroundColor: item.color,
              // Only apply the mask on medium and larger screens when client-side
              WebkitMaskImage:
                isClient && index !== -1 && window.innerWidth >= 768
                  ? `url("data:image/svg+xml,${MASK_SVG}")`
                  : "none",
              WebkitMaskRepeat: "no-repeat",
              WebkitMaskPosition: "center",
              WebkitMaskSize: "100% 100%",
              maskImage:
                isClient && index !== -1 && window.innerWidth >= 768
                  ? `url("data:image/svg+xml,${MASK_SVG}")`
                  : "none",
              maskRepeat: "no-repeat",
              maskPosition: "center",
              maskSize: "100% 100%",
            }}
          >
            <div className="relative z-10 flex flex-col justify-center items-center h-full mt-2 px-2">
              <h6 className="text-[#8A1D64] monser-700 text-left text-sm sm:text-base leading-snug border-b border-dotted border-[#531675] pb-2">
                {item.title}
              </h6>
              <h6 className="text-black text-xs sm:text-sm mt-3 text-left">
                {item.description}
              </h6>
            </div>
          </div>
        ))}
      </div>

      <div className="container mx-auto text-center py-5 px-4">
        <p>
          Company-specific orientation sessions are held ahead of every placement
          drive organised by the institution.
        </p>
      </div>
    </>
  );
}
