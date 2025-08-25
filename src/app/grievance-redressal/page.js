import React from "react"
import GrievanceRedressal from "@/components/GrievanceRedressal"
import Seo from "@/components/shared/Seo/Seo"

const GrievanceRedressalPage = () => {
  const seoField = {
    title: "Top Business Colleges in Bangalore | Student Empowerment",
    description: "Explore how a college with student well-being initiatives in Bangalore empowers learners. AIMS ensures student empowerment through clear grievance redressal.",
    path: "/grievance-redressal",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div className="w-full">
        <GrievanceRedressal />
      </div>
    </>
  )
}

export default GrievanceRedressalPage

