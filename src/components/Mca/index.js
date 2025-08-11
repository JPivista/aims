import React from 'react'
import HeroBannerMca from './HeroBannerMca'
import McaContent from './McaContent'
import McaProgramOverview from './McaProgramOverview'
import McaValueAddedProgramsProps from './McaValueAddedPrograms'
import McaStudentLead from './McaStudentLead'
import Companies from '../shared/Companies/Companies'
import McaCourseStructure from './McaCourseStructure'
import McaAlumni from './McaAlumni'

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
        </>
    )
}

export default index
