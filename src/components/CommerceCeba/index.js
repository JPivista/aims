import React from 'react'
import Banner from './Banner'
import SetYourSights from './SetYourSights'
import TabSection from './TabSection'
import Facilities from './Facilities'
import AlumniSpeak from './AlumniSpeak'
import AdvantagesOfChoosingEbac from './AdvantagesOfChoosingEbac'
import Breadcrumbs from '../shared/Breadcrumbs'
const index = () => {
    return (
        <div>
            <Banner />
            <Breadcrumbs /> 
            <SetYourSights />
            <AdvantagesOfChoosingEbac />
            <TabSection />
            <Facilities />
            <AlumniSpeak />
     
        </div>
    )
}

export default index