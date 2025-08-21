"use client"
import React, { useState } from "react"
import Image from "next/image"

const PatentsTimeline = () => {
  const [selectedYear, setSelectedYear] = useState(2025)

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
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " Business Today India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>16th Best Private Business School in South India.</li>
            <li>
              17th Best Private Business School in South India for Selection
              Process.
            </li>
            <li>
              36th Best Private Business School in India for Future Orientation.
            </li>
          </ul>
        ),
      },
      {
        titles: "THE WEEK India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private Business School in Bangalore.</li>
            <li>10th Best Private Business School in South India.</li>
            <li>39th Best Private Business School in India.</li>
          </ul>
        ),
      },
      {
        titles: "Outlook India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>2nd Affiliated Best Private Business School in Karnataka.</li>
            <li>15th Best Private Business School in South India.</li>
          </ul>
        ),
      },
      {
        titles: "Fortune India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>7th Best Private Business School in Bangalore.</li>
            <li>20th Best Private Business School in South India.</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best BBA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>3rd Best Private Institution for BBA in South India.</li>
            <li>
              4th Best Private Institution for BBA in India Under “SUPER
              EXCELLENCE” Category.
            </li>
          </ul>
        ),
      },
      {
        titles: "Outlook Best BBA Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              24th Best Colleges of India - Under TOP 130 Private Institutes in
              All India.
            </li>
            <li>
              7th Best Colleges of India - Under TOP 130 Private Institutes in
              South India.
            </li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM  The Week",
        titles: " The Week",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>7th Best Private Hotel Management in India.</li>
            <li>3rd Best Private Hotel Management in the South.</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best Hotel Management Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Institution for BHM in India Under “SUPER
              EXCELLENCE” Category.
            </li>
            <li>No.1 Best Private Institution for BHM in Bangalore.</li>
          </ul>
        ),
      },
      {
        titles: "Outlook Best BHM Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Best Colleges of India - Under TOP 30 Private Institutes in
              All India.
            </li>
            <li>
              2nd Best Colleges of India - Under TOP 30 Private Institutes in
              South India.
            </li>
          </ul>
        ),
      },
      {
        title:
          "AIMS SCHOOL OF INFORMATION TECHNOLOGY \n Outlook Best BCA Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              20th Best Colleges of India - Under TOP 109 Private Institutes in
              All India.
            </li>
            <li>
              11th Best Colleges of India - Under TOP 130 Private Institutes in
              South India.
            </li>
          </ul>
        ),
      },
      {
        title: "GHRDC Best MCA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              2nd Best Private Institution for MCA in India Under “SUPER
              EXCELLENCE” Category.
            </li>
            <li>No.1 Best Private Institution for MCA in Karnataka.</li>
          </ul>
        ),
      },
      {
        title:
          "AIMS SCHOOL OF COMMERCE & FINANCE \n Outlook Best BCOM Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              25th Best Colleges of India - Under TOP 140 Private Institutes in
              All India.
            </li>
            <li>
              12th Best Colleges of India - Under TOP 140 Private Institutes in
              South India.
            </li>
          </ul>
        ),
      },
      {
        title:
          "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS \n Outlook Best MSW Colleges Survey",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              10th Best Colleges of India - Under TOP 35 Private Institutes in
              All India.
            </li>
            <li>
              7th Best Colleges of India - Under TOP 35 Private Institutes in
              South India.
            </li>
          </ul>
        ),
      },
    ],

    2023: [
      {
        title: "AIMS SCHOOL OF BUSINESS",
        titles: " Outlook India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>14th Best Private Business School in South India.</li>
            <li>No.1 Affliliated Best Private business School in Karnataka.</li>
          </ul>
        ),
      },
      {
        title: "THE WEEK India’s Best B-School - MBA",

        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>38th Best Private Business School in India.</li>
            <li>9th Best Private Business School in South India.</li>
          </ul>
        ),
      },
      {
        titles: "Business Today India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              48th Best Private Business School in India for Furure Orientation.
            </li>
            <li>17th Best Private Business School in South India.</li>
            <li>
              13th Best Private Business School in South India for Learning
              Experience.
            </li>
          </ul>
        ),
      },
      {
        titles: "India Today India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>18th Best Private Business School in South India.</li>
          </ul>
        ),
      },
      {
        titles: "Career360 India’s Best B-School - MBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              Ranked AAA in the Best Private Business School category in
              Karnataka.
            </li>
          </ul>
        ),
      },
      {
        titles: "Outlook India's Best Colleges - BBA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>25th Best Private BBA College in India.</li>
            <li>13th Best Private BBA College in South India.</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best BBA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              7th Best in India under “Super Excellence” Category, among Private
              BBA Colleges.
            </li>
            <li>5th Best Private BBA college in South India.</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF HOSPITALITY AND TOURISM",
        titles: " Outlook India's Best Colleges - BHM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private Hotel Management Institution in India.</li>
            <li>
              2nd Best Private Hotel Management Institution in South India.
            </li>
            <li>No.1 Private Hotel Management Institution in Karnataka.</li>
          </ul>
        ),
      },
      {
        titles: "GHRDC Best Hotel Management Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Best in India under “Super Excellence” Category, among Private
              Hotel Management Institution.
            </li>
            <li>No.1 Private Hotel Management Institution in Bangalore.</li>
          </ul>
        ),
      },
      {
        titles: "THE WEEK Best Colleges of India - BHM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>5th Best Private Hotel Management in India.</li>
            <li>3rd Best Private Hotel Management in the South.</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF INFORMATION TECHNOLOGY",
        titles: "GHRDC Best MCA Institutes",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>
              3rd Best in India under “Super Excellence” Category, among Private
              MCA Colleges.
            </li>
            <li>3rd Best Private MCA college in South India.</li>
          </ul>
        ),
      },
      {
        title: "Outlook India's Best Colleges - BCA",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>26th Best Private BCA College in India.</li>
            <li>14th Best Private BCA College in South India.</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF COMMERCE & FINANCE",
        titles: "Outlook India's Best Colleges - BCOM",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>28th Best Private BCOM College in India.</li>
            <li>12th Best Private BCOM College in South India.</li>
          </ul>
        ),
      },
      {
        title: "AIMS SCHOOL OF LIBERAL & PERFORMING ARTS",
        titles: "Outlook India's Best Colleges - MSW",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>11th Best Private MSW College in India.</li>
            <li>7th Best Private MSW College in South India.</li>
          </ul>
        ),
      },
      {
        titles: "India Today’s Best Colleges of India - MSW",
        description: (
          <ul className="list-disc pl-5 space-y-1">
            <li>4th Best Private MSW College in Bangalore.</li>
          </ul>
        ),
      },
    ],
    2022: [
      {
        title:
          "Machine Learning Based Approach to Predict the Impact of Anti-Microbial Resistance for Animal Production",
        description: "Deepa VH",
      },
      {
        title:
          "Artificial Intelligence Based Approach for Analysing the Importance of Agriculture on Environmental Change",
        description: "Deepa VH",
      },
      {
        title:
          "Business Management-Based Appraisal System for Enhancing Productivity Among Employees",
        description: "Dr. Javad Ghalambor",
      },
    ],
    2021: [
      {
        title: "Innovative Data Analytics Framework for Educational Assessment",
        description: "Dr. Sarah Johnson",
      },
      {
        title: "Sustainable Energy Management System for Smart Cities",
        description: "Prof. Michael Chen",
      },
      {
        title: "Advanced Healthcare Monitoring Platform Using IoT",
        description: "Dr. Emily Rodriguez",
      },
    ],
    2020: [
      {
        title: "AI-Driven Waste Management Systems",
        description: "Dr. Anita Gupta",
      },
      {
        title: "Blockchain for Transparent Voting Systems",
        description: "Dr. Raj Malhotra",
      },
      {
        title: "Personalized Medicine using Genomic Data",
        description: "Dr. Aisha Khan",
      },
    ],
    2019: [
      {
        title: "IoT-Based Water Quality Monitoring System",
        description: "Dr. Vivek Reddy",
      },
      {
        title: "AI for Early Detection of Alzheimer’s Disease",
        description: "Dr. Sunita Rao",
      },
      {
        title: "Green Transportation Solutions using Hydrogen Fuel Cells",
        description: "Prof. Aditya Sharma",
      },
    ],
    2018: [
      {
        title: "Cloud-Based HR Management Systems",
        description: "Dr. Rekha Singh",
      },
      {
        title: "AI-Powered Precision Agriculture",
        description: "Prof. Varun Deshpande",
      },
      {
        title: "Smart Wearable Health Trackers with Predictive Analytics",
        description: "Dr. Nisha Bhat",
      },
    ],
    2017: [
      {
        title: "Blockchain-Based Supply Chain Verification System",
        description: "Dr. Rajesh Kumar",
      },
      {
        title: "Machine Learning Algorithm for Predictive Maintenance",
        description: "Prof. Lisa Wang",
      },
      {
        title: "Digital Transformation Framework for SMEs",
        description: "Dr. Carlos Mendez",
      },
    ],
    2016: [
      {
        title: "Cloud-Based Learning Management System",
        description: "Dr. Priya Sharma",
      },
      {
        title: "AI-Powered Customer Service Automation",
        description: "Prof. David Kim",
      },
      {
        title: "Sustainable Waste Management Solution",
        description: "Dr. Maria Garcia",
      },
    ],
    2015: [
      {
        title: "Big Data Analytics in Healthcare",
        description: "Dr. Rohan Kapoor",
      },
      {
        title: "IoT-Enabled Smart Parking Solutions",
        description: "Dr. Kavita Jain",
      },
      {
        title: "AI-Enhanced Financial Trading Algorithms",
        description: "Prof. Akash Mehta",
      },
    ],
    2014: [
      {
        title: "Mobile App for Rural Healthcare Access",
        description: "Dr. Leela Krishnan",
      },
      {
        title: "Solar-Powered Smart Irrigation Systems",
        description: "Dr. Harish Chandra",
      },
      {
        title: "Wearable Sensors for Athlete Performance",
        description: "Prof. Snehal Deshmukh",
      },
    ],
    2013: [
      {
        title: "E-Learning System for Developing Countries",
        description: "Dr. Naveen Joshi",
      },
      {
        title: "AI-Assisted Legal Research Platform",
        description: "Dr. Megha Varma",
      },
      {
        title: "Smart City IoT Infrastructure",
        description: "Prof. Ritu Singh",
      },
    ],
    2012: [
      {
        title: "Automated Disaster Response Drones",
        description: "Dr. Vijay Kulkarni",
      },
      {
        title: "AI-Driven Personalized Marketing Systems",
        description: "Dr. Preeti Anand",
      },
      {
        title: "Virtual Lab Simulations for Engineering",
        description: "Prof. Sameer Gupta",
      },
    ],
    2011: [
      {
        title: "AI-Based Speech Therapy Tools",
        description: "Dr. Swati Sharma",
      },
      {
        title: "Green Energy Powered Smart Homes",
        description: "Prof. Manish Verma",
      },
      {
        title: "Predictive Analytics in Retail Management",
        description: "Dr. Rupa Banerjee",
      },
    ],
    2010: [
      {
        title: "Mobile Banking for Rural Communities",
        description: "Dr. Anil Kumar",
      },
      { title: "AI for Predicting Crop Yield", description: "Dr. Neha Singh" },
      {
        title: "Cloud-Based Data Storage Framework",
        description: "Prof. Kiran Reddy",
      },
    ],
    2009: [
      {
        title: "Renewable Energy Microgrid Systems",
        description: "Dr. Ashok Patil",
      },
      {
        title: "AI-Enhanced Language Translation Tools",
        description: "Dr. Ananya Gupta",
      },
      {
        title: "Smart Logistics & Supply Chain Platforms",
        description: "Prof. Deepak Sharma",
      },
    ],
    2008: [
      { title: "Virtual Classroom Platforms", description: "Dr. Sanjay Rao" },
      { title: "AI-Driven Healthcare Chatbots", description: "Dr. Meera Das" },
      {
        title: "Smart Transportation Ticketing Systems",
        description: "Prof. Alok Jain",
      },
    ],
    2007: [
      {
        title: "Data Mining Techniques for Market Prediction",
        description: "Dr. Suresh Nair",
      },
      {
        title: "AI-Driven Drug Interaction Detection",
        description: "Dr. Rekha Joshi",
      },
      {
        title: "Green Building Automation Systems",
        description: "Prof. Arvind Sharma",
      },
    ],
    2006: [
      { title: "AI for Spam Email Filtering", description: "Dr. Pankaj Gupta" },
      {
        title: "Cloud-Based Student Information Systems",
        description: "Dr. Seema Reddy",
      },
      {
        title: "Sustainable Urban Planning Framework",
        description: "Prof. Kalyan Das",
      },
    ],
  }

  // All years from 2025 → 2006
  const years = Array.from({ length: 2025 - 2006 + 1 }, (_, i) => 2025 - i)

  return (
    <div className="relative overflow-hidden px-2 pb-5">
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
              As a{" "}
              <span className=" font-bold  monser-500 ">
                NAAC A Grade College
              </span>
              , we are recognised for academic rigour, industry relevance, and
              our ability to prepare students for the long haul. With over 30
              years of expertise, our journey is one of discipline, direction,
              and measurable outcomes.
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white mt-10 py-8 px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-center text-[#0C2165] playfair-300">
          Here&apos;s a look at how our efforts have <br />
          hit the mark over the years.
        </h3>
      </div>

      {/* Main Content Area - Single Column Timeline */}
      <div className="bg-white py-10">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
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
                      <div className="flex flex-col gap-5">
                        {patentsData[year]?.map((item, index) => (
                          <div key={index}>
                            <h5 className="text-[#0C2165] monser-500 text-xl whitespace-pre-line">
                              {item.title}
                            </h5>
                            <p className="text-[#0C2165] monser-500 text-xl whitespace-pre-line mt-1">
                              {item.titles}
                            </p>

                            <div className="text-sm lg:text-base text-black mt-1">
                              {item.description}
                            </div>
                          </div>
                        ))}
                      </div>
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
