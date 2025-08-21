import React from "react"
import Image from "next/image"

const WhyItMatters = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[75vh] overflow-hidden mt-4 md:mt-0">
      {/* Desktop Background Image */}
      <Image
        src="/student-development/why-it-matters.png"
        alt="Why It Matters"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/student-development/mobile-why-it-matters.png"
        alt="Why It Matters"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col md:flex-row md:items-start justify-end md:justify-end p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 pb-20 md:pb-0 mt-6  md:mt-14  mr-4 sm:mr-8 md:mr-12">
        <div className="md:ml-20">
          <h2 className="text-white text-3xl  md:text-[60px] playfair-300 leading-tight text-center md:text-left">
            Why It Matters
          </h2>
          <p className="text-white text-lg md:text-[20px] lg:text-[20px] xl:text-[20px] mt-2 md:mt-4 lg:mt-4 xl:mt-4 max-w-md md:max-w-md lg:max-w-md xl:max-w-md text-center md:text-left">
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
