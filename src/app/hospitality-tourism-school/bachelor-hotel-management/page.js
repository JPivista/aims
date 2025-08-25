import React from 'react'
import BhmComponent from '@/components/BhmComponent'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Hotel Management Colleges in Bangalore | AIMS",
    description: "Join AIMS Institutes' Bachelor of Hotel Management in Bengaluru. Build expertise in hospitality with international exposure and career pathways.",
    path: "/hospitality-tourism-school/bachelor-hotel-management",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div><BhmComponent /></div>
    </>
  )
}

export default page