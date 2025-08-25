import React from "react"
import CenterForStudentDev from "@/components/CenterForStudentDev"
import Seo from "@/components/shared/Seo/Seo"

const CenterForStudentDevPage = () => {
  const seoField = {
    title: "Student Mentorship Programs in Bangalore Colleges",
    description: "Discover AIMS Centre for Student Development. Personalized mentorship, leadership training, and career guidance to help students thrive academically.",
    path: "/centre-for-student-development",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <CenterForStudentDev />
    </>
  )
}

export default CenterForStudentDevPage
