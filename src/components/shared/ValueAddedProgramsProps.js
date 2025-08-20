"use client"
import React, { useState } from "react"
import Image from "next/image"

const ValueAddedPrograms = ({
  programsData,
  title,
  description,
  disclaimer,
}) => {
  const [expandedSection, setExpandedSection] = useState(
    programsData?.[0]?.title || null
  )

  // Handle case when programsData is undefined or empty
  if (!programsData || programsData.length === 0) {
    return (
      <div className="pt-20 pb-10 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h3
              className="text-[#0C2165] playfair-300"
              dangerouslySetInnerHTML={{
                __html: title || "Value Added Programs",
              }}
            ></h3>
          </div>
        </div>
      </div>
    )
  }

  const handleItemClick = (item) => {
    setExpandedSection(expandedSection === item ? null : item)
  }

  return (
    <>
      <div className="pt-10 bg-white">
        <div className="mx-5 md:mx-20 ">
          {/* Header Section */}
          <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-4">
            <h3
              className="text-[#0C2165] playfair-300 tracking-wider text-2xl md:text-[60px]"
              dangerouslySetInnerHTML={{
                __html: title || "Value Added Programs",
              }}
            ></h3>
            <p className="text-base md:text-lg lg:text-[20px] leading-relaxed">
              {description ||
                "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester."}
            </p>
          </div>

          {/* Program Sections */}
          <div className="space-y-4 md:space-y-6 md:mt-12 mt-6 ">
            {programsData.map((program, index) => (
              <div key={program.id} className="relative">
                {/* Partial border for non-first items */}
                {index !== 0 && (
                  <div className="absolute bottom-0 left-0 w-11/12 md:w-11/12 h-px bg-black"></div>
                )}
                <button
                  onClick={() => handleItemClick(program.title)}
                  className="w-full flex items-center justify-between text-left"
                >
                  <h5 className="flex items-center justify-start gap-2 md:gap-4 w-full md:w-4/5 ">
                    <span className="break-words monser-500 md:text-[36px] text-[22px]  ">
                      {program.title}
                    </span>
                    <Image
                      src="/nirf/arrow.svg"
                      alt="Arrow"
                      width={31}
                      height={31}
                      className={`w-3 h-3 md:w-6 md:h-6 flex-shrink-0 transition-transform duration-200 ${
                        expandedSection === program.title ? "rotate-90" : ""
                      }`}
                    />
                  </h5>
                </button>

                {/* Partial border for first item */}
                {index === 0 && (
                  <div className="absolute bottom-0 left-0 w-3/5 md:w-3/5 h-px bg-black"></div>
                )}

                {/* Semicircle for first item */}
                {index === 0 && (
                  <div className="hidden md:block absolute right-[-80px] -top-[30%]">
                    <Image
                      src="/MBA/semi-circle.svg"
                      alt="Semicircle"
                      width={100}
                      height={236}
                      className="w-full h-full"
                    />
                  </div>
                )}

                {expandedSection === program.title && (
                  <div className="my-3 md:my-4 ml-2 md:ml-4 space-y-2">
                    {program.content.map((item, contentIndex) => (
                      <div
                        key={`${program.id}-content-${contentIndex}`}
                        className="flex items-start"
                      >
                        <span className="mr-2 md:mr-3 mt-1 text-sm md:text-lg">
                          •
                        </span>
                        <p className="text-sm md:text-base lg:text-[20px] leading-relaxed">
                          {item}
                        </p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Footer Disclaimer */}
          {disclaimer && (
            <div className="mt-4 md:mt-6">
              <p className="text-sm md:text-[20px] monser-400">{disclaimer}</p>
            </div>
          )}
        </div>
      </div>
    </>
  )
}

export default ValueAddedPrograms
