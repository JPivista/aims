import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import Companies from "../shared/Companies"
import CourseStructure from "../shared/BBA-MBA-BBA-Aviation/CourseStructure"
import ValueAddedPrograms from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import ReadyToDraw from "../shared/ReadyToDraw"
import Ambitions from "./Ambitions"

const BbaAviationComponents = ({ announcements }) => {
  return (
    <div className="w-full">
      <HeroBanner announcements={announcements} />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms programKey="bba-aviation" />
      <Companies />
      <CourseStructure programKey="bba-aviation" />
      <Ambitions />
      <ReadyToDraw
        title="Ready to Soar in Aviation Business?"
        subtitle="Take the first step towards your aviation business career. Join our BBA Aviation program and become part of a community that values excellence, innovation, and leadership in the aviation industry."
        primaryButtonText="Apply Now for BBA Aviation"
        secondaryButtonText="Download Brochure"
        tertiaryButtonText="Talk to a Counsellor"
      />
    </div>
  )
}

export default BbaAviationComponents
