import React from 'react'
import HeroBannerBcom from './HeroBannerBcom'
import BcomContent from './BcomContent'
import BcomProgramOverview from './BcomProgramOverview'
import ValueAddedProgramsProps from './ValueAddedPrograms'
import BcomStudentLead from './BcomStudentLead'
import Companies from '../shared/Companies'
import BcomCourseStructure from './BcomCourseStructure'
import BcomPlus from './BcomPlus'
import CareerOpportunities from './CareerOpportunities'
import BcomAlumni from './BcomAlumni'
import ReadyToDraw from '../shared/ReadyToDraw'

const index = () => {
    return (
        <>
            <HeroBannerBcom />
            <BcomContent />
            <BcomProgramOverview />
            <ValueAddedProgramsProps />
            <BcomStudentLead />
            <Companies />
            <BcomCourseStructure />
            <BcomPlus />
            <CareerOpportunities />
            <BcomAlumni />
            <ReadyToDraw
                title={
                    <>
                        Ready to <br className="hidden md:block" /> Draw Your Bow?
                    </>
                }
                subtitle="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
                primaryButtonText="Apply Now"
            // secondaryButtonText="Download Brochure"
            />
        </>
    )
}

export default index
