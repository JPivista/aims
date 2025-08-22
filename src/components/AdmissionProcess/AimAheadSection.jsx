import React from "react"
import Image from "next/image"

const AimAheadSection = () => {
  return (
    <div className="relative w-full h-[90vh] md:h-[75vh] overflow-hidden">
      {/* Desktop Background Image */}
      <Image
        src="/admission-process/student.png"
        alt="Aim Ahead with Confidence"
        fill
        className="hidden md:block object-cover"
        priority
      />

      {/* Mobile Background Image */}
      <Image
        src="/admission-process/mobile-student.png"
        alt="Aim Ahead with Confidence"
        fill
        className="block md:hidden object-cover"
        priority
      />

      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col md:justify-center justify-end pb-20 md:pb-0 mt-10 md:mt-0">
        <div className="container mx-auto">
          <div className="flex justify-start">
            <div className="w-full md:max-w-2xl text-center md:text-left">
              <h3
                className="text-white text-lg  md:text-[60px] playfair-300 leading-tight mb-3 sm:mb-4 md:mb-6 tracking-wider"
                dangerouslySetInnerHTML={{
                  __html: "AIM Ahead with Confidence",
                }}
              />
              <p className="text-white text-sm md:text-lg px-4 md:px-0 max-w-lg">
                Whether you're a first-time applicant or seeking a career shift,
                our process is designed to support your ambition. From
                step-by-step guidance for UG and PG admissions in Bangalore to
                support with document submission, we're here to help you choose
                your goal and aim for the future.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AimAheadSection
