import React from "react"
import Image from "next/image"
import OverviewTabs from "../shared/BBA-MBA-BBA-Aviation/OverviewTabs"

const Overview = () => {
  const eligibilityData = [
    {
      id: 1,
      heading: "Eligibility Criteria:",
      items: [
        {
          text: "Pass in Pre-University Course (PUC)/12th or any other equivalent examination. Students with good communication skills are preferred",
          hasOr: true,
        },
        {
          text: "GCE/JGCSE/GCSE Certification with pass in a minimum of FIVE subjects at 'O' level & TWO subjects at 'A' level",
          hasOr: true,
        },
        {
          text: "Pass certificate/Diploma of a Secondary Stage Level Examination (TWELVE Years) of any discipline, recognized by the national level board/council of any country",
          hasOr: false,
        },
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
    {
      key: "eligibility",
      label: "Eligibility",
      content: (
        <>
          {eligibilityData.map((section) => (
            <div key={section.id} className="mb-8 md:mb-12">
              <h5 className="text-[#A22877] text-lg md:text-[24px] monser-600  mb-4 md:mb-8">
                {section.heading}
              </h5>
              <ul className="list-disc pl-6 sm:pl-8 md:pl-10 monser-400 text-base  md:text-[18px] space-y-3 md:space-y-4">
                {section.items.map((item, index) => (
                  <li key={index} className="mb-2">
                    {item.text}
                    {item.hasOr && (
                      <>
                        <br />
                        <span className="monser-600">(or)</span>
                      </>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
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
    <div className="bg-[#E1F9F4]  px-4 py-6 md:py-10 md:px-8 lg:px-8">
      <div className="container mx-auto ">
        {/* BBA Aviation Program overview */}
        <div className="flex flex-col lg:flex-row gap-6 md:gap-10 justify-between items-start">
          <h2 className="w-full max-w-lg text-center md:text-left">
            <span className=" text-[#A22877] aviation-heading-2 text-4xl md:text-6xl ">
              BBA Aviation
            </span>
            <br />
            <span className="text-[#0C2165] text-4xl md:text-6xl playfair-300">
              Program Overview
            </span>
          </h2>
          <p className="w-full lg:w-3/5 monser-400 text-base md:text-xl">
            The BBA Aviation Management degree at AIMS is more than a classroom
            experience, it's a career compass. With a blend of theoretical
            foundations, practical case studies and industry engagement, the
            course readies students for frontline and back-end aviation roles
            across functions.
          </p>
        </div>

        {/* Recognition timeline for Mobile */}
        <div className="flex justify-center py-6 md:py-8 ">
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
                <p className="text-sm monser-400 whitespace-nowrapw">
                  Affiliated to Bangalore University
                </p>
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
                <p className="text-black text-sm">
                  BBA - 3 years (6 semesters)
                </p>
                <p className="text-black text-sm">
                  BBA (Honours) - 4 years <br /> (8 semesters)
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Version */}
          <div className="hidden md:block">
            <Image
              src="/bba-aviation/bba-aviation-program.svg"
              alt="BBA Aviation Program Overview"
              width={1000}
              height={600}
              className="object-cover w-full h-full"
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
