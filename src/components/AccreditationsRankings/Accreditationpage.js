"use client"
import React, { useState } from "react"
import Image from "next/image"

const PatentsTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(2025)

  // Data for each year 2025 → 2006
  const patentsData = {
    2025: [
      {
        title: "OBE RANKINGS 2025 - “Outcome Based Learning“",
        description:
          "Positioned in the Titanium Band in India for India Academia Rankings",
      },
      {
        title: "GHRDC Best School of business (BBA)",
        description:
          "5th Best Private Institution for BBA in India Under “SUPER EXCELLENCE” Category",
      },
      {
        title: "GHRDC Best School of Information Technology",
        description:
          "2nd Best Private Institution for MCA in India Under “SUPER EXCELLENCE” Category",
      },
      {
        title: "GHRDC Best Hotel Management Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Institution for BHM in India Under “SUPER
              EXCELLENCE” Category
            </li>
            <li>No.1 Best Private Institution for BHM in Bangalore</li>
          </ul>
        ),
      },
      {
        title: "ET Now Best Education Brands 2025",
        description:
          "Recognised as one of the Best Education Brands 2025 by ET Now!",
      },
    ],
    2024: [
      "Smart Agricultural Drone Monitoring System - Dr. Rahul Verma",
      "AI-Based Financial Fraud Detection - Dr. Sneha Kapoor",
      "Virtual Reality Training for Medical Students - Prof. Meera Iyer",
    ],
    2023: [
      "Sustainable Construction Materials Using Nanotechnology - Dr. Amit Joshi",
      "IoT-Enabled Smart Energy Grids - Dr. Rakesh Patil",
      "AI-Powered Climate Change Prediction Model - Prof. Shalini Rao",
    ],
    2022: [
      "Machine Learning Based Approach to Predict the Impact of Anti-Microbial Resistance for Animal Production - Deepa VH",
      "Artificial Intelligence Based Approach for Analysing the Importance of Agriculture on Environmental Change - Deepa VH",
      "Business Management-Based Appraisal System for Enhancing Productivity Among Employees - Dr. Javad Ghalambor",
    ],
    2021: [
      "Innovative Data Analytics Framework for Educational Assessment - Dr. Sarah Johnson",
      "Sustainable Energy Management System for Smart Cities - Prof. Michael Chen",
      "Advanced Healthcare Monitoring Platform Using IoT - Dr. Emily Rodriguez",
    ],
    2020: [
      "AI-Driven Waste Management Systems - Dr. Anita Gupta",
      "Blockchain for Transparent Voting Systems - Dr. Raj Malhotra",
      "Personalized Medicine using Genomic Data - Dr. Aisha Khan",
    ],
    2019: [
      "IoT-Based Water Quality Monitoring System - Dr. Vivek Reddy",
      "AI for Early Detection of Alzheimer’s Disease - Dr. Sunita Rao",
      "Green Transportation Solutions using Hydrogen Fuel Cells - Prof. Aditya Sharma",
    ],
    2018: [
      "Cloud-Based HR Management Systems - Dr. Rekha Singh",
      "AI-Powered Precision Agriculture - Prof. Varun Deshpande",
      "Smart Wearable Health Trackers with Predictive Analytics - Dr. Nisha Bhat",
    ],
    2017: [
      "Blockchain-Based Supply Chain Verification System - Dr. Rajesh Kumar",
      "Machine Learning Algorithm for Predictive Maintenance - Prof. Lisa Wang",
      "Digital Transformation Framework for SMEs - Dr. Carlos Mendez",
    ],
    2016: [
      "Cloud-Based Learning Management System - Dr. Priya Sharma",
      "AI-Powered Customer Service Automation - Prof. David Kim",
      "Sustainable Waste Management Solution - Dr. Maria Garcia",
    ],
    2015: [
      "Big Data Analytics in Healthcare - Dr. Rohan Kapoor",
      "IoT-Enabled Smart Parking Solutions - Dr. Kavita Jain",
      "AI-Enhanced Financial Trading Algorithms - Prof. Akash Mehta",
    ],
    2014: [
      "Mobile App for Rural Healthcare Access - Dr. Leela Krishnan",
      "Solar-Powered Smart Irrigation Systems - Dr. Harish Chandra",
      "Wearable Sensors for Athlete Performance - Prof. Snehal Deshmukh",
    ],
    2013: [
      "E-Learning System for Developing Countries - Dr. Naveen Joshi",
      "AI-Assisted Legal Research Platform - Dr. Megha Varma",
      "Smart City IoT Infrastructure - Prof. Ritu Singh",
    ],
    2012: [
      "Automated Disaster Response Drones - Dr. Vijay Kulkarni",
      "AI-Driven Personalized Marketing Systems - Dr. Preeti Anand",
      "Virtual Lab Simulations for Engineering - Prof. Sameer Gupta",
    ],
    2011: [
      "AI-Based Speech Therapy Tools - Dr. Swati Sharma",
      "Green Energy Powered Smart Homes - Prof. Manish Verma",
      "Predictive Analytics in Retail Management - Dr. Rupa Banerjee",
    ],
    2010: [
      "Mobile Banking for Rural Communities - Dr. Anil Kumar",
      "AI for Predicting Crop Yield - Dr. Neha Singh",
      "Cloud-Based Data Storage Framework - Prof. Kiran Reddy",
    ],
    2009: [
      "Renewable Energy Microgrid Systems - Dr. Ashok Patil",
      "AI-Enhanced Language Translation Tools - Dr. Ananya Gupta",
      "Smart Logistics & Supply Chain Platforms - Prof. Deepak Sharma",
    ],
    2008: [
      "Virtual Classroom Platforms - Dr. Sanjay Rao",
      "AI-Driven Healthcare Chatbots - Dr. Meera Das",
      "Smart Transportation Ticketing Systems - Prof. Alok Jain",
    ],
    2007: [
      "Data Mining Techniques for Market Prediction - Dr. Suresh Nair",
      "AI-Driven Drug Interaction Detection - Dr. Rekha Joshi",
      "Green Building Automation Systems - Prof. Arvind Sharma",
    ],
    2006: [
      "AI for Spam Email Filtering - Dr. Pankaj Gupta",
      "Cloud-Based Student Information Systems - Dr. Seema Reddy",
      "Sustainable Urban Planning Framework - Prof. Kalyan Das",
    ],
  }

  // All years from 2025 → 2006
  const years = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => 2025 - i)

  return (
    <div className="relative overflow-hidden px-2">
      {/* Light Green Header Strip */}
      <div className="bg-[#E1F9F4] py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="bg-[#e6f9f3] py-8 px-4 text-center">
            <p className="text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
              At AIMS Institutes, rankings aren’t the destination, they’re the
              result of staying focused on our target to deliver education that
              transforms potential into performance.
            </p>
            <p className="mt-4 text-sm md:text-base text-gray-700 max-w-3xl mx-auto">
              As a <span className="font-bold">NAAC A Grade College</span>, we
              are recognised for academic rigour, industry relevance, and our
              ability to prepare students for the long haul. With over 30 years
              of expertise, our journey is one of discipline, direction, and
              measurable outcomes.
            </p>
          </div>
         
        </div>
      </div>
      <div className="bg-white mt-10 py-8 px-4">
            <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0C2165]">
              Here&apos;s a look at how our efforts have <br/>hit the mark over the years.
            </h3>
          </div>

      {/* Main Content Area - Single Column Timeline */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            {/* Timeline Container */}
            <div className="relative">
              {/* Vertical Timeline Line */}
              <div className="absolute top-4 bottom-4 w-[1px] bg-black"></div>

              {/* Year Sections */}
              {years.map((year) => (
                <div key={year} className="relative mb-8">
                  {/* Timeline Node */}
                  <div className="absolute left-[0.4px] -top-1 transform -translate-x-1/2">
                    <Image
                      src="/patents/patents-timeline.svg"
                      alt="Timeline Node"
                      width={50}
                      height={50}
                    />
                  </div>

                  {/* Year Button */}
                  <div>
                    <button
                      onClick={() => setSelectedYear(year)}
                      className={`md:ml-15 ml-10 px-6 py-1 rounded-full transition-all duration-300 border-1 flex items-center justify-between ${
                        selectedYear === year
                          ? "bg-[#A22877] text-white border-[#A22877]"
                          : "bg-white text-[#A22877] border-[#A22877]"
                      }`}
                    >
                      <span className="font-semibold monser-600 pr-2 text-[20px]">
                        Year {year}
                      </span>
                      <svg
                        className={`w-5 h-5 transition-transform duration-300 ${
                          selectedYear === year ? "rotate-180" : ""
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M19 9l-7 7-7-7"
                        />
                      </svg>
                    </button>
                  </div>

                  {/* Content Box */}
                  {selectedYear === year && (
                    <div className="md:ml-20 ml-10 mt-4 bg-[#E1F9F4] p-6 rounded-2xl">
                      {year === 2025 ? (
                        <div className="flex flex-col gap-5">
                          {patentsData[2025].map((item, index) => (
                            <div key={index}>
                              <h5 className="text-[#0C2165] monser-500 text-xl">
                                {item.title}
                              </h5>
                              <div className="text-sm lg:text-base text-black mt-1">
                                {item.description}
                              </div>
                            </div>
                          ))}
                        </div>
                      ) : (
                        <ul className="list-none text-start monser-400 flex flex-col gap-3">
                          {patentsData[year]?.map((patent, idx) => (
                            <li key={idx} className="flex items-start gap-3">
                              <span className="text-black mt-1">•</span>
                              <span className="text-sm lg:text-base text-black">
                                {patent}
                              </span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PatentsTimeline
