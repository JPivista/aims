import React from 'react'
import HeroBannerSoF from './HeroBannerSoF'
import SoFinanceContent from './SoFinanceContent'
import SofPrograms from './SofPrograms'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <>
            <HeroBannerSoF />
            <Breadcrumbs />
            <SoFinanceContent />
            <SofPrograms />
        </>
    )
}

export default index
