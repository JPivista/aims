import React from 'react'
import EntrepreneurshipCentre from '@/components/EntrepreneurshipCentre'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Entrepreneurship Excellence Centre in Bangalore",
        description: "AIMS supports student startups with mentoring, incubation, and networking. Explore entrepreneurship programs that inspire innovation in Bengaluru.",
        path: "/entrepreneurship-excellence-centre",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <EntrepreneurshipCentre />
        </>
    )
}

export default page
