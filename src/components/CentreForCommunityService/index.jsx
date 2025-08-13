import React from "react"
import HeroBanner from "./HeroBanner"
import Aiming from "./Aiming"
import Activities from "./Activities"
import NotableCollaborations from "./NotableCollaborations"

const CentreForCommunityService = () => {
  const communityServiceAnnouncements = [
    "APPLY NOW FOR COMMUNITY SERVICE PROGRAMS 2025-26",
    "APPLY NOW FOR SOCIAL IMPACT INITIATIVES 2025-26",
    "APPLY NOW FOR COMMUNITY SERVICE PROGRAMS 2025-26",
  ]

  return (
    <>
      <HeroBanner
        announcements={communityServiceAnnouncements}
        pageType="centre-for-community-service"
      />
      <Aiming />
      <Activities />
      <NotableCollaborations />

      {/* Add other Centre for Community Service components here */}
    </>
  )
}

export default CentreForCommunityService
