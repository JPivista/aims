import React from 'react'
import HeroBannerMcom from './HeroBannerMcom'
import McomContent from './McomContent'
import McomProgramOverview from './McomProgramOverview'
import ValueAddedPrograms from './ValueAddedPrograms'
import McomStudentLead from './McomStudentLead'
import Companies from '../shared/Companies/Companies'
import McomCourseStructure from './McomCourseStructure'

const index = () => {
    return (
        <>
            <HeroBannerMcom />
            <McomContent />
            <McomProgramOverview />
            <ValueAddedPrograms />
            <McomStudentLead />
            <Companies />
            <McomCourseStructure />
        </>
    )
}

export default index
