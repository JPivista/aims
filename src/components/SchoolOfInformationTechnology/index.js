import React from 'react'
import HeroBannerInfoTech from './HeroBannerInfoTech'
import SoInfoTechContent from './SoInfoTechContent'
import SoInfoTechPrograms from './SoInfoTechPrograms'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <>
            <HeroBannerInfoTech />
            <Breadcrumbs />
            <SoInfoTechContent />
            <SoInfoTechPrograms />
        </>
    )
}

export default index
