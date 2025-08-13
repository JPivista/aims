import React from "react"
import Image from "next/image"

const Aiming = () => {
  return (
    <>
      {/* Row 1: Left Content, Right Image */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10 lg:py-10">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 relative px-4 sm:px-6 md:px-8 lg:ml-20">
          <div className="space-y-4 sm:space-y-6 lg:space-y-6">
            <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 lg:mb-10 playfair-300">
              AIMing for All <br /> Round Development
            </h2>
            <p className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              For queries and support, write to us at{" "}
              <span className="text-[#A22877] monser-600 underline">
                acsd@theaims.ac.in
              </span>
            </p>
            <p className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              Founded in 2007, the AIMS Centre for Student Development (ACSD) is
              built on a singular principle, to walk alongside students through
              every phase of their academic and personal journey. At the heart
              of ACSD lies a belief in the power of mentorship and personalised
              attention, enabling students to build confidence, self-awareness,
              and meaningful life skills.
            </p>
            <p className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              With structured guidance and consistent support, ACSD helps
              students align their strengths with their goals, preparing them
              for a future of responsible leadership and professional success.
              From student mentorship programs in Bangalore colleges to
              pre-placement training for graduates, every initiative is designed
              to foster holistic growth. Because at AIMS, we don't just prepare
              students to graduate we prepare them to thrive.
            </p>
          </div>

          {/* Image positioned absolutely */}
          <div className="hidden md:block absolute -top-20 -right-20 w-64 h-64 lg:w-150 lg:h-100 lg:top-40 lg:-right-150 rounded-2xl">
            <Image
              src="/student-development/aiming.png"
              alt="Student Development"
              width={1000}
              height={1000}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Row 2: Left Image, Right Content */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10 lg:py-10">
        {/* Left Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-start lg:pr-8 px-4 sm:px-6 md:px-8">
          <Image
            src="/student-development/our-approach.png"
            alt="Career Guidance"
            width={1000}
            height={1000}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
          />
        </div>

        {/* Right Side - Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-6 px-4 sm:px-6 md:px-8 lg:ml-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 lg:mb-10 playfair-300">
            Our Approach
          </h2>
          <p className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
            Through one-on-one mentoring and group activities, ACSD supports the
            personal and social development of students in Bangalore, enabling
            them to better understand themselves and their aspirations. By
            helping them navigate both opportunities and challenges, ACSD
            ensures that each student experiences their time at AIMS as a
            transformative journey, not just an academic one.
          </p>
          <p className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
            Whether a student needs career guidance, skill-building support, or
            simply someone to talk to, ACSD provides a consistent touchpoint for
            care, structure, and encouragement. The emphasis is always on
            student well-being initiatives in Bangalore colleges that are
            practical, human, and future-focused.
          </p>
        </div>
      </div>

      {/* Row 3: Left Content, Right Image */}
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-16 py-6 sm:py-8 md:py-10 lg:py-10">
        {/* Left Side - Content */}
        <div className="w-full lg:w-1/2 space-y-4 sm:space-y-6 lg:space-y-6 px-4 sm:px-6 md:px-8 lg:ml-20">
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-6 sm:mb-8 md:mb-10 lg:mb-10 playfair-300">
            Objectives
          </h2>
          <h4 className="text-lg sm:text-xl md:text-[20px] lg:text-[20px] text-[#0C2165] monser-600 mb-3 sm:mb-4 lg:mb-4">
            ACSD works to:
          </h4>
          <ul className="space-y-2 sm:space-y-3 lg:space-y-3 list-disc list-outside ml-4 sm:ml-6 lg:ml-6">
            <li className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              Identify each student's unique needs and offer relevant support or
              intervention
            </li>
            <li className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              Collaborate with the academic and Corporate & Public Relations
              teams to deliver competency-building workshops for college
              students in Bangalore
            </li>
            <li className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              Provide a platform for cross-cultural, academic, and experiential
              learning exchanges
            </li>
            <li className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              Support the long-term vision of AIMS by helping students grow into
              well-rounded professionals with a deep concern for society
            </li>
            <li className="text-base sm:text-lg md:text-[18px] lg:text-[18px] leading-relaxed monser-400">
              Support the long-term vision of AIMS by helping students grow into
              well-rounded professionals with a deep concern for society
            </li>
          </ul>
        </div>

        {/* Right Side - Image */}
        <div className="w-full lg:w-1/2 flex justify-center lg:justify-end lg:pl-8 px-4 sm:px-6 md:px-8">
          <Image
            src="/student-development/objectives.png"
            alt="Success Achievement"
            width={1000}
            height={1000}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-2xl"
          />
        </div>
      </div>
    </>
  )
}

export default Aiming
