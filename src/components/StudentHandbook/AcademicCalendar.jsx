"use client"
import React, { useState } from "react"
import Image from "next/image"

const AcademicCalendar = () => {
  const [activeTab, setActiveTab] = useState(0)

  const tabsData = [
    {
      title: "Examinations",
      heading:
        "Stay on Track with Important Dates and Key Academic Milestones:",
      points: [
        {
          text: "Academic Year 2020-21",
          hasLink: true,
          link: "/examinations/2020-21",
        },
        {
          text: "Academic Year 2021-22",
          hasLink: true,
          link: "/examinations/2021-22",
        },
        {
          text: "Academic Year 2022-23",
          hasLink: true,
          link: "/examinations/2022-23",
        },
        {
          text: "Academic Year 2023-24",
          hasLink: true,
          link: "/examinations/2023-24",
        },
      ],
    },
    {
      title: "Academic Calendar",
      heading:
        "Stay on Track with Important Dates and Key Academic Milestones:",
      points: [
        {
          text: "Academic Year 2020-21",
          hasLink: true,
          link: "/calendar/2020-21",
        },
        {
          text: "Academic Year 2021-22",
          hasLink: true,
          link: "/calendar/2021-22",
        },
        {
          text: "Academic Year 2022-23",
          hasLink: true,
          link: "/calendar/2022-23",
        },
        {
          text: "Academic Year 2023-24",
          hasLink: true,
          link: "/calendar/2023-24",
        },
      ],
    },
    {
      title: "Code of Conduct & Ethics",
      heading:
        "Stay on Track with Important Dates and Key Academic Milestones:",
      points: [
        {
          text: "Academic Year 2020-21",
          hasLink: true,
          link: "/conduct/2020-21",
        },
        {
          text: "Academic Year 2021-22",
          hasLink: true,
          link: "/conduct/2021-22",
        },
        {
          text: "Academic Year 2022-23",
          hasLink: true,
          link: "/conduct/2022-23",
        },
        {
          text: "Academic Year 2023-24",
          hasLink: true,
          link: "/conduct/2023-24",
        },
      ],
    },
  ]

  const handleLinkClick = (link, text) => {
    // Handle different types of links based on the path
    if (link.includes("/examinations/")) {
      // Handle examination links
      console.log(`Opening examination document: ${text} - ${link}`)
      // Navigate to the examination route
      window.location.href = link
    } else if (link.includes("/calendar/")) {
      // Handle calendar links
      console.log(`Opening academic calendar: ${text} - ${link}`)
      // Navigate to the calendar route
      window.location.href = link
    } else if (link.includes("/conduct/")) {
      // Handle code of conduct links
      console.log(`Opening code of conduct document: ${text} - ${link}`)
      // Navigate to the conduct route
      window.location.href = link
    }
  }

  const renderPoint = (point, index) => {
    if (point.hasLink) {
      return (
        <>
          <span className="monser-400">{point.text}</span>{" "}
          <a
            href={point.link}
            className="monser-500 cursor-pointer"
            onClick={(e) => {
              e.preventDefault()
              handleLinkClick(point.link, point.text)
            }}
          >
            [View Here]
          </a>
        </>
      )
    }
    return <span className="monser-400">{point.text}</span>
  }

  return (
    <div className="py-8 sm:py-12 md:py-10 bg-[#E1F9F4]">
      <div className="container mx-auto px-4 sm:px-6 md:px-8">
        <div className="max-w-8xl mx-auto">
          {/* Buttons Row */}
          <div className="flex flex-col sm:grid sm:grid-cols-3 lg:flex lg:flex-row gap-2 sm:gap-1 lg:gap-1 mb-8 sm:mb-10 md:mb-8">
            {tabsData.map((tab, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`flex items-center justify-center space-x-2 sm:space-x-3 px-2 sm:px-4 md:px-6 py-2 sm:py-3 transition-all duration-300 rounded-lg sm:rounded-none w-full ${
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
          <div className="bg-white rounded-lg sm:rounded-xl md:rounded-2xl p-4 sm:p-6 md:p-8 mx-2 sm:mx-4 md:mx-10">
            <div className="ml-2 sm:ml-4 md:ml-10">
              {/* Heading */}
              <h5 className="text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-4 sm:mb-6 monser-600 text-[#A22877] leading-tight">
                {tabsData[activeTab].heading}
              </h5>

              {/* Numbered Points */}
              <div className="space-y-3 sm:space-y-4">
                <div className="monser-400">
                  {tabsData[activeTab].points.map((point, index) => (
                    <div
                      key={index}
                      className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg lg:text-[20px]"
                    >
                      <span className="flex-shrink-0">{index + 1}.</span>
                      <p className="text-base sm:text-lg md:text-xl lg:text-[25px] leading-relaxed">
                        {renderPoint(point, index)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AcademicCalendar
