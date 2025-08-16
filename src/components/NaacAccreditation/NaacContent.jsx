import React from "react"
import Image from "next/image"

const NaacContent = () => {
  return (
    <>
      <div className="justify-center items-start py-4 md:py-8 lg:py-10 flex flex-col md:px-0 px-4 relative overflow-hidden">
        <div className="absolute md:top-[20%] right-0 md:block hidden rotate-180">
          <Image
            src="/student-handbook/semi-circle.svg"
            alt="School Circle Background"
            width={100}
            height={100}
            className="rotate-180"
          />
        </div>
        <div className="md:ml-20 text-base md:text-[20px] px-4 md:px-0">
          <h2 className="text-xl md:text-2xl lg:text-3xl xl:text-[65px] text-[#0C2165] playfair-300 mb-3 md:mb-4 lg:mb-6 ">
            AIMS Institutes: Honoured with <br /> 'A' Grade NAAC Accreditation
          </h2>
          <p className="monser-400 text-sm md:text-[24px] leading-relaxed md:max-w-5xl">
            As a NAAC‑accredited institution, AIMS sets its sights on quality,
            credibility, and continuous improvement. <br /> With a stellar CGPA
            of 3.46, we aim high and deliver quality education that hits the
            mark every time.
          </p>
        </div>
      </div>
    </>
  )
}

export default NaacContent
