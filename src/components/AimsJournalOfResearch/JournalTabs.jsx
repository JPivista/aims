"use client";
import React, { useState } from "react";
import Image from "next/image";
import Button from "@/shared/Button";

const JournalTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <div className="py-16 bg-[#E1F9F4]">
      <div className="container mx-auto px-4">
        <div className="mx-auto">
          {" "}
          {/* Reduced width for better centering */}
          {/* Buttons Row */}
          <div className="flex flex-wrap justify-center gap-1 mb-12">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-between space-x-3 px-9 lg:w-auto xl:w-auto md:w-auto w-72 py-4 transition-all duration-300 ${
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
          <div className="bg-white rounded-2xl py-5 mx-auto lg:px-20 xl:px-20 md:px-10 px-4">
            <div>
              {/* Heading */}
              <h5 className="text-2xl md:text-[24px] mb-6 monser-600 text-[#A22877]">
                {tabsData[activeTab].heading}
              </h5>

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="">
                  <p className="text-base md:text-lg monser-400">
                    {tabsData[activeTab].conclusion}
                  </p>
                </div>
              )}
            </div>
            <div className="flex flex-col lg:flex-row md:flex-row xl:flex-row gap-4 py-5">
              <Button link="https://aimsjournal.in/aims-journal-of-research/submit-your-paper">
                Download Submission Guidelines
              </Button>
              <Button link="https://aimsjournal.in/aims-journal-of-research/submit-your-paper">
                Download Undertaking Form
              </Button>
            </div>
            <h5 className="text-2xl md:text-[24px] py-3 monser-600 text-[#000]">
              {tabsData[activeTab].subheading}
            </h5>
            <p>{tabsData[activeTab].subcontent}</p>
            {/* Points Heading */}
            <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
              {tabsData[activeTab].pointsheading}
            </h5>
            {/* Points */}
            <div className="space-y-4 pt-3">
              <div className="monser-400">
                {(tabsData[activeTab].points || [])
                  .filter((point) => point?.trim())
                  .map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 text-lg"
                    >
                      <ul className="pl-4">
                        <li className="list-disc list-outside">{point}</li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
            {/* Points Heading */}
            <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
              {tabsData[activeTab].pointsheading2}
            </h5>
            {/* Points */}
            <div className="space-y-4 pt-3">
              <div className="monser-400">
                {(tabsData[activeTab].points2 || [])
                  .filter((point) => point?.trim())
                  .map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 text-lg"
                    >
                      <ul className="pl-4">
                        <li className="list-disc list-outside">{point}</li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
            {/* Points Heading */}
            <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
              {tabsData[activeTab].pointsheading3}
            </h5>
            {/* Points */}
            <div className="space-y-4 pt-3">
              <div className="monser-400">
                {(tabsData[activeTab].points3 || [])
                  .filter((point) => point?.trim())
                  .map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 text-lg"
                    >
                      <ul className="pl-4">
                        <li className="list-disc list-outside">{point}</li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
            {/* Points Heading */}
            <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
              {tabsData[activeTab].pointsheading4}
            </h5>
            {/* Points */}
            <div className="space-y-4 pt-3">
              <div className="monser-400">
                {(tabsData[activeTab].points4 || [])
                  .filter((point) => point?.trim())
                  .map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 text-lg"
                    >
                      <ul className="pl-4">
                        <li className="list-disc list-outside">{point}</li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
            {/* Points Heading */}
            <h5 className="text-2xl md:text-[24px] pt-7 monser-600 text-[#000]">
              {tabsData[activeTab].pointsheading5}
            </h5>
            {/* Points */}
            <div className="space-y-4 pt-3">
              <div className="monser-400">
                {(tabsData[activeTab].points5 || [])
                  .filter((point) => point?.trim())
                  .map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-4 text-lg"
                    >
                      <ul className="pl-4">
                        <li className="list-disc list-outside">{point}</li>
                      </ul>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default JournalTabs;
