import React from "react"
import HeroBanner from "./HeroBanner"
import Aiming from "./Aiming"
import WhyItMatters from "./WhyItMatters"
import Activities from "./Activities"

const CenterForStudentDev = () => {
  const studentDevAnnouncements = [
    "APPLY NOW FOR STUDENT DEVELOPMENT PROGRAMS 2025-26",
    "APPLY NOW FOR CAREER GUIDANCE SERVICES 2025-26",
    "APPLY NOW FOR STUDENT DEVELOPMENT PROGRAMS 2025-26",
  ]

  return (
    <>
      <HeroBanner
        announcements={studentDevAnnouncements}
        pageType="center-for-student-dev"
      />
      <Aiming />
      <Activities />
      <WhyItMatters />

      {/* Add other Center for Student Development components here */}
    </>
  )
}

export default CenterForStudentDev
