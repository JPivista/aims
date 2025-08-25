import React from 'react'
import SchoolOfBusiness from '@/components/SchoolOfBusiness'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top B Schools in Bangalore | AIMS School of Business",
        description: "Among leading PGDM colleges Bangalore, AIMS guides you on how to choose the best MBA college in Bangalore with placement and future-focused learning.",
        path: "/business-school",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <SchoolOfBusiness />
        </>
    )
}

export default page
