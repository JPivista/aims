'use client'

import React from 'react'
import StudentLeadSection from '../shared/StudentLeadSection'

const McaStudentLead = () => {
    const mcaStudentLeadData = {
        mobileImage: "/mca/mca-our-student-placements-mobile.png",
        desktopImage: "/mca/mca-our-student-placements.png",
        title: "Companies Our Students Have Been Placed In",
        description: "Our graduates have been recruited by top companies across sectors.",
        gradientOverlay: "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)"
    }

    return (
        <StudentLeadSection
            mobileImage={mcaStudentLeadData.mobileImage}
            desktopImage={mcaStudentLeadData.desktopImage}
            title={mcaStudentLeadData.title}
            description={mcaStudentLeadData.description}
            gradientOverlay={mcaStudentLeadData.gradientOverlay}
            backgroundClassName="bg-[url('/mca/mca-our-student-placements-mobile.png')] lg:bg-[url('/mca/mca-our-student-placements.png')]"
        />
    )
}

export default McaStudentLead
