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
      className="relative w-full lg:h-[80vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url('${data.image}')` }}
    >
      {/* Content Container */}
      <div className="relative z-10 h-full flex flex-col justify-center">
        <div className="container mx-auto py-4 px-4 sm:px-6 lg:px-8">
          <div
            className={`flex ${
              data.alignment === "right" ? "justify-end" : "justify-start"
            }`}
          >
            <div className="max-w-2xl">
              <h3
                className={`text-white text-2xl sm:text-3xl md:text-4xl lg:text-[60px] ${data.font} leading-tight lg:leading-tight mb-4 sm:mb-6`}
                dangerouslySetInnerHTML={{ __html: data.heading }}
              />
              <p
                className="text-white text-base sm:text-lg md:text-xl lg:text-2xl leading-relaxed"
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
