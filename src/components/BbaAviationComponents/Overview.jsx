import React from "react"
import Image from "next/image"
import OverviewTabs from "../shared/BBA-MBA-BBA-Aviation/OverviewTabs"

const Overview = () => {
  const eligibilityData = [
    {
      id: 1,
      heading:
        "The applicant must satisfy one of the following eligibility criteria for admissions into the BBA Aviation program:",
      items: [
        "A pass in 10+2 or equivalent examination from a recognized board with at least 50% marks in aggregate",
        "Students from any stream (Science, Commerce, Arts) are eligible to apply",
        "Candidates appearing for their final examination can also apply, subject to meeting the eligibility criteria upon completion",
        "Interest in aviation industry and business management",
      ],
    },
    {
      id: 2,
      heading: "Important:",
      items: [
        "Candidates must have completed their 10+2 education from a recognized board",
        "In case of SC/ST/Category I candidates, there is a relaxation of 5% in the aggregate of marks obtained",
        "BBA Aviation admission criteria is based on academic performance and personal interview",
        "Candidates should have a passion for aviation and business",
      ],
    },
  ]

  const tabData = [
    {
      key: "important-dates",
      label: "Important Dates",
      content: (
        <>
          <h6
            style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: "600" }}
            className="text-[#932c79] font-semibold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
          >
            Important Dates
          </h6>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            Here you can list important dates related to the BBA Aviation
            program, such as application deadlines, interview schedules, and
            admission timelines.
          </p>
        </>
      ),
    },
    {
      key: "eligibility",
      label: "Eligibility",
      content: (
        <>
          {eligibilityData.map((section) => (
            <div key={section.id} className="mb-8 sm:mb-10 md:mb-12">
              <h5 className="text-[#A22877] font-bold text-xl sm:text-2xl md:text-[24px] monser-600 leading-tight mb-4 sm:mb-6 md:mb-8">
                {section.heading}
              </h5>
              <ul className="list-disc pl-6 sm:pl-8 md:pl-10 font-monser-400 text-base sm:text-lg md:text-xl space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed">
                {section.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            Students seeking admission to BBA Aviation degree at AIMS Institutes
            must adhere to the guidelines of eligibility prior to submitting
            application form (online only) to us. All applications which do not
            meet our BBA Aviation selection criteria listed above will not be
            entertained.
          </p>
        </>
      ),
    },
    {
      key: "selection-process",
      label: "Selection Process",
      content: (
        <>
          <h6
            style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: "600" }}
            className="text-[#932c79] font-semibold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
          >
            Selection Process
          </h6>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            The selection process includes evaluation of academic performance
            followed by a personal interview. Candidates will be assessed on
            their communication skills, academic background, aviation interest,
            and overall personality.
          </p>
        </>
      ),
    },
  ]
  return (
    <div className="bg-[#E1F9F4]">
      <div className="container mx-auto px-4 md:px-0 pb-8 md:pb-10">
        {/* BBA Aviation Program overview */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-between py-6 sm:py-8 md:py-10 px-4 md:px-0">
          <h2 className="w-full lg:w-3/5 mb-4 text-center md:text-left">
            <span className=" text-[#A22877] italic playfair-300 text-4xl md:text-[60px] ">
              BBA Aviation
            </span>
            <br />
            <span className="text-[#0C2165] text-4xl md:text-[60px] playfair-300">
              Program Overview
            </span>
          </h2>
          <p className="w-full lg:w-3/5 monser-400 text-base md:text-xl px-4 md:px-0">
            The BBA Aviation Management degree at AIMS is more than a classroom
            experience, it's a career compass. With a blend of theoretical
            foundations, practical case studies and industry engagement, the
            course readies students for frontline and back-end aviation roles
            across functions.
          </p>
        </div>

        {/* Recognition timeline */}
        <div className="flex justify-center px-2 sm:px-4 md:px-6 lg:px-0 mb-6 sm:mb-8 md:mb-10">
          <Image
            src="/bba-aviation/bba-aviation-program.svg"
            alt="BBA Aviation Program Overview"
            width={1000}
            height={600}
            className="object-contain w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-5xl"
            priority
          />
        </div>

        {/* Buttons */}
        <OverviewTabs tabs={tabData} />
      </div>
    </div>
  )
}

export default Overview
