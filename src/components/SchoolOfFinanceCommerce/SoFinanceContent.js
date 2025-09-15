import React from "react"
import Image from "next/image"

const SoFinanceContent = () => {
  return (
    <>
      <div className="justify-center items-center py-10 flex flex-col lg:px-8 px-4 bg-[#FDE9E9] relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute -top-1/3 right-0 hidden lg:block">
          <Image
            src="/school-circle.svg"
            alt="School Circle Background"
            width={250}
            height={200}
          />
        </div>

        <div className="flex flex-col lg:px-0 px-4 bg-transparent relative z-10">
          <h3 className="text-center text-[32px] lg:text-[56px] playfair-300 text-[#751649]">
            Sharpening Minds.
            <br />
            Shaping Tomorrow.
          </h3>
          <div className="lg:w-[60%] w-full mx-auto ">
            <p className="text-center text-lg lg:text-[20px] monser-400">
              At AIMS, we understand that every career in finance begins with a
              clear goal. Our school helps you AIM with clarity, whether
              you&apos;re starting out or building expertise. With a foundation
              of precision, discipline, and real-world relevance, we prepare you
              to navigate the financial world with focus and confidence.
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default SoFinanceContent
