import React from "react"
import Image from "next/image"
import OverviewTabs from "../shared/BBA-MBA-BBA-Aviation/OverviewTabs"

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
            className="text-[#932c79] font-semibold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
          >
            Important Dates
          </h6>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed">
            Please see the{" "}
            <a href="/admission-process" className="text-[#A22877]">
              Admission Process
            </a>{" "}
            page for important dates and deadlines for this course.
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
              <ul className="list-disc pl-6 sm:pl-8 md:pl-10 font-monser-400 text-base sm:text-lg md:text-[18px] space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed">
                {section.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed tracking-wider">
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
            className="text-[#932c79] font-semibold text-lg sm:text-xl md:text-2xl mb-4 sm:mb-6"
          >
            Selection Process
          </h6>
          <p className="text-gray-800 text-base sm:text-lg md:text-xl leading-relaxed tracking-wider">
            Please see the{" "}
            <a href="/admission-process" className="text-[#A22877]">
              Admission Process
            </a>{" "}
            page for important dates and deadlines for this course.
          </p>
        </>
      ),
    },
  ]
  return (
    <div className="bg-[#E1F9F4]">
      <div className="container mx-auto px-4 md:px-0 pb-8 md:pb-10">
        {/* MBA Program overview */}
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 justify-between lg:items-center py-6 sm:py-8 md:py-10">
          <h2 className="w-full lg:w-2/5 mb-6 sm:mb-8 lg:mb-0 text-center lg:text-left tracking-wider">
            <span className="mba-program-text text-5xl md:text-[60px]">
              MBA Program
            </span>
            <br />
            <span className="text-5xl md:text-[60px] font-bold text-[#0C2165] playfair-300">
              Overview
            </span>
          </h2>
          <p className="w-full lg:w-3/5 monser-400 text-base  md:text-[18px] leading-relaxed text-center md:text-left">
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
        <div className="flex justify-center px-2 md:px-6 mb-6 md:mb-0">
          {/* Mobile Card Version */}
          <div className="block md:hidden w-full max-w-sm">
            <div className="rounded-2xl p-6 border border-[#A774CC]">
              {/* Affiliation & Recognition Section */}
              <div className="text-center mb-6">
                <div className="flex justify-center">
                  <Image
                    src="/MBA/trophy.svg"
                    alt="Trophy"
                    width={32}
                    height={32}
                    className="w-[130px] h-[130px] object-contain"
                  />
                </div>
                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                  Affiliation & Recognition
                </h5>
                <p className="text-sm monser-400 whitespace-nowrap">
                  Affiliated to Bangalore University
                </p>
                <p className="text-black text-sm">Recognised by AICTE</p>
              </div>

              <div className="border-t border-gray-500 mb-4"></div>

              {/* Accreditations Section */}
              <div className="text-center mb-6">
                <div className="flex justify-center mb-4">
                  <Image
                    src="/MBA/naac-iabce.svg"
                    alt="NAAC and IACBE"
                    width={96}
                    height={32}
                    className="w-full h-full object-contain"
                  />
                </div>
                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                  Accreditations
                </h5>
                <p className="text-sm monser-400">
                  <span className="monser-600">NAAC 'A'</span> Grade (3.25 on a
                  scale of 4)
                </p>
                <p className="text-sm monser-400">
                  <span className="monser-600">IACBE</span> Accredited
                </p>
              </div>

              <div className="border-t border-gray-500 mb-6"></div>

              {/* Duration Section */}
              <div className="text-center">
                <div className="flex justify-center">
                  <Image
                    src="/MBA/calender.svg"
                    alt="Calendar"
                    width={32}
                    height={32}
                    className="w-[130px] h-[130px] object-contain"
                  />
                </div>
                <h5 className="text-[#A22877] monser-600 text-[20px] mb-2">
                  Duration
                </h5>
                <p className="text-black text-sm">2 years (4 semesters)</p>
              </div>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="hidden md:block">
            <Image
              src="/MBA/mba-program.svg"
              alt="MBA Program Overview"
              width={1000}
              height={600}
              className="object-contain w-full h-full"
              priority
            />
          </div>
        </div>

        {/* Buttons */}
        <OverviewTabs tabs={tabData} />
      </div>
    </div>
  )
}

export default Overview
