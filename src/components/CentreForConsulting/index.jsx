import React from 'react'
import HeroBannerCfc from './HeroBannerCfc'
import CfcContent from './CfcContent'
import CfcOurObjectives from './CfcOurObjectives'
import CfcWhyItMatters from './CfcWhyItMatters'
import CfcAssignments from './CfcAssignments'
import CfcCurrentAssignments from './CfcCurrentAssignments'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <>
            <HeroBannerCfc />
            <Breadcrumbs />
            <CfcContent />
            <CfcOurObjectives />
            <CfcWhyItMatters />
            <CfcAssignments />
            <CfcCurrentAssignments />
        </>
    )
}

export default index
