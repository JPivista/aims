import React from 'react'
import Banner from './Banner'
import SetYourSights from './SetYourSights'
import CommitteesCard from './CommitteesCard'
import TabSection from './TabSection'
import Facilities from './Facilities'
import AlumniSpeak from './AlumniSpeak'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <div>
            <Banner />
            <Breadcrumbs /> 
            <SetYourSights />
            <CommitteesCard />
            <TabSection />
            <Facilities />
            <AlumniSpeak />
        </div>
    )
}

export default index