import React from "react"
import Image from "next/image"
import OverviewTabs from "../shared/OverviewTabs"

const Overview = () => {
  const eligibilityData = [
    {
      id: 1,
      heading:
        "The applicant must satisfy one of the following eligibility criteria for admissions into the MBA program:",
      items: [
        "A graduate degree under 10+2+3 or 10+2+4 pattern under any discipline, securing at least 50% marks in aggregate, from a recognised university",
        "An honors degree under 10+2+4 pattern from a recognised university under UGC Act with at least 50% marks in aggregate including languages",
        "Candidates who have passed Bachelor/Master degree through correspondence/Open University System from this university or from any other university recognised by law, are exempted from 10+2 pattern. The duration of the degree program must be 3 + 2 years",
      ],
    },
    {
      id: 2,
      heading: "Important:",
      items: [
        "Candidates who pass bachelor/master degree in any university system in single sitting pattern are not eligible for admission to the MBA program offered by AIMS Institutes, Bangalore",
        "In case of SC/ST/Category I candidates, there is a relaxation of 5% in the aggregate of marks obtained in the University Exams",
        "MBA admission criteria is based on a valid score in PGCET (MBA)/CAT/MAT/XAT/ATMA or any national admission test",
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
            className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3"
          >
            Important Dates
          </h6>
          <p className="text-gray-800 text-sm sm:text-base">
            Here you can list important dates related to the MBA program, such
            as application deadlines, interview schedules, and admission
            timelines.
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
            <div key={section.id} className="mb-6 md:mb-8">
              <h5 className="text-[#A22877] font-bold text-lg md:text-[24px] monser-600 leading-tight mb-4 md:mb-6">
                {section.heading}
              </h5>
              <ul className="list-disc pl-4 md:pl-6 font-monser-400 text-sm md:text-[18px] space-y-2 md:space-y-3">
                {section.items.map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-gray-800 text-sm sm:text-base">
            Students seeking admission to MBA degree at AIMS Institutes must
            adhere to the guidelines of eligibility prior to submitting
            application form (online only) to us. All applications which do not
            meet our MBA selection criteria listed above will not be
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
            className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3"
          >
            Selection Process
          </h6>
          <p className="text-gray-800 text-sm sm:text-base">
            The selection process includes an entrance test followed by an
            interview. Candidates will be assessed on their research aptitude
            and subject knowledge.
          </p>
        </>
      ),
    },
  ]
  return (
    <div className="bg-[#E1F9F4]">
      <div className="container mx-auto px-4 md:px-6 pb-8 md:pb-12">
        {/* MBA Program overview */}
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 justify-between md:items-center py-6 md:py-8">
          <h2 className="w-full md:w-2/5 mb-4 md:mb-0">
            <span className="mba-program-text text-3xl md:text-4xl leading-tight md:leading-tight">
              MBA Program
            </span>
            <br />
            <span className="overview-text text-3xl md:text-4xl leading-tight md:leading-tight">
              Overview
            </span>
          </h2>
          <p className="w-full md:w-3/5 monser-400 text-sm md:text-base leading-relaxed">
            Since 1998, the MBA program at AIMS Institutes has been equipping
            future leaders to aim sharp and solve complex business challenges.
            We train students to build strong conceptual and analytical
            foundations, essential for hitting the mark in today's business
            world. With a curriculum that sharpens skill and mindset, our
            graduates are prepared to lead with clarity, confidence, and
            competence.
          </p>
        </div>

        {/* Recognition timeline */}
        <div className="flex justify-center ">
          <Image
            src="/MBA/mba-program.svg"
            alt="MBA Program Overview"
            width={1000}
            height={600}
            className="object-contain"
          />
        </div>

        {/* Buttons */}
        <OverviewTabs tabs={tabData} />
      </div>
    </div>
  )
}

export default Overview
