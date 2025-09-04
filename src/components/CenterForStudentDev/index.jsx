import React from "react"
import HeroBanner from "./HeroBanner"
import Aiming from "./Aiming"
import WhyItMatters from "./WhyItMatters"
import Activities from "./Activities"

const CenterForStudentDev = ({ announcements }) => {
  return (
    <div className="w-full overflow-x-hidden">
      <HeroBanner announcements={announcements} />
      <Aiming />
      <Activities />
      <WhyItMatters />

      {/* Add other Center for Student Development components here */}
    </div>
  )
}

export default CenterForStudentDev
