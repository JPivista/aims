import React from 'react'
import Patents from '@/components/Patents'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Patents | Best Business School in India",
        description: "Among top colleges in Bangalore with global exposure, AIMS stands out as one of the best colleges in Bangalore for entrepreneurship and innovation.",
        path: "/patents",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <Patents />
        </>
    )
}

export default page
