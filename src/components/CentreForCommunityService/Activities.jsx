import React from "react"
import Image from "next/image"

const Activities = () => {
  return (
    <div className="bg-[#E1F9F4]">
      <div className="flex flex-col md:flex-row gap-0 py-4 md:py-8 px-4 md:px-0">
        {/* Left Side - Content (3/4 width) */}
        <div className="w-full md:w-4/5 space-y-4 md:space-y-6 md:ml-10 px-4 md:px-8 pb-0 mb-0">
          {/* Title */}
          <h2 className="text-4xl md:text-[65px] text-[#0C2165] mb-4 md:mb-6 playfair-300">
            Activities
          </h2>

          {/* Subtitle */}
          <h5 className="text-lg md:text-[20px] monser-600 mb-4 md:mb-6">
            Our community engagement initiatives include a range of student
            development activities in Bangalore colleges, including:
          </h5>

          {/* Bullet Points */}
          <ul className="space-y-2 sm:space-y-3 lg:space-y-3 xl:space-y-3 list-disc list-outside ml-4 sm:ml-6 lg:ml-6 xl:ml-6 mb-4 sm:mb-6 lg:mb-6 xl:mb-6">
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
          <h5 className="text-base md:text-[20px] monser-400 w-full">
            These programs not only create social impact but also offer social
            work opportunities for students in Bangalore through immersive,
            real-world involvement.
          </h5>
        </div>

        {/* Right Side - Image (1/4 width) */}
        <div className="flex flex-col md:justify-end md:items-end justify-center items-center -mb-5 md:-mb-32">
          <Image
            src="/community-service/activities.svg"
            alt="Community Activities"
            width={800}
            height={600}
            className="w-full md:w-[700px] h-full md:h-[600px]"
          />
        </div>
      </div>
    </div>
  )
}

export default Activities
