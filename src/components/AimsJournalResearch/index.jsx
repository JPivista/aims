import React from 'react'
import HeroBannerJournalResearch from './HeroBannerJournalResearch'
import JournalResearchContent from './JournalResearchContent'
import JournalResearch from './JournalResearch'
import AQARComponent from './AQARComponent'
import JrActivitiesTimeline from './JrActivitiesTimeline'
import Breadcrumbs from '../shared/Breadcrumbs'
import AnnualReport from './AnnualReport'

const index = () => {
    return (
        <>
            <HeroBannerJournalResearch />
            <Breadcrumbs />
            <JournalResearchContent />
            {/* <JournalResearch /> */}
            <AQARComponent />
            <JrActivitiesTimeline />
            <AnnualReport />
        </>
    )
}

export default index
