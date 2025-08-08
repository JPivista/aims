import React from "react"
import Image from "next/image"

const Overview = () => {
  
  const eligibilityData = [
    {
      id: 1,
      heading: "The applicant must satisfy one of the following eligibility criteria for admissions into the MBA program:",
      items: [
        "A graduate degree under 10+2+3 or 10+2+4 pattern under any discipline, securing at least 50% marks in aggregate, from a recognised university",
        "An honors degree under 10+2+4 pattern from a recognised university under UGC Act with at least 50% marks in aggregate including languages",
        "Candidates who have passed Bachelor/Master degree through correspondence/Open University System from this university or from any other university recognised by law, are exempted from 10+2 pattern. The duration of the degree program must be 3 + 2 years"
      ]
    },
    {
      id: 2,
      heading: "Important:",
      items: [
        "Candidates who pass bachelor/master degree in any university system in single sitting pattern are not eligible for admission to the MBA program offered by AIMS Institutes, Bangalore",
        "In case of SC/ST/Category I candidates, there is a relaxation of 5% in the aggregate of marks obtained in the University Exams",
        "MBA admission criteria is based on a valid score in PGCET (MBA)/CAT/MAT/XAT/ATMA or any national admission test"
      ]
    }
  ]
  
  return (
    <div className="bg-[#E1F9F4]">
      <div className="container mx-auto px-4 md:px-6 lg:px-0 pb-8 md:pb-12 lg:pb-16">
        {/* MBA Program overview */}
        <div className="flex flex-col lg:flex-row gap-4 md:gap-6 lg:gap-8 justify-between items-start lg:items-center py-6 md:py-8 lg:py-10">
          <h2 className="w-full lg:w-2/5 mb-4 lg:mb-0">
            <span className="mba-program-text text-3xl md:text-4xl lg:text-5xl xl:text-[70px] leading-tight md:leading-tight lg:leading-tight xl:leading-[72px]">MBA Program</span>
            <br />
            <span className="overview-text text-3xl md:text-4xl lg:text-5xl xl:text-[70px] leading-tight md:leading-tight lg:leading-tight xl:leading-[72px]">Overview</span>
          </h2>
          <p className="w-full lg:w-3/5 monser-400 text-sm md:text-base lg:text-lg leading-relaxed">
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
        <div className='flex justify-center '>
            <Image
                src="/mcom/mcom-program.svg"
                alt="M.Com Program Overview"
                width={1000}
                height={600}
                className="object-contain"
            />
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4 md:gap-6 lg:gap-8 py-8 md:py-10 lg:py-14">
          <button className="px-3 py-2 md:px-4 md:py-2 rounded-2xl border border-black text-xs md:text-sm lg:text-base whitespace-nowrap">
            Important Dates
          </button>
          <button className="px-3 py-2 md:px-4 md:py-2 rounded-2xl text-white bg-[#A22877] text-xs md:text-sm lg:text-base whitespace-nowrap">
            Eligibility
          </button>
          <button className="px-3 py-2 md:px-4 md:py-2 rounded-2xl border border-black text-xs md:text-sm lg:text-base whitespace-nowrap">
            Selection Process
          </button>
        </div>

        {/* Eligibility */}
        <div className="bg-white rounded-2xl w-full">
          <div className="px-4 md:px-8 lg:px-12 xl:px-20 py-6 md:py-8">
            {eligibilityData.map((section) => (
              <div key={section.id} className="mb-6 md:mb-8">
                <h5 className="text-[#A22877] font-bold text-lg md:text-xl lg:text-2xl monser-600 leading-tight mb-4 md:mb-6">
                  {section.heading}
                </h5>
                <ul className="list-disc pl-4 md:pl-6 lg:pl-8 font-monser-400 text-sm md:text-base lg:text-lg space-y-2 md:space-y-3">
                  {section.items.map((item, index) => (
                    <li key={index}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            <p>Students seeking admission to MBA degree at AIMS Institutes must adhere to the guidelines of eligibility prior to submitting application form (online only) to us. All applications which do not meet our MBA selection criteria listed above will not be entertained.</p>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Overview
