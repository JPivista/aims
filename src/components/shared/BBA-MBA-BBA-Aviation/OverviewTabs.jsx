"use client"
import React, { useState, useEffect, useRef } from "react"

const OverviewTabs = ({ tabs, defaultActiveTab = "eligibility" }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
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

  return (
    <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 md:mt-10 w-full py-6 sm:py-8 md:py-10">
      {/* Tabs */}
      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row flex-nowrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-8 md:mb-10 px-4 sm:px-6 md:px-0"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`whitespace-nowrap rounded-full px-3 sm:px-4 md:px-6 py-2 sm:py-3 text-sm sm:text-base md:text-lg transition border snap-start font-medium
              ${
                activeTab === tab.key
                  ? "bg-[#a22978] text-white border-transparent active-tab"
                  : "border-black hover:bg-[#a22978] hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full bg-white rounded-lg  md:rounded-2xl p-4  md:p-8  mx-4  md:mx-8  max-w-6xl">
        <div className="w-full">
          {tabs.map((tab) => (
            <div
              key={tab.key}
              className={`w-full ${activeTab === tab.key ? "block" : "hidden"}`}
            >
              {tab.content}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default OverviewTabs
