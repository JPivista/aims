"use client"
import React, { useState } from "react"
import Image from "next/image"

const AdmissionTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="py-8 sm:py-12 md:py-16 bg-[#E1F9F4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Buttons Row */}
          <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row gap-2 sm:gap-1 lg:gap-1 mb-8 sm:mb-10 md:mb-12">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center sm:justify-start lg:justify-start space-x-2 sm:space-x-3 px-4 sm:px-6 md:px-10 py-3 sm:py-4 transition-all duration-300 rounded-lg sm:rounded-none flex-1 lg:flex-none ${
                  activeTab === index
                    ? "bg-white/20 text-[#A22877] border border-black"
                    : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
                }`}
              >
                <span className="font-semibold text-sm sm:text-base md:text-[18px] monser-400 text-center sm:text-left lg:text-left">
                  {tab.title}
                </span>
                <Image
                  src={
                    activeTab === index
                      ? "/admission-process/up-arrow.svg"
                      : "/admission-process/down-arrow.svg"
                  }
                  alt={tab.title}
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 md:mx-10">
            <div className="ml-2 sm:ml-4 md:ml-10">
              {/* Heading */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-4 sm:mb-6 monser-600 text-[#A22877] leading-tight">
                {tabsData[activeTab].heading}
              </h5>

              {/* Numbered Points */}
              <div className="space-y-3 sm:space-y-4">
                <div className="monser-400">
                  {tabsData[activeTab].points.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg lg:text-[20px]"
                    >
                      <span className="flex-shrink-0">{index + 1}.</span>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[25px] leading-relaxed">
                        {point}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="mt-4 sm:mt-6">
                  <p className="text-sm sm:text-base md:text-lg monser-400 leading-relaxed">
                    {tabsData[activeTab].conclusion}
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AdmissionTabs
