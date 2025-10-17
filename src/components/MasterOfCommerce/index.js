import React from 'react'
import HeroBannerMcom from './HeroBannerMcom'
import McomContent from './McomContent'
import McomProgramOverview from './McomProgramOverview'
import ValueAddedPrograms from '../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms'
import McomStudentLead from './McomStudentLead'
import Companies from '../shared/Companies/Companies'
import McomCourseStructure from './McomCourseStructure'
import ReadyToDraw from '../shared/ReadyToDraw'

const index = () => {
    return (
        <>
            <HeroBannerMcom />
            <McomContent />
            <McomProgramOverview />
            <ValueAddedPrograms programKey="mba" />
            <McomStudentLead />
            <Companies />
            <McomCourseStructure />
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
