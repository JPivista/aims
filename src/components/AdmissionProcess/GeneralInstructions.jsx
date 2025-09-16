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
      <div className="relative lg:px-8 px-0">
        <div className="container mx-auto py-6 md:py-10 px-4 md:px-0 lg:py-10 ">
          <div className="flex flex-col lg:flex-row gap-6 md:gap-12 ">
            {/* Left Side - Heading and Instructions (5/6 width) */}
            <div className="w-full lg:w-5/6">
              {/* Heading */}
              <h2 className="text-[#0C2165] text-4xl md:text-5xl lg:text-6xl playfair-300 mb-4 md:mb-8 leading-tight">
                General <br className="hidden md:block" />
                Instructions
              </h2>

              {/* Instructions List */}
              <div className="space-y-3 sm:space-y-4 lg:px-4 px-0">
                <ul className="space-y-2 sm:space-y-3 list-disc list-outside ml-4 md:ml-4 lg:ml-0">
                  {instructions.map((instruction, index) => (
                    <li
                      key={index}
                      className="text-[18px] monser-400 leading-relaxed"
                    >
                      {instruction}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Side - Image (1/6 width) - Hidden on mobile and tablet */}
          </div>
        </div>
        <div className="hidden lg:block absolute top-[1%] -right-10  z-10">
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
