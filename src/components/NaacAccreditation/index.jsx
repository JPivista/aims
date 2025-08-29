import React from "react"
import HeroBanner from "./HeroBanner"
import NaacContent from "./NaacContent"
import DvvExtendedProfile from "./DvvExtendedProfile"
import NaacSSR from "./NaacSSR"
import NaacAccreditationSection from "./NaacAccreditationSection"
import Breadcrumbs from "../shared/Breadcrumbs"
const NaacAccreditation = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <NaacContent />
      <NaacAccreditationSection />
      <NaacSSR />
      <DvvExtendedProfile />
    </>
  )
}

export default NaacAccreditation
