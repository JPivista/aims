"use client"
import React, { useState } from "react"

const CampusTab = () => {
  const [activeTab, setActiveTab] = useState("1")

  const tabData = {
    1: {
      title: "Classrooms & Lecture Halls",
      content: {
        heading: "Classrooms & Lecture Halls",
        description:
          "Spacious, ventilated, and tech-enabled rooms with AV facilities to support immersive learning.",
        features: [],
        conclusion: "",
      },
    },
    2: {
      title: "Central Library & Information Centre",
      content: {
        heading: "Central Library & Information Centre",
        description:
          "Access to DELNET and NLIST subscribed resources, e-journals, academic databases, and previous-year university question papers. One of the few private colleges in Bangalore with UGC-compliant digital access.",
        features: [],
        conclusion: "",
      },
    },
    3: {
      title: " Labs & Innovation Spaces",
      content: {
        heading: "Labs & Innovation Spaces",
        description:
          "Fully equipped labs for Computer Applications, Biotechnology, Food & Beverage, Front Office, and more, ideal for BBA, MBA, MCA, and B.Com students who require hands-on experience.",
        features: [],
        conclusion: "",
      },
    },
    4: {
      title: "Cafeteria & Dining Spaces",
      content: {
        heading: "Cafeteria & Dining Spaces",
        description:
          "Multi-cuisine options, hygienic kitchens, and dedicated dining areas, ideal for both everyday meals and hospitality practice.",
        features: [],
        conclusion: "",
      },
    },
    5: {
      title: " Hostel Accommodation",
      content: {
        heading: " Hostel Accommodation",
        description:
          "Separate on-campus hostels for boys and girls with 24x7 security, clean water, Wi-Fi, common rooms, and mess facilities, ideal for students from outside Bangalore seeking affordable, dependable living.",
        features: [],
        conclusion: "",
      },
    },
    6: {
      title: "Transportation",
      content: {
        heading: "Transportation",
        description:
          "College-run buses from key points in Bengaluru ensure hassle-free access to campus.",
        features: [],
        conclusion: "",
      },
    },
    7: {
      title: "Wi-Fi & Digital Infrastructure",
      content: {
        heading: "Wi-Fi & Digital Infrastructure",
        description:
          "High-speed internet throughout campus supports seamless study, research, and placement prep.",
        features: [],
        conclusion: "",
      },
    },
    8: {
      title: "Student Lounges & Common Areas",
      content: {
        heading: "Student Lounges & Common Areas",
        description:
          "Spaces for peer interaction, relaxation, and collaborative learning, designed to support our dynamic student community.",
        features: [],
        conclusion: "",
      },
    },

 
  }

  const tabs = [
    { id: "1", label: "Classrooms & Lecture Halls" },
    { id: "2", label: "Central Library & Information Centre" },
    { id: "3", label: " Labs & Innovation Spaces" },
    { id: "4", label: "Cafeteria & Dining Spaces" },
    { id: "5", label: " Hostel Accommodation" },
    { id: "6", label: "Transportation" },
    { id: "7", label: " Wi-Fi & Digital Infrastructure" },
    { id: "8", label: "Student Lounges & Common Areas" },
  ]

  return (
    <div className="justify-center items-center pb-10 flex flex-col px-4 lg:px-8 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col lg:px-0 px-4 bg-transparent relative z-10">
          {/* Header Section */}
          <div className="text-left mb-12">
            <h3 className="text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4">
              Key Facilities
            </h3>
          </div>
          {/* Mobile Tabs - Visible only on mobile */}
          <div className="lg:hidden mb-8">
            <div className="flex flex-col gap-3">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`text-left px-2 py-1 rounded-lg transition-all duration-300 border-2 ${
                    activeTab === tab.id
                      ? "bg-[#A22877] text-white border-[#A22877]"
                      : "bg-white text-gray-700 border-gray-300 hover:border-[#A22877]"
                  }`}
                >
                  <span className="font-semibold text-lg">{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Desktop Layout - Two Column */}
          <div className="hidden lg:flex gap-8">
            {/* Left Column - Navigation */}
            <div className="flex flex-col w-[45%]">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`px-4 py-1.5 rounded-full mb-3 transition-all duration-300 border self-start
          ${
            activeTab === tab.id
              ? "bg-[#A22877] text-white border-[#A22877]"
              : "bg-white text-black border-black hover:border-[#A22877]"
          }`}
                >
                  <span className="font-medium text-sm">{tab.label}</span>
                </button>
              ))}
            </div>

            {/* Right Column - Content */}
            <div className="flex-1 border-l-1 border-black pl-8">
              <div className="mb-6">
                <h5 className="text-2xl lg:text-4xl monser-500 text-[#A22877] mb-4">
                  {tabData[activeTab].content.heading}
                </h5>
              </div>

              <div className="bg-[#A22877] text-white p-6 rounded-lg">
                <p className="text-lg monser-400 mb-4">
                  {tabData[activeTab].content.description}
                </p>

                <ul className="space-y-3 mb-4">
                  {tabData[activeTab].content.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="text-white">•</span>
                      <span className="monser-400">{feature}</span>
                    </li>
                  ))}
                </ul>

                <p className="text-lg monser-400">
                  {tabData[activeTab].content.conclusion}
                </p>
              </div>
            </div>
          </div>

          {/* Mobile Content - Visible only on mobile */}
          <div className="lg:hidden">
            <div className="mb-6">
              <h4 className="text-2xl lg:text-3xl monser-600 text-[#A22877] mb-4">
                {tabData[activeTab].content.heading}
              </h4>
            </div>

            <div className="bg-[#A22877] text-white p-6 rounded-lg">
              <p className="text-lg monser-400 mb-4">
                {tabData[activeTab].content.description}
              </p>

              <ul className="space-y-3 mb-4">
                {tabData[activeTab].content.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <span className="text-white mt-2">•</span>
                    <span className="monser-400">{feature}</span>
                  </li>
                ))}
              </ul>

              <p className="text-lg monser-400">
                {tabData[activeTab].content.conclusion}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CampusTab
