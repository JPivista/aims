import React from "react"
import AdmissionsFAQs from "@/components/AdmissionsFAQs"
import Seo from "@/components/shared/Seo/Seo"

const FAQsPage = () => {
  const seoField = {
    title: "AIMS Institutes FAQs for Admissions & Courses",
    description: "Get answers to frequently asked questions about AIMS Institutes. Learn about admissions, application fees, scholarships, placements, and student life",
    path: "/faqs",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <AdmissionsFAQs />
    </>
  )
}

export default FAQsPage
