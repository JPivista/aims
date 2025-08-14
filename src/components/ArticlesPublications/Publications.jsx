"use client"
import React, { useState } from "react"
import Image from "next/image"

const Publications = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsData = [
    {
      title: "Journal Publications",
      heading: "Individual Mentoring",
      points: [
        "Ms. Deepa V H, Environmental Science, Dharshan Publishers, 2022",
        "Dr. Javad Ghalambor, Principles of Research Methodology, Red'Shine publication Pvt. Ltd, 2022",
        "Dr. V Saravana Kumar, Dr. Lakshminarayana S, Entrepreneurship Beginner's Guide to Business, Scientific International Publishing House, 2022",
        "Dr. Ravi V, Financial Management, Vision Book House, 2021",
        "Dr. Haritha M, Elements of Costing, Vision Book House, 2021",
        "Dr. Haritha M, Business Management and Startups, Vision Book House, 2021",
        "Dr. Haritha M, Financial Institution and Regulatory Bodies, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Business Finance, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Advanced Financial Accounting, Vision Book House, 2021",
        "Dr. B.M. RamaMurthy, Production and Inventory Management, Vision Book House, 2021",
        "Ms. Anushree Banerjee, Human Resource Management Practices, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Monetary System, Himalaya Publishing House, 2021",
        "Dr. Karunakara Reddy, Marketing and Event Management, Phoenix Publishing House, 2021",
        "Dr. Haritha M, Quantitative Analysis for Business Decisions, Vision Book House, 2021",
        "Dr. Haritha M, Principles and Practices of Business Decisions, Himalaya Publishing House, 2021",
        "Dr. Haritha M, Risk Management and Derivatives, Himalaya Publishing House, 2021",
        "Dr. Ravi V, Modern Indian Banking, Himalaya Publishing House, 2021",
        "Dr. Ravi V, International Business Environment, Himalaya Publishing House, 2021",
        "Dr. Ravi V, Enerprise Management, Vision Book House, 2020",
        "Dr. Karunakara Reddy B aBusiness Ethics and Corporate Governance, Himalaya Publishing House, Mumbai, 2018",
        "Dr. Kiran Reddy, Pathways to Global Sustainability: Strategies and Frame Works, AIMS Publications, 2017",
        "Dr. Kiran Reddy, Basic Accounting: Principles and Practices, AIMS Publications, 2017",
        "Dr. Kiran Reddy, Emerging Trends in Revenue Management in Service Industry, AIMS Publications, 2016",
        "Dr. Kiran Reddy, Research Trends in Computer Applications and Information Management, AIMS Publications, 2015",
        "Dr. Kiran Reddy, Emerging Trends and Challenges in Commerce and Management, AIMS Publications, 2015",
        "Dr. Kiran Reddy, Sustainable Development: New Perspectives and Emerging Trends, AIMS Publications, 2015",
        "Ms. Arul Jyothi, Managerial Research Methods, Himalaya Publishing House, Mumbai, 2015",
        "Dr. Karunakara Reddy B A, Pushpa N, Archana M N, Business Ethics, Vision Book House, New Delhi, 2015",
        "Dr. Karunakara Reddy B A, Risk Management, Himalaya Publishing House, Mumbai, 2015",
        "Ms. Arul Jyothi, Human Resource Management, Himalaya Publishing House, Mumbai, 2015",
        "Dr. Somanath V S, International Financial Management, I K International Publishing House, 2015",
      ],
    },
    {
      title: "Books Publications",
      heading: "Individual Mentoring",
      points: [
        "Ms. Deepa V H, Environmental Science, Dharshan Publishers, 2022",
        "Dr. Javad Ghalambor, Principles of Research Methodology, Red'Shine publication Pvt. Ltd, 2022",
        "Dr. V Saravana Kumar, Dr. Lakshminarayana S, Entrepreneurship Beginner's Guide to Business, Scientific International Publishing House, 2022",
        "Dr. Ravi V, Financial Management, Vision Book House, 2021",
        "Dr. Haritha M, Elements of Costing, Vision Book House, 2021",
        "Dr. Haritha M, Business Management and Startups, Vision Book House, 2021",
        "Dr. Haritha M, Financial Institution and Regulatory Bodies, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Business Finance, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Advanced Financial Accounting, Vision Book House, 2021",
        "Dr. B.M. RamaMurthy, Production and Inventory Management, Vision Book House, 2021",
        "Ms. Anushree Banerjee, Human Resource Management Practices, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Monetary System, Himalaya Publishing House, 2021",
        "Dr. Karunakara Reddy, Marketing and Event Management, Phoenix Publishing House, 2021",
        "Dr. Haritha M, Quantitative Analysis for Business Decisions, Vision Book House, 2021",
        "Dr. Haritha M, Principles and Practices of Business Decisions, Himalaya Publishing House, 2021",
        "Dr. Haritha M, Risk Management and Derivatives, Himalaya Publishing House, 2021",
        "Dr. Ravi V, Modern Indian Banking, Himalaya Publishing House, 2021",
        "Dr. Ravi V, International Business Environment, Himalaya Publishing House, 2021",
        "Dr. Ravi V, Enerprise Management, Vision Book House, 2020",
        "Dr. Karunakara Reddy B aBusiness Ethics and Corporate Governance, Himalaya Publishing House, Mumbai, 2018",
        "Dr. Kiran Reddy, Pathways to Global Sustainability: Strategies and Frame Works, AIMS Publications, 2017",
        "Dr. Kiran Reddy, Basic Accounting: Principles and Practices, AIMS Publications, 2017",
        "Dr. Kiran Reddy, Emerging Trends in Revenue Management in Service Industry, AIMS Publications, 2016",
        "Dr. Kiran Reddy, Research Trends in Computer Applications and Information Management, AIMS Publications, 2015",
        "Dr. Kiran Reddy, Emerging Trends and Challenges in Commerce and Management, AIMS Publications, 2015",
        "Dr. Kiran Reddy, Sustainable Development: New Perspectives and Emerging Trends, AIMS Publications, 2015",
        "Ms. Arul Jyothi, Managerial Research Methods, Himalaya Publishing House, Mumbai, 2015",
        "Dr. Karunakara Reddy B A, Pushpa N, Archana M N, Business Ethics, Vision Book House, New Delhi, 2015",
        "Dr. Karunakara Reddy B A, Risk Management, Himalaya Publishing House, Mumbai, 2015",
        "Ms. Arul Jyothi, Human Resource Management, Himalaya Publishing House, Mumbai, 2015",
        "Dr. Somanath V S, International Financial Management, I K International Publishing House, 2015",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 sm:px-6 md:px-8 pb-8">
      <div className="max-w-8xl mx-auto">
        {/* Buttons Row */}
        <div className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row mb-0">
          {tabsData.map((tab, index) => (
            <button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center space-x-2 sm:space-x-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 transition-all duration-300 rounded-none flex-1 ${
                activeTab === index
                  ? "bg-white/20 text-[#A22877] border border-black"
                  : "bg-[#A22877] text-white hover:bg-[#8B1F5F]"
              }`}
            >
              <span className="font-semibold text-sm sm:text-base md:text-[18px] monser-400 text-center">
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
                className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
              />
            </button>
          ))}
        </div>

        {/* Content Area */}
        <div className="p-4 sm:p-6 md:p-8 bg-[#E1F9F4] rounded-lg">
          <div className="ml-2 sm:ml-4 md:ml-10">
            {/* Heading */}
            <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-4 sm:mb-6 monser-600 text-[#A22877] leading-tight">
              {tabsData[activeTab].heading}
            </h5>

            {/* Numbered Points */}
            <div className="space-y-3 sm:space-y-4 ">
              <div className="monser-400">
                {tabsData[activeTab].points.map((point, index) => (
                  <div
                    key={index}
                    className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg lg:text-[20px]"
                  >
                    <span className="flex-shrink-0">{index + 1}.</span>
                    <p className="text-base sm:text-lg md:text-xl lg:text-[25px] leading-relaxed">
                      {point}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Publications
