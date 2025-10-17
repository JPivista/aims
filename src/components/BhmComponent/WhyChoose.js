"use client"
import React from "react"
import Button from "@/shared/Button"

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
      <div className="px-4 lg:px-8">
        <div className="container mx-auto lg:py-10 py-5 flex flex-col items-center justify-center gap-5 lg:gap-8">
          <p className="text-center lg:text-xl">
            Our BHM program equips you with the mindset, skills and
            professionalism to thrive in the hospitality sector, from luxury
            hotels to global food chains. With a legacy of excellence as one of
            the top hotel management colleges in Bangalore with placement
            services and a strong focus on real-world readiness. Discover a
            hospitality degree that blends global industry standards with local
            career opportunities.
          </p>

          <div className="pb-10 w-2/2">
            {/* Heading */}
            <div className="text-center mb-8">
              <h3 className="text-2xl md:text-3xl  text-[#0C2165]">
                Why Choose the
                <br />
                <span className=" text-[#A22877] italic playfair-300">
                  {" "}
                  AIMS BHM?
                </span>
              </h3>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 max-w-6xl  mx-auto">
              {features.map((item, index) => (
                <div
                  key={index}
                  className="bg-[#e6faf8] text-center py-10 px-1 rounded-lg shadow-sm flex items-center justify-center lg:text-[18px]"
                >
                  {item}
                </div>
              ))}
            </div>
      
      

        {/* Apply Now Button */}
      <div className="flex justify-center lg:pt-10  pt-8">
        <Button
          variant="placement"
          showArrow={true}
          href="https://apply.theaims.ac.in/login"
        >
          Apply Now
        </Button>
      </div>
      </div>
      </div>
      </div>
    </>
  )
}

export default WhyChooseAimsBhm
