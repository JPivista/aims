import React from "react"
import Image from "next/image"

const Activities = () => {
  return (
    <div className="bg-[#E1F9F4] relative px-4 md:px-8 lg:px-8 py-4 md:py-8 ">
      <div className="flex flex-col md:flex-row gap-0 container mx-auto">
        {/* Left Side - Content (3/4 width) */}
        <div className="w-full  space-y-4 md:space-y-6 max-w-4xl">
          {/* Title */}
          <h2 className="text-4xl md:text-6xl text-[#0C2165] mb-4 md:mb-6 playfair-300">
            Activities
          </h2>

          {/* Subtitle */}
          <h5 className="text-lg md:text-xl monser-600 mb-4 md:mb-6">
            ACSD coordinates a range of student development activities in
            Bangalore colleges, including:
          </h5>

          {/* Bullet Points */}
          <ul className="space-y-2 md:space-y-3 lg:space-y-3 list-disc list-outside ml-4 lg:ml-6 mb-4 lg:mb-6">
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
                className="text-[18px] leading-relaxed monser-400"
              >
                {activity}
              </li>
            ))}
          </ul>

          {/* Paragraph */}
          <h5 className="text-[18px] md:text-[20px] monser-400 max-w-3xl">
            Each of these efforts contributes to professional development for
            college students in Bangalore, ensuring that they graduate with both
            capability and character.
          </h5>
        </div>
      </div>
      <div className="absolute bottom-0 right-0 md:-bottom-1 md:-right-3 hidden md:hidden lg:block">
        <Image
          src="/student-development/activities-new.svg"
          alt="Student Activities"
          width={800}
          height={600}
          className="w-full h-full object-cover"
          priority
        />
      </div>
    </div>
  )
}

export default Activities
