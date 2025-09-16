"use client"
import React, { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import Image from "next/image"
import ExaminationsContent from "./ExaminationsContent"
import AcademicCalendarContent from "./AcademicCalendarContent"
import CodeOfConductContent from "./CodeOfConductContent"

const StudentHandbookMain = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabs = [
    { title: "Examinations", index: 0 },
    { title: "Academic Calendar", index: 1 },
    { title: "Code of Conduct & Ethics", index: 2 },
  ]

  const renderContent = () => {
    switch (activeTab) {
      case 0:
        return <ExaminationsContent />
      case 1:
        return <AcademicCalendarContent />
      case 2:
        return <CodeOfConductContent />
      default:
        return <ExaminationsContent />
    }
  }

  return (
    <div className="py-6 md:py-10 bg-[#E1F9F4] px-4 md:px-6 lg:px-10">
      <div className="container mx-auto ">
        <div className="max-w-8xl">
          {/* Buttons Row */}
          <motion.div
            className="flex flex-col sm:grid sm:grid-cols-3 lg:flex lg:flex-row gap-2 sm:gap-1 lg:gap-1 mb-8 sm:mb-10 md:mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            {tabs.map((tab) => (
              <motion.button
                key={tab.index}
                onClick={() => setActiveTab(tab.index)}
                className={`flex items-center justify-center space-x-2 sm:space-x-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 transition-all duration-300 rounded-lg sm:rounded-none w-full ${
                  activeTab === tab.index
                    ? "bg-white/20 text-[#A22877] border border-black"
                    : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
                }`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: tab.index * 0.1 }}
              >
                <span className="font-semibold text-sm sm:text-base md:text-[18px] monser-400 text-center">
                  {tab.title}
                </span>
                <Image
                  src={
                    activeTab === tab.index
                      ? "/admission-process/up-arrow.svg"
                      : "/admission-process/down-arrow.svg"
                  }
                  alt={tab.title}
                  width={24}
                  height={24}
                  className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
                />
              </motion.button>
            ))}
          </motion.div>

          {/* Content Area */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.8, y: -20 }}
              transition={{
                type: "tween",
                ease: "easeOut",
                duration: 0.5,
              }}
              className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl lg:rounded-2xl p-4 md:p-8 lg:p-10"
            >
              <div>
                {/* Content */}
                <div className="space-y-4 sm:space-y-6">{renderContent()}</div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}

export default StudentHandbookMain
