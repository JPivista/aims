import React from 'react'
import HeroBannerJournalResearch from './HeroBannerJournalResearch'
import JournalResearchContent from './JournalResearchContent'
import JournalResearch from './JournalResearch'
import AQARComponent from './AQARComponent'
import JrActivitiesTimeline from './JrActivitiesTimeline'

const index = () => {
    return (
        <>
            <HeroBannerJournalResearch />
            <JournalResearchContent />
            {/* <JournalResearch /> */}
            <AQARComponent />
            <JrActivitiesTimeline />
        </>
    )
}

export default index
