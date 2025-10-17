"use client"
import React, { useEffect } from "react"
import Image from "next/image"
import BhmOverviewTabs from "./BhmOverviewTabs"

const Overview = () => {
  // ✅ Scroll to top when this component mounts
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
            Please see the Admission Process page for important dates and
            deadlines for this course.
          </p>
        </>
      ),
    },
    {
      key: "eligibility",
      label: "Eligibility",
      content: (
        <>
          <h6
            style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: "600" }}
            className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3"
          >
            To enroll in the program, applicants must meet one of the following
            academic qualifications:
          </h6>

          <ol className="list-decimal pl-5 text-gray-800 text-sm sm:text-base space-y-1">
            <li>
              Successful completion of a Pre-University Course (PUC)/12th
              standard or an equivalent examination. Candidates with strong
              communication skills are preferred.
            </li>
            <li>
              Holders of GCE/JGCSE/GCSE Certification must have passed at least
              FIVE subjects at &apos;O&apos; level and TWO subjects at
              &apos;A&apos; level.
            </li>
            <li>
              A pass certificate or diploma from a Secondary Stage Level
              Examination (12 Years) in any discipline, recognised by a
              national-level board or council of any country.
            </li>
          </ol>
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
            Please see the Admission Process page for important dates and
            deadlines for this course.
          </p>
        </>
      ),
    },
  ]

  return (
    <div className="py-10" style={{ backgroundColor: "#FFE0E9" }}>
      <div className="px-4 lg:px-8">
        <div className="container mx-auto flex flex-col gap-10">
          {/* BHM Program Overview */}
          <div className="items-center justify-between grid grid-cols-1 lg:grid-cols-2">
            <h3 className="text-[#0C2165]">
              <span className="italic text-[#A22877] playfair-300">
                BHM Program
              </span>
              <br />
              Overview
            </h3>
            <p>
              This program is tailored for those who want to enter the
              hospitality world with an edge. From culinary arts and front
              office to marketing, entrepreneurship, and sustainability, our
              curriculum prepares you for a lifelong career in the service
              economy.
            </p>
          </div>

          {/* Recognition Timeline */}
          <div>
            {/* Desktop & Tablet Image */}
            <div className="hidden md:flex justify-center">
              <Image
                src="/bhm-img/overview-img_converted.webp"
                alt="BHM Program Overview Desktop"
                width={1000}
                height={600}
                className="object-contain"
              />
            </div>
            {/* Mobile Image */}
            <div className="flex justify-center md:hidden">
              <Image
                src="/bhm-img/BHM-mobiles.svg"
                alt="BHM Program Overview Mobile"
                width={500}
                height={300}
                className="object-contain"
              />
            </div>
          </div>

          {/* Tabs */}
          <BhmOverviewTabs tabs={tabData} />
        </div>
      </div>
    </div>
  )
}

export default Overview
