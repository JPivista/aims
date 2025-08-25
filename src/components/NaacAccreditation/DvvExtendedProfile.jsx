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
      type: "header",
      links: [
        {
          text: "1.2.1 Number of Programmes in which CBCS Elective course system implemented. - View",
          link: "/dvv-documents/criteria-1.pdf",
        },
        {
          text: "1.2.2 Add on Certificate programs offered during the last five years. - View",
          link: "/dvv-documents/criteria-1.pdf",
        },
        {
          text: "1.2.3 Students enrolled in Certificate program. - View",
          link: "/dvv-documents/criteria-1.pdf",
        },
        {
          text: "1.3.2 Statement for Number of Courses that include Experiential Learning. - View",
          link: "/dvv-documents/criteria-1.pdf",
        },
        {
          text: "1.3.3 Courses that include experiential learning and supporting for samples. - View",
          link: "/dvv-documents/criteria-1.pdf",
        },
      ],
    },
    {
      name: "Criteria - 2",
      type: "header",
      links: [
        {
          text: "2.1.1 Average Enrolment percentage (Average of last five years). - View",
          link: "/dvv-documents/criteria-2.pdf",
        },
        {
          text: "2.1.2 Number of actual students admitted from the reserved categories year-wise during the last five years. - View",
          link: "/dvv-documents/criteria-2.pdf",
        },
        {
          text: "2.3.3 Report of the issues in the Mentor system and certificate for mentor mentee ratio. - View",
          link: "/dvv-documents/criteria-2.pdf",
        },
        {
          text: "2.6.3. Number of final year students who passed the university examination year-wise during the last five years. - View",
          link: "/dvv-documents/criteria-2.pdf",
        },
      ],
    },
    {
      name: "Criteria - 3",
      type: "header",
      links: [
        {
          text: "3.1.1 Total Grants from Government and non-governmental agencies for research projects. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.2.2 - Events conducted on Research Methodology, Intellectual Property Rights (IPR) and entrepreneurship. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.3.2 Number of research papers in the Journals. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.3.3 Publications - Books, Chapter and Conference proceedings with ISBN/ISSN Numbers. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.4.2 List of awards for extension activities. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.4.3 List of extension and outreach programs. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.4.4 Students in extension activities. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
        {
          text: "3.5.2 List of all the MoUs and reports. - View",
          link: "/dvv-documents/criteria-3.pdf",
        },
      ],
    },
    {
      name: "Criteria - 4",
      type: "header",
      links: [
        {
          text: "4.1.3 Number of classrooms and seminar halls with ICT facilities. - View",
          link: "/dvv-documents/criteria-4.pdf",
        },
        {
          text: "4.1.4 Expenditure for infrastructure augmentation, excluding salary year-wise during last five years. - View",
          link: "/dvv-documents/criteria-4.pdf",
        },
        {
          text: "4.2.2 Audited Income and Expenditure account showing the total amount spent on e-resources. - View",
          link: "/dvv-documents/criteria-4.pdf",
        },
        {
          text: "4.2.3 Expenditure statement for procurement of books, eBooks and journals, e-Journals. - View",
          link: "/dvv-documents/criteria-4.pdf",
        },
        {
          text: "4.3.2 Bills invoices for the purchase of computers for student use and stock register. - View",
          link: "/dvv-documents/criteria-4.pdf",
        },
        {
          text: "4.4.1 Expenditure incurred on maintenance of infrastructure. - View",
          link: "/dvv-documents/criteria-4.pdf",
        },
      ],
    },
    {
      name: "Criteria - 5",
      type: "header",
      links: [
        {
          text: "5.1.1 Number of students benefited by scholarships and freeships provided by the Government. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.1.2 number of students benefited by scholarships, freeships, etc provided by the institution. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.1.3 Capacity building and skills enhancement initiatives. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.1.4 Number of students benefitted by guidance for competitive examinations and career counselling. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.1.5 The Institution has a transparent mechanism for timely redressal of student grievances. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.2.2 List of students proceeding for higher education. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.2.2 Scanned Documents of sample. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.3.1 List of awards and medal winners. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.3.1 List of award medal winners and supporting docs. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
        {
          text: "5.3.3 List of sports and cultural activities. - View",
          link: "/dvv-documents/criteria-5.pdf",
        },
      ],
    },
    {
      name: "Criteria - 6",
      type: "header",
      links: [
        {
          text: "6.2.3 Implementation of e-governance in areas of operation. - View",
          link: "/dvv-documents/criteria-6.pdf",
        },
        {
          text: "6.3.2 Audited statement and teachers provided with financial support. - View",
          link: "/dvv-documents/criteria-6.pdf",
        },
        {
          text: "6.3.3 list of professional development programs and participants. - View",
          link: "/dvv-documents/criteria-6.pdf",
        },
        {
          text: "6.3.4 list of FDPs conducted by the College and supporting. - View",
          link: "/dvv-documents/criteria-6.pdf",
        },
        {
          text: "6.5.3 policy of the College on promotion of quality accreditation and collaborative activities. - View",
          link: "/dvv-documents/criteria-6.pdf",
        },
      ],
    },
    {
      name: "Criteria - 7",
      type: "header",
      links: [
        {
          text: "7.1.6 Environment Audit Certificate and reports of events. - View",
          link: "/dvv-documents/criteria-7.pdf",
        },
        {
          text: "7.1.10 Code of conduct - supporting documents. - View",
          link: "/dvv-documents/criteria-7.pdf",
        },
      ],
    },
    {
      name: "Appeal",
      type: "header",
      links: [
        {
          text: "3.3.3 Publications - Books, Chapter and Conference proceedings with ISBN/ISSN Numbers. - View",
          link: "/dvv-documents/appeal.pdf",
        },
      ],
    },
  ]

  const handleItemClick = (item) => {
    setExpandedItem(expandedItem === item ? null : item)
  }

  const CriteriaItem = ({ item, link, type, parameters, links }) => {
    const isExpanded = expandedItem === item

    return (
      <div className="border-b border-black">
        <div
          className="flex items-center justify-between py-2 cursor-pointer transition-colors duration-200"
          onClick={() => handleItemClick(item)}
        >
          <div className="flex-1">
            <h5 className="mb-2 monser-500 text-xl md:text-3xl">{item}</h5>
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
              ) : type === "header" ? (
                <div>
                  <h5 className="text-lg md:text-[20px] text-black monser-500 mb-4">
                    Serial Number and Parameter
                  </h5>
                  <div className="space-y-2">
                    {links.map((linkItem, index) => (
                      <div key={index} className="flex items-start">
                        <span className="mr-2 md:mr-3 mt-1 text-sm md:text-base flex-shrink-0">
                          •
                        </span>
                        <div className="flex-1 min-w-0">
                          <span className="monser-400 text-sm md:text-base lg:text-lg break-words">
                            {linkItem.text.includes(" - View") ? (
                              <>
                                {linkItem.text.replace(" - View", "")} -{" "}
                                <a
                                  href={linkItem.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="underline cursor-pointer"
                                  onClick={(e) => e.stopPropagation()}
                                >
                                  View
                                </a>
                              </>
                            ) : (
                              <a
                                href={linkItem.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="underline cursor-pointer"
                                onClick={(e) => e.stopPropagation()}
                              >
                                {linkItem.text}
                              </a>
                            )}
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
    <div className="bg-[#E0F8F3] py-6 md:py-10">
      <div className="container mx-auto px-4 md:px-0">
        <div className="mb-6">
          <h3 className="text-2xl md:text-[65px] text-[#0C2165] playfair-300 tracking-wider">
            DVV
          </h3>
        </div>

        <CriteriaItem
          item="Extended Profile"
          type="extended-profile"
          parameters={parameters}
        />

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

export default DvvExtendedProfile
