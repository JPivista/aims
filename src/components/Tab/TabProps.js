"use client";
import React, { useState } from "react";

const PhdTabs = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(tabs?.[0]?.key || "");

  return (
    <div className="flex flex-col items-center justify-center mt-6 sm:mt-8 px-4 w-full py-10">
      {/* Tabs */}
      <div className="flex flex-col sm:flex-row justify-center gap-3 sm:gap-4 mb-6">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`rounded-full px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base transition border
              ${
                activeTab === tab.key
                  ? "bg-[#a22978] text-white border-transparent"
                  : "border-black hover:bg-[#a22978] hover:text-white"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full bg-[#e3f1ed] rounded-2xl p-6 sm:p-8 container mx-auto">
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

export default PhdTabs;
