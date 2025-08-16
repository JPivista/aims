"use client"
import React, { useState } from "react"
import Image from "next/image"

const MandatoryDisclosures = () => {
  const [expandedProgram, setExpandedProgram] = useState("MBA")

  const programs = [
    {
      name: "MBA",
      description: [
        {
          text: "MBA Mandatory Disclosures 2022",
          download: "mba-mandatory-disclosures-2022.pdf",
          hasView: true,
        },
        {
          text: "MBA Mandatory Disclosures 2023",
          download: "mba-mandatory-disclosures-2023.pdf",
        },
        {
          text: "MBA Mandatory Disclosures 2024",
          download: "mba-mandatory-disclosures-2024.pdf",
        },
      ],
      hasDownload: true,
    },
    {
      name: "MCA",
      description: [
        {
          text: "MCA Mandatory Disclosures 2022",
          download: "mca-mandatory-disclosures-2022.pdf",
        },
        {
          text: "MCA Mandatory Disclosures 2023",
          download: "mca-mandatory-disclosures-2023.pdf",
        },
        {
          text: "MCA Mandatory Disclosures 2024",
          download: "mca-mandatory-disclosures-2024.pdf",
        },
      ],
    },
    {
      name: "BHM",
      description: [
        {
          text: "BHM Mandatory Disclosures 2022",
          download: "bhm-mandatory-disclosures-2022.pdf",
        },
        {
          text: "BHM Mandatory Disclosures 2023",
          download: "bhm-mandatory-disclosures-2023.pdf",
        },
        {
          text: "BHM Mandatory Disclosures 2024",
          download: "bhm-mandatory-disclosures-2024.pdf",
        },
      ],
    },
  ]

  const handleProgramClick = (program) => {
    setExpandedProgram(expandedProgram === program ? null : program)
  }

  const ProgramItem = ({ program, description, hasDownload = false }) => {
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
                {description.map((point, index) => (
                  <li key={index} className="relative">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                      <span className="mb-2 md:mb-0">{point.text}</span>
                      <a
                        href={`/mandatory-disclosures/${point.download}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A22877] underline cursor-pointer text-sm md:ml-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        {point.hasView ? "View" : "Download"}
                      </a>
                    </div>
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
    <div className="py-4 md:py-6">
      <div className="mx-4 md:mx-20">
        <div className="mb-2">
          <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#0C2165] playfair-300 mb-4">
            Mandatory Disclosures
          </h3>
        </div>
        {programs.map((item, index) => (
          <ProgramItem
            key={index}
            program={item.name}
            description={item.description}
            hasDownload={item.hasDownload}
          />
        ))}
      </div>
    </div>
  )
}

export default MandatoryDisclosures
