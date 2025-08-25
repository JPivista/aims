import React from 'react'
import SchoolOfInformationTechnology from '@/components/SchoolOfInformationTechnology'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top MCA & BCA Colleges in Bangalore | AIMS Institutes",
        description: "Among leading MCA colleges in Bangalore, AIMS also ranks among top colleges for BCA in Bangalore, offering benefits of doing an MCA from a private college with good infrastructure.",
        path: "/information-technology-school",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <SchoolOfInformationTechnology />
        </>
    )
}

export default page
