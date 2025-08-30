import React from "react"
import HeroBannerSoH from "./HeroBannerSoH"
import SoHospitalityContent from "./SoHospitalityContent"
import SofPrograms from "./SofPrograms"
import SoSwiss from "./SoSwiss"
import ReadyToDraws from "./ReadyToDraws"
import Breadcrumbs from "../shared/Breadcrumbs"
const index = () => {
  return (
    <>
      <HeroBannerSoH />
      <Breadcrumbs />
      <SoHospitalityContent />
      <SofPrograms />
      <SoSwiss/>
      <ReadyToDraws/>

      
    </>
  )
}

export default index
