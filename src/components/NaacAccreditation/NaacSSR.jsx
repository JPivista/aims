"use client"
import React, { useState } from "react"
import Image from "next/image"

const NaacSSR = () => {
  const [expandedItem, setExpandedItem] = useState("Self Study Report")

  const criteriaItems = [
    {
      name: "Self Study Report",
      type: "header",
      links: [
        {
          text: "NAAC SSR - View",
          link: "/naac-documents/naac-ssr.pdf",
        },
        {
          text: "IIQA - View",
          link: "/naac-documents/iiqa.pdf",
        },
      ],
    },
    {
      name: "Extended Profile",
      link: "/naac-documents/extended-profile.pdf",
    },
    {
      name: "Criteria - 1 Curricular Aspects",
      link: "/naac-documents/criteria-1-curricular-aspects.pdf",
    },
    {
      name: "Criteria - 2 Teaching Learning and Evaluation",
      link: "/naac-documents/criteria-2-teaching-learning-evaluation.pdf",
    },
    {
      name: "Criteria - 3 Research, Consultancy and Extension",
      link: "/naac-documents/criteria-3-research-consultancy-extension.pdf",
    },
    {
      name: "Criteria - 4 Infrastructure and Learning Resources",
      link: "/naac-documents/criteria-4-infrastructure-learning-resources.pdf",
    },
    {
      name: "Criteria - 5 Student Support and Progression",
      link: "/naac-documents/criteria-5-student-support-progression.pdf",
    },
    {
      name: "Criteria - 6 Governance, Leadership and Management",
      link: "/naac-documents/criteria-6-governance-leadership-management.pdf",
    },
    {
      name: "Criteria - 7 Innovations and Best Practices",
      link: "/naac-documents/criteria-7-innovations-best-practices.pdf",
    },
  ]

  const handleItemClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item)
  }

  const CriteriaItem = ({ item, link, type, links }) => {
    const isExpanded = expandedItem === item

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 md:py-4 lg:py-6 cursor-pointer transition-colors duration-200"
          onClick={() => handleItemClick(item)}
        >
          <div className="flex-1 pr-3 md:pr-4 lg:pr-6">
            <h5 className="monser-500 text-lg md:text-xl lg:text-2xl xl:text-[36px] leading-tight break-words">
              {item}
            </h5>
          </div>
          <Image
            src="/nirf/arrow.svg"
            alt="Arrow"
            width={31}
            height={31}
            className={`w-3 h-3 md:w-4 md:h-4 lg:w-6 lg:h-6 xl:w-8 xl:h-8 flex-shrink-0 transition-transform duration-200 ${
              isExpanded ? "rotate-90" : ""
            }`}
          />
        </div>

        {isExpanded && (
          <div className="px-2 md:px-4 lg:px-6 pb-3 md:pb-4 lg:pb-6">
            <div>
              {type === "header" ? (
                <div className="space-y-2 md:space-y-3">
                  {links.map((linkItem, index) => (
                    <div key={index} className="flex items-start">
                      <span className="mr-2 md:mr-3 mt-1 text-sm md:text-base flex-shrink-0">
                        •
                      </span>
                      <div className="flex-1 min-w-0">
                        <span className="monser-400 text-sm md:text-base lg:text-lg break-words">
                          {linkItem.text.split(" - ")[0]} -{" "}
                          <a
                            href={linkItem.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="underline cursor-pointer"
                            onClick={(e) => e.stopPropagation()}
                          >
                            {linkItem.text.split(" - ")[1]}
                          </a>
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <a
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer text-sm md:text-base lg:text-lg"
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
    <div className="py-4 md:py-6 lg:py-8">
      <div className="mx-4 md:mx-20">
        <div className="mb-6 md:mb-8">
          <h3 className="text-xl md:text-2xl lg:text-3xl xl:text-4xl font-bold text-[#0C2165] playfair-300 mb-2 md:mb-3">
            NAAC SSR
          </h3>
        </div>
        {criteriaItems.map((item, index) => (
          <CriteriaItem
            key={index}
            item={item.name}
            link={item.link}
            type={item.type}
            links={item.links}
          />
        ))}
      </div>
    </div>
  )
}

export default NaacSSR
