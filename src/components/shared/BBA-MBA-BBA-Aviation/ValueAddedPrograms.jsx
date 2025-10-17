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
      disclaimer: "",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          id: "certifications-2026-2027",
          title: "2026-2027",
          content: [
            "Personal Finance Literacy",
            "Gig Economy",
            "Public Speaking, Communication & Critical Skills",
            "Interview Preparation",
            "Advanced Readiness & Industry Integration",
            "MS Office & Analytics",
          ],
        },
        {
          id: "certifications-2025-2026",
          title: "2025-2026",
          content: [
            "Personal Finance Literacy",
            "Gig Economy",
            "Public Speaking, Communication & Critical Skills",
            "Interview Preparation",
            "Advanced Readiness & Industry Integration",
            "MS Office & Analytics",
          ],
        },
      ],
    },
    bba: {
      title: "Value Added<br/>Programs",
      description:
        "In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.",
      disclaimer: "",
      image: "/bba/one-degree.jpg",
      programs: [
        {
          id: "career-mapping",
          title: "2025-28",
          content: [
            {
              title: "Psychometric Assessment & Career Mapping",
              subItems: [
                "Career Mapping Discover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardized tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
              ],
            },
            {
              title: "Financial Literacy",
              subItems: [
                "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
              ],
            },
            {
              title: "Gig Economy",
              subItems: [
                "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today's digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
              ],
            },
            {
              title: "Public Speaking, Communication & Critical Skills",
              subItems: [
                "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
              ],
            },
            {
              title: "Interview Preparation",
              subItems: [
                "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
              ],
            },
            {
              title: "Advanced Readiness & Industry Integration",
              subItems: [
                "This program prepares students for professional life by familiarizing them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
              ],
            },
            {
              title: "MS Office & Analytics",
              subItems: [
                "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
              ],
            },
            {
              title: "Entrepreneurship Program",
              subItems: [
                "Preparing tomorrow's leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands on experience in building ideas from scratch.",
              ],
            },
          ],
        },
        {
          id: "career-mapping-2024-27",
          title: "2024-27",
          content: [
            {
              title: "Psychometric Assessment & Career Mapping",
              subItems: [
                "Career Mapping Discover your strengths, interests, and career pathways through structured psychometric assessments and personalized guidance. Implemented through standardized tests and counselling sessions by experts. This program helps students make informed academic and career decisions.",
              ],
            },
            {
              title: "Financial Literacy",
              subItems: [
                "Build real-world money skills—saving, budgeting, investing, and smart financial decisions—for a secure future. Delivered through interactive workshops, case studies, and simulations and insights by industry experts, it empowers students to manage personal finance confidently.",
              ],
            },
            {
              title: "Gig Economy",
              subItems: [
                "Understand freelancing, flexible work, and the gig market to explore diverse career opportunities in today's digital world. Through hands-on projects and industry case examples, students will learn how to build profiles, manage clients, and thrive in independent careers delivered by professionals.",
              ],
            },
            {
              title: "Public Speaking, Communication & Critical Skills",
              subItems: [
                "This program focuses on developing clear communication, confidence in public speaking, and the ability to think critically. Students engage in role plays, group discussions, and short presentations to practice and improve these skills in a supportive environment.",
              ],
            },
            {
              title: "Interview Preparation",
              subItems: [
                "Ace your placements with AI-powered tools and expert guidance on interviews, body language, and impactful responses. Students will practice through mock interviews, receive instant feedback, and build confidence to face real recruiters.",
              ],
            },
            {
              title: "Advanced Readiness & Industry Integration",
              subItems: [
                "This program prepares students for professional life by familiarizing them with workplace practices, professional etiquette, and industry expectations. Discussions with experts and real-world case studies give students a practical perspective on how to succeed after graduation.",
              ],
            },
            {
              title: "MS Office & Analytics",
              subItems: [
                "Learn Excel, Word, PowerPoint, and basic analytics to boost productivity and decision-making. Delivered through hands-on practice sessions, exercises, and mini-projects by industry professionals, this program equips students with essential workplace digital skills.",
              ],
            },
            {
              title: "Entrepreneurship Program",
              subItems: [
                "Preparing tomorrow's leaders for intrapreneurship (working in a corporate) and entrepreneurship (working for yourself). Turn ideas into ventures with practical insights on innovation, business models, and startup essentials and learn from founders, startup experts and industry professionals. Students work on idea generation, business plans, and pitching exercises and nurture their entrepreneurial mindset from a foundational level of understanding basics all the way to getting an advanced and hands on experience in building ideas from scratch.",
              ],
            },
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
