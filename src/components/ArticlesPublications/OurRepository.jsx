import React from "react"
import Image from "next/image"

const OurRepository = () => {
  return (
    <div className="justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden">
      <div className="absolute top-[15%] right-0 lg:block hidden">
        <Image
          src="/community-service/semi-circle.svg"
          alt="School Circle Background"
          width={150}
          height={150}
          className="-w-full h-full -rotate-2"
        />
      </div>
      <div className="container mx-auto">
        <div className="flex flex-col lg:px-0 px-4 bg-transparent relative z-10">
          <h2 className="text-start text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 playfair-300 leading-tight tracking-wider">
            Our Repository of Scholarly <br /> Articles and Publications
          </h2>
          <div className="lg:w-[75%] w-full">
            <p className="text-start text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
              Dive into expertly crafted research, insightful thought
              leadership, and innovative business perspectives that empower you
              to aim higher and achieve precision in your academic and
              professional journey.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurRepository
