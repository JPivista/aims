import React from 'react'
import HeroBannerJournalResearch from './HeroBannerJournalResearch'
import JournalResearchContent from './JournalResearchContent'
import JournalResearch from './JournalResearch'
import AQARComponent from './AQARComponent'
import JrActivitiesTimeline from './JrActivitiesTimeline'
import AnnualReport from './AnnualReport'

const index = () => {
    return (
        <>
            <HeroBannerJournalResearch />
            <JournalResearchContent />
            {/* <JournalResearch /> */}
            <AQARComponent />
            <JrActivitiesTimeline />
            <AnnualReport />
        </>
    )
}

export default index