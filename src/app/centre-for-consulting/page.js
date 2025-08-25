import React from 'react'
import CentreForConsulting from '@/components/CentreForConsulting'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Management Consulting Services in Bangalore Colleges",
        description: "The Centre for Consulting at AIMS connects students with corporate projects, offering real-world experience in strategy, research, and management.",
        path: "/centre-for-consulting",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <CentreForConsulting />
        </>
    )
}

export default page
