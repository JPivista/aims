"use client"
import React from "react"
import Image from "next/image"

const GetInvolvedSection = () => {
  return (
    <section className="bg-[#FFFFFF] text-black px-6 mb-10">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between gap-8 px-4 md:px-6">
        {/* Left Content */}
        <div className="md:w-2/3">
          <h3 className=" text-[#A22877] playfair-300 mb-3 md:mb-6 leading-tight">
            A Clear Path.
            <br /> A Lasting Impact.
          </h3>
          <p className="">
            Every student who walks through our gates brings their own
            aspirations. Our role is to help them sharpen their aim, stay the
            course, and deliver on their potential. That’s the AIMS approach -
            focused, forward-looking, and fiercely committed to long-term
            success.
          </p>
        </div>

        {/* Right Icon */}
        <div className="md:w-1/3 flex justify-center md:justify-end">
          <Image
            src="/about-aims/arrows.svg"
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
