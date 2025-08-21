import React from "react"
import LifeatAims from "../shared/LifeatAims"

const AlumniinHospitalit = () => {
  const bcomAlumniData = {
    image: "/life-at-aims/events-fests.png",
    subtitle: "Global. Local. Personal.",
    description: `From global immersion activities to community-led campaigns, AIMS fests reflect the diversity of our campus and the ambition of our students. Each event is a chance to apply what you’ve learnt, test your ideas, and build your confidence - hallmarks of any great B-school experience.`,
  }

  return (
    <>
      <div>
        <LifeatAims alumniData={bcomAlumniData} title="Global. Local. Personal." />
      </div>
    </>
  )
}

export default AlumniinHospitalit
