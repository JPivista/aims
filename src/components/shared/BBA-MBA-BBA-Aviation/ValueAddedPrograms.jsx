import React from "react"
import Image from "next/image"
import ValueAddedProgramsProps from "../ValueAddedProgramsProps"
import MBAProgramHighlight from "../../Mba/ProgramHighlight"
import BBAProgramHighlight from "../../BbaComponents/ProgramHighlight"
import BBAAviationProgramHighlight from "../../BbaAviationComponents/ProgramHighlight"

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
            "Workshop on AI/ML for enhancing business",
            "Aptitude Training",
            "Case Study Analysis",
            "Cyber Security",
            "Life Security",
          ],
        },
        {
          title: "Placement & Career Preparation",
          content: [
            "Pre-Placement Talks",
            "Domain & Company Specific Training",
            "Mock Interviews",
            "Group Discussions",
            "Career Guidance Workshops",
            "Employability Skills",
          ],
        },
        {
          title: "Soft Skills & Professional Grooming",
          content: [
            "Corporate Grooming",
            "Dining Etiquette",
            "WFH Skills & Business Etiquettes",
            "Business & Language Lab Training",
          ],
        },
        {
          title: "Wellness & Life Skills",
          content: ["Nutrition & Wellness", "Life skills", "Yoga & Meditation"],
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
          id: "social-sensitization",
          title: "Social Sensitization",
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
            "Communication Skills training",
            "Etiquettes",
            "Business Etiquettes",
            "Dining Etiquettes",
            "Presentation Skills and CV Writing",
            "Interview Skills",
            "Aptitude & Group Discussion Training",
            "Presentation on Dissertation Projects",
            "Company Specific Placement training",
            "Soft Skills Training (Including Language Lab)",
            "Career Guidance",
          ],
        },
        {
          id: "career-certifications",
          title: "Career Oriented Certifications",
          content: [
            "Certification in Entrepreneurship",
            "Global Certification in Global Corporation and Globalisation",
            "Certification in Advance Excel and Business Analytics",
            "Certification in Tableau",
            "Certification in Leadership",
            "Certification in Digital Marketing",
            "Global Certification in SCM",
          ],
        },
        {
          id: "workshops",
          title: "Workshops",
          content: [
            "Workshop on Case Study Analysis",
            "Workshop on Research Writing",
            "Workshop on Sustainability",
            "Workshop on Cyber Security",
            "Workshop on Technological Trends in Business - AI & ML / Cloud Computing / Robotics for Enhancing Business / Blockchain Technology",
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
          id: "social-sensitization",
          title: "Social Sensitization",
          content: [
            "Rural camp in association with AIMS Centre for Community Service",
            "NSS in association with AIMS Centre for Community Service",
          ],
        },
        {
          id: "employability-training",
          title: "Employability & Pre-Placement Trainings",
          content: [
            "Power dressing and grooming",
            "Communication Skills training",
            "Etiquettes",
            "Business Etiquettes",
            "Dining Etiquettes",
            "Presentation Skills and CV Writing",
            "Interview Skills",
            "Aptitude & Group Discussion Training",
            "Presentation on Dissertation Projects",
            "Company Specific Placement training",
            "Soft Skills Training (Including Language Lab)",
            "Career Guidance",
          ],
        },
        {
          id: "career-certifications",
          title: "Career Oriented Certifications",
          content: [
            "Certification in Entrepreneurship",
            "Global Certification in Global Corporation and Globalisation",
            "Certification in Advance Excel and Business Analytics",
            "Certification in Tableau",
            "Certification in Leadership",
            "Global Certification in SCM",
            "Certification in Logistics in Air Cargo Management",
            "Certification in Aviation Safety Management",
          ],
        },
        {
          id: "workshops",
          title: "Workshops",
          content: [
            "Workshop on Case Study Analysis",
            "Workshop on Research Writing",
            "Workshop on Sustainability",
            "Workshop on Cyber Security",
            "Workshop on Technological Trends in Business - AI & ML / Cloud Computing / Robotics for Enhancing Business / Blockchain Technology",
            "Workshop on Air Ticketing",
            "Workshop on Hospitality & Aviation Industry",
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
      <div>
        {programKey === "mba" && <MBAProgramHighlight />}
        {programKey === "bba" && <BBAProgramHighlight />}
        {programKey === "bba-aviation" && <BBAAviationProgramHighlight />}
      </div>
    </>
  )
}

export default ValueAddedPrograms
