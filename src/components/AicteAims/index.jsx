import React from "react"
import HeroBanner from "./HeroBanner"
import AicteContent from "./AicteContent"
import AicteAccreditations from "./AicteAccreditations"
import MandatoryDisclosures from "./MandatoryDisclosures"
import Breadcrumbs from "../shared/Breadcrumbs"
const AicteAims = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <AicteContent />
      <MandatoryDisclosures />
      <AicteAccreditations />
    </>
  )
}

export default AicteAims
