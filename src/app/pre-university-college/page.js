import React from 'react'
import PreUniversityCollegeComponent from '@/components/PreUniversityCollegeComponent'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top PU Colleges in Bangalore | AIMS Institutes",
        description: "Understand AIMS Institutes' placement policies. Learn about recruiter engagement, student eligibility, and guidelines for 100% placement support.",
        path: "/pre-university-college",
        metaImage: "/images/aims-logo.png",
        pageType: "EducationalOrganization",
    }

    return (
        <>
            <Seo {...seoField} />
            <div>
                <PreUniversityCollegeComponent />
            </div>
        </>
    )
}

export default page
