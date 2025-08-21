import React from "react"

const NaacAccreditationSection = () => {
  return (
    <div className="bg-[#E0F8F3] py-4 md:py-8">
      <div className="mx-4 md:mx-20">
        <div className="mb-8">
          <h3 className="text-2xl md:text-[65px] text-[#0C2165] playfair-300 mb-6">
            NAAC Accreditation
          </h3>
        </div>

        <div className="space-y-4">
          <div className="flex items-start">
            <span className="mr-3 mt-1">•</span>
            <div className="flex-1">
              <span className=" monser-400 text-base md:text-[20px]">
                NAAC Certificate -{" "}
                <a
                  href="/naac/AIMS-NAAC-Certificate-2022.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer"
                >
                  View
                </a>
              </span>
            </div>
          </div>

          <div className="flex items-start">
            <span className="mr-3 mt-1">•</span>
            <div className="flex-1">
              <span className="monser-400 text-base md:text-[20px]">
                AIMS NAAC Visit 16 & 17 March 2022 -{" "}
                <a
                  href="https://www.youtube.com/embed/17UP0CqEtPE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline cursor-pointer"
                >
                  Play Video
                </a>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NaacAccreditationSection
