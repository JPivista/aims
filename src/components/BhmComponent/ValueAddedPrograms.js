import React from "react"
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
      <ValueAddedPrograms
        programsData={sampleProgramsData}
        title={sampleProps.title}
        description={sampleProps.description}
        disclaimer={sampleProps.disclaimer}
      />
      {/* Student Image with Overlay */}
      <div className="relative mx-auto">
        <div className="w-full h-[700px]">
          <Image
            src="/bhm-img/Employers-img_converted.webp"
            alt="AIMS Students"
            width={800}
            height={400}
            className="w-full h-full object-cover"
            priority
          />
        </div>

        {/* Gradient Overlay */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            background:
              "linear-gradient(270deg, var(--Aims-Blue, #F5BBBC) 0%, var(--Aims-Blue, #F5BBBC) 35%, rgba(12, 33, 101, 0.00) 75%)",
          }}
        ></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-end ">
          <div className="w-2/5 md:px-10">
            <h2 className="text-[#010066] text-xl md:text-[72px] playfair-300 mb-3 md:mb-6 leading-tight">
              Employers Who
              <br /> Hire Our BHM
              <br /> Graduates
            </h2>
            <p className="text-[#010066] text-xs sm:text-sm md:text-base monser-400 leading-relaxed">
              AIMS BHM graduates have been placed at:
            </p>
          </div>
        </div>
      </div>
    </>
  )
}

export default BbaValueAddedPrograms
