import React from "react"
import HeroBanner from "./HeroBanner"
import Aiming from "./Aiming"
import Activities from "./Activities"
import NotableCollaborations from "./NotableCollaborations"

const CentreForCommunityService = ({ announcements }) => {
  return (
    <>
      <HeroBanner announcements={announcements} />
      <Aiming />
      <Activities />
      <NotableCollaborations />

      {/* Add other Centre for Community Service components here */}
    </>
  )
}

export default CentreForCommunityService
