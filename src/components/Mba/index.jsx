import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import Companies from "../shared/Companies"
import PracticalSkills from "./PracticalSkills"
import ReadyToDraw from "../shared/ReadyToDraw"
import ValueAddedPrograms from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import CourseStructure from "../shared/BBA-MBA-BBA-Aviation/CourseStructure"

const index = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms programKey="mba" />
      <Companies />
      <CourseStructure programKey="mba" />
      <PracticalSkills />
      <ReadyToDraw
        title="Ready to Draw Your Bow?"
        subtitle="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
        primaryButtonText="Apply Now for MBA"
        secondaryButtonText="Download Brochure"
        tertiaryButtonText="Talk to a Counsellor"
      />
    </div>
  )
}

export default index
