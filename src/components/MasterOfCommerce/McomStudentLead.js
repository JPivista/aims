'use client'

import React from 'react'
import StudentLeadSection from '../shared/StudentLeadSection'

const McomStudentLead = () => {
    const mcomStudentLeadData = {
        mobileImage: "/mcom/mcom-where-our-students-lead-mobile.png",
        desktopImage: "/mcom/mcom-where-our-students-lead.png",
        title: "Where Our Students Lead",
        description: "Explore how AIMS postgraduates are building rewarding careers with leading companies.",
        gradientOverlay: "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)"
    }

    return (
        <StudentLeadSection
            mobileImage={mcomStudentLeadData.mobileImage}
            desktopImage={mcomStudentLeadData.desktopImage}
            title={mcomStudentLeadData.title}
            description={mcomStudentLeadData.description}
            gradientOverlay={mcomStudentLeadData.gradientOverlay}
            backgroundClassName="bg-[url('/mcom/mcom-where-our-students-lead-mobile.png')] lg:bg-[url('/mcom/mcom-where-our-students-lead.png')]"
        />
    )
}

export default McomStudentLead
