"use client"
import React, { useState } from "react"
import Image from "next/image"
import Button from "@/shared/Button"
import { motion, AnimatePresence } from "framer-motion"

const AdmissionTabs = ({ tabsData }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <div className="py-6 md:py-10 bg-[#E1F9F4]">
      <div className="container mx-auto px-4 md:px-0">
        {" "}
        {/* Reduced width for better centering */}
        {/* Buttons Row */}
        <div className="flex flex-col sm:flex-row sm:flex-wrap gap-1 mb-12">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center sm:justify-start space-x-2 sm:space-x-3 px-4 sm:px-11 py-3 sm:py-2 transition-all duration-300 cursor-pointer w-full sm:w-auto ${
                activeTab === index
                  ? "bg-white/20 text-[#A22877] border border-black"
                  : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
              }`}
            >
              <span className="font-semibold text-base sm:text-sm md:text-[18px] monser-400 text-center sm:text-left">
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
                className="w-5 h-5 sm:w-6 sm:h-6 flex-shrink-0"
              />
            </button>
          ))}
        </div>
        {/* Content Area */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.5,
            }}
            className="bg-white rounded-2xl md:mx-10"
          >
            <div className="px-4 md:px-16 py-6">
              {/* Heading */}
              <h5 className="text-2xl md:text-[24px] mb-6 monser-600 text-[#A22877]">
                {tabsData[activeTab].heading}
              </h5>

              {/* Description */}
              {tabsData[activeTab].description && (
                <div className="mb-6">
                  <p className="text-base md:text-lg monser-400">
                    {tabsData[activeTab].description}
                  </p>
                </div>
              )}

              {/* MBA Admission Special Structure */}
              {tabsData[activeTab].eligibility && (
                <div className="space-y-6">
                  {/* Eligibility Criteria */}
                  <div className="space-y-4">
                    <h6 className="text-xl md:text-[22px] monser-600 text-[#A22877]">
                      {tabsData[activeTab].eligibility.title}
                    </h6>
                    <p className="text-base md:text-lg monser-400 mb-3">
                      {tabsData[activeTab].eligibility.subtitle}
                    </p>
                    <div className="space-y-2">
                      {tabsData[activeTab].eligibility.requirements.map(
                        (req, index) => (
                          <div key={index}>
                            {typeof req === "string" ? (
                              <div className="flex items-start space-x-3">
                                <span className="font-semibold">•</span>
                                <p className="text-base md:text-lg monser-400">
                                  {req}
                                </p>
                              </div>
                            ) : (
                              <div className="space-y-2">
                                <div className="flex items-start space-x-3">
                                  <span className="font-semibold">•</span>
                                  <p className="text-base md:text-lg monser-400 font-medium">
                                    {req.main}
                                  </p>
                                </div>
                                <div className="ml-6 space-y-1">
                                  {req.sub.map((subReq, subIndex) => (
                                    <div
                                      key={subIndex}
                                      className="flex items-start space-x-3"
                                    >
                                      <span className="text-sm">◦</span>
                                      <p className="text-base md:text-lg monser-400">
                                        {subReq}
                                      </p>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            )}
                          </div>
                        )
                      )}
                    </div>
                  </div>

                  {/* Selection Process */}
                  <div className="space-y-4">
                    <h6 className="text-xl md:text-[22px] monser-600 text-[#A22877]">
                      {tabsData[activeTab].selection.title}
                    </h6>
                    <p className="text-base md:text-lg monser-400 mb-3">
                      {tabsData[activeTab].selection.subtitle}
                    </p>
                    <div className="space-y-2">
                      {tabsData[activeTab].selection.rounds.map(
                        (round, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="font-semibold">{index + 1}.</span>
                            <p className="text-base md:text-lg monser-400">
                              {round}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                    <p className="text-sm md:text-base monser-400 italic">
                      {tabsData[activeTab].selection.note}
                    </p>
                  </div>

                  {/* After Selection */}
                  <div className="space-y-4">
                    <h6 className="text-xl md:text-[22px] monser-600 text-[#A22877]">
                      {tabsData[activeTab].afterSelection.title}
                    </h6>
                    <div className="space-y-2">
                      {tabsData[activeTab].afterSelection.steps.map(
                        (step, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-3"
                          >
                            <span className="font-semibold">•</span>
                            <p className="text-base md:text-lg monser-400">
                              {step}
                            </p>
                          </div>
                        )
                      )}
                    </div>
                  </div>
                </div>
              )}

              {/* Regular Points Structure for other tabs */}
              {tabsData[activeTab].points &&
                !tabsData[activeTab].eligibility && (
                  <div className="space-y-4">
                    <div className="monser-400">
                      {tabsData[activeTab].points
                        .filter((point) => point?.trim())
                        .map((point, index) => (
                          <div
                            key={index}
                            className="flex items-start space-x-4 text-base md:text-lg lg:text-xl"
                          >
                            <span>{index + 1}.</span>
                            <p className="text-base md:text-lg lg:text-xl">
                              {point}
                            </p>
                          </div>
                        ))}
                    </div>
                  </div>
                )}

              {/* Conclusion */}
              {tabsData[activeTab].conclusion && (
                <div className="mt-6">
                  <p className="text-base md:text-lg monser-400">
                    {tabsData[activeTab].conclusion}
                  </p>
                </div>
              )}
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default AdmissionTabs
