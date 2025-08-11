import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import BbaCourseStructure from "./BbaCourseStructure"
import ValueAddedPrograms from "./ValueAddedPrograms"
import Companies from "../shared/Companies"
import ReadyToDraw from "./ReadyToDraw"
import Ambitions from "./Ambitions"


const BbaComponents = ({ announcements }) => {
  return (
    <div>
      <HeroBanner announcements={announcements} />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms />
      <Companies />
      <BbaCourseStructure />
      <Ambitions />
      <ReadyToDraw />
    </div>
  )
}

export default BbaComponents
