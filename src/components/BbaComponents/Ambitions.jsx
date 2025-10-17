import React from "react"
import Image from "next/image"
import AmbitionsSection from "../shared/BBA-MBA-BBA-Aviation/AmbitionsSection"

const Ambitions = () => {
  return (
    <>
      <div className="relative">
        {/* Desktop Image */}
        <div className="hidden md:block">
          <Image
            src="/bba/acca-training.svg"
            alt="BBA ACCA Training"
            width={200}
            height={200}
            className="object-cover h-[450px] w-full"
            priority
          />
        </div>

        {/* Mobile Image */}
        <div className="block md:hidden">
          <Image
            src="/bba/mobile-acca-training-new.webp"
            alt="BBA ACCA Training"
            width={768}
            height={1024}
            className="object-cover h-full w-full"
            priority
          />
        </div>

        <div className="absolute inset-0 flex md:items-center  items-end  bottom-10 md:bottom-0">
          <div className="container mx-auto px-4 md:px-0 lg:px-8 text-center md:text-left ">
            <div className="w-full md:max-w-2xl space-y-2 md:space-y-2 text-white ">
              {/* Heading */}
              <h2 className="text-[40px] md:text-[50px] lg:text-[60px] playfair-300 italic">
                BBA+
              </h2>

              {/* Subheading */}
              <h5 className="text-xl md:text-[24px] lg:text-[28px] monser-600  -mt-4">
                CA/ACCA Training
              </h5>

              {/* Paragraph */}
              <p className="text-white text-base md:text-base lg:text-xl leading-relaxed mb-6 md:mb-8 max-w-md">
                Students can opt for CA or ACCA training alongside their BBA to
                strengthen their professional foundation.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Content Container */}

      {/* Original Alumni Speak Section */}
      <AmbitionsSection
        imageSrc="/bba/alumni.svg"
        imageAlt="BBA Alumni"
        heading="Ambitions in Motion: Alumni Speak"
        content="A person's early 20s shape their future, and I'm truly grateful that AIMS became part of mine. From my first visit, the vibrant campus atmosphere left me inspired. AIMS provided clarity, confidence, and a global perspective through its diverse student community and supportive faculty. More than just academics, AIMS emphasized all-round development. My journey with the Rotaract Club, especially as President, helped me grow in leadership, time management, and networking. AIMS is more than an institution, it's an emotion. I leave empowered, motivated, and ready to chase limitless success. To all future AIMERS, I wish you an enriching and unforgettable journey!"
        name="Sanjay R, BBA"
      />
    </>
  )
}

export default Ambitions
