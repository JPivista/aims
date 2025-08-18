"use client";

export default function SkillsSection() {
  const data = [
    {
      title: "Current Affairs & General Aptitude:",
      description: "To enhance awareness and critical thinking skills",
      color: "#FAD4D4", // pink
    },
    {
      title: "Technical Aptitude & Industrial Analytics Workshops:",
      description:
        "To build role-specific capabilities aligned with industry expectations",
      color: "#C5E3DF", // green
    },
    {
      title: "Presentation, Group Discussion, and Debate Skills:",
      description: "To stand out in group settings",
      color: "#FAD4D4", // pink
    },
    {
      title: "Interview Skills & Mock Interviews:",
      description:
        "To prepare for real-world interview scenarios with precision and poise",
      color: "#C5E3DF", // green
    },
    {
      title: "Psychometric Testing & Career Counselling:",
      description: "To align your aim with your personality and potential",
      color: "#FAD4D4", // pink
    },
  ];

  return (
    <>
      <div className="flex flex-wrap justify-center lg:gap-0 p-2 lg:p-6">
        {data.map((item, index) => (
          <div
            key={index}
            className="relative w-1/2 sm:w-[30%] lg:w-[14%] xl:w-[14%] md:w-[25%]   h-[300px] flex flex-col justify-center items-center text-left px-4 py-6"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="259"
              height="375"
              viewBox="0 0 259 375"
              fill="none"
              className="absolute inset-0 w-full h-full -z-10"
            >
              <path
                d="M259 81.5584V375H0V81.5584C0 74.2921 4.56593 67.354 12.6192 62.3613L101.493 7.27803C117.168 -2.42601 141.76 -2.42601 157.435 7.27803L246.309 62.3613C254.362 67.354 258.928 74.2921 258.928 81.5584H259Z"
                fill={item.color}
              />
            </svg>

            {/* Text content */}
            <div className="relative z-10 flex flex-col justify-center items-center h-full mt-6">
              <h6 className="text-[#8A1D64] monser-700 font-semibold text-sm sm:text-base leading-snug border-b border-dotted border-[#531675] py-2">
                {item.title}
              </h6>
              <h6 className="text-black text-xs sm:text-sm mt-2">
                {item.description}
              </h6>
            </div>
          </div>
        ))}
      </div>
      <div className="container mx-auto text-center pb-10">
        <p>
          Company-specific orientation sessions are held ahead of every
          placement drive organised by the institution.
        </p>
      </div>
    </>
  );
}
