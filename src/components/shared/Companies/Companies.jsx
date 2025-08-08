import React from "react"
import Image from "next/image"
import { companyData } from "@/utils/companyData"
import ImageWithOverlay from "../ImageWithOverlay"

const Companies = () => {
  return (
    <>
      {/* Student Image with Overlay */}
      <ImageWithOverlay
        imageSrc="/MBA/student.jpg"
        imageAlt="AIMS Students"
        heading="Companies Our Students Have Been Placed In"
        paragraph="Our MBA graduates have found opportunities with a wide range of dependable recruiters from across industries, including:"
      />
      
      <div className="bg-white py-6 sm:py-8 md:py-10 lg:py-12 xl:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
          
          {/* Companies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-6">
            {companyData.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-2 md:p-3 lg:p-4 flex items-center justify-center"
              >
                <div className="relative w-full h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={80}
                    height={60}
                    className="w-full h-full object-contain max-w-full max-h-full"
                    priority={company.id <= 6} // Prioritize first 6 images
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}

export default Companies
