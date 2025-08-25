import React from 'react'
import CentreForResearchComponents from '@/components/CentreForResearchComponents'
import Seo from '@/components/shared/Seo/Seo'

const CentreForResearch = () => {
  const seoField = {
    title: "Best Colleges in Bangalore for Research Projects",
    description: "Explore AIMS Centre for Research in Bengaluru. A hub for academic innovation, student projects, and joint research with international institutions.",
    path: "/centre-for-research",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <CentreForResearchComponents />
      </div>
    </>
  )
}

export default CentreForResearch 