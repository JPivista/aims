import React from "react"
import Image from "next/image"
import Button from "@/shared/Button"

const Handbook = () => {
  return (
    <div className="w-full md:py-10 py-4 lg:px-0 px-4">
      <div className="grid grid-cols-1 lg:grid-cols-2 items-start gap-8">
        {/* Left Column - Image */}
        <div className="flex flex-col gap-4 col-span-1">
          <Image
            src="/alumni-association/alumni-netowrk.png"
            alt="Alumni Network"
            width={500}
            height={500}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Right Column - Content */}
        <div className="flex flex-col md:gap-6 px-4 md:px-0">
          <h3 className="text-4xl lg:text-5xl playfair-300 text-[#0C2165] leading-tight text-center md:text-left">
            Student Handbook
          </h3>

          <div className="text-gray-800 leading-relaxed space-y-4 text-center md:text-left">
            <p className="text-lg">
              Please download the student handbook to understand various
              resources and facilities available to you as a student of this
              institution including mentoring, focus centres, grievances,
              feedback process, and many
            </p>
          </div>

          <div className="mt-4 md:mt-0 flex justify-center md:justify-start">
            <Button href="/student-handbook/Student-Handbook/Student-Handbook-2021.pdf">
              Download Student Handbook
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Handbook
