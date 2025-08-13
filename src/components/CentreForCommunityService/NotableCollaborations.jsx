import React from "react"
import Image from "next/image"

const NotableCollaborations = () => {
  return (
    <div className="bg-white py-6 sm:py-8 md:py-12 lg:py-16">
      <div className="flex flex-col items-center text-center px-4 sm:px-6 md:px-8 lg:px-12">
        {/* Title */}
        <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-[60px] text-[#002561] mb-4 sm:mb-6 playfair-300 leading-tight">
          Notable <br />
          Collaborations
        </h2>

        {/* Paragraph */}
        <p className="text-base sm:text-lg md:text-[20px] leading-relaxed monser-400 max-w-4xl lg:max-w-5xl mb-6 sm:mb-8">
          The Centre has worked with several local and international partners to
          amplify the impact of its programs:
        </p>

        {/* Image */}
        <div className="w-full max-w-5xl lg:max-w-7xl mb-6 sm:mb-8">
          <Image
            src="/community-service/collab.svg"
            alt="Notable Collaborations"
            width={800}
            height={600}
            className="w-full"
          />
        </div>

        <p className="text-base sm:text-lg md:text-[20px] leading-relaxed monser-400 max-w-5xl lg:max-w-7xl mb-6 sm:mb-8">
          Each partnership adds depth to our college-level fundraising for
          social causes in Bangalore and strengthens student volunteering and
          collaboration with NGOs in Bangalore.
        </p>
      </div>
    </div>
  )
}

export default NotableCollaborations
