import React from "react"
import MBA from "@/components/Mba"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Top MBA Colleges in India | Best MBA in Bangalore",
    description: "Discover AIMS - one of the Top MBA colleges in India. Among the best colleges for MBA in Bangalore, offering MBA programs with placements in Bangalore.",
    path: "/business-school/master-business-administration",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <MBA />
    </>
  )
}

export default page
