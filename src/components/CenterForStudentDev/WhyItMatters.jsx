import React from "react"
import Image from "next/image"

const WhyItMatters = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[75vh] overflow-hidden mt-4 md:mt-0">
      {/* Desktop Background Image */}
      <Image
        src="/student-development/why-it-matters.webp"
        alt="Why It Matters"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/student-development/mobile-why-it-matters.webp"
        alt="Why It Matters"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col md:flex-row items-center justify-center md:justify-end container mx-auto  md:mt-0 mt-25 px-4 md:px-0">
        <div className="">
          <h2 className="text-white text-3xl  md:text-6xl playfair-300 leading-tight text-center md:text-left">
            Why It Matters
          </h2>
          <p className="text-white text-sm md:text-base mt-2 md:mt-4 lg:mt-4 xl:mt-4 max-w-md md:max-w-md lg:max-w-md xl:max-w-md text-center md:text-left">
            In a world that demands more than academic excellence, ACSD provides
            a structured foundation for personality development, leadership
            training, and college workshops for employability skills in
            Bangalore. By building confidence and clarity early on, the centre
            plays a crucial role in helping students choose their goal and AIM
            for the future.
          </p>
        </div>
      </div>
    </div>
  )
}

export default WhyItMatters
