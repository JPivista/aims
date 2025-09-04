"use client"
import React, { useState } from "react"

const EventsTab = () => {
  const [activeTab, setActiveTab] = useState("1")

  const tabData = {
    1: {
      title: "Prerana",
      content: {
        heading: "Prerana – National Level Cultural & Management Fest",
        description:
          "Hosted by students across schools, this flagship event brings together music, debate, marketing games, entrepreneurship challenges, and cultural performances.",
        features: [],
        conclusion: "",
      },
    },
    2: {
      title: "Sanskriti – Intercollegiate Fest",
      content: {
        heading: "Sanskriti – Intercollegiate Fest",
        description:
          "A celebration of heritage, expression, and community spirit, featuring performing arts, literary contests, culinary shows, and more.",
        features: [
        
        ],
        conclusion:
          "",
      },
    },
    3: {
      title: "Anveshana – Intra-College Academic Fest",
      content: {
        heading: "Anveshana – Intra-College Academic Fest",
        description:
          "Designed to showcase classroom learning in action, through simulations, project exhibitions, and problem-solving challenges.",
        features: [],
        conclusion: "",
      },
    },
    4: {
      title: "Corporate Interface Series",
      content: {
        heading: "Corporate Interface Series ",
        description:
          " Talks and panel discussions with senior professionals from Deloitte, TCS, and other industry leaders. Helps MBA and PGDM students explore corporate trends and career paths.",
        features: [],
        conclusion: "",
      },
    },

    5: {
      title: "Hospitality Showcase & Culinary Events",
      content: {
        heading: "Hospitality Showcase & Culinary Events ",
        description:
          "From food festivals to theme-based events, students from our hospitality school take the lead in crafting exceptional experiences.",
        features: [],
        conclusion: "",
      },
    },
    6: {
      title: "Data & Tech Hackathons",
      content: {
        heading: "Data & Tech Hackathons ",
        description:
          "For MCA and tech-stream students: intense coding, problem-solving, and analytics sessions judged by industry mentors.",
        features: [],
        conclusion: "",
      },
    },
  }

  const tabs = [
    { id: "1", label: "Prerana" },
    { id: "2", label: "Sanskriti" },
    { id: "3", label: "Anveshana" },
    { id: "4", label: "Corporate Interface Series" },
    { id: "5", label: "Hospitality Showcase & Culinary Events" },
    { id: "6", label: "Data & Tech Hackathons" },
  ]

  return (
    <div className="justify-center items-center pb-10 flex flex-col lg:px-8 px-4 relative overflow-hidden">
      <div className="container mx-auto">
        <div className="flex flex-col  bg-transparent relative z-10">
          {/* Header Section */}
          <div className="text-left mb-12">
            <h3 className="text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4">
            Signature Annual Events
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
            <div className="flex flex-col w-[30%]">
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
            <div className="flex-1 border-l-2 border-gray-200 pl-8">
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

export default EventsTab
