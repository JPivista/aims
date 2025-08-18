"use client"
import React, { useState } from "react"
import Image from "next/image"

const AdmissionTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="py-16 bg-[#E1F9F4]">
      <div className="container mx-auto px-4">
        <div className="mx-auto"> {/* Reduced width for better centering */}
          
          {/* Buttons Row */}
          <div className="flex flex-wrap justify-center gap-1 mb-12">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center space-x-3 px-10 py-4 transition-all duration-300 ${
                  activeTab === index
                    ? "bg-white/20 text-[#A22877] border border-black"
                    : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
                }`}
              >
                <span className="font-semibold text-sm md:text-[18px] monser-400">
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
                  className="w-6 h-6"
                />
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="bg-white rounded-2xl p-8 mx-auto">
            <div>
              {/* Heading */}
              <h5 className="text-2xl md:text-[24px] mb-6 monser-600 text-[#A22877]">
                {tabsData[activeTab].heading}
              </h5>

              {/* Numbered Points */}
              <div className="space-y-4">
                <div className="monser-400">
                  {tabsData[activeTab].points
                    .filter(point => point?.trim())
                    .map((point, index) => (
                      <div
                        key={index}
                        className="flex items-start space-x-4 text-[20px]"
                      >
                        <span>{index + 1}.</span>
                        <p className="text-[25px]">{point}</p>
                      </div>
                    ))}
                </div>
              </div>

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="mt-6 ">
                  <p className="text-base md:text-lg monser-400">
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
