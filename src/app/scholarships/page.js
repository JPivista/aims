import React from "react"
import Scholarship from "@/components/Scholarship/index"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "AIMS Bangalore Scholarship Application Guide",
    description: "Learn how to apply for scholarships at AIMS Institutes, Bengaluru. Explore eligibility, benefits, and support for students seeking affordable higher education.",
    path: "/scholarships",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <Scholarship />
      </div>
    </>
  )
}

export default page
