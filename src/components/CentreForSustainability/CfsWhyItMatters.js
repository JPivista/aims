"use client"

import React from "react"

const CfcWhyItMatters = () => {
  return (
    <div
      className="
        relative w-full overflow-hidden bg-cover bg-center bg-no-repeat
        bg-[url('/centre-for-sustainability/cfr-why-it-matters-bg-img-mobile.webp')]
        md:bg-[url('/centre-for-sustainability/cfr-why-it-matters-bg-img-tab.webp')]
        lg:bg-[url('/centre-for-sustainability/cfr-why-it-matters-bg-img-desktop.webp')]
        min-h-[50vh] md:min-h-[100vh] lg:min-h-[70vh]
        flex items-center justify-center
      "
    >
      {/* Gradient Overlay */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(179deg, rgba(12, 33, 101, 0) 11%, #08101D 99%)",
        }}
      ></div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-start justify-center w-full px-4 lg:px-8">
        <div className="container mx-auto py-8 lg:px-0">
          <div className="flex flex-col lg:flex-row gap-10">
            {/* Left Empty Column (desktop alignment) */}
            <div className="flex-1 hidden lg:block"></div>

            {/* Right Content */}
            <div className="flex-1 flex flex-col gap-4 pt-[480px] md:mt-32 lg:mt-0">
              <h3 className="text-white playfair-300 text-2xl lg:text-3xl">
                Why It Matters
              </h3>
              <p className="text-white text-base leading-relaxed">
                At its core, ACS represents a commitment: to help every student
                AIM for a sustainable future. In an era of climate urgency and
                social transition, we guide learners to identify environmental
                challenges, work across disciplines, and co-create
                research-based sustainability solutions for urban development.
              </p>

              <p className="text-white text-base leading-relaxed">
                Whether it&apos;s through green campus initiatives in Bangalore,
                or research collaboration for sustainable development in
                Bangalore, our efforts are focused on one goal: building a
                better tomorrow by empowering students today.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CfcWhyItMatters
