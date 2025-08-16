import React from "react"
import Image from "next/image"

const MeetTheFaculty = () => {
  return (
    <div className="py-2">
      <div className="flex flex-col md:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10 lg:py-12">
        {/* Left Side - Content */}
        <div className="w-full lg:w-4/5 space-y-4  mx-auto text-center">
          <h2 className="text-2xl md:text-[65px] text-[#0C2165] mb-10 playfair-300">
            Meet the AIMS Faculty
          </h2>
          <div className="flex flex-col gap-3 sm:gap-4 w-full lg:w-4/5 relative mx-auto">
            <p className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400">
              Discover the dedicated educators and researchers who guide your
              academic journey with precision, insight, and purpose, helping you
              aim higher and achieve your career targets.
            </p>
            <div className="absolute -right-70 -top-40 hidden lg:block">
              <Image
                src="/articles-publications/semi-circle.png"
                alt="Meet the AIMS Faculty"
                width={150}
                height={100}
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MeetTheFaculty
