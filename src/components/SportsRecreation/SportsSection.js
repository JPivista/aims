"use client"
import React from "react"
import Image from "next/image"

const GetInvolvedSection = () => {
  return (
    <section className="bg-[#A43177] text-white px-6 py-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h3 className=" text-xl md:text-[72px] playfair-300 mb-3 md:mb-6 leading-tight">
            Want to Learn
            <br /> More?
          </h3>
          <p className="">
          Visit the AIMS Centre for Sports to explore our calendar, team participation opportunities, and wellness support.
          </p>
        </div>

        {/* Right Icon */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Image
            src="/life-at-aims/student-loan-icon.svg"
            alt="Arrow"
            width={128}
            height={128}
            className="opacity-50 w-32 h-32"
          />
        </div>
      </div>
    </section>
  )
}

export default GetInvolvedSection
