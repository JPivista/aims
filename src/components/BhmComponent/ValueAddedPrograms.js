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
      "Survival Training",
    ],
  },
  {
    id: "social-sensitisation",
    title: "Social Sensitisation",
    content: [
      "Capstone CAPSIM Simulation",
      "Certification on Advanced Excel",
      "Certification on Sustainability",
      "Certification on Insurance Management",
      "Certification on Entrepreneurship",
      "Certification on BFSI",
      "Certification on SCM",
      "Certification on Digital Marketing",
      "Global Online Certifications on Change Management, and Operations & Information Management",
    ],
  },
  {
    id: "employability",
    title: "Employability & Pre-Placement Trainings",
    content: [
      "Capstone CAPSIM Simulation",
      "Certification on Advanced Excel",
      "Certification on Sustainability",
      "Certification on Insurance Management",
      "Certification on Entrepreneurship",
      "Certification on BFSI",
      "Certification on SCM",
      "Certification on Digital Marketing",
      "Global Online Certifications on Change Management, and Operations & Information Management",
    ],
  },
  {
    id: "certifications",
    title: "Career Oriented Certifications",
    content: [
      "Capstone CAPSIM Simulation",
      "Certification on Advanced Excel",
      "Certification on Sustainability",
      "Certification on Insurance Management",
      "Certification on Entrepreneurship",
      "Certification on BFSI",
      "Certification on SCM",
      "Certification on Digital Marketing",
      "Global Online Certifications on Change Management, and Operations & Information Management",
    ],
  },
  {
    id: "workshops",
    title: "Workshops",
    content: [
      "Capstone CAPSIM Simulation",
      "Certification on Advanced Excel",
      "Certification on Sustainability",
      "Certification on Insurance Management",
      "Certification on Entrepreneurship",
      "Certification on BFSI",
      "Certification on SCM",
      "Certification on Digital Marketing",
      "Global Online Certifications on Change Management, and Operations & Information Management",
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
            src="/bhm-img/Employers-img.jpg"
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
              "linear-gradient(270deg, var(--Aims-Blue, #F5BBBC) 0%, var(--Aims-Blue, #F5BBBC) 35%, rgba(12, 33, 101, 0.00) 100%)",
          }}
        ></div>

        {/* Text Overlay */}
        <div className="absolute inset-0 flex items-center justify-end ">
          <div className="w-2/4 md:px-10">
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
