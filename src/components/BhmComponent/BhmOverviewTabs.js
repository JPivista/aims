"use client";
import React, { useState, useEffect, useRef } from "react";

const BhmAviationOverviewTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState("eligibility");
  const containerRef = useRef(null);

  // Auto-scroll to active tab (for mobile horizontal)
  useEffect(() => {
    const activeButton = containerRef.current?.querySelector(".active-tab");
    if (activeButton) {
      activeButton.scrollIntoView({
        behavior: "smooth",
        inline: "center",
        block: "nearest",
      });
    }
  }, [activeTab]);

  return (
    <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 w-full">

      {/* Tabs */}
      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row gap-3 sm:gap-2 mb-6 w-full sm:w-auto"
      >
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`w-full sm:w-auto text-center whitespace-nowrap rounded-full px-3 py-2 text-sm sm:text-base transition border
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
      <div className="w-full bg-white rounded-2xl md:p-16 p-5 container mx-auto">
        {tabs.map(
          (tab) =>
            activeTab === tab.key && (
              <div key={tab.key}>
                {tab.content}
              </div>
            )
        )}
      </div>
    </div>
  );
};

export default BhmAviationOverviewTabs;
