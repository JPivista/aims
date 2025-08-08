import React from 'react'
import HeroBannerMcom from './HeroBannerMcom'
import McomContent from './McomContent'
import McomProgramOverview from './McomProgramOverview'
import ValueAddedPrograms from './ValueAddedPrograms'
import McomStudentLead from './McomStudentLead'

const index = () => {
    return (
        <>
            <HeroBannerMcom />
            <McomContent />
            <McomProgramOverview />
            <ValueAddedPrograms />
            <McomStudentLead />
        </>
    )
}

export default index
