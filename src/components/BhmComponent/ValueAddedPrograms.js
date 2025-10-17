import React from "react"
import ValueAddedProgramsCommon from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import ValueAddedPrograms from "../shared/ValueAddedProgramsProps"
import Image from "next/image"

// Sample data structure for value added programs
const sampleProgramsData = [
  {
    id: "life-skills",
    title: "Life Skills",
    content: [
      "Firefighting at Peenya Fire Station",
      "Certification in hygiene, sanitation, general nutrition management & physical fitness",
      "Webinar on emotional wellbeing",
      "Yoga & Meditation",
    ],
  },
  {
    id: "social-sensitisation",
    title: "Social Sensitisation",
    content: [
      "Rural camp in association with AIMS Centre for Community Service",
      "NSS in association with AIMS Centre for Community Service",
    ],
  },
  {
    id: "employability",
    title: "Employability & Pre-Placement Trainings",
    content: [
      "Power dressing and grooming",
      "Communication Skills",
      "Presentation Skills and CV Writing",
      "Interview Skills",
      "Aptitude & Group Discussion",
      "Soft Skills Training (Including Language Lab)",
      "Personality Development",
      "Presentation on Industrial training",
      "Company Specific Placement training",
      "Presentation on Dissertation Projects",
      "Career Guidance Sessions",
    ],
  },
  {
    id: "Career Oriented Certifications",
    title: "Career Oriented Career Oriented Certifications",
    content: [
      "Certification in Dining Etiquettes",
      "Certification in Tourism and Climate Change",
      "Certification in Entrepreneurship",
      "Certification in Coffee Culture",
      "Certification in Guest Management",
      "Certification in Revenue Management",
    ],
  },
  {
    id: "workshops",
    title: "Workshops",
    content: [
      "Workshop on Mixology",
      "Workshop on Breakfast Breads",
      "Workshop on Food Painting Skills",
      "Workshop on Research Writing",
      "Workshop on Cyber security",
      "Workshop on Interior Design and Decoration",
      "Workshop on Spanish Cuisine",
      "Workshop on Floristry",
      "Workshop on Sustainability",
      "Workshop on Culinary Flavours",
      "Workshop on Wine Tasting",
    ],
  },
]

// Sample props for different use cases
const sampleProps = {
  title: "Value Added<br/>Programs",
  description:
    "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
  disclaimer:
    "Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.",
}

const BbaValueAddedPrograms = () => {
  return (
    <>
      <ValueAddedProgramsCommon programKey="bhm" />
      {/* Student Image with Overlay */}
      <div className="relative mx-auto">
        {/* Desktop View */}
        <div className="hidden lg:block relative">
          <div className="w-full h-[700px]">
            <Image
              src="/bhm-img/BHM-new-Desktop-image.webp"
              alt="AIMS Students"
              width={1400}
              height={1400}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Gradient Overlay */}
          <div
            className="absolute inset-0 w-full h-full"
            style={{
              background:
                "linear-gradient(270deg, var(--Aims-Blue, #F5BBBC) 0%, var(--Aims-Blue, #F5BBBC) 25%, rgba(12, 33, 101, 0.00) 25%)",
            }}
          ></div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-end">
            <div className="w-2/5 md:px-10">
              <h3 className="text-[#010066] text-xl md:text-lg playfair-300 mb-3 md:mb-6 leading-tight">
                Employers Who
                <br /> Hire Our BHM
                <br /> Graduates
              </h3>
              <p className="text-[#010066] text-xs sm:text-sm md:text-base monser-400 leading-relaxed">
                AIMS BHM graduates have been placed at:
              </p>
            </div>
          </div>
        </div>

        {/* Mobile & Tablet View */}
        <div className="block lg:hidden relative">
          <div className="w-full h-[700px] md:h-[100vh]">
            <Image
              src="/bhm-img/BHM-new-Mobile-image.webp"
              alt="AIMS Students"
              width={2400}
              height={300}
              className="w-full h-full object-cover"
              priority
            />
          </div>

          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center justify-center text-center px-4 top-[400px] md:top-[50vh]">
            <div className="w-full">
              <h3 className="text-[#010066] text-lg sm:text-2xl playfair-300 mb-3 leading-tight">
                Employers Who Hire Our BHM Graduates
              </h3>
              <p className="text-[#010066] text-sm monser-400 leading-relaxed">
                AIMS BHM graduates have been placed at:
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default BbaValueAddedPrograms
