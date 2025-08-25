import React from "react"
import CentreForCommunityService from "@/components/CentreForCommunityService"
import Seo from "@/components/shared/Seo/Seo"

export default function CentreForCommunityServicePage() {
  const seoField = {
    title: "College Community Service Programs in Bangalore",
    description: "AIMS Institutes fosters community engagement with impactful service programs in Bengaluru, building social responsibility among students.",
    path: "/centre-for-community-service",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <CentreForCommunityService />
    </>
  )
}
