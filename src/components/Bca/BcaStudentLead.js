'use client'

import React from 'react'
import StudentLeadSection from '../shared/StudentLeadSection'

const BcaStudentLead = () => {
    const bcaStudentLeadData = {
        mobileImage: "/bca/bca-our-student-placements-mobile.png",
        desktopImage: "/bca/bca-our-student-placements.png",
        title: "Where Our Students Land",
        description: "Our graduates have been placed in top tech companies, startups, and consulting firms. AIMS gives you the skills, and the direction, to get noticed.",
        gradientOverlay: "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)"
    }

    return (
        <StudentLeadSection
            mobileImage={bcaStudentLeadData.mobileImage}
            desktopImage={bcaStudentLeadData.desktopImage}
            title={bcaStudentLeadData.title}
            description={bcaStudentLeadData.description}
            gradientOverlay={bcaStudentLeadData.gradientOverlay}
            backgroundClassName="bg-[url('/bca/bca-our-student-placements-mobile.png')] lg:bg-[url('/bca/bca-our-student-placements.png')]"
        />
    )
}

export default BcaStudentLead
