import React from "react"
import Image from "next/image"

const MeetTheFaculty = () => {
  return (
    <>
      <div className="relative">
        <div className="container mx-auto px-4 md:px-0 py-6 md:py-10">
          <div className="flex flex-col items-center justify-center text-center">
            <h2 className="text-4xl md:text-6xl text-[#0C2165] playfair-300">
              Meet the AIMS Faculty
            </h2>

            <p className="text-base md:text-[18px] monser-400 max-w-4xl py-4">
              Discover the dedicated educators and researchers who guide your
              academic journey with precision, insight, and purpose, helping you
              aim higher and achieve your career targets.
            </p>
          </div>
        </div>
        <div className="absolute top-[0%] -right-10  hidden lg:block">
          <Image
            src="/admission-process/circle.svg"
            alt="Meet the AIMS Faculty"
            width={150}
            height={100}
            priority
          />
        </div>
      </div>
    </>
  )
}

export default MeetTheFaculty
