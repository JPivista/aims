"use client"
import React from "react"
import Image from "next/image"

const GetInvolvedSection = () => {
  return (
    <>
      <div className="bg-[#A43177] text-white px-4 lg:px-8 py-10">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 md:px-4 lg:px-0 px-0">
          {/* Left Content */}
          <div className="md:w-2/3">
            <h3 className=" text-xl md:text-[72px] playfair-300 mb-3 md:mb-6 leading-tight">
              Want to Learn
              <br /> More?
            </h3>
            <p className="">
              Visit the AIMS Centre for Sports to explore our calendar, team
              participation opportunities, and wellness support.
            </p>
          </div>

          {/* Right Icon */}
          <div className="md:w-1/3 justify-center md:justify-end hidden md:flex">
            <Image
              src="/life-at-aims/student-loan-icon.svg"
              alt="Arrow"
              width={1028}
              height={1028}
              className=" w-44 h-44"
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default GetInvolvedSection
