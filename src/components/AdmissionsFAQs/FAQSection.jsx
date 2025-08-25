import React from "react"
import Image from "next/image"
import TabAccordionSection from "./TabAccordionSection"

const FAQSection = () => {
  return (
    <div className="relative">
      <div>
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-12 py-6 md:py-10 container mx-auto">
          {/* Left Side - Heading and Instructions (5/6 width) */}
          <div className="w-full px-4 md:px-0 max-w-5xl">
            {/* Heading */}

            <p className="text-base sm:text-lg md:text-[18px] leading-relaxed">
              At AIMS Institutes, we believe that financial constraints should
              never stand in the way of your academic goals. That's why we
              support our applicants and students with access to trusted
              education loan providers, so you can focus on learning, growing,
              and building a future you're proud of.
            </p>
          </div>

          {/* Right Side - Image (1/6 width) - Hidden on mobile and tablet */}
        </div>
        <TabAccordionSection />
      </div>
      <div className="hidden lg:block absolute top-[1%] -right-12  z-10">
        <Image
          src="/admission-process/circle.svg"
          alt="General Instructions"
          width={300}
          height={300}
          className="w-60 h-60 md:w-60 md:h-60 lg:w-60 lg:h-60"
        />
      </div>
    </div>
  )
}

export default FAQSection
