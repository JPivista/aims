import React from "react"
import Banner from "./Banner"
import WhyChoose from "./WhyChoose"
import ValueAddedPrograms from "./ValueAddedPrograms"
import Companies from "../shared/Companies"
import ProgramsDatas from "./ProgramsDatas"
import Breadcrumbs from "../shared/Breadcrumbs"

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
        <Breadcrumbs />
        <WhyChoose />
        <Overview />
        <ValueAddedPrograms/>
        {/* <ProgramsDatas/> */}
        <Companies />
        <BhmCourseStructure/>
        <BhmAims/>
        <AlumniinHospitality/>
        <ReadyToDraws/>
        
      </div>
    </>
  )
}

export default index
