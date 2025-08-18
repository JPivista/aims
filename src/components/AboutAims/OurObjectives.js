"use client"
import React from "react"
import Image from "next/image"
const Objectives = () => {
 

  return (
    <section className="bg-teal-50 py-10">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Title */}
        <h3 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 playfair-300 leading-tight">
          Our Objectives
        </h3>
        <p className="text-gray-700 mb-10 max-w-2xl">
          The primary objective of AIMS Institutes is to provide quality
          education to create:
        </p>

        {/* Arrow Cards */}
        <div className="flex flex-col lg:flex-row ">
        <Image 
        src="/about-aims/our-objective.svg"  
        alt="My Logo"
        width={200} 
        height={200}
        className="w-full h-full container mx-auto "
      />
        </div>
      </div>
    </section>
  )
}

export default Objectives
