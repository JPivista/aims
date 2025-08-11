import React from 'react'
import HeroBannerBcom from './HeroBannerBcom'
import BcomContent from './BcomContent'
import BcomProgramOverview from './BcomProgramOverview'
import ValueAddedProgramsProps from './ValueAddedPrograms'
import BcomStudentLead from './BcomStudentLead'
import Companies from '../shared/Companies'

const index = () => {
    return (
        <>
            <HeroBannerBcom />
            <BcomContent />
            <BcomProgramOverview />
            <ValueAddedProgramsProps />
            <BcomStudentLead />
            <Companies />
        </>
    )
}

export default index
