"use client"
import React from "react"
import Image from "next/image"

const QualityPolicy = () => {
  return (
    <>
      {/* Desktop & Tablet Section */}
      <div className="w-full h-[600px] mb-10 hidden lg:block lg:mt-10 ">
        {/* Background with Flex */}
        <div
          className="w-full h-full bg-cover bg-center flex items-center lg:px-8 px-4"
          style={{
            backgroundImage: "url('/about-aims/Quality-img_desktop.webp')",
          }}
        >
          <div className="container mx-auto  text-white rounded-md  ">
           
              <div className="flex flex-col gap-4 w-[500px]">
                <h3>Quality Policy</h3>
                <p>
                  We at AIMS Institutes are committed to creating intellectual
                  capital through an exemplary value-based system, which
                  provides foundation for a lifetime of professional growth and
                  personal development. This is achieved by adopting innovative
                  teaching, providing international exposure, and encouraging
                  continuous research and learning.
                </p>
              </div>

          </div>
        </div>
      </div>

      {/* Mobile Section */}
      <section className="relative w-full  h-[800px] md:h-[100vh] mb-10 block lg:hidden ">
        {/* Background Image */}
        <Image
          src="/about-aims/Quality-img_mobile.webp"
          alt="Quality Policy Background"
          fill
          className=" "
          priority
        />

        {/* Text Overlay */}

        <div className="absolute inset-0 flex items-end justify-center container mx-auto">
          <div className="px-4 py-5 max-w-md sm:max-w-xl md:max-w-2xl md:h-[420px] rounded-lg text-center text-white ">
            <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 sm:mb-4">
              Quality Policy
            </h3>
            <p className="text-xs sm:text-sm md:text-base leading-relaxed">
              We at AIMS Institutes are committed to creating intellectual
              capital through an exemplary value-based system, which provides
              foundation for a lifetime of professional growth and personal
              development. This is achieved by adopting innovative teaching,
              providing international exposure, and encouraging continuous
              research and learning.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default QualityPolicy
