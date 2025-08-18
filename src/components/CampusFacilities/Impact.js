import React from "react"
import LifeatAims from "../shared/LifeatAims"

const AlumniinHospitalit = () => {
  const bcomAlumniData = {
    image: "/life-at-aims/events-fests.png",
    subtitle: "A Campus That Supports Every AIMer",
    description: `We’re a space where:`,
    listItems: [
      "MCA students learn with AI and ML-ready labs",
      "MBA candidates attend corporate workshops with top recruiters",
      "BBA Aviation students get global exposure through partnerships",
      "Hospitality students practise in real-world kitchens and banquet setups",
    ],
    author:
      "Here, facilities don’t just meet your needs. They match your ambitions.",
  }

  return (
    <div>
      <LifeatAims
        alumniData={bcomAlumniData}
        title="Global. Local. Personal."
      />
    </div>
  )
}

export default AlumniinHospitalit
