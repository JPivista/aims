import React from 'react'
import AboutAims from '../../components/AboutAims'
import Seo from '../../components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Best Business School in India | AIMS Bangalore",
    description: "Discover AIMS, the Best business school in Bangalore and among the top business schools in India for postgraduate studies. Shape your career with us.",
    path: "/about-aims",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <AboutAims />
    </>
  )
}

export default page