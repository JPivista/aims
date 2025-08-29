import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import Companies from "../shared/Companies"
import PracticalSkills from "./PracticalSkills"
import ReadyToDraw from "../shared/ReadyToDraw"
import ValueAddedPrograms from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import CourseStructure from "../shared/BBA-MBA-BBA-Aviation/CourseStructure"
import Breadcrumbs from "../shared/Breadcrumbs"

const index = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <Breadcrumbs />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms programKey="mba" />
      <Companies />
      <CourseStructure programKey="mba" />
      <PracticalSkills />
      <ReadyToDraw
        title={
          <>
            Ready to <br className="hidden md:block" /> Draw Your Bow?
          </>
        }
        subtitle="From helping you define your goals to guiding you through every step, we're here to help you take that first shot."
        primaryButtonText="Apply Now"
        secondaryButtonText="Download Brochure"
      />
    </div>
  )
}

export default index
