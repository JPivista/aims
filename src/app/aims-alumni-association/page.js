import React from 'react'
import AlumniAssociation from '@/components/AlumniAssociation'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "AIMS Institutes Alumni Network Bengaluru",
        description: "Join the AIMS Institutes alumni community. A strong network of graduates creating impact across industries, with mentorship and career support.",
        path: "/aims-alumni-association",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <AlumniAssociation />
        </>
    )
}

export default page
