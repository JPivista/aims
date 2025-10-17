import React from "react"
import Image from "next/image"

const PracticalSkills = () => {
  const statsData = [
    {
      id: 1,
      image: "/MBA/excel-final.svg",
      title: "Microsoft Excel (Advanced)",
      description:
        "Industry-standard proficiency for data handling and reporting",
    },
    {
      id: 2,
      image: "/MBA/google-final.svg",
      title: "Google Workspace Tools",
      description: "Productivity tools for business collaboration",
    },
    {
      id: 3,
      image: "/MBA/tally-final.svg",
      title: "Tally or Accounting Software Training",
      description: "For students opting for Finance specialisations",
    },
    {
      id: 4,
      image: "/MBA/business-final.svg",
      title: "Business Communication & Presentation Skills",
      description: "Workshops to build clarity and confidence",
    },
  ]

  return (
    <>
      <div className="bg-[#FCE6F499] px-4 md:px-8 lg:px-8 ">
        <div className="container mx-auto  py-6 md:py-8 lg:py-10">
          {/* First Div - Flex Row */}
          <div className="flex flex-col md:flex-col lg:flex-row w-full gap-6 md:gap-8 lg:gap-0 mb-8 md:mb-10 lg:mb-12">
            {/* Left Side - Flex Column (2/3 width) */}
            <div className="flex flex-col space-y-3 w-full md:w-full lg:w-4/5 ">
              <h2 className="text-4xl md:text-5xl lg:text-6xl playfair-300 text-[#0C2165]">
                Practical Skills.
                <br />
                Recognised Certifications.
              </h2>
              <p className="text-base md:text-lg lg:text-[20px]  monser-400 leading-relaxed">
                Your MBA is more than a degree. It's a toolkit for your future.
              </p>
            </div>

            {/* Right Side - Single Paragraph (1/3 width) */}
            <div className="w-full md:w-full lg:w-1/3 flex items-center justify-start md:justify-start lg:justify-start md:-ml-0 lg:-ml-30">
              <p className="text-sm md:text-base lg:text-[24px]  monser-400 md:mb-6 lg:mb-10">
                At AIMS, we integrate essential certifications and learning
                tools that give you a competitive edge from day one. These are
                part of your journey toward a dependable, career-ready
                foundation.
              </p>
            </div>
          </div>

          {/* Second Div - 2x2 Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 md:gap-6 lg:gap-8">
            {statsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg shadow-sm w-full flex flex-col md:flex-col lg:flex-row items-start space-y-3 md:space-y-3 lg:space-y-0 md:space-x-0 lg:space-x-4"
              >
                {/* Image - Full width on mobile, 1/3 on desktop */}
                <div className="flex-shrink-0 w-full md:w-full lg:w-1/3">
                  <div className="w-full h-full">
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={64}
                      height={64}
                      className="w-full h-32 md:h-40 lg:h-[160px] object-cover rounded-lg border-1 border-[#ADADAD]"
                    />
                  </div>
                </div>
                <div className="flex flex-col md:flex-col lg:flex-row items-start space-y-2 md:space-y-2 lg:space-y-0 md:space-x-0 lg:space-x-4 p-3 md:p-4 lg:p-4 w-full md:w-full lg:flex-1">
                  {/* Title and Paragraph - Full width on mobile, 2/3 on desktop */}
                  <div className="flex-1 w-full">
                    <h5 className="text-[20px] md:text-[22px] lg:text-[24px] monser-600 mb-2 sm:mb-3 leading-tight text-[#002561]">
                      {item.title}
                    </h5>
                    <p className="text-[16px] md:text-[17px] lg:text-lg monser-400 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Paragraph */}
          <div className="mt-8 md:mt-10 lg:mt-8 md:text-start lg:text-start ">
            <p className="text-sm sm:text-base md:text-base lg:text-lg monser-400 md:w-full lg:w-2/3 leading-relaxed ">
              Each certification is designed to support your coursework, prepare
              you for placement, and ensure you graduate with practical,
              recognised proof of your skills.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PracticalSkills
