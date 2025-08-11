import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import Companies from "../shared/Companies"
import PracticalSkills from "./PracticalSkills"
import ReadyToDraw from "./ReadyToDraw"
import ValueAddedPrograms from "./ValueAddedPrograms"
import MbaCourseStructure from "./MbaCourseStructure"

const index = () => {
  return (
    <div>
      <HeroBanner />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms />
      <Companies />
      <MbaCourseStructure />
      <PracticalSkills />
      <ReadyToDraw />
    </div>
  )
}

export default index
