"use client"
import React, { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

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
      <div className="container mx-auto pb-6 md:pb-10">
        <div className="relative flex flex-col lg:flex-row items-start">
          {/* Left Side - Tabs */}
          <div className="w-full lg:w-1/3 px-4 md:px-0 mb-6 lg:mb-0">
            <div
              ref={containerRef}
              className="flex flex-col items-center lg:items-start gap-3 sm:gap-3"
            >
              {tabsData.map((tab, index) => (
                <button
                  key={index}
                  onClick={() => setActiveTab(index)}
                  className={`w-full lg:w-fit whitespace-nowrap rounded-full px-4 sm:px-4 py-3 sm:py-2 transition border snap-start active-tab monser-400 text-sm sm:text-base md:text-base text-center lg:text-left
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

            {/* Horizontal Line for Mobile */}
            <div className="block lg:hidden w-full h-px bg-gray-300 mt-6 mb-6"></div>
          </div>

          {/* Vertical Separator - Desktop Only */}
          <div className="hidden lg:block absolute left-1/3 top-0 bottom-0 w-px bg-black transform -translate-x-1/2"></div>

          {/* Right Side - Expandable Content */}
          <div className="w-full lg:w-4/5 px-4 md:px-6 lg:px-8">
            <div className="bg-white px-4 sm:px-6 md:px-8">
              {tabsData[activeTab] && (
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  {tabsData[activeTab].sections.map((section, index) => (
                    <motion.div
                      key={section.id}
                      initial={{ opacity: 0, y: 50, scale: 0.95 }}
                      animate={{ opacity: 1, y: 0, scale: 1 }}
                      transition={{
                        delay: index * 0.15,
                        duration: 0.5,
                        ease: [0.25, 0.46, 0.45, 0.94],
                      }}
                      whileHover={{
                        scale: 1.02,
                        transition: { duration: 0.2 },
                      }}
                      className="border-b border-gray-200"
                    >
                      <button
                        onClick={() => toggleSection(section.id)}
                        className="w-full flex items-center justify-between text-left p-4 sm:p-4"
                      >
                        <h2 className="monser-500 text-black text-lg sm:text-xl md:text-2xl leading-tight pr-4">
                          {section.title}
                        </h2>
                        <motion.div
                          animate={{
                            rotate: expandedSection === section.id ? 180 : 0,
                          }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="flex-shrink-0"
                        >
                          <Image
                            src="/admission-faqs/down-arrow.svg"
                            alt="Toggle"
                            width={24}
                            height={24}
                            className="w-6 h-6 min-w-[20px] min-h-[20px]"
                          />
                        </motion.div>
                      </button>

                      <AnimatePresence>
                        {expandedSection === section.id && (
                          <motion.div
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: "auto" }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{
                              type: "spring",
                              stiffness: 100,
                              damping: 20,
                              duration: 0.4,
                            }}
                            className="overflow-hidden"
                          >
                            <div className="my-4 sm:my-4 ml-4 sm:ml-4 space-y-3">
                              {section.content.map((item, itemIndex) => (
                                <motion.div
                                  key={itemIndex}
                                  initial={{ opacity: 0, x: -20 }}
                                  animate={{ opacity: 1, x: 0 }}
                                  transition={{
                                    delay: itemIndex * 0.1,
                                    duration: 0.3,
                                  }}
                                  className="flex items-start"
                                >
                                  <p className="leading-relaxed monser-400 text-black text-sm sm:text-base md:text-lg lg:text-[20px]">
                                    {item}
                                  </p>
                                </motion.div>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </motion.div>
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
