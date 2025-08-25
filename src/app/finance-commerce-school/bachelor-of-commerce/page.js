import React from 'react'
import Bcom from '@/components/BachelorOfCommerce'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top Commerce Colleges in Bangalore | AIMS BCom",
        description: "AIMS Institutes offers one of the best BCom programs in Bengaluru. Industry-linked curriculum, strong placements, and career-ready training.",
        path: "/finance-commerce-school/bachelor-of-commerce",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <Bcom />
        </>
    )
}

export default page
