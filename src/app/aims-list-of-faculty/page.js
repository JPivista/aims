import React from "react"
import FacultyMemberDetails from "@/components/FacultyMemberDetails"
import Seo from "@/components/shared/Seo/Seo"

const FacultyMemberDetailsPage = () => {
  const seoField = {
    title: "Faculty at AIMS | Top B School in India",
    description: "Meet experienced faculty at the Top B School. Among schools with corporate interface and mentorship programs, AIMS offers practical business training in Bangalore.",
    path: "/aims-list-of-faculty",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <FacultyMemberDetails />
    </>
  )
}

export default FacultyMemberDetailsPage
