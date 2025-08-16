"use client"
import React, { useState } from "react"
import Image from "next/image"

const NirfRankings = () => {
  const [expandedYear, setExpandedYear] = useState("2024")

  const nirfYears = [
    {
      year: "2024",
      description: [
        {
          text: "Comprehensive ranking data for 2024",
          download: "nirf-2024-ranking-data.pdf",
        },
        {
          text: "Academic performance metrics",
          download: "nirf-2024-academic-metrics.pdf",
        },
        {
          text: "Research and innovation scores",
          download: "nirf-2024-research-scores.pdf",
        },
        {
          text: "Industry collaboration details",
          download: "nirf-2024-industry-collaboration.pdf",
        },
        {
          text: "Student satisfaction ratings",
          download: "nirf-2024-student-satisfaction.pdf",
        },
      ],
      hasDownload: true,
    },
    {
      year: "2023",
      description: [
        {
          text: "NIRF 2023 ranking details and performance metrics",
          download: "nirf-2023-ranking-details.pdf",
        },
        {
          text: "Institutional data and academic achievements",
          download: "nirf-2023-institutional-data.pdf",
        },
        {
          text: "Research output and publication statistics",
          download: "nirf-2023-research-output.pdf",
        },
        {
          text: "Faculty quality and student-teacher ratio",
          download: "nirf-2023-faculty-quality.pdf",
        },
        {
          text: "Infrastructure and facilities assessment",
          download: "nirf-2023-infrastructure.pdf",
        },
      ],
    },
    {
      year: "2022",
      description: [
        {
          text: "NIRF 2022 comprehensive ranking analysis",
          download: "nirf-2022-ranking-analysis.pdf",
        },
        {
          text: "Institutional performance data and metrics",
          download: "nirf-2022-performance-data.pdf",
        },
        {
          text: "Academic excellence indicators",
          download: "nirf-2022-excellence-indicators.pdf",
        },
        {
          text: "Research and development achievements",
          download: "nirf-2022-research-achievements.pdf",
        },
        {
          text: "Student placement and career outcomes",
          download: "nirf-2022-placement-outcomes.pdf",
        },
      ],
    },
    {
      year: "2021",
      description: [
        {
          text: "NIRF 2021 ranking information",
          download: "nirf-2021-ranking-info.pdf",
        },
        {
          text: "Academic performance and research metrics",
          download: "nirf-2021-academic-research.pdf",
        },
        {
          text: "Faculty qualifications and experience",
          download: "nirf-2021-faculty-qualifications.pdf",
        },
        {
          text: "Student diversity and inclusion data",
          download: "nirf-2021-diversity-inclusion.pdf",
        },
        {
          text: "Industry partnerships and collaborations",
          download: "nirf-2021-industry-partnerships.pdf",
        },
      ],
    },
    {
      year: "2020",
      description: [
        {
          text: "NIRF 2020 detailed ranking data",
          download: "nirf-2020-ranking-data.pdf",
        },
        {
          text: "Institutional assessment information",
          download: "nirf-2020-assessment-info.pdf",
        },
        {
          text: "Teaching and learning outcomes",
          download: "nirf-2020-teaching-outcomes.pdf",
        },
        {
          text: "Research publications and citations",
          download: "nirf-2020-research-publications.pdf",
        },
        {
          text: "Graduation rates and employment statistics",
          download: "nirf-2020-graduation-employment.pdf",
        },
      ],
    },
  ]

  const handleYearClick = (year) => {
    setExpandedYear(expandedYear === year ? null : year)
  }

  const NirfYearItem = ({ year, description, hasDownload = false }) => {
    const isExpanded = expandedYear === year

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-6 cursor-pointer transition-colors duration-200"
          onClick={() => handleYearClick(year)}
        >
          <div className="flex-1">
            <h5 className="mb-2 monser-500 text-xl md:text-[36px]">
              NIRF {year}
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
                        href={`/nirf-documents/${point.download}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A22877] underline cursor-pointer text-sm md:ml-4"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
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
    <div className="bg-[#E0F8F3] py-4 md:py-6">
      <div className="mx-4 md:mx-30">
        {nirfYears.map((item, index) => (
          <NirfYearItem
            key={index}
            year={item.year}
            description={item.description}
            hasDownload={item.hasDownload}
          />
        ))}
      </div>
    </div>
  )
}

export default NirfRankings
