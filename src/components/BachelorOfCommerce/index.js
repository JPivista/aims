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
        </>
    )
}

export default index
