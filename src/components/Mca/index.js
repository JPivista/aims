import React from 'react'
import HeroBannerMca from './HeroBannerMca'
import McaContent from './McaContent'
import McaProgramOverview from './McaProgramOverview'
import McaValueAddedProgramsProps from './McaValueAddedPrograms'
import McaStudentLead from './McaStudentLead'
import Companies from '../shared/Companies/Companies'
import McaCourseStructure from './McaCourseStructure'
import McaAlumni from './McaAlumni'
import ReadyToDraw from '../shared/ReadyToDraw'

const index = () => {
    return (
        <>
            <HeroBannerMca />
            <McaContent />
            <McaProgramOverview />
            <McaValueAddedProgramsProps />
            <McaStudentLead />
            <Companies />
            <McaCourseStructure />
            <McaAlumni />
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
