import React from "react"
import Banner from "./Banner"
import WhyChoose from "./WhyChoose"
import ValueAddedPrograms from "../shared/BBA-MBA-BBA-Aviation/ValueAddedPrograms"
import Companies from "../shared/Companies"
import ProgramsDatas from "./ProgramsDatas"

import BhmCourseStructure from "./BhmCourseStructure"
import BhmAims from "./BhmAims"
import AlumniinHospitality from "./AlumniinHospitality"

import Overview from "./Overview"
import ReadyToDraws from "./ReadyToDraws"
const index = () => {
  return (
    <>
      <div>
        <Banner />
        <WhyChoose />
        <Overview />
        <ValueAddedPrograms programKey="mba" />
        {/* <ProgramsDatas/> */}
        <Companies />
        <BhmCourseStructure />
        <BhmAims />
        <AlumniinHospitality />
        <ReadyToDraws />
      </div>
    </>
  )
}

export default index
