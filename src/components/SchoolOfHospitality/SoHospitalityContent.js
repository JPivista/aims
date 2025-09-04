import React from "react"
import Image from "next/image"

const SoHospitalityContent = () => {
  return (
    <>
      <div className="justify-center items-center py-10 flex flex-col lg:px-0 px-4 bg-[#F4E2FB] relative overflow-hidden">
        {/* Background SVG */}
        <div className="absolute md:-top-1/3 right-0 md:block hidden">
          <Image
            src="/school-circle.svg"
            alt="School Circle Background"
            width={250}
            height={200}
            // className="w-full h-full"
          />
        </div>

        <div className=" relative z-10">
          <h3 className="text-center playfair-300 text-[#0C2165]">
            Aim Higher in Hospitality.
            <br />
            Master the Art of Service.
          </h3>
          <div className=" lg:px-8">
            <div className="container mx-auto ">
              <div className=" text-center ">
                <p className="text-sm md:text-base  max-w-4xl mx-auto monser-400 pb-5">
                  At AIMS, we don’t just teach hospitality, we train you to lead
                  it. Whether your sights are set on luxury hotels, global
                  kitchens, or entrepreneurial ventures, our programs help you
                  sharpen your skills, expand your horizons and hit your career
                  targets with confidence.
                </p>

                <p className="text-sm md:text-base  max-w-4xl mx-auto monser-400">
                  AIMS School of Hospitality & Tourism offers globally aligned,
                  hands-on programs backed by industry access. It is a member of
                  EUHOFA and a partner of HOSCO, connecting students to top
                  employers and international opportunities.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default SoHospitalityContent
