import React from "react"
import Image from "next/image"

const AicteContent = () => {
  return (
    <>
      <div className="justify-center items-start py-4 md:py-8 lg:py-10 flex flex-col md:px-0 px-4 relative overflow-hidden">
        <div className="absolute md:top-[20%] right-0 md:block hidden rotate-180">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="rotate-180"
          />
        </div>
        <div className="md:ml-20 text-base md:text-[20px] px-4 md:px-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[65px] text-[#0C2165] playfair-300 mb-3 md:mb-4 lg:mb-6 md:max-w-4xl">
            AICTE‑Approved for <br className="hidden md:block" /> Quality and
            Relevance
          </h2>
          <p className="monser-400 text-sm md:text-base lg:text-lg xl:text-[24px] leading-relaxed md:max-w-5xl">
            Our technical programmes meet AICTE's national standards, ensuring
            industry-aligned curriculum, expert faculty, and infrastructure that
            helps you hit your professional target with precision.
          </p>
        </div>
      </div>
    </>
  )
}

export default AicteContent
