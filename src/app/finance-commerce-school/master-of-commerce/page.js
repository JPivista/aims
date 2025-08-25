import React from 'react'
import MasterOfCommerce from '@/components/MasterOfCommerce'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "MCom Colleges in Bangalore | AIMS Institutes",
        description: "Study MCom at AIMS Institutes, Bengaluru. A leading commerce program with research, placements, and advanced learning opportunities.",
        path: "/finance-commerce-school/master-of-commerce",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <MasterOfCommerce />
        </>
    )
}

export default page
