import React from "react"
import Image from "next/image"

const Activities = () => {
  return (
    <div className="bg-[#E1F9F4] mb-4">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 lg:gap-8 xl:gap-8 py-8 sm:py-12 md:py-16 lg:py-16 xl:py-16">
        {/* Left Side - Content (3/4 width) */}
        <div className="w-full lg:w-3/4 space-y-4 sm:space-y-6 lg:space-y-6 xl:space-y-6 px-4 sm:px-6 md:px-8 lg:ml-20 xl:ml-20">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] xl:text-[65px] text-[#0C2165] mb-4 sm:mb-6 lg:mb-6 xl:mb-6 playfair-300 leading-tight">
            Activities
          </h2>

          {/* Subtitle */}
          <h5 className="text-lg sm:text-xl md:text-[20px] lg:text-[20px] xl:text-[20px] monser-600 mb-4 sm:mb-6 lg:mb-6 xl:mb-6">
            ACSD coordinates a range of student development activities in
            Bangalore colleges, including:
          </h5>

          {/* Bullet Points */}
          <ul className="space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-3 list-disc list-outside ml-4 sm:ml-6 lg:ml-6 xl:ml-6 mb-4 sm:mb-6 lg:mb-6 xl:mb-6">
            {[
              "Student mentorship programs and close supervision of mentoring efforts",
              "Training in communication and soft skills through workshops and outbound learning",
              "Pre-placement training for graduates in Bangalore, featuring internal sessions and expert-led modules",
              "Corporate readiness programs for students, helping bridge the gap between the classroom and career",
              "Leadership development activities to build confidence, teamwork, and responsibility",
              "Alumni engagement sessions, including guest talks, mock interviews, and mentorship",
              "Facilitating sponsorships for students to participate in intercollegiate events and festivals",
              "Referrals to external professional support, when required",
            ].map((activity, index) => (
              <li
                key={index}
                className="text-base sm:text-lg md:text-[18px] lg:text-[18px] xl:text-[18px] leading-relaxed monser-400"
              >
                {activity}
              </li>
            ))}
          </ul>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-[20px] lg:text-[20px] xl:text-[20px] leading-relaxed monser-400 w-full lg:w-3/4 xl:w-3/4">
            Each of these efforts contributes to professional development for
            college students in Bangalore, ensuring that they graduate with both
            capability and character.
          </p>
        </div>

        {/* Right Side - Image (1/4 width) */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:items-end lg:mt-20 xl:mt-20 relative z-20 px-4 sm:px-6 md:px-8">
          <Image
            src="/student-development/activities.png"
            alt="Student Activities"
            width={800}
            height={600}
            className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-4xl xl:max-w-6xl"
          />
        </div>
      </div>
    </div>
  )
}

export default Activities
