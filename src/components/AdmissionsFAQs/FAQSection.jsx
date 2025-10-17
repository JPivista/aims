import React from "react"
import Image from "next/image"
import TabAccordionSection from "./TabAccordionSection"

const FAQSection = () => {
  return (
    <div className="relative px-4 md:px-8 py-6 md:py-10 lg:py-10 lg:px-8">
      <div className="container mx-auto ">
        <div className="flex flex-col md:flex-row lg:flex-row gap-6 md:gap-12 pb-6 md:pb-10">
          {/* Left Side - Heading and Instructions (5/6 width) */}
          <div className="w-full max-w-5xl">
            <p className="text-base sm:text-lg md:text-[18px] leading-relaxed">
              We know that applying to college is a big decision. Whether you're
              planning ahead or ready to enrol, here are some of the most
              frequently asked questions about joining AIMS Institutes.
            </p>
          </div>

          {/* Right Side - Image (1/6 width) - Hidden on mobile and tablet */}
        </div>
        <TabAccordionSection />
      </div>
      <div className="hidden lg:block absolute top-[1%] -right-22  z-10">
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
