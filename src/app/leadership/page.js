import React from 'react'
import FoundersMessage from '../../components/FoundersMessage'
import Seo from '../../components/shared/Seo/Seo'

const page = () => {
  const seoField = {
    title: "Leadership at AIMS Institutes | Vision of AIMS Institutes leadership",
    description: "Discover the vision of AIMS Institutes leadership. Meet the Principal of AIMS, Founder of AIMS, Executive Director, and CEO who shape the future with strong leadership.",
    path: "/leadership",
    metaImage: "/images/aims-logo.png",
    pageType: "Organization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <FoundersMessage />
      </div>
    </>
  )
}

export default page