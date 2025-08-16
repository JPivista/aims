import React from 'react'
import NewsHeader from './NewsHeader'
import StudentAchievements from './StudentAchievements'
import EventsWorkshops from './EventsWorkshops'
import PlacementAnnouncements from './PlacementAnnouncements'
import CampusUpdates from './CampusUpdates'

const index = () => {
    return (
        <>
            <NewsHeader />
            <StudentAchievements />
            <EventsWorkshops />
            <PlacementAnnouncements />
            <CampusUpdates />
        </>
    )
}

export default index
