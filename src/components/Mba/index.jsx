import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import ValueAdded from "./ValueAdded"
import Companies from "../shared/Companies"
import PracticalSkills from "./PracticalSkills"
import ReadyToDraw from "./ReadyToDraw"

const index = () => {
  return (
    <div>
      <HeroBanner />
      <WhyChoose />
      <Overview />
      <ValueAdded />
      <Companies />
      <PracticalSkills />
      <ReadyToDraw />
    </div>
  )
}

export default index
