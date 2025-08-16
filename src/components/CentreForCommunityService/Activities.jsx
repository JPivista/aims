import React from "react"
import Image from "next/image"

const Activities = () => {
  return (
    <div className="bg-[#E1F9F4] mb-4">
      <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-12 py-8 md:py-1 w-full">
        {/* Left Side - Content (3/4 width) */}
        <div className="w-5/6 space-y-4 sm:space-y-6 lg:ml-20 ">
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
                className="text-base sm:text-lg md:text-[18px]  monser-400"
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
        <div className="lg:w-2/5 flex items-end md:mt-60">
          <Image
            src="/community-service/activities.png"
            alt="Community Activities"
            width={800}
            height={600}
          />
        </div>
      </div>
    </div>
  )
}

export default Activities
