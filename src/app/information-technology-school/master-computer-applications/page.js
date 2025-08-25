import React from 'react'
import McaComponents from '@/components/Mca'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top Colleges for MCA in Bangalore | AIMS Institutes",
        description: "Pursue MCA at AIMS Institutes, Bengaluru. A career-focused program with advanced IT training, global exposure, and placement support.",
        path: "/information-technology-school/master-computer-applications",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <McaComponents />
        </>
    )
}

export default page
