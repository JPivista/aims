import React from "react"

const SpeakUp = () => {
  return (
    <div className="py-6 md:py-10 bg-white">
      <div className="container mx-auto">
        <div className="max-w-5xl mx-auto text-center px-4 md:px-0">
          {/* Heading */}
          <h2 className="text-3xl  md:text-5xl lg:text-6xl text-[#0C2165] mb-6 sm:mb-8 md:mb-10 playfair-300 leading-tight">
            When Something Feels Off, <br /> Speak Up. We’re Here to Set It
            Right.
          </h2>

          {/* Paragraph */}
          <p className="text-base md:text-[20px]  monser-400 md:px-20 px-4">
            We at AIMS Institutes have provided this platform to look into the
            grievances of our stakeholders and resolve them to the best of our
            abilities.
          </p>
        </div>
      </div>
    </div>
  )
}

export default SpeakUp
