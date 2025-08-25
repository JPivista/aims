import React from 'react'
import PhdHospitrolComponents from '@/components/PhdHospitrolComponents/index'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Colleges for Ph.D in Management, Commerce | Best Ph.D Bangalore",
    description: "Colleges for Ph.D in Management and Commerce - AIMS, one of the best colleges for Ph.D in Bangalore, offers rigorous research programs in both fields.",
    path: "/phd-doctoral-programs",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
          <PhdHospitrolComponents />
      </div>
    </>
  )
}

export default page