"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"

const TabAccordion = ({ tabsData, defaultActiveTab = 0 }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const [expandedSection, setExpandedSection] = useState(null)
  const containerRef = useRef(null)

  // Auto-scroll to active tab (for mobile)
  useEffect(() => {
    const activeButton = containerRef.current?.querySelector(".active-tab")
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      })
    }
  }, [activeTab])

  const toggleSection = (sectionId) => {
    setExpandedSection(expandedSection === sectionId ? null : sectionId)
  }

  return (
    <>
      <div className="pb-6 sm:pb-8 md:pb-10">
        <div className="relative flex flex-col lg:flex-row items-start">
          {/* Left Side - Tabs */}
          <div className="w-full lg:w-1/3 px-4 sm:px-6 md:px-8 lg:ml-20 mb-6 lg:mb-0">
            <div
              ref={containerRef}
              className="flex flex-col items-center lg:items-start gap-3 sm:gap-3"
            >
              {tabsData.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full lg:w-fit whitespace-nowrap rounded-full px-4 sm:px-4 py-3 sm:py-2 transition border snap-start active-tab monser-400 text-sm sm:text-base md:text-[18px] text-center lg:text-left
                      ${
                        activeTab === index
                          ? "bg-[#a22978] text-white border-transparent"
                          : "border-black hover:bg-[#a22978] hover:text-white"
                      }`}
                >
                  {tab.title}
                </button>
              ))}
            </div>

            {/* Horizontal Line for Mobile */}
            <div className="block lg:hidden w-full h-px bg-gray-300 mt-6 mb-6"></div>
          </div>

          {/* Vertical Separator - Desktop Only */}
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-black transform -translate-x-1/2"></div>

          {/* Right Side - Expandable Content */}
          <div className="w-full lg:w-4/5 px-4 sm:px-6 md:px-8 lg:px-0">
            <div className="bg-white px-4 sm:px-6 md:px-8">
              {tabsData[activeTab] && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {tabsData[activeTab].sections.map((section, index) => (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between text-left p-4 sm:p-4"
                      >
                        <h2 className="monser-500 text-black text-lg sm:text-xl md:text-2xl lg:text-[30px] leading-tight pr-4">
                          {section.title}
                        </h2>
                        <Image
                          src={
                            expandedSection === section.id
                              ? "/admission-faqs/up-arrow.svg"
                              : "/admission-faqs/down-arrow.svg"
                          }
                          alt="Toggle"
                          width={24}
                          height={24}
                          className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 transition-transform duration-200 flex-shrink-0"
                        />
                      </button>

                      {expandedSection === section.id && (
                        <div className="my-4 sm:my-4 ml-4 sm:ml-4 space-y-3">
                          {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <p className="leading-relaxed monser-400 text-black text-sm sm:text-base md:text-lg lg:text-[20px]">
                                {item}
                              </p>
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default TabAccordion
