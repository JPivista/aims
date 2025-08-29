import React from 'react'
import HeroBannerMcom from './HeroBannerMcom'
import McomContent from './McomContent'
import McomProgramOverview from './McomProgramOverview'
import ValueAddedPrograms from './ValueAddedPrograms'
import McomStudentLead from './McomStudentLead'
import Companies from '../shared/Companies/Companies'
import McomCourseStructure from './McomCourseStructure'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <>
            <HeroBannerMcom />
            <Breadcrumbs />
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
