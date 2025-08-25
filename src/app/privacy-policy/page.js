import React from "react"
import PrivacyPolicy from "@/components/PrivacyPolicy"
import Seo from "@/components/shared/Seo/Seo"

const PrivacyPolicyPage = () => {
  const seoField = {
    title: "Privacy Policy | Top B School in India – AIMS",
    description: "Read AIMS Institutes' privacy policy. As a Top B school in India and among A grade colleges in Bangalore, we ensure transparency and protect your information.",
    path: "/privacy-policy",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <div className="w-full">
        <PrivacyPolicy />
      </div>
    </>
  )
}

export default PrivacyPolicyPage

