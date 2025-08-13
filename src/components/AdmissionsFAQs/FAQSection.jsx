import React from "react"
import Image from "next/image"
import TabAccordionSection from "./TabAccordionSection"

const FAQSection = () => {
  

  return (
    <>
      <div className="flex flex-col lg:flex-row gap-8 md:gap-12 py-16">
        {/* Left Side - Heading and Instructions (5/6 width) */}
        <div className="w-full lg:w-5/6 ml-20">
          {/* Heading */}
          <h1 className="text-[#A22877] text-3xl md:text-[72px] lg:text-5xl playfair-300 mb-8 italic">
            Admissions{" "}
            <span className="text-[#0C2165] not-italic playfair-300">FAQ</span>
          </h1>

          <p>
            At AIMS Institutes, we believe that financial constraints should
            never stand in the way of your academic goals. That’s why we support
            our applicants and students with access to trusted education loan
            providers, so you can focus on learning, growing, and building a
            future you're proud of.
          </p>
        </div>

        {/* Right Side - Image (1/6 width) */}
        <div className="w-full lg:w-1/6 flex justify-center lg:justify-end -mt-5 -mr-20">
          <Image
            src="/admission-process/circle.svg"
            alt="General Instructions"
            width={300}
            height={300}
            className="w-32 h-32 md:w-60 md:h-60"
          />
        </div>
      </div>
      <TabAccordionSection />
    </>
  )
}

export default FAQSection
