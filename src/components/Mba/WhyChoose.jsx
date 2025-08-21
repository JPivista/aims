import React from "react"
import Image from "next/image"

const WhyChoose = () => {
  return (
    <>
      <div className="container mx-auto flex flex-col items-center justify-center py-6 md:py-10 px-4 md:px-6">
        <div className="bg-[#D7FFF7] w-[200px] md:w-[300px] rounded-2xl p-2 md:p-4">
          <Image
            src="/MBA/naac-logo.png"
            alt="NAAC Accredited A"
            width={400}
            height={400}
            className="w-full h-auto object-contain"
            priority
          />
        </div>
        <p className="monser-400 w-full md:w-4/5 py-4  md:py-8 text-sm md:text-[18px] text-center md:px-4 leading-relaxed">
          At AIMS School of Business, ranked among the{" "}
          <span className="monser-600">top 1% B schools in India</span>,
          programs are crafted like arrows, each aimed at a specific career
          path. With industry-aligned curriculum, hands-on learning, and
          career-oriented tracks, we prepare students to lead with confidence in
          today's evolving business landscape.
        </p>
        <div className="w-full md:max-w-6xl px-2 max-w-5xl">
          {/* Mobile Version - Coded Design */}
          <div className="block md:hidden">
            <div className="text-center mb-8">
              <h1 className="text-[#531675] text-2xl md:text-[40px] playfair-500 mb-6">
                Why Choose the <br />{" "}
                <span className="playfair-500 italic">AIMS MBA?</span>
              </h1>
            </div>

            <div className="space-y-4">
              {/* Box 1 - Dark Purple */}
              <div className="bg-[#A22877] text-white p-4 rounded-xl">
                <p className="text-sm monser-500 px-2">
                  2-year, full-time program with AICTE, IACBE, NBA
                  accreditations
                </p>
              </div>

              {/* Box 2 - Dark Purple */}
              <div className="bg-[#B4408B] text-white p-4 rounded-xl">
                <p className="text-sm monser-500 px-2">
                  Dual specialisation options: Marketing, Finance, HR,
                  Analytics, etc
                </p>
              </div>

              {/* Box 3 - Orange */}
              <div className="bg-[#FF6C02] text-white p-4 rounded-xl">
                <p className="text-sm monser-500 px-2">
                  Live business projects, internships, case studies
                </p>
              </div>

              {/* Box 4 - Light Pink */}
              <div className="bg-[#F5BBBC] p-4 rounded-xl">
                <p className="text-sm monser-500 px-2">
                  Career-focused modules in leadership, innovation, and global
                  business
                </p>
              </div>

              {/* Box 5 - Dark Purple */}
              <div className="bg-[#D264AB] text-white p-4 rounded-xl">
                <p className="text-sm monser-500 px-2">
                  Guest lectures & mentorship from industry leaders
                </p>
              </div>

              {/* Box 6 - Light Pink */}
              <div className="bg-[#F0A2B8]  p-4 rounded-xl">
                <p className="text-sm monser-500 px-2">
                  Placement support with 100+ recruiters (incl. Deloitte, EY,
                  ICICI)
                </p>
              </div>
            </div>
          </div>

          {/* Desktop Image */}
          <div className="hidden md:block">
            <Image
              src="/MBA/why-choose.svg"
              alt="Why Choose Us"
              width={1200}
              height={1200}
              className="w-full h-auto object-cover rounded-lg"
              priority
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default WhyChoose
