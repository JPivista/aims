import React from "react"
import Image from "next/image"

const AicteContent = () => {
  return (
    <>
      <div className="relative">
        <div className="container mx-auto px-4 md:px-0 py-6 md:py-10 ">
          <div className="flex flex-col justify-center items-start ">
            <h2 className="text-3xl md:text-6xl text-[#0C2165] playfair-300 mb-3 md:mb-4 lg:mb-6 ">
              AICTE‑Approved for <br className="hidden md:block" /> Quality and
              Relevance
            </h2>
            <p className="monser-400 text-base md:text-[24px] leading-relaxed md:max-w-4xl">
              Our technical programmes meet AICTE’s national standards, ensuring
              industry-aligned curriculum, expert faculty, and infrastructure
              that helps you hit your professional target with precision.
            </p>
          </div>
        </div>
        <div className="absolute md:top-[0%] right-0 md:block hidden">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default AicteContent
