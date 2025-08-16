import React from "react"
import Image from "next/image"

const PracticalSkills = () => {
  const statsData = [
    {
      id: 1,
      image: "/MBA/advance-excel-logo.jpg",
      title: "Microsoft Excel (Advanced)",
      description:
        "Industry-standard proficiency for data handling and reporting",
    },
    {
      id: 2,
      image: "/MBA/workspace.png",
      title: "Google Workspace Tools",
      description: "Productivity tools for business collaboration",
    },
    {
      id: 3,
      image: "/MBA/tally-icon.png",
      title: "Tally or Accounting Software Training",
      description: "For students opting for Finance specialisations",
    },
    {
      id: 4,
      image: "/MBA/presentation.jpg",
      title: "Business Communication & Presentation Skills",
      description: "Workshops to build clarity and confidence",
    },
  ]

  return (
    <>
      <div className="bg-[#FCE6F499] py-6 sm:py-8 md:py-10 lg:py-12">
        <div className="container mx-auto px-4 md:px-0">
          {/* First Div - Flex Row */}
          <div className="flex flex-col lg:flex-row w-full gap-6 sm:gap-8 md:gap-10 mb-8 md:mb-12">
            {/* Left Side - Flex Column (2/3 width) */}
            <div className="flex flex-col space-y-3 w-full lg:w-3/5 px-4 md:px-0 ">
              <h2 className="text-3xl md:text-[60px] playfair-300 text-[#0C2165]">
                Practical Skills.
                <br />
                Recognised Certifications.
              </h2>
              <p className="text-base sm:text-lg md:text-xl lg:text-2xl monser-400 leading-relaxed">
                Your MBA is more than a degree. It's a toolkit for your future.
              </p>
            </div>

            {/* Right Side - Single Paragraph (1/3 width) */}
            <div className="w-full lg:w-1/3 flex items-center justify-start px-4 md:px-0">
              <p className="text-sm md:text-[24px]  monser-400 md:mb-10">
                At AIMS, we integrate essential certifications and learning
                tools that give you a competitive edge from day one. These are
                part of your journey toward a dependable, career-ready
                foundation.
              </p>
            </div>
          </div>

          {/* Second Div - 2x2 Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {statsData.map((item) => (
              <div
                key={item.id}
                className="bg-white rounded-lg p-4 sm:p-5 md:p-6 shadow-sm border border-gray-100 w-full"
              >
                <div className="flex flex-row items-start space-x-3 sm:space-x-4">
                  {/* Left - Image (1/3) */}
                  <div className="flex-shrink-0 w-1/3">
                    <div className="w-full h-auto rounded-lg border-2 border-red-500">
                      <Image
                        src={item.image}
                        alt={item.title}
                        width={64}
                        height={64}
                        className="w-full h-auto object-cover"
                      />
                    </div>
                  </div>

                  {/* Right - Title and Paragraph (2/3) */}
                  <div className="flex-1">
                    <h5 className="text-sm sm:text-base md:text-lg monser-600 mb-2 sm:mb-3 leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-sm sm:text-base md:text-lg monser-400  leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Third Paragraph */}
          <div className="mt-8 sm:mt-10 md:mt-12 md:text-start px-4 md:px-0">
            <p className="text-sm sm:text-base md:text-lg monser-400 md:w-2/3 leading-relaxed ">
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
