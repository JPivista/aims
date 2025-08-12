import React from "react"
import Image from "next/image"
import ValueAddedProgramsProps from "./ValueAddedProgramsProps"
import ProgramHighlight from "./ProgramHighlight"

const ValueAddedPrograms = ({ programKey = "mba" }) => {
  const programData = {
    mcom: {
      title: "Value Added Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer:
        "Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.",
      programs: [
        {
          id: "life-skills",
          title: "Life Skills",
          content: [
            "Firefighting at Peenya Fire Station",
            "Certification on hygiene, sanitation, general nutrition management & physical fitness",
            "Emotional Wellbeing",
            "Yoga & Meditation",
          ],
        },
        {
          id: "social-sensitisation",
          title: "Social Sensitisation",
          content: [
            "Community service projects",
            "Social responsibility awareness",
            "Environmental consciousness programs",
          ],
        },
        {
          id: "employability",
          title: "Employability & Pre-Placement Trainings",
          content: [
            "Resume building workshops",
            "Interview preparation sessions",
            "Professional communication skills",
            "Industry-specific training modules",
          ],
        },
        {
          id: "certifications",
          title: "Career Oriented Certifications",
          content: [
            "Financial modeling certifications",
            "Data analytics tools training",
            "Enterprise software proficiency",
            "Industry-recognized credentials",
          ],
        },
        {
          id: "workshops",
          title: "Workshops",
          content: [
            "Industry expert sessions",
            "Case study workshops",
            "Practical application training",
            "Skill development sessions",
          ],
        },
      ],
    },
    mba: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer:
        "Presentations by the scholars are scheduled every month in the presence of the respective guides and senior professors which help the scholars in speeding up their research works.",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          title: "Certifications (Technical & Domain-Specific)",
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
          title: "Workshops & Specialised Training",
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
          title: "Placement & Career Preparation",
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
          title: "Soft Skills & Professional Grooming",
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
          title: "Wellness & Life Skills",
          content: [
            "Firefighting at Peenya Fire Station",
            "Certification in hygiene, sanitation, general nutrition management & physical fitness",
            "Webinar on emotional wellbeing",
            "Yoga & Meditation",
            "Survival Training",
          ],
        },
      ],
    },
    bba: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer:
        "Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          id: "certifications",
          title: "Certifications (Technical & Domain-Specific)",
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
          title: "Workshops & Specialised Training",
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
          id: "placement",
          title: "Placement & Career Preparation",
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
          id: "soft-skills",
          title: "Soft Skills & Professional Grooming",
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
          id: "wellness",
          title: "Wellness & Life Skills",
          content: [
            "Firefighting at Peenya Fire Station",
            "Certification in hygiene, sanitation, general nutrition management & physical fitness",
            "Webinar on emotional wellbeing",
            "Yoga & Meditation",
            "Survival Training",
          ],
        },
      ],
    },
    "bba-aviation": {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer:
        "Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          id: "aviation-certifications",
          title: "Aviation Certifications",
          content: [
            "Drone Management Certification",
            "Aviation Safety & Security Training",
            "Airline Operations Management",
            "Aviation Financial Management",
            "Airport Management Certification",
            "Aviation Marketing & Sales",
            "Aviation Technology & Innovation",
            "Aviation Customer Service",
            "Aviation Supply Chain Management",
          ],
        },
        {
          id: "industry-workshops",
          title: "Industry Workshops",
          content: [
            "Aviation Industry Visits",
            "Airline Simulation Training",
            "Airport Operations Workshop",
            "Aviation Safety Protocols",
            "Aviation Technology Trends",
            "Aviation Business Analytics",
            "Aviation Project Management",
            "Aviation Quality Management",
            "Aviation Risk Management",
          ],
        },
        {
          id: "career-preparation",
          title: "Career Preparation",
          content: [
            "Aviation Resume Building",
            "Aviation Interview Preparation",
            "Aviation Industry Networking",
            "Aviation Career Counseling",
            "Aviation Job Placement Support",
            "Aviation Internship Programs",
            "Aviation Industry Mentorship",
            "Aviation Professional Development",
            "Aviation Leadership Training",
          ],
        },
        {
          id: "professional-skills",
          title: "Professional Skills",
          content: [
            "Aviation Communication Skills",
            "Aviation Team Management",
            "Aviation Problem Solving",
            "Aviation Decision Making",
            "Aviation Time Management",
            "Aviation Stress Management",
            "Aviation Conflict Resolution",
            "Aviation Presentation Skills",
            "Aviation Negotiation Skills",
          ],
        },
        {
          id: "wellness",
          title: "Wellness & Life Skills",
          content: [
            "Aviation Fitness Training",
            "Aviation Mental Health Support",
            "Aviation Work-Life Balance",
            "Aviation Stress Relief Programs",
            "Aviation Wellness Workshops",
            "Aviation Nutrition Guidance",
            "Aviation Physical Training",
            "Aviation Mindfulness Sessions",
            "Aviation Health & Safety",
          ],
        },
      ],
    },
  }

  const sampleProps = programData[programKey] || programData.mba

  return (
    <>
      <div>
        <ValueAddedProgramsProps
          programsData={sampleProps.programs}
          title={sampleProps.title}
          description={sampleProps.description}
          disclaimer={sampleProps.disclaimer}
        />
      </div>

      {/* Program Highlight Section */}
      <div className="py-10">
        <ProgramHighlight programKey={programKey} />
      </div>
    </>
  )
}

export default ValueAddedPrograms
