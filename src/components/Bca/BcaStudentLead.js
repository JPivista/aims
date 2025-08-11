'use client'

import React from 'react'
import StudentLeadSection from '../shared/StudentLeadSection'

const BcaStudentLead = () => {
    const bcaStudentLeadData = {
        mobileImage: "/bca/bca-our-student-placements.png",
        desktopImage: "/bca/bca-our-student-placements.png",
        title: "Companies Our Students Have Been Placed In",
        description: "Our graduates have been recruited by top companies across sectors.",
        gradientOverlay: "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)"
    }

    return (
        <StudentLeadSection
            mobileImage={bcaStudentLeadData.mobileImage}
            desktopImage={bcaStudentLeadData.desktopImage}
            title={bcaStudentLeadData.title}
            description={bcaStudentLeadData.description}
            gradientOverlay={bcaStudentLeadData.gradientOverlay}
        />
    )
}

export default BcaStudentLead
