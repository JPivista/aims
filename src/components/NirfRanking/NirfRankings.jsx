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
          text: "You can download and view our submitted information using this link",
          download:
            "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/65e93ba536f8653e8c5f2c32/1709783975960/NIRF_AIMS_2024.pdf",
        },
      ],
    },
    {
      year: "2023",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download:
            "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/65e93cb5028ea23a4f655ee4/1709784248142/NIRF_AIMS_2023.pdf",
        },
      ],
    },
    {
      year: "2022",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download:
            "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/63a594e3021154409d655bb7/1671795939371/Acharya+Institute+of+Management+and+Science20220228-.pdf",
        },
      ],
    },
    {
      year: "2021",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download:
            "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/63a59575e22cf43d26c3d26b/1671796085455/NIRF-2021.pdf",
        },
      ],
    },
    {
      year: "2020",
      description: [
        {
          text: "You can download and view our submitted information using this link",
          download:
            "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/63a595d8590d6528d29ab0c6/1671796184984/NIRF-2020.pdf",
        },
      ],
    },
  ]

  const handleYearClick = (year) => {
    setExpandedYear(expandedYear === year ? null : year)
  }

  const NirfYearItem = ({ year, description }) => {
    const isExpanded = expandedYear === year

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-2 cursor-pointer transition-colors duration-200"
          onClick={() => handleYearClick(year)}
        >
          <div className="flex-1">
            <h5 className="monser-500 text-xl md:text-[36px]">NIRF {year}</h5>
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
                    <span>
                      {point.text} -{" "}
                      <a
                        href={point.download}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[#A22877] underline cursor-pointer"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Download
                      </a>
                    </span>
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
      <div className="mx-4 md:mx-20">
        {nirfYears.map((item, index) => (
          <NirfYearItem
            key={index}
            year={item.year}
            description={item.description}
          />
        ))}
      </div>
    </div>
  )
}

export default NirfRankings
