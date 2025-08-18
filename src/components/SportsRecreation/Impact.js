import React from "react"
import LifeatAims from "../shared/LifeatAims"
import Image from "next/image"

const AlumniinHospitalit = () => {
  const bcomAlumniData = {
    image: "/life-at-aims/sports-img-1.png",
    subtitle: "From Ideas to Impact",
    description: `“My experience at AIMS institutes was amazing and memorable. I have learnt a lot of valuable lessons; academic wise as well as important life lessons which pushed me to be a better person and improve in all aspects of life. My teachers have played a vital role in shaping me, they have always supported me, corrected my mistakes and motivated me. I'm grateful to AIMS for giving me a lot of wonderful opportunities and I'm extremely thankful. I hope to receive the same support throughout my life.”`,
  }

  return (
    <>
      <div>
        <LifeatAims alumniData={bcomAlumniData} title="From Ideas to Impact" />
      </div>

      <section className="bg-[#E0F8F3] ">
        <div className=" container mx-auto px-6 lg:px-10 p-4 ">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-8">

            {/* Left - Text */}
            <div className="lg:w-30% text-black ">
              <h3 className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-6">
                Beyond Competition
              </h3>
              <p className="text-gray-800 leading-relaxed">
                From yoga and wellness sessions to trekking clubs and casual
                weekend matches, sports at AIMS are for everyone, not just for
                athletes. If you’re looking for balance, connection, and energy
                during your academic journey, this is the place to find it.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-70% flex justify-center">
              <div className="w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden p-4 flex items-center justify-center">
                  <Image
                    src="/life-at-aims/sports-img-2.png"
                    alt="Student Club"
                    width={320}
                    height={320}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AlumniinHospitalit
