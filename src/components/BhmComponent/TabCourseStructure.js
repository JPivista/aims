"use client"

import React, { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"

const TabCourseStructure = ({ courseData }) => {
  const [activeTab, setActiveTab] = useState(
    courseData?.[0]?.tabs?.[0]?.key || ""
  )

  // Simple check to prevent map error
  if (!courseData) {
    return null
  }

  return (
    <div className="bg-white pb-6 md:pb-10">
      <div className="container mx-auto ">
        <div className="">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-8">
            {/* Left Column - Navigation */}
            <div className="space-y-8 lg:border-r border-black ">
              {/* Navigation Tabs */}
              <div className="space-y-4">
                {courseData.map((section) => (
                  <div key={section.key} className="space-y-2">
                    <h5 className="text-[#0C2165] monser-500 text-2xl md:text-[24px]">
                      {section.title}
                    </h5>
                    <div className="flex flex-wrap gap-2 ">
                      {section.tabs.map((tab) => (
                        <button
                          key={tab.key}
                          onClick={() => setActiveTab(tab.key)}
                          className={`px-2 md:px-3 py-1 rounded-full text-xs md:text-sm font-medium transition-all duration-200 border-[0.5px] monser-400 text-[14px] md:text-[14px]
                                                    ${activeTab === tab.key
                              ? "bg-[#A22877] text-white border-[#A22877] py-1 "
                              : "bg-white text-black border-black border-[0.5px] py-1 hover:bg-[#A22878] hover:text-white hover:border-[#A22878]"
                            }`}
                        >
                          {tab.label}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column - Content Display */}
            <div className="space-y-6 overflow-hidden">
              {courseData.map((section) =>
                section.tabs.map(
                  (tab) =>
                    activeTab === tab.key && (
                      <div key={tab.key} className="space-y-6">
                        <h5 className="text-[#A22877] text-2xl md:text-3xl monser-600">
                          {section.title}
                        </h5>

                        {/* Course Content */}
                        <AnimatePresence mode="wait">
                          <motion.div
                            key={activeTab}
                            initial={{ x: 300, opacity: 0 }}
                            animate={{ x: 0, opacity: 1 }}
                            exit={{ x: -300, opacity: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 60,
                              damping: 25,
                              duration: 1.2,
                            }}
                            className="flex items-center w-full"
                          >
                            <div className="bg-[#A22877] rounded-xl p-2  md:p-6 text-white w-80 md:w-[550px] lg:w-[750px] ">
                              <h5 className="text-[30px]  mb-3 md:mb-4 monser-400 md:text-[36px] ">
                                {tab.label}
                              </h5>
                              <ul className="text-white list-disc list-outside ml-4">
                                {(() => {
                                  let courseNumber = 1
                                  return tab.courses.map((course, index) => {
                                    if (
                                      typeof course === "object" &&
                                      course.type === "subheading"
                                    ) {
                                      courseNumber = 1 // Reset counter for new semester
                                      return (
                                        <li
                                          key={index}
                                          className="flex items-start"
                                        >
                                          <div className="w-full">
                                            <h6
                                              className={`monser-400 text-base md:text-[20px] mb-2 mt-4 first:mt-1`}
                                            >
                                              {course.text}
                                            </h6>
                                          </div>
                                        </li>
                                      )
                                    } else {
                                      return (
                                        <li
                                          key={index}
                                          className="text-sm md:text-base break-words mb-1 monser-400 "
                                          dangerouslySetInnerHTML={{
                                            __html: course,
                                          }}
                                        />
                                      )
                                    }
                                  })
                                })()}
                              </ul>
                            </div>
                          </motion.div>
                        </AnimatePresence>
                      </div>
                    )
                )
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TabCourseStructure
