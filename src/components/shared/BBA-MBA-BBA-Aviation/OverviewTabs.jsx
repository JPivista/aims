"use client"
import React, { useState, useEffect, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"

const OverviewTabs = ({ tabs, defaultActiveTab = "eligibility" }) => {
  const [activeTab, setActiveTab] = useState(defaultActiveTab)
  const [isUserInteraction, setIsUserInteraction] = useState(false)
  const containerRef = useRef(null)

  // Auto-scroll to active tab (for mobile) - only on user interaction
  useEffect(() => {
    if (isUserInteraction) {
      const activeButton = containerRef.current?.querySelector(".active-tab")
      if (activeButton) {
        activeButton.scrollIntoView({
          behavior: "smooth",
          inline: "center",
          block: "nearest",
        })
      }
    }
  }, [activeTab, isUserInteraction])

  return (
    <div className="w-full container mx-auto flex flex-col items-center justify-center">
      {/* Tabs */}
      <div
        ref={containerRef}
        className="flex flex-col sm:flex-row flex-nowrap gap-2 sm:gap-3 md:gap-4 mb-6 sm:mb-6 md:mb-8 px-4 sm:px-6 md:px-0 w-full md:w-auto"
      >
        {tabs.map((tab) => (
          <motion.button
            key={tab.key}
            onClick={() => {
              setActiveTab(tab.key)
              setIsUserInteraction(true)
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className={`whitespace-nowrap rounded-full px-3  md:px-6 py-3 md:py-2 text-sm md:text-lg transition border snap-start font-medium
              ${
                activeTab === tab.key
                  ? "bg-[#a22978] text-white border-transparent active-tab"
                  : "border-black hover:bg-[#a22978] hover:text-white"
              }`}
          >
            {tab.label}
          </motion.button>
        ))}
      </div>

      {/* Content */}
      <div className="w-full bg-white rounded-lg md:rounded-2xl p-4 md:px-12 md:pb-6 md:pt-10 mx-4 md:mx-10 ">
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
            className="w-full"
          >
            {tabs.find((tab) => tab.key === activeTab)?.content}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default OverviewTabs
