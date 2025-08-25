import React from "react"
import TermsAndConditions from "@/components/TermsAndConditions"
import Seo from "@/components/shared/Seo/Seo"

const TermsConditionsPage = () => {
  const seoField = {
    title: "Terms & Conditions | Top B School in India",
    description: "Review the Terms & Conditions of AIMS, among the Top B school in India and listed in A grade colleges in Bangalore, ensuring transparency and trust.",
    path: "/terms-conditions",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <div className="w-full">
        <TermsAndConditions />
      </div>
    </>
  )
}

export default TermsConditionsPage
