import React from "react"
import Image from "next/image"

const OurRepository = () => {
  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Left Side - Content */}
        <div className="w-full lg:w-4/5 space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 lg:ml-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 playfair-300 leading-tight">
            Our Repository of Scholarly <br /> Articles and Publications
          </h2>
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-4/5 relative">
            <p className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
              Dive into expertly crafted research, insightful thought
              leadership, and innovative business perspectives that empower you
              to aim higher and achieve precision in your academic and
              professional journey.
            </p>
            <div className="absolute -right-115 -top-60 hidden lg:block">
              <Image
                src="/community-service/semi-circle.svg"
                alt="Our Repository"
                width={180}
                height={120}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurRepository
