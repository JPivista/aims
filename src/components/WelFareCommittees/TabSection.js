"use client";
import { useState } from "react";
import AntiRagging from "./AntiRagging";
import AntiSexualHarassment from "./AntiSexualHarassment";
import EqualOpportunity from "./EqualOpportunity";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("ragging");

  const renderContent = () => {
    switch (activeTab) {
      case "ragging":
        return <AntiRagging />;
      case "harassment":
        return <AntiSexualHarassment />;
      case "opportunity":
        return <EqualOpportunity />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full">
      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 mb-6">
        <button
          onClick={() => setActiveTab("ragging")}
          className={`px-6 py-2 rounded-sm border transition w-[85%] lg:w-auto xl:w-auto md:w-auto
          ${
            activeTab === "ragging"
              ? "bg-[#531574] text-white border-[#531574]"
              : "border-[#531574] text-black hover:bg-[#531574] hover:text-white"
          }`}
        >
          ANTI-RAGGING COMMITTEE
        </button>

        <button
          onClick={() => setActiveTab("harassment")}
          className={`px-6 py-2 rounded-sm border transition w-[85%] lg:w-auto xl:w-auto md:w-auto
          ${
            activeTab === "harassment"
              ? "bg-[#531574] text-white border-[#531574]"
              : "border-[#531574] text-black hover:bg-[#531574] hover:text-white"
          }`}
        >
          ANTI-SEXUAL HARASSMENT CELL
        </button>

        <button
          onClick={() => setActiveTab("opportunity")}
          className={`px-6 py-2 rounded-sm border transition w-[85%] lg:w-auto xl:w-auto md:w-auto
          ${
            activeTab === "opportunity"
              ? "bg-[#531574] text-white border-[#531574]"
              : "border-[#531574] text-black hover:bg-[#531574] hover:text-white"
          }`}
        >
          EQUAL OPPORTUNITY CELL
        </button>
      </div>

      {/* Content */}
      <div className="">{renderContent()}</div>
    </div>
  );
};

export default TabSection;
