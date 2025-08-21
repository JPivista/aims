import React from 'react'
import Banner from './Banner'
import ImpartingQuality from './ImpartingQuality'
import PrincipalsMessage from './PrincipalsMessage'
import WhyChooseAims from './WhyChooseAims'
import OurPrograms from './OurPrograms'
import MeetTheTeam from './MeetTheTeam'
import ImageCarousel from './ImageCarousel'
import AimersSays from './AimersSays'
import Eligibility from './EligibilityTab'
import CampusUpdates from './CampusUpdates'

const index = () => {
    return (
        <div>
            <Banner />
            <ImpartingQuality />
            <PrincipalsMessage />
            <WhyChooseAims />
            <OurPrograms />
            <Eligibility />
            <MeetTheTeam />
            <ImageCarousel />
            <AimersSays />
            {/* <CampusUpdates /> */}
        </div>
    )
}

export default index