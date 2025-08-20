'use client'

import React from 'react'
import StudentLeadSection from '../shared/StudentLeadSection'

const BcomStudentLead = () => {
    const bcomStudentLeadData = {
        mobileImage: "/bcom/companies-our-graduated-mobile.png",
        desktopImage: "/bcom/companies-our-graduated.png",
        title: "Companies Our Graduates Have Joined",
        description: "Our alumni are placed across firms in banking, consultancy, audit, and retail.",
        gradientOverlay: "linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)"
    }

    return (
        <StudentLeadSection
            mobileImage={bcomStudentLeadData.mobileImage}
            desktopImage={bcomStudentLeadData.desktopImage}
            title={bcomStudentLeadData.title}
            description={bcomStudentLeadData.description}
            gradientOverlay={bcomStudentLeadData.gradientOverlay}
            backgroundClassName="bg-[url('/bcom/companies-our-graduated-mobile.png')] lg:bg-[url('/bcom/companies-our-graduated.png')]"
        />
    )
}

export default BcomStudentLead
