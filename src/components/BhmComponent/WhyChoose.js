"use client"
import React from "react"

const WhyChooseAimsBhm = () => {
  const features = [
    "Member of EUHOFA",
    "Strong Industry Collaborations",
    "Real-time Exposure through Internships",
    "Experienced Faculty from Industry and Academia",
    "Multiple Career Pathways across Hospitality & Tourism ",
  ]

  return (
    <>
      <div className="container mx-auto px-7 lg:py-16 py-5 flex flex-col items-center justify-center gap-5 lg:gap-8">
        <p className="text-center lg:text-xl">
          Our BHM program equips you with the mindset, skills and
          professionalism to thrive in the hospitality sector, from luxury
          hotels to global food chains. With a legacy of excellence as one of
          the top hotel management colleges in Bangalore with placement services
          and a strong focus on real-world readiness. Discover a hospitality
          degree that blends global industry standards with local career
          opportunities.
        </p>
      </div>

      <div className="pb-16 px-4">
        {/* Heading */}
        <div className="text-center mb-8">
          <h3 className="text-2xl md:text-3xl  text-[#0C2165]">
            Why Choose the<br/>
            <span className=" text-[#A22877] italic "> AIMS BHM?</span>
          </h3>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl mx-auto">
          {features.map((item, index) => (
            <div
              key={index}
              className="bg-[#e6faf8] text-center p-4 rounded-lg shadow-sm flex items-center justify-center lg:text-[18px]"
            >
              {item}
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

export default WhyChooseAimsBhm
