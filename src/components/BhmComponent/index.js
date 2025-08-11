import React from "react"
import Banner from "./Banner"
import WhyChoose from "./WhyChoose"
import ValueAddedPrograms from "./ValueAddedPrograms"
import Companies from "../shared/Companies"
import BhmCourseStructure from "./BhmCourseStructure"
import BhmAims from "./BhmAims"
import AlumniinHospitality from "./AlumniinHospitality"

import Overview from "./Overview"
const index = () => {
  return (
    <>
      <div>
        <Banner />
        <WhyChoose />
        <Overview />
        <ValueAddedPrograms/>
        <Companies />
        <BhmCourseStructure/>
        <BhmAims/>
        <AlumniinHospitality/>
      </div>
    </>
  )
}

export default index
