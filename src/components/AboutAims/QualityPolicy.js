"use client"
import React from "react"
import Image from "next/image"

const QualityPolicy = () => {
  return (
    <section className="relative w-full h-[600px] mb-10 ">
      {/* Background Image */}
      <Image
        src="/about-aims/Quality-img_converted.webp"
        alt="Quality Policy Background"
        fill
        className="object-cover"
      />

      {/* Text Overlay */}
      <div className="absolute inset-0 flex items-center justify-start">
        <div className=" p-10 max-w-xl rounded-lg lg:ml-20 text-white">
          <h3 className="text-4xl font-semibold mb-4">Quality Policy</h3>
          <p className="text-base leading-relaxed">
            We at AIMS Institutes are committed to creating intellectual capital
            through an exemplary value based system, which provides foundation
            for a life time of professional growth and personal development.
            This is achieved by adopting innovative teaching, providing
            international exposure, and encouraging continuous research and
            learning.
          </p>
        </div>
      </div>
    </section>
  )
}

export default QualityPolicy
