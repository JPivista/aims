"use client"
import React, { useState } from "react"
import Image from "next/image"

const AicteAccreditations = () => {
  const [expandedProgram, setExpandedProgram] = useState("MBA")

  const programs = [
    {
      name: "MBA",
      years: [
        {
          year: "2021-2022",
          link: "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/63ac2dbe10e7f352b0d7d739/1672228287475/AICTE-MBA-EoA-2021-22.pdf",
        },
        {
          year: "2020-2021",
          link: `/aicte-documents/eoa-mba-2020-2021.pdf`,
        },
        {
          year: "2019-2020",
          link: `/aicte-documents/eoa-mba-2019-2020.pdf`,
        },
        {
          year: "2018-2019",
          link: `/aicte-documents/eoa-mba-2018-2019.pdf`,
        },
        {
          year: "2017-2018",
          link: `/aicte-documents/eoa-mba-2017-2018.pdf`,
        },
        {
          year: "2016-2017",
          link: `/aicte-documents/eoa-mba-2016-2017.pdf`,
        },
        {
          year: "2015-2016",
          link: `/aicte-documents/eoa-mba-2015-2016.pdf`,
        },
        {
          year: "2014-2015",
          link: `/aicte-documents/eoa-mba-2014-2015.pdf`,
        },
      ],
    },
    {
      name: "MCA",
      years: [
        {
          year: "2021-2022",
          link: "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/63ac2ef25d3aff00c8386318/1672228598483/AICTE-MCA-EoA-2021-22.pdf",
        },
        {
          year: "2020-2021",
          link: `/aicte-documents/eoa-mca-2020-2021.pdf`,
        },
        {
          year: "2019-2020",
          link: `/aicte-documents/eoa-mca-2019-2020.pdf`,
        },
        {
          year: "2018-2019",
          link: `/aicte-documents/eoa-mca-2018-2019.pdf`,
        },
        {
          year: "2017-2018",
          link: `/aicte-documents/eoa-mca-2017-2018.pdf`,
        },
        {
          year: "2016-2017",
          link: `/aicte-documents/eoa-mca-2016-2017.pdf`,
        },
        {
          year: "2015-2016",
          link: `/aicte-documents/eoa-mca-2015-2016.pdf`,
        },
        {
          year: "2014-2015",
          link: `/aicte-documents/eoa-mca-2014-2015.pdf`,
        },
      ],
    },
    {
      name: "BHM",
      years: [
        {
          year: "2021-2022",
          link: "https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/63ac3185cf1f5f49b95e7081/1672229254612/AICTE-BHM-EoA-2021-22.pdf",
        },
        {
          year: "2020-2021",
          link: `/aicte-documents/eoa-bhm-2020-2021.pdf`,
        },
        {
          year: "2019-2020",
          link: `/aicte-documents/eoa-bhm-2019-2020.pdf`,
        },
        {
          year: "2018-2019",
          link: `/aicte-documents/eoa-bhm-2018-2019.pdf`,
        },
        {
          year: "2017-2018",
          link: `/aicte-documents/eoa-bhm-2017-2018.pdf`,
        },
        {
          year: "2016-2017",
          link: `/aicte-documents/eoa-bhm-2016-2017.pdf`,
        },
        {
          year: "2015-2016",
          link: `/aicte-documents/eoa-bhm-2015-2016.pdf`,
        },
        {
          year: "2014-2015",
          link: `/aicte-documents/eoa-bhm-2014-2015.pdf`,
        },
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
                {years.map((yearItem, index) => (
                  <li key={index} className="relative">
                    <a
                      href={yearItem.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-[20px] monser-400 cursor-pointer text-[#A22877]"
                      onClick={(e) => e.stopPropagation()}
                    >
                      {yearItem.year}
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
