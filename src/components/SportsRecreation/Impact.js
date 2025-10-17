import React from "react"
import LifeatAims from "../shared/LifeatAims"
import Image from "next/image"

const AlumniinHospitalit = () => {
  const bcomAlumniData = {
    image: "/life-at-aims/Annual Sports-image.webp",
    subtitle: "Annual Sports Meet",
    description: `Our much-anticipated AIMS Annual Sports Day brings together students, faculty, and staff in a day-long celebration of fitness, friendly competition, and community spirit. Trophies, cheers, and memories await!`,
  }

  return (
    <>
      <div>
        <LifeatAims alumniData={bcomAlumniData} title="From Ideas to Impact" />
      </div>

      <section className="bg-[#E0F8F3] ">
        <div className=" container mx-auto px-6 lg:px-10 pb-10 ">
          <div className="flex flex-col-reverse lg:flex-row items-center gap-8">
            {/* Left - Text */}
            <div className="lg:w-30% text-black lg:-mt-14">
              <h3 className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-6">
                Beyond Competition
              </h3>
              <p className="text-gray-800 leading-relaxed">
                From yoga and wellness sessions to trekking clubs and casual
                weekend matches, sports at AIMS are for everyone, not just for
                athletes. If you&apos;re looking for balance, connection, and energy
                during your academic journey, this is the place to find it.
              </p>
            </div>

            {/* Right - Image */}
            <div className="lg:w-70% flex justify-center lg:-mt-14">
              <div className="w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                <div className="w-full h-full rounded-full overflow-hidden p-4 flex items-center justify-center">
                  <Image
                    src="/life-at-aims/Beyond-image.webp"
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
