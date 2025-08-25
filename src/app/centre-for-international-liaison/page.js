import React from 'react'
import CentreForInternationalLiaison from '@/components/CentreForInternationalLiaison'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Global Immersion Programs in Bangalore Colleges",
        description: "Experience international student and faculty exchange at AIMS Institutes. Global immersion, joint research, and cross-border academic opportunities.",
        path: "/centre-for-international-liaison",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <CentreForInternationalLiaison />
        </>
    )
}

export default page
