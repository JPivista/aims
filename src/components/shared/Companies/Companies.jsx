import React from "react"
import Image from "next/image"
import { companyData } from "@/utils/companyData"
import ReadyToDraw from "../ReadyToDraw"
import { FaS } from "react-icons/fa6"

const Companies = () => {
  return (
    <>
      <div className="bg-white py-10">
        <div className="container mx-auto px-4 md:p-6  shadow-lg rounded-lg">

          {/* Companies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-2 sm:gap-3 md:gap-4 lg:gap-8">
            {companyData.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-2 lg:p-4 flex items-center justify-center"
              >
                <div className="relative w-full h-10 sm:h-12 md:h-14 lg:h-16 flex items-center justify-center">
                  <Image
                    src={company.logo}
                    alt={company.alt}
                    width={70}
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
