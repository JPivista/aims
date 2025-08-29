import React from "react"
import HeroBanner from "./HeroBanner"
import NirfContent from "./NirfContent"
import NirfRankings from "./NirfRankings"
import Breadcrumbs from "../shared/Breadcrumbs"
const NirfRanking = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <NirfContent />
      <NirfRankings />
    </>
  )
}

export default NirfRanking
