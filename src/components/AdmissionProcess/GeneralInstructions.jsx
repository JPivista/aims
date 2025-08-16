import React from "react"
import Image from "next/image"

const GeneralInstructions = () => {
  const instructions = [
    "You may apply to only one program per application form. If applying to multiple programs, please submit separate applications",
    "Ensure all documents uploaded are clear, valid, and legible. Refer to our list of documents required for applying to UG or PG courses in Bangalore",
    "Admission offers are subject to verification of eligibility criteria and timely payment of fees",
    "If you're awaiting final-year results, you may still apply. Admission will be provisional until documents are submitted",
    "Please check your email regularly for updates from our admissions team",
    "All deadlines are strictly followed. Late submissions may not be considered",
    "The admission process for management colleges in Bangalore, especially for MBA, involves additional selection stages. Prepare accordingly",
  ]

  return (
    <>
      {/* Main Content - Two Flex Containers */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 py-8 sm:py-12 md:py-16">
        {/* Left Side - Heading and Instructions (5/6 width) */}
        <div className="w-full lg:w-5/6 px-4 sm:px-6 md:px-8 lg:ml-20">
          {/* Heading */}
          <h1 className="text-[#0C2165] text-2xl sm:text-3xl md:text-5xl lg:text-[72px] playfair-300 mb-4 sm:mb-6 md:mb-8 leading-tight">
            General <br />
            Instructions
          </h1>

          {/* Instructions List */}
          <div className="space-y-3 sm:space-y-4">
            <ul className="space-y-2 sm:space-y-3 list-disc list-inside">
              {instructions.map((instruction, index) => (
                <li
                  key={index}
                  className="text-gray-700 text-sm sm:text-base md:text-lg lg:text-[20px] monser-400 leading-relaxed"
                >
                  {instruction}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Right Side - Image (1/6 width) - Hidden on mobile and tablet */}
        <div className="hidden lg:flex w-full lg:w-1/6 justify-center lg:justify-end lg:-mt-14 lg:-mr-10">
          <Image
            src="/admission-process/circle.svg"
            alt="General Instructions"
            width={300}
            height={300}
            className="w-60 h-60"
            priority
          />
        </div>
      </div>
    </>
  )
}

export default GeneralInstructions
