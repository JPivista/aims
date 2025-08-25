import React from 'react'
import BbaAviationComponents from '@/components/BbaAviationComponents'
import Seo from '@/components/shared/Seo/Seo'

const BbaAviationPage = () => {
  const seoField = {
    title: "Best BBA Aviation Colleges in Bangalore - AIMS",
    description: "Best colleges for BBA aviation in Bangalore. India's best college for BBA in Aviation delivers industry-ready graduates with placement excellence.",
    path: "/business-school/bachelor-business-administration-aviation-management",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <BbaAviationComponents />
      </div>
    </>
  )
}

export default BbaAviationPage
