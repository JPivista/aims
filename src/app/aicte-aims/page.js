import React from "react"
import AicteAims from "@/components/AicteAims"
import Seo from "@/components/shared/Seo/Seo"

const AicteAimsPage = () => {
  const seoField = {
    title: "Reputed Business Institutions in Bangalore | AIMS",
    description: "AIMS ranks among the top 10 B schools in Bangalore and is one of the few private colleges with DELNET and NLIST access, shaping career-ready professionals.",
    path: "/aicte-aims",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <AicteAims />
    </>
  )
}

export default AicteAimsPage
