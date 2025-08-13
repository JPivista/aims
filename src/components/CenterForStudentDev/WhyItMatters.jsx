import React from "react"

const WhyItMatters = () => {
  return (
    <div
      className="relative w-full h-[60vh] sm:h-[70vh] md:h-[80vh] lg:h-[80vh] xl:h-[80vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{
        backgroundImage: `url('/student-development/why-it-matters.png')`,
      }}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full flex items-start justify-end p-4 sm:p-6 md:p-8 lg:p-8 xl:p-8 mt-4 sm:mt-6 md:mt-8 lg:mt-10 xl:mt-10 mr-4 sm:mr-8 md:mr-12 lg:mr-20 xl:mr-20">
        <div className="">
          <h2 className="text-white text-2xl sm:text-3xl md:text-5xl lg:text-[60px] xl:text-[60px] playfair-300 leading-tight">
            Why It Matters
          </h2>
          <p className="text-white text-base sm:text-lg md:text-[20px] lg:text-[20px] xl:text-[20px] mt-2 sm:mt-3 md:mt-4 lg:mt-4 xl:mt-4 max-w-xs sm:max-w-sm md:max-w-md lg:max-w-md xl:max-w-md">
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
