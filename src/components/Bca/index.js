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
        </>
    )
}

export default index
