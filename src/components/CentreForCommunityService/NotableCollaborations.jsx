import React from "react"
import Image from "next/image"

const NotableCollaborations = () => {
  return (
    <div className="bg-white py-6 md:py-10 container mx-auto px-4 md:px-0">
      <div className="flex flex-col items-center text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-6xl text-[#002561] mb-4 md:mb-6 playfair-300 leading-tight">
          Notable <br />
          Collaborations
        </h2>

        {/* Paragraph */}
        <p className="text-sm md:text-base leading-relaxed monser-400 max-w-4xl lg:max-w-5xl mb-6 sm:mb-8">
          The Centre has worked with several local and international partners to
          amplify the impact of its programs:
        </p>

        {/* Image */}
        <div className="w-full">
          {/* Mobile Image */}
          <Image
            src="/community-service/mobile-collab.svg"
            alt="Notable Collaborations Mobile"
            width={800}
            height={600}
            className="w-full h-full object-cover md:hidden"
          />

          {/* Desktop Image */}
          <Image
            src="/community-service/collab.svg"
            alt="Notable Collaborations Desktop"
            width={800}
            height={600}
            className="w-full h-full object-cover hidden md:block"
          />
        </div>

        <p className="text-lg md:text-base leading-relaxed monser-400 max-w-5xl md:max-w-7xl mb-6 ">
          Each partnership adds depth to our college-level fundraising for
          social causes in Bangalore and strengthens student volunteering and
          collaboration with NGOs in Bangalore.
        </p>
      </div>
    </div>
  )
}

export default NotableCollaborations
