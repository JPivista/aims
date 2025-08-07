import React from "react"
import Image from "next/image"
import { companyData } from "@/utils/companyData"

const Companies = () => {
  return (
    <>
      {/* Student Image - Above Container */}
      <div className="relative">
        <div className="w-full h-auto">
          <Image
            src="/MBA/student.jpg"
            alt="AIMS Students"
            width={800}
            height={400}
            className="w-full h-auto"
            priority
          />
        </div>
        
        {/* Gradient Overlay */}
        <div 
          className="absolute inset-0 w-1/2 h-full"
          style={{
            background: 'linear-gradient(90deg, var(--Aims-Blue, #0C2165) 1.84%, var(--Aims-Blue, #0C2165) 64.13%, rgba(12, 33, 101, 0.00) 100%)'
          }}
        ></div>
        
        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center">
          <div className="w-1/2 px-8 md:px-12 lg:px-16">
            <h2 className="text-white text-2xl md:text-2xl lg:text-4xl playfair-300 mb-4">
              Companies
            </h2>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl playfair-300 mb-4">
              Our Students Have
            </h3>
            <h3 className="text-white text-xl md:text-2xl lg:text-3xl playfair-300 mb-6">
              Been Placed In
            </h3>
            <p className="text-white text-sm md:text-base lg:text-lg monser-400 leading-relaxed">
              Our MBA graduates have found opportunities with a wide range of dependable recruiters from across industries, including:
            </p>
          </div>
        </div>
      </div>
      
      <div className="bg-white py-8 md:py-12 lg:py-16">
        <div className="container mx-auto px-4 md:px-6 lg:px-0">
          
          {/* Companies Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 lg:gap-6">
            {companyData.map((company) => (
              <div
                key={company.id}
                className="bg-white rounded-lg p-2 md:p-3 lg:p-4 flex items-center justify-center"
              >
                <div className="relative w-full h-12 md:h-14 lg:h-16 flex items-center justify-center">
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
