import React from "react"
import SchoolOfHospitality from "@/components/SchoolOfHospitality"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Best BHM Colleges in Bangalore | AIMS Institutes",
    description: "Ranked among the best BHM colleges in Bangalore, AIMS offers a hotel management course in Bangalore with placement service at top hotel management colleges.",
    path: "/hospitality-tourism-school",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <SchoolOfHospitality />
      </div>
    </>
  )
}

export default page
