"use client"
import React, { useState } from "react"
import Image from "next/image"

const AicteAccreditations = () => {
  const [expandedProgram, setExpandedProgram] = useState("MBA")

  const programs = [
    {
      name: "MBA",
      years: [
        "2021-2022",
        "2020-2021",
        "2019-2020",
        "2018-2019",
        "2017-2018",
        "2016-2017",
        "2015-2016",
        "2014-2015",
      ],
    },
    {
      name: "MCA",
      years: [
        "2021-2022",
        "2020-2021",
        "2019-2020",
        "2018-2019",
        "2017-2018",
        "2016-2017",
        "2015-2016",
        "2014-2015",
      ],
    },
    {
      name: "BHM",
      years: [
        "2021-2022",
        "2020-2021",
        "2019-2020",
        "2018-2019",
        "2017-2018",
        "2016-2017",
        "2015-2016",
        "2014-2015",
      ],
    },
  ]

  const handleProgramClick = (program) => {
    setExpandedProgram(expandedProgram === program ? null : program)
  }

  const ProgramItem = ({ program, years }) => {
    const isExpanded = expandedProgram === program

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-2 cursor-pointer transition-colors duration-200"
          onClick={() => handleProgramClick(program)}
        >
          <div className="flex-1">
            <h5 className="mb-2 monser-500 text-xl md:text-[36px]">
              {program}
            </h5>
          </div>
          <Image
            src="/nirf/arrow.svg"
            alt="Arrow"
            width={31}
            height={31}
            className={`w-4 h-4 md:w-8 md:h-8 transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="px-2 md:px-4 pb-4 md:pb-6">
            <div>
              <ul className="text-sm md:text-base monser-400 leading-relaxed space-y-2 list-disc pl-3 md:pl-5">
                {years.map((year, index) => (
                  <li key={index} className="relative">
                    <a
                      href={`/aicte-documents/eoa-${program.toLowerCase()}-${year}.pdf`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[20px] monser-400 underline cursor-pointer"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {year}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#E0F8F3] py-4 md:py-8 mb-10">
      <div className="mx-4 md:mx-20">
        <div className="mb-8">
          <h3 className="text-2xl md:text-[65px] text-[#0C2165] playfair-300 mb-4">
            Extension of Approvals (EoA)
          </h3>
        </div>
        {programs.map((item, index) => (
          <ProgramItem key={index} program={item.name} years={item.years} />
        ))}
      </div>
    </div>
  )
}

export default AicteAccreditations
