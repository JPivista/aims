'use client'

import React from 'react'
<<<<<<< Updated upstream
import StudentLeadSection from '../shared/StudentLeadSection'

const McomStudentLead = () => {
    const mcomStudentLeadData = {
        mobileImage: "/mcom/mcom-where-our-students-lead-mobile.webp",
        desktopImage: "/mcom/mcom-where-our-students-lead.webp",
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
        />
=======

const McomStudentLead = () => {
    return (
        <>
            <div className="relative w-full lg:h-[80vh] h-[90vh] overflow-hidden bg-cover bg-center bg-no-repeat bg-[url('/mcom/mcom-where-our-students-lead-mobile.png')] lg:bg-[url('/mcom/mcom-where-our-students-lead.png')]">
                {/* Gradient Overlay - Figma Design */}
                <div
                    className="absolute inset-0"
                    style={{
                        background: 'linear-gradient(179deg, rgba(12, 33, 101, 0.00) 11%, #08101D 99%)'
                    }}
                ></div>

                {/* Top Content Container */}
                <div className="relative z-10 h-full flex flex-col items-start justify-center">
                    <div className="container mx-auto py-4 px-6 lg:px-8">
                        <div className="flex lg:flex-row md:gap-10 gap-4">
                            <div className="">
                                <h3 className="text-white text-2xl lg:text-[60px] playfair-300 lg:leading-16">
                                    Where Our <br className='md:block hidden' /> Students Lead
                                </h3>
                                <p className='text-white'>
                                    Explore how AIMS postgraduates are building
                                    <br className='md:block hidden' />
                                    rewarding careers with leading companies.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
>>>>>>> Stashed changes
    )
}

export default McomStudentLead
