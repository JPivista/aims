import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import Companies from "../shared/Companies"
import CourseStructure from "../shared/BBA-MBA-BBA-Aviation/CourseStructure"
import ValueAddedPrograms from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import ReadyToDraw from "../shared/ReadyToDraw"
import Ambitions from "./Ambitions"
import Breadcrumbs from "../shared/Breadcrumbs"

const BbaAviationComponents = ({ announcements }) => {
  return (
    <div className="w-full">
      <HeroBanner announcements={announcements} />
      <Breadcrumbs />
      <WhyChoose />
      <Overview />
      <ValueAddedPrograms programKey="bba-aviation" />
      <Companies />
      <CourseStructure programKey="bba-aviation" />
      <Ambitions />
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

export default BbaAviationComponents
