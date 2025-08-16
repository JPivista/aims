"use client"
import React, { useState } from "react"
import Image from "next/image"

const DvvExtendedProfile = () => {
  const [expandedItem, setExpandedItem] = useState("Extended Profile")

  const parameters = [
    {
      number: "1.1",
      text: "College Brochure.",
      link: "/dvv-documents/college-brochure.pdf",
    },
    {
      number: "1.1",
      text: "Number of courses offered by the Institution across all programs during the last five years.",
      link: "/dvv-documents/courses-offered-five-years.pdf",
    },
    {
      number: "1.2",
      text: "Number of programs offered year-wise for last five years.",
      link: "/dvv-documents/programs-offered-five-years.pdf",
    },
    {
      number: "2.1",
      text: "Query 1 - Number of students year-wise during last five years.",
      link: "/dvv-documents/students-query1-five-years.pdf",
    },
    {
      number: "2.1",
      text: "Query 4 - Number of students year-wise during last five years.",
      link: "/dvv-documents/students-query4-five-years.pdf",
    },
    {
      number: "2.2",
      text: "Number of seats earmarked for reserved category as per GOlState Govt.",
      link: "/dvv-documents/reserved-seats-govt.pdf",
    },
    {
      number: "2.3",
      text: "Number of outgoing final year students year-wise during last five years.",
      link: "/dvv-documents/outgoing-students-five-years.pdf",
    },
    {
      number: "3.1",
      text: "Number of Full time Teacher.",
      link: "/dvv-documents/full-time-teachers.pdf",
    },
    {
      number: "3.2",
      text: "Number of full time teachers year-wise during the last five years.",
      link: "/dvv-documents/full-time-teachers-five-years.pdf",
    },
  ]

  const criteriaItems = [
    {
      name: "Criteria - 1",
      link: "/dvv-documents/criteria-1.pdf",
    },
    {
      name: "Criteria - 2",
      link: "/dvv-documents/criteria-2.pdf",
    },
    {
      name: "Criteria - 3",
      link: "/dvv-documents/criteria-3.pdf",
    },
    {
      name: "Criteria - 4",
      link: "/dvv-documents/criteria-4.pdf",
    },
    {
      name: "Criteria - 5",
      link: "/dvv-documents/criteria-5.pdf",
    },
    {
      name: "Criteria - 6",
      link: "/dvv-documents/criteria-6.pdf",
    },
    {
      name: "Criteria - 7",
      link: "/dvv-documents/criteria-7.pdf",
    },
    {
      name: "Appeal",
      link: "/dvv-documents/appeal.pdf",
    },
  ]

  const handleItemClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item)
  }

  const CriteriaItem = ({ item, link, type, parameters }) => {
    const isExpanded = expandedItem === item

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 cursor-pointer transition-colors duration-200"
          onClick={() => handleItemClick(item)}
        >
          <div className="flex-1">
            <h5 className="mb-2 monser-500 text-xl md:text-[36px]">{item}</h5>
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
              {type === "extended-profile" ? (
                <div>
                  <h5 className="text-lg md:text-[20px] text-black monser-500 mb-4">
                    Serial Number and Parameter
                  </h5>
                  <div className="space-y-2">
                    {parameters.map((param, index) => (
                      <div key={index} className="flex items-start">
                        <span className="mr-3 mt-1 text-black">
                          {param.number}
                        </span>
                        <div className="flex-1">
                          <span className="monser-400 text-base md:text-lg text-black">
                            {param.text} -{" "}
                            <a
                              href={param.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="underline cursor-pointer"
                              onClick={(e) => e.stopPropagation()}
                            >
                              View
                            </a>
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer text-sm md:text-base"
                  onClick={(e) => e.stopPropagation()}
                >
                  View Document
                </a>
              )}
            </div>
          </div>
        )}
      </div>
    )
  }

  return (
    <div className="bg-[#E0F8F3] py-4 md:py-8">
      <div className="mx-4 md:mx-20">
        <div className="mb-8">
          <h3 className="text-2xl md:text-[65px] text-[#0C2165] playfair-300 mb-2">
            DVV
          </h3>
        </div>

        <CriteriaItem
          item="Extended Profile"
          type="extended-profile"
          parameters={parameters}
        />

        {criteriaItems.map((item, index) => (
          <CriteriaItem key={index} item={item.name} link={item.link} />
        ))}
      </div>
    </div>
  )
}

export default DvvExtendedProfile
