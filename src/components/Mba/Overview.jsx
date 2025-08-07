import React from "react"
import Image from "next/image"

const Overview = () => {
  const recognitionData = [
    {
      image: "/MBA/trophy.jpg",
      border: "left",
      content: ["Affiliated to Bangalore University", "Recognised by AICTE"],
    },
    {
      image: ["/MBA/naac-a-logo.png", "/MBA/iacbe-member-logo.png"],
      isCenter: true,
      content: ["Affiliated to Bangalore University", "Recognised by AICTE"],
    },
    {
      image: "/MBA/trophy.jpg",
      border: "right",
      content: ["Affiliated to Bangalore University", "Recognised by AICTE"],
    },
  ]

  return (
    <div className="bg-[#E1F9F4]">
      <div className="container mx-auto pb-16">
        {/* MBA Program overview */}
        <div className="flex gap-4 justify-between items-center py-10">
          <h2 className="w-2/5">
            <span className="mba-program-text">MBA Program</span>
            <br />
            <span className="overview-text">Overview</span>
          </h2>
          <p className="w-3/5 monser-400">
            Since 1998, the MBA program at AIMS Institutes has been equipping
            future leaders to aim sharp and solve complex business challenges.
            We train students to build strong conceptual and analytical
            foundations, essential for hitting the mark in today's business
            world. With a curriculum that sharpens skill and mindset, our
            graduates are prepared to lead with clarity, confidence, and
            competence.
          </p>
        </div>

        {/* Recognition timeline */}
        <div className="border border-[#A774CC] rounded-xl relative my-10">
          <div className="flex justify-between text-center w-full">
            {recognitionData.map((item, index) => {
              const isCenter = item.isCenter
              const showLeftBorder = item.border === "left"
              const showRightBorder = item.border === "right"

              const absolutePos =
                item.border === "left"
                  ? "left-10"
                  : item.border === "right"
                  ? "right-10"
                  : "left-1/2 -translate-x-1/2"

              const width = isCenter ? "w-[400px]" : "w-[120px]"

              return (
                <div
                  key={index}
                  className="flex flex-col items-center justify-center w-1/3 relative"
                >
                  {/* Custom partial border left */}
                  {showLeftBorder && (
                    <div className="absolute left-0 top-[20%] h-[60%] w-px bg-[#9859C4]"></div>
                  )}

                  {/* Custom partial border right */}
                  {showRightBorder && (
                    <div className="absolute right-0 top-[20%] h-[60%] w-px bg-[#9859C4]"></div>
                  )}

                  {/* Image block */}
                  <div
                    className={`bg-white p-4 ${width} rounded-xl absolute -top-[40px] ${absolutePos} ${
                      isCenter ? "flex justify-between items-center" : ""
                    }`}
                  >
                    {Array.isArray(item.image) ? (
                      item.image.map((src, i) => (
                        <Image
                          key={i}
                          src={src}
                          alt={`logo-${i}`}
                          width={100}
                          height={100}
                          priority
                        />
                      ))
                    ) : (
                      <Image
                        src={item.image}
                        alt="trophy"
                        width={100}
                        height={100}
                        priority
                      />
                    )}
                  </div>

                  <p className="text-[#A22877] font-semibold mt-20">
                    Affiliation & Recognition
                  </p>
                  {item.content.map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              )
            })}
          </div>
        </div>

        {/* Buttons */}
        <div className="flex justify-center items-center gap-8 py-14">
          <button className="px-4 py-2 rounded-2xl border border-black">
            Important Dates
          </button>
          <button className="px-4 py-2 rounded-2xl text-white bg-[#A22877]">
            Eligibility
          </button>
          <button className="px-4 py-2 rounded-2xl border border-black">
            Selection Process
          </button>
        </div>

        {/* Eligibility */}
        <div className="bg-white h-[500px] rounded-2xl w-full">
          <div className="px-20 py-8">
            <h5 className="text-[#A22877] font-bold text-xl monser-600">
              The applicant must satisfy one of the following eligibility
              criteria for admissions into the MBA program:
            </h5>
            <ul className="list-disc pl-8 pt-4 font-monser-400">
              <li>
                A graduate degree under 10+2+3 or 10+2+4 pattern under any
                discipline, securing at least 50% marks in aggregate, from a
                recognised university
              </li>
              <li>
                An honors degree under 10+2+4 pattern from a recognised
                university under UGC Act with at least 50% marks in aggregate
                including languages
              </li>
              <li>
                Candidates who have passed Bachelor/Master degree through
                correspondence/Open University System from this university or
                from any other university recognised by law, are exempted from
                10+2 pattern. The duration of the degree program must be 3 + 2
                years
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Overview
