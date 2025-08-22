import React from "react"
import Image from "next/image"

const AmbitionsSection = ({
  imageSrc = "/bba/alumni.svg",
  imageAlt = "Alumni",
  heading = "Ambitions in Motion: Alumni Speak",
  content = "A person's early 20s shape their future, and I'm truly grateful that AIMS became part of mine. From my first visit, the vibrant campus atmosphere left me inspired. AIMS provided clarity, confidence, and a global perspective through its diverse student community and supportive faculty. More than just academics, AIMS emphasized all-round development. My journey with the Rotaract Club, especially as President, helped me grow in leadership, time management, and networking. AIMS is more than an institution, it's an emotion. I leave empowered, motivated, and ready to chase limitless success. To all future AIMERS, I wish you an enriching and unforgettable journey!",
  name = "Sanjay R, BBA",
  bgColor = "bg-[#531675]",
}) => {
  return (
    <div
      className={`${bgColor} py-6 sm:py-8 md:py-12 lg:py-16 xl:py-20 relative `}
    >
      {/* Background SVG */}
      <div className="absolute top-[13%] left-0 hidden md:block">
        <Image
          src="/school-circle.svg"
          alt="Ambitions Section Background"
          width={300}
          height={100}
          className="rotate-180"
        />
      </div>

      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-6 sm:gap-8 md:gap-10 lg:gap-12 items-center justify-start">
          {/* Left Side - Image */}
          <div className="w-full lg:w-1/2 flex justify-center z-10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={600}
              className="w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[400px] md:h-[400px] lg:w-[460px] lg:h-[460px] object-cover"
            />
          </div>

          {/* Right Side - Content */}
          <div className="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-6  text-white">
            <h2 className="text-3xl  md:text-[60px]  playfair-300 text-center md:text-left">
              {heading}
            </h2>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl monser-400 text-center md:text-left  leading-relaxed">
              "{content}"
            </p>

            {/* Name */}
            <div className="text-center lg:text-left">
              <h4
                className="!text-white monser-600 text-base sm:text-lg md:text-xl lg:text-2xl xl:text-[28px] leading-tight"
                style={{ color: "white" }}
              >
                - {name}
              </h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AmbitionsSection
