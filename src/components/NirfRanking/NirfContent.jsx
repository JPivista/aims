import React from "react"
import Image from "next/image"

const NirfContent = () => {
  return (
    <>
      <div className="justify-center items-start py-8 md:py-10 flex flex-col md:px-0 px-4 relative overflow-hidden ">
        <div className="absolute md:top-[20%] right-0 md:block hidden rotate-180">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="rotate-180"
          />
        </div>
        <div className=" md:ml-20 text-base md:text-[20px] px-4 md:px-0">
          <h2 className="text-2xl md:text-3xl lg:text-[65px] text-[#0C2165] playfair-300 mb-4 md:mb-6 md:max-w-4xl">
            National Institutional <br className="hidden md:block" /> Ranking
            Framework (NIRF)
          </h2>
          <p className="monser-400 text-sm md:text-[24px] leading-relaxed md:max-w-5xl">
            AIMS has been actively participating in the National Institutional
            Ranking Framework (NIRF) ranking. <br /> Following is the data
            submitted by us for respective years.
          </p>
        </div>
      </div>
    </>
  )
}

export default NirfContent
