import React from 'react'
import Educationloan from '@/components/Educationloan/index'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Education Loan Assistance in Bangalore Colleges",
    description: "AIMS Institutes helps students with education loan assistance. Find student-friendly options, low interest rates, and guidance for financing your studies.",
    path: "/education-loans",
    metaImage: "/images/aims-logo.png",
    pageType: "WebSite",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
          <Educationloan />
      </div>
    </>
  )
}

export default page