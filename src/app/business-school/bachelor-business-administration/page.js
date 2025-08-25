import React from 'react'
import BbaComponents from '../../../components/BbaComponents'
import Seo from '../../../components/shared/Seo/Seo'

const BachelorBusinessAdministration = () => {
  const seoField = {
    title: "Best Colleges for BBA in Bangalore - AIMS Institutes",
    description: "Explore one of the best colleges for BBA in Bangalore, offering BBA programs with CA and ACCA options and proven placement success in Bangalore.",
    path: "/business-school/bachelor-business-administration",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <BbaComponents />
      </div>
    </>
  )
}

export default BachelorBusinessAdministration
