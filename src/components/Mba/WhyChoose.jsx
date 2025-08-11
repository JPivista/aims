import React from "react"
import Image from "next/image"

const WhyChoose = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center py-6 md:py-10 px-4 md:px-6">
        <div className="bg-[#D7FFF7] w-[200px] md:w-[300px] rounded-2xl p-2 md:p-4">
          <Image
            src="/MBA/naac-logo.png"
            alt="NAAC Accredited A"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <p className="monser-400 w-full md:w-4/5 py-4  md:py-8 text-sm md:text-[18px] text-center md:px-4 leading-relaxed">
          At AIMS School of Business, ranked among the{" "}
          <b className="monser-600 text-black">top 1% B schools in India</b>,
          programs are crafted like arrows, each aimed at a specific career
          path. With industry-aligned curriculum, hands-on learning, and
          career-oriented tracks, we prepare students to lead with confidence in
          today's evolving business landscape.
        </p>
        <div className="w-full md:max-w-6xl px-2 max-w-5xl">
          <Image
            src="/MBA/why-choose.png"
            alt="Why Choose Us"
            width={1200}
            height={1200}
            className="w-full h-auto object-cover rounded-lg "
            priority
          />
        </div>
      </div>
    </>
  )
}

export default WhyChoose
