"use client"
import React, { useState, useRef } from "react"
import Image from "next/image"
import { motion, AnimatePresence, useInView } from "framer-motion"

const OpenAccessResources = () => {
  const resourceCategories = {
    "Course-Related Content": [
      { name: "NDLI", url: "https://ndl.iitkgp.ac.in" },
      { name: "DOAB", url: "https://www.doabooks.org" },
      { name: "DOAJ", url: "https://doaj.org" },
      { name: "Project Gutenberg", url: "https://www.gutenberg.org" },
      { name: "ERIC", url: "https://eric.ed.gov" },
      { name: "NROER", url: "https://nroer.gov.in" },
      { name: "Google Books", url: "https://books.google.com" },
      { name: "Vidya-Mitra", url: "https://vidyamitra.inflibnet.ac.in" },
      { name: "e-PGPathshala", url: "https://epgp.inflibnet.ac.in" },
      { name: "SWAYAM Prabha", url: "https://swayamprabha.gov.in" },
    ],
    "Research-Related Content": [
      { name: "Shodhganga", url: "https://shodhganga.inflibnet.ac.in" },
      { name: "Shodhgangotri", url: "https://shodhgangotri.inflibnet.ac.in" },
      { name: "Google Scholar", url: "https://scholar.google.com" },
      { name: "ResearchGate", url: "https://www.researchgate.net" },
      { name: "Emerald Insight", url: "https://www.emerald.com/insight" },
      { name: "ScienceDirect", url: "https://www.sciencedirect.com" },
      { name: "SCImago", url: "https://www.scimagojr.com" },
      { name: "Google Patents", url: "https://patents.google.com" },
      { name: "PATENTSCOPE", url: "https://patentscope.wipo.int" },
      {
        name: "inPASS (Indian Patents)",
        url: "https://ipindiaservices.gov.in",
      },
    ],
    "E-Learning Platforms": [
      { name: "SWAYAM", url: "https://swayam.gov.in" },
      { name: "NPTEL", url: "https://nptel.ac.in" },
      { name: "Coursera", url: "https://www.coursera.org" },
      { name: "edX", url: "https://www.edx.org" },
    ],
    "Stock Market Related Websites": [
      { name: "NSE", url: "https://www.nseindia.com" },
      { name: "BSE", url: "https://www.bseindia.com" },
      { name: "Tickertape", url: "https://www.tickertape.in" },
      { name: "Screener", url: "https://www.screener.in" },
    ],
    "Competitive Exam Free Resources": [
      { name: "SATHEE", url: "https://sathee.prutor.ai" },
      { name: "IAS Parliament", url: "https://iasparliament.com" },
      { name: "GK Today", url: "https://www.gktoday.in" },
      { name: "Press Information Bureau", url: "https://pib.gov.in" },
    ],
    "AI Tools": [
      { name: "ChatGPT", url: "https://chat.openai.com" },
      { name: "Books AI", url: "https://booksai.com" },
      { name: "Perplexity AI", url: "https://www.perplexity.ai" },
      { name: "Semantic Scholar", url: "https://www.semanticscholar.org" },
    ],
  }

  const ResourceItem = ({ item, isHighlighted = false }) => (
    <motion.div
      className="flex items-center justify-between py-2 md:py-3 group relative"
      style={{ borderBottom: "1px solid rgba(83, 22, 117, 0.40)" }}
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div
        className={`w-full px-2 md:px-4 py-2 md:py-3 flex items-center justify-between transition-colors duration-200 ${
          isHighlighted
            ? "group-hover:bg-[#A22877] group-hover:text-white"
            : "group-hover:bg-[#A22877] group-hover:text-white"
        }`}
        style={{ marginBottom: "-12px", marginTop: "-8px" }}
      >
        <span className="text-sm md:text-base monser-500 text-[16px] md:text-[20px]">
          {item.name}
        </span>
        <a
          href={item.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src="/eresources/left-arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="w-4 h-4 group-hover:hidden"
            />
          </motion.div>
          <motion.div
            animate={{ x: [0, 5, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="hidden group-hover:block"
          >
            <Image
              src="/eresources/white-arrow.svg"
              alt="Arrow"
              width={16}
              height={16}
              className="w-4 h-4"
            />
          </motion.div>
        </a>
      </div>
    </motion.div>
  )

  const ResourceCategory = ({
    title,
    items,
    highlightedItem = null,
    categoryIndex = 0,
  }) => {
    const ref = useRef(null)
    const isInView = useInView(ref, { once: true, margin: "-100px" })

    return (
      <div ref={ref} className="p-3 md:p-6">
        <h5 className="monser-600 text-lg md:text-xl lg:text-[26px] mb-4 md:mb-6 h-8 md:h-6 flex items-center leading-tight">
          {title}
        </h5>
        <div className="space-y-0">
          {items.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{
                duration: 0.3,
                delay: categoryIndex * 0.3 + index * 0.05,
                ease: "easeOut",
              }}
            >
              <ResourceItem
                item={item}
                isHighlighted={item.name === highlightedItem}
              />
            </motion.div>
          ))}
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 md:px-0 pt-6 md:pt-10 pb-3 md:pb-6">
      <div className="mb-4">
        <h3 className="text-2xl md:text-4xl playfair-300  text-[#0C2165] -mt-4">
          Open Access Resources
        </h3>
        <p className="text-base md:text-lg monser-400 text-[#0C2165]">
          Freely available digital platforms that support academic reference,
          coursework, and research.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
        {Object.entries(resourceCategories).map(([title, items], index) => (
          <ResourceCategory
            key={index}
            title={title}
            items={items}
            categoryIndex={index}
            highlightedItem={title === "Course-Related Content" ? "NDLI" : null}
          />
        ))}
      </div>
    </div>
  )
}

export default OpenAccessResources
