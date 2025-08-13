import React from "react"
import Image from "next/image"

const Activities = () => {
  return (
    <div className="bg-[#E1F9F4] mb-4">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 py-8 sm:py-12 md:py-16">
        {/* Left Side - Content (3/4 width) */}
        <div className="w-full lg:w-3/4 space-y-4 sm:space-y-6 px-4 sm:px-6 md:px-8 lg:ml-20">
          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[65px] text-[#0C2165] mb-4 sm:mb-6 playfair-300 leading-tight">
            Activities
          </h2>

          {/* Subtitle */}
          <h5 className="text-lg sm:text-xl md:text-[20px] monser-600 mb-4 sm:mb-6">
            Our community engagement initiatives include a range of student
            development activities in Bangalore colleges, including:
          </h5>

          {/* Bullet Points */}
          <ul className="space-y-2 sm:space-y-3 list-disc list-outside ml-4 sm:ml-6 mb-4 sm:mb-6">
            {[
              "Health awareness programs, including HIV/AIDS education and mental health awareness",
              "Annual blood donation camps, in collaboration with the Lions Club",
              "Celebration of World AIDS Day, Environment Day, and Mental Health Day",
              "Volunteering with NGO partners, including BOSCO, SATHI, and SUMANAHALLI",
              "Community support activities like health camps for women and the elderly",
              "Competitions and social interaction activities with juvenile and rehabilitation centres",
              "Child rights awareness programs in rural schools",
              "Observance of national and global awareness days",
              "Crisis support initiatives, including sanitation drives and emergency mobilisation",
            ].map((activity, index) => (
              <li
                key={index}
                className="text-base sm:text-lg md:text-[18px] leading-relaxed monser-400"
              >
                {activity}
              </li>
            ))}
          </ul>

          {/* Paragraph */}
          <p className="text-base sm:text-lg md:text-[20px] leading-relaxed monser-400 w-full lg:w-4/5">
            These programs not only create social impact but also offer social
            work opportunities for students in Bangalore through immersive,
            real-world involvement.
          </p>
        </div>

        {/* Right Side - Image (1/4 width) */}
        <div className="w-full lg:w-2/5 flex justify-center lg:justify-end lg:items-end lg:mt-20 relative z-20 px-4 sm:px-6 md:px-8">
          <Image
            src="/community-service/activities.png"
            alt="Community Activities"
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
