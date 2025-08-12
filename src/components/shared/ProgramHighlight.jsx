import React from "react"
import Image from "next/image"

const ProgramHighlight = ({ programKey = "mba" }) => {
  const programData = {
    mba: {
      image: "/MBA/student.jpg",
      heading: "Companies <br/> Our Students Have <br/> Been Placed In",
      description:
        "Our MBA graduates have found opportunities with a <br/> wide range of dependable recruiters from across <br/> industries, including:",
      gradientDirection: "left-to-right",
      font: "playfair-300",
    },
    bba: {
      image: "/bba/one-degree.jpg",
      heading: "One Degree. <br/> Multiple Targets.",
      description:
        "Our graduates have been recruited by top <br/> companies across sectors.",
      gradientDirection: "right-to-left",
      font: "playfair-300",
    },
    "bba-aviation": {
      image: "/bba-aviation/student.jpg",
      heading: "Where Our <br/> Graduates Fly",
      description:
        "From check-in counters to corporate strategy <br/> roles, AIMers have landed across aviation <br/> giants and logistics leaders:",
      gradientDirection: "right-to-left",
      font: "playfair-300",
    },
  }

  const data = programData[programKey] || programData.mba

  const getGradientStyle = (direction) => {
    if (direction === "left-to-right") {
      return {
        background:
          "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
      }
    } else {
      return {
        background:
          "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
      }
    }
  }

  return (
    <>
      {data.gradientDirection === "left-to-right" ? (
        // Left to Right Layout
        <div
          className="relative w-full lg:h-[80vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${data.image}')` }}
        >
          {/* Gradient Overlay - from left */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(90deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)",
            }}
          ></div>

          {/* Content Container - aligned left */}
          <div className="relative z-10 h-full flex flex-col items-start justify-center">
            <div className="container mx-auto py-4 px-6 lg:px-8">
              <div className="flex lg:flex-row md:gap-10 gap-4">
                <div className="">
                  <h3
                    className={`text-white text-2xl lg:text-[60px] ${data.font} lg:leading-16`}
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                  <p
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        // Right to Left Layout
        <div
          className="relative w-full lg:h-[80vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url('${data.image}')` }}
        >
          {/* Gradient Overlay - from right */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(270deg, rgba(12, 33, 101,1) 0%, rgba(12, 33, 101, 0.0) 100%)",
            }}
          ></div>

          {/* Content Container - aligned right */}
          <div className="relative z-10 h-full flex flex-col items-end justify-center">
            <div className="container mx-auto py-4 px-6 lg:px-8">
              <div className="flex lg:flex-row-reverse md:gap-10 gap-4">
                <div className="text-right">
                  <h3
                    className={`text-white text-2xl lg:text-[60px] ${data.font} lg:leading-16`}
                    dangerouslySetInnerHTML={{ __html: data.heading }}
                  />
                  <p
                    className="text-white"
                    dangerouslySetInnerHTML={{ __html: data.description }}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default ProgramHighlight
