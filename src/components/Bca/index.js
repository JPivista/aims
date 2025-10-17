import React from 'react'
import HeroBannerBca from './HeroBannerBca'
import BcaContent from './BcaContent'
import BcaProgramOverview from './BcaProgramOverview'
import BcaValueAddedPrograms from './BcaValueAddedPrograms'
import Companies from '../shared/Companies'
import BcaCourseStructure from './BcaCourseStructure'
import BcaPLus from './BcaPLus'
import BcaAlumni from './BcaAlumni'
import BcaStudentLead from './BcaStudentLead'
import ReadyToDraw from '../shared/ReadyToDraw'

const index = () => {
    return (
        <>
            <HeroBannerBca />
            <BcaContent />
            <BcaProgramOverview />
            <BcaValueAddedPrograms />
            <BcaStudentLead />
            <Companies />
            <BcaCourseStructure />
            <BcaPLus />
            <BcaAlumni />
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
