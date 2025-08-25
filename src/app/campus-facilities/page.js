import React from 'react'
import CampusFacilities from '@/components/CampusFacilities'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Consulting Center Business School & Campus Facilities",
    description: "Explore campus facilities at one of the leading institutes with entrepreneurship development centres in Karnataka and discover the benefits of studying from a private college with good infrastructure.",
    path: "/campus-facilities",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <CampusFacilities/>
      </div>
    </>
  )
}

export default page