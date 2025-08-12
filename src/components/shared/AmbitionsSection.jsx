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
    <div className={`${bgColor} py-16 md:py-20 relative`}>
      {/* Background SVG */}
      <div className="absolute top-[13%] left-0 md:block hidden">
        <Image
          src="/school-circle.svg"
          alt="Ambitions Section Background"
          width={300}
          height={100}
          className="rotate-180"
        />
      </div>

      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row gap-20 items-center">
          {/* Left Side - Image */}
          <div className="md:w-1/2 flex justify-center z-10">
            <Image
              src={imageSrc}
              alt={imageAlt}
              width={600}
              height={600}
              className="w-full max-w-[600px] h-auto"
            />
          </div>

          {/* Right Side - Content */}
          <div className="md:w-2/3 flex flex-col space-y-6">
            <h2 className="text-3xl md:text-[60px] font-bold text-white playfair-300">
              {heading}
            </h2>
            <p className="text-lg md:text-xl text-white leading-relaxed monser-400">
              "{content}"
            </p>

            {/* Name */}
            <div>
              <h4
                className="!text-white monser-600 text-[28px]"
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
