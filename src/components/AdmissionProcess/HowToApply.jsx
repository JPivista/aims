import React from "react"
import Image from "next/image"

const HowToApply = () => {
  const deadlines = [
    {
      program: "MBA Program (Non-PGCET)",
      deadline: "March 31, 2025",
    },
    {
      program: "Postgraduate Programs (Non-MBA)",
      deadline: "31st August 2025",
    },
    {
      program: "Undergraduate Programs",
      deadline: "15th August 2025",
    },
  ]

  return (
    <>
      {/* Hero Banner Text */}
      <div className="bg-[#FCE1E1] py-16">
        <p className="text-lg md:text-xl text-[#010066] max-w-5xl monser-400 text-center mx-auto">
          Every future begins with a first step, and at AIMS, we make sure that
          step is clear, structured, and supportive. Whether you're aiming to
          enter an undergraduate course, a postgraduate program, or our flagship
          MBA, our admission process is designed to help you make confident,
          well-informed choices.
        </p>
      </div>
      {/* How to Apply */}
      <div className="flex flex-col lg:flex-row justify-between gap-8 md:gap-12 lg:gap-16 py-10">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 space-y-6 ml-20">
          <h2 className="text-3xl md:text-[65px] text-[#A22877] mb-4 playfair-300">
            How to Apply
          </h2>

          <p className="text-lg md:text-xl leading-relaxed monser-400">
            You can apply for admission online by clicking the “Apply Now”
            button at the top-right of this website. The application is
            straightforward and designed to support students at every stage.
          </p>

          <div className="space-y-4">
            <h5 className=" text-xl md:text-[28px] monser-600">
              Before you begin, we recommend reviewing:
            </h5>

            <ul className="space-y-3 list-disc list-inside">
              <li className="text-base md:text-lg monser-400">
                The <span className="monser-600">eligibility criteria</span> on
                your chosen program page
              </li>
              <li className="text-base md:text-lg monser-400">
                The <span className="monser-600">documents required</span> for
                applying to UG or PG courses
              </li>
              <li className="text-base md:text-lg monser-400">
                The{" "}
                <span className="monser-600">
                  important deadlines for college admissions 2025
                </span>
              </li>
            </ul>
          </div>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex lg:justify-end lg:pl-8">
          <Image
            src="/admission-process/apply.svg"
            alt="Admission Process"
            width={1000}
            height={1000}
            className="w-full max-w-xl lg:max-w-2xl"
          />
        </div>
      </div>

      {/* Important Deadlines */}
      <div className="bg-[#E1F9F4] py-16">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h1 className="text-[#A22877] text-3xl md:text-[72px] lg:text-5xl playfair-300 mb-2">
              Important Deadlines
            </h1>
          </div>

          <div className="max-w-4xl mx-auto">
            {/* Table Header */}
            <div className="grid grid-cols-2 gap-4 mb-4 text-white">
              <div className="bg-[#002561]  p-2 rounded-[10px] text-center  monser-600 text-[28px]">
                Admission Type
              </div>
              <div className="bg-[#002561] p-2 rounded-[10px] text-center monser-600 text-[28px]">
                Application Deadline
              </div>
            </div>

            {/* Table Rows */}
            <div className="space-y-4">
              {deadlines.map((item, index) => (
                <div key={index} className="grid grid-cols-2 gap-4">
                  <div className="bg-white p-4 rounded-[10px]  monser-400 text-[20px]">
                    {item.program}
                  </div>
                  <div className="bg-white p-4 rounded-[10px] text-center monser-400 text-[20px]">
                    {item.deadline}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default HowToApply
