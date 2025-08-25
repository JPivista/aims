import React from "react"
import AdmissionProcess from "@/components/AdmissionProcess"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Admission Process for UG & PG Courses in Bangalore",
    description: "Step-by-step guide to AIMS Institutes admission process. Find eligibility, documents required for UG & PG programs, and how to apply in Bengaluru.",
    path: "/admission-process",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <AdmissionProcess />
    </>
  )
}

export default page
