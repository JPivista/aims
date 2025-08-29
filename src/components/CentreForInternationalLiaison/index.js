import React from 'react'
import HeroBannerCfi from './HeroBannerCfi'
import CfiContent from './CfiContent'
import CfiGoals from './CfiGoals'
import AcilForStudentsStaff from './AcilForStudentsStaff'
import CfiGlobalCollab from './CfiGlobalCollab'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <>
            <HeroBannerCfi />
            <Breadcrumbs />
            <CfiContent />
            <CfiGoals />
            <AcilForStudentsStaff />
            <CfiGlobalCollab />
        </>
    )
}

export default index
