import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import CourseStructure from "../shared/BBA-MBA-BBA-Aviation/CourseStructure"
import ValueAddedPrograms from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import Companies from "../shared/Companies"
import ReadyToDraw from "../shared/ReadyToDraw"
import Ambitions from "./Ambitions"

const BbaComponents = ({ announcements }) => {
  return (
    <div className="w-full">
      <HeroBanner announcements={announcements} />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms programKey="bba" />
      <Companies />
      <CourseStructure programKey="bba" />
      <Ambitions />
      <ReadyToDraw
        title="Ready to Draw Your Bow?"
        subtitle="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
        primaryButtonText="Apply Now for BBA"
        secondaryButtonText="Download Brochure"
        tertiaryButtonText="Talk to a Counsellor"
      />
    </div>
  )
}

export default BbaComponents
