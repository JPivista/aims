import React from "react"
import HeroBanner from "./HeroBanner"
import SpeakUp from "./SpeakUp"
import SGRC from "./SGRC"
import GrievanceForm from "./GrievanceForm"
import Breadcrumbs from "../shared/Breadcrumbs"
const GrievanceRedressal = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <SpeakUp />
      <SGRC />
      <GrievanceForm />
    </>
  )
}

export default GrievanceRedressal
