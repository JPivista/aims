"use client"
import React from "react"
import Image from "next/image"

const QualityPolicy = () => {
  return (
    <>
      {/* Desktop & Tablet Section */}
      <section className="relative w-full h-[600px] mb-10 hidden lg:block lg:mt-10">
        {/* Background Image */}
        <Image
          src="/about-aims/Quality-img_desktop.webp"
          alt="Quality Policy Background"
          fill
          className="object-cover object-center"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-start  container mx-auto ">
          <div className=" w-[45%] px-4 rounded-lg text-white text-left">
            <h3 className="text-3xl lg:text-4xl font-semibold mb-4">
              Quality Policy
            </h3>
            <p className="text-sm md:text-base leading-relaxed">
              We at AIMS Institutes are committed to creating intellectual
              capital through an exemplary value-based system, which provides
              foundation for a lifetime of professional growth and personal
              development. This is achieved by adopting innovative teaching,
              providing international exposure, and encouraging continuous
              research and learning.
            </p>
          </div>
        </div>
      </section>

      {/* Mobile Section */}
      <section className="relative w-full  h-[800px] md:h-[1000px] mb-10 block lg:hidden ">
        {/* Background Image */}
        <Image
          src="/about-aims/Quality-img_mobile.webp"
          alt="Quality Policy Background"
          fill
          className=" h-[800px] md:h-[800px]"
          priority
        />

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-end justify-center container mx-auto">
          <div className="px-4 py-5 max-w-md sm:max-w-xl md:max-w-2xl md:h-[420px] rounded-lg text-center text-white ">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
              Quality Policy
            </h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              We at AIMS Institutes are committed to creating intellectual
              capital through an exemplary value-based system, which provides
              foundation for a lifetime of professional growth and personal
              development. This is achieved by adopting innovative teaching,
              providing international exposure, and encouraging continuous
              research and learning.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default QualityPolicy
