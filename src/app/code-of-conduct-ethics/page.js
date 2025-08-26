import React from 'react'
import CodeOfConduct from '@/components/CodeOfConduct'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Code of Conduct | Top MBA Colleges in Bangalore",
        description: "As one of the highly ranked management colleges in India, AIMS sets standards for faculty & staff conduct, reinforcing trust as among the best colleges for Masters in Business Studies.",
        path: "/code-of-conduct-students",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <CodeOfConduct />
        </>
    )
}

export default page
