import React from "react"
import NaacAccreditation from "@/components/NaacAccreditation"
import Seo from "@/components/shared/Seo/Seo"

const NaacAccreditationPage = () => {
  const seoField = {
    title: "A Grade NAAC Accredited B School | AIMS Institute",
    description: "An A grade NAAC accredited B school, AIMS ranks among the top 10 business schools in Bangalore. Find out what is the ranking of AIMS Institute?",
    path: "/naac-accreditation",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <NaacAccreditation />
    </>
  )
}

export default NaacAccreditationPage
