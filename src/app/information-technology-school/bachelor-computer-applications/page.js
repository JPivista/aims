import React from 'react'
import Bca from '@/components/Bca'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Best Colleges for BCA in Bangalore | AIMS Institutes",
        description: "AIMS Institutes offers one of the best BCA programs in Bengaluru. Gain industry-relevant IT skills, internships, and strong placement pathways.",
        path: "/information-technology-school/bachelor-computer-applications",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <Bca />
        </>
    )
}

export default page
