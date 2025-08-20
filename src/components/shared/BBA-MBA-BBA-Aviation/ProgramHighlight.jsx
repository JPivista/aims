import React from "react"
import Image from "next/image"

const ProgramHighlight = ({ programKey = "mba" }) => {
  const programData = {
    mba: {
      image: "/MBA/student.png",
      heading: "Companies <br/> Our Students Have <br/> Been Placed In",
      description:
        "Our MBA graduates have found opportunities with a <br/> wide range of dependable recruiters from across <br/> industries, including:",
      alignment: "left",
      font: "playfair-300",
    },
    bba: {
      image: "/bba/one-degree.png",
      heading: "One Degree. <br/> Multiple Targets.",
      description:
        "Our graduates have been recruited by top <br/> companies across sectors.",
      alignment: "right",
      font: "playfair-300",
    },
    "bba-aviation": {
      image: "/bba-aviation/student.png",
      heading: "Where Our <br/> Graduates Fly",
      description:
        "From check-in counters to corporate strategy <br/> roles, AIMers have landed across aviation <br/> giants and logistics leaders:",
      alignment: "right",
      font: "playfair-300",
    },
  }

  const data = programData[programKey] || programData.mba

  return (
    <div
      className="relative w-full h-[60vh]  md:h-[75vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${data.image}')` }}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto py-6 sm:py-8 md:py-10 lg:py-12 px-4 sm:px-6 md:px-8 lg:px-12">
          <div
            className={`flex ${
              data.alignment === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-xs sm:max-w-sm md:max-w-lg lg:max-w-2xl">
              <h3
                className={`text-white text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-[60px] ${data.font} leading-tight mb-3 sm:mb-4 md:mb-6`}
                dangerouslySetInnerHTML={{ __html: data.heading }}
              />
              <p
                className="text-white text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl leading-relaxed"
                dangerouslySetInnerHTML={{ __html: data.description }}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProgramHighlight
