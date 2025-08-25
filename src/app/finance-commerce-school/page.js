import React from 'react'
import SchoolOfFinanceCommerce from '@/components/SchoolOfFinanceCommerce'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "AIMS BCom Application Process Bengaluru | MCA Benefits",
        description: "Explore the AIMS Institutes BCom application process Bengaluru and discover the benefits of doing an MCA from a private college with good infrastructure.",
        path: "/finance-commerce-school",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <div>
                <SchoolOfFinanceCommerce />
            </div>
        </>
    )
}

export default page
