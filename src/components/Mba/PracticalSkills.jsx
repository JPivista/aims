import React from "react"
import Image from "next/image"

const PracticalSkills = () => {
  const statsData = [
    {
      id: 1,
      image: "/MBA/advance-excel-logo.jpg",
      title: "Microsoft Excel (Advanced)",
      description: "Industry-standard proficiency for data handling and reporting"
    },
    {
      id: 2,
      image: "/MBA/workspace.png",
      title: "Google Workspace Tools",
      description: "Productivity tools for business collaboration"
    },
    {
      id: 3,
      image: "/MBA/tally-icon.png",
      title: "Tally or Accounting Software Training",
      description: "For students opting for Finance specialisations"
    },
    {
      id: 4,
      image: "/MBA/presentation.jpg",
      title: "Business Communication & Presentation Skills",
      description: "Workshops to build clarity and confidence"
    }
  ]

  return (
    <>
      <div className="bg-[#FCE6F499] py-8 sm:py-10 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
          
          {/* First Div - Flex Row */}
          <div className="flex flex-col lg:flex-row w-full gap-4 sm:gap-6 md:gap-8 lg:gap-0 mb-8 sm:mb-10 md:mb-12">
            
            {/* Left Side - Flex Column (2/3 width) */}
            <div className="flex flex-col space-y-3 sm:space-y-4 w-full lg:w-2/3">
              <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl 2xl:text-[60px] font-bold playfair-300 text-[#0C2165] leading-tight">
                Practical Skills.
                <br />
                Recognised Certifications.
              </h2>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 monser-400 leading-relaxed">
                Your MBA is more than a degree. It's a toolkit for your future.
              </p>
            </div>
            
            {/* Right Side - Single Paragraph (1/3 width) */}
            <div className="w-full lg:w-1/3 flex items-center">
              <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-2xl text-gray-700 monser-400 leading-relaxed">
                At AIMS, we integrate essential certifications and learning tools that give you a competitive edge from day one. These are part of your journey toward a dependable, career-ready foundation.
              </p>
            </div>
          </div>
          
          {/* Second Div - 2x2 Grid Items */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6 md:gap-8">
            {statsData.map((item) => (
              <div key={item.id} className="bg-white rounded-lg p-3 sm:p-4 md:p-6 shadow-sm border border-gray-100 w-full">
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
                    <h5 className="text-xs sm:text-sm md:text-base lg:text-lg monser-600 mb-1 sm:mb-2 leading-tight">
                      {item.title}
                    </h5>
                    <p className="text-xs sm:text-sm md:text-base lg:text-lg monser-400 text-gray-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          {/* Third Paragraph */}
          <div className="mt-8 sm:mt-10 md:mt-12 text-start">
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-700 monser-400 max-w-4xl leading-relaxed">
            Each certification is designed to support your coursework, prepare you for placement, 
            and ensure you graduate with practical, recognised proof of your skills.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default PracticalSkills
