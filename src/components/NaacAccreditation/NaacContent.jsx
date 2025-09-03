import React from "react"
import Image from "next/image"

const NaacContent = () => {
  return (
    <>
      <div className="relative px-4 md:px-8 lg:px-12 py-6 md:py-10">
        <div className="container mx-auto">
          <div className="flex flex-col justify-center items-start ">
            <h2 className="text-3xl md:text-6xl text-[#0C2165] playfair-300 mb-3 md:mb-4 lg:mb-6 ">
              AIMS Institutes: Honoured with <br className="hidden md:block" />{" "}
              'A' Grade NAAC Accreditation
            </h2>
            <p className="monser-400 text-base md:text-[24px] leading-relaxed md:max-w-5xl">
              As a NAAC‑accredited institution, AIMS sets its sights on quality,
              credibility, and continuous improvement. <br /> With a stellar
              CGPA of 3.46, we aim high and deliver quality education that hits
              the mark every time.
            </p>
          </div>
        </div>
        <div className="absolute md:top-[0%] right-0 md:block hidden">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </>
  )
}

export default NaacContent
