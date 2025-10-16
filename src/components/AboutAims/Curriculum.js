"use client"

import Image from "next/image"

const data = [
  {
    title: "Curriculum:",
    desc: "Our curriculum innovatively combines the latest global business trends with traditional academic methods",
  },
  {
    title: "Experienced Faculty:",
    desc: "Our faculty brings together deep theoretical knowledge and real-world industry experience",
  },
  {
    title: "State-of-the-Art Facilities:",
    desc: "Our facilities are modern and advanced, enhancing the learning experience",
  },
  {
    title: "Dynamic Student Community:",
    desc: "A melting pot of diverse cultures and ideas, enriching your educational journey",
  },
]

export default function ProgramHighlights() {
  return (
    <div className="px-4 lg:px-8">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {data.map((item, index) => {
            // For the “Experienced Faculty” item only
            const isFaculty = item.title === "Experienced Faculty:";

            return (
              <div
                key={index}
                className="relative flex items-center justify-center w-full h-44 md:h-52"
              >
                <div className="absolute inset-0 bg-[#531574] rounded-lg sm:rounded-xl shadow-md flex flex-col text-white z-10 p-4">
                  <h2 className="text-xl font-extrabold mb-2 monser-600">
                    {item.title}
                  </h2>

                  {/* Conditionally render desc with <br> on mobile */}
                  <p className="text-sm sm:text-base leading-5">
                    {isFaculty ? (
                      <>
                        Our faculty brings together deep theoretical knowledge and
                        <br className="block md:hidden" /> real-world industry experience
                      </>
                    ) : (
                      item.desc
                    )}
                  </p>
                </div>

                {/* Pink Arrow */}
                {index < 5 && (
                  <div className="absolute right-[-15px] sm:right-[-20px] md:right-[-25px] bottom-0 -translate-y-3 z-0">
                    <Image
                      src="/about-aims/Rectangle_converted.webp"
                      alt="arrow"
                      width={100}
                      height={100}
                      className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
