import React from "react"
import HeroBanner from "./HeroBanner"
import Aiming from "./Aiming"
import Activities from "./Activities"
import NotableCollaborations from "./NotableCollaborations"
const CentreForCommunityService = ({ announcements }) => {
  return (
    <div className="w-full overflow-hidden">
      <HeroBanner announcements={announcements} />
      <Aiming />
      <Activities />
      <NotableCollaborations />

      {/* Add other Centre for Community Service components here */}
    </div>
  )
}

export default CentreForCommunityService
