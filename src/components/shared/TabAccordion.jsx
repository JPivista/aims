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
      <div className="pb-10">
        <div className="relative flex flex-col lg:flex-row items-start">
          {/* Left Side - Tabs */}
          <div className="lg:w-1/3 ml-20 ">
            <div ref={containerRef} className="flex flex-col gap-3">
              {tabsData.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-fit whitespace-nowrap rounded-full px-4 py-2 transition border snap-start active-tab monser-400 text-[18px]
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
          </div>

          {/* Vertical Separator */}
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-black transform -translate-x-1/2"></div>

          {/* Right Side - Expandable Content */}
          <div className="w-4/5">
            <div className="bg-white px-8">
              {tabsData[activeTab] && (
                <div className="space-y-8">
                  {tabsData[activeTab].sections.map((section, index) => (
                    <div key={index} className="border-b border-gray-200">
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between text-left p-4"
                      >
                        <h2 className="monser-500  text-black text-[30px]">
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
                          className="w-6 h-6 transition-transform duration-200"
                        />
                      </button>

                      {expandedSection === section.id && (
                        <div className="my-4 ml-4 space-y-2">
                          {section.content.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-start">
                              <p className="leading-relaxed monser-400 text-black text-[20px]">
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
