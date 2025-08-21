import React from "react"
import Image from "next/image"
import TabAccordionSection from "./TabAccordionSection"

const FAQSection = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 py-8 sm:py-12 md:py-16">
        {/* Left Side - Heading and Instructions (5/6 width) */}
        <div className="w-full lg:w-5/6 px-4 sm:px-6 md:px-8 lg:ml-20">
          {/* Heading */}

          <p className="text-base sm:text-lg md:text-[18px] leading-relaxed">
            At AIMS Institutes, we believe that financial constraints should
            never stand in the way of your academic goals. That's why we support
            our applicants and students with access to trusted education loan
            providers, so you can focus on learning, growing, and building a
            future you're proud of.
          </p>
        </div>

        {/* Right Side - Image (1/6 width) - Hidden on mobile and tablet */}
        <div className="hidden lg:block w-full lg:w-1/6 justify-center lg:justify-end px-4 sm:px-6 md:px-8 md:-mt-5 md:-mr-20 lg:-mt-5 lg:-mr-20">
          <Image
            src="/admission-process/circle.svg"
            alt="General Instructions"
            width={300}
            height={300}
            className="w-60 h-60 md:w-60 md:h-60 lg:w-60 lg:h-60"
          />
        </div>
      </div>
      <TabAccordionSection />
    </>
  )
}

export default FAQSection
