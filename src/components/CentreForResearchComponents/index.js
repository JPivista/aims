import React from 'react'
import Banner from './Banner'
import ChooseYourGoal from './ChooseYourGoal'
import StructuredSupport from './StructuredSupport'
import OurResearchCommittees from './OurResearchCommittees'
import ResearchCommitteesCards from './ResearchCommitteesCards'
import OurTrackRecord from './OurTrackRecord'
import IcssrFunded from './IcssrFunded'
import StudentSupport from './StudentSupport'
import Breadcrumbs from '../shared/Breadcrumbs'

const index = () => {
    return (
        <div>
            <Banner />
            <Breadcrumbs />
            <ChooseYourGoal />
            <StructuredSupport />
            <OurResearchCommittees />
            <ResearchCommitteesCards />
            <OurTrackRecord />
            <IcssrFunded />
            <StudentSupport />
        </div>
    )
}

export default index