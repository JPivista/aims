import React from "react"
import HeroBanner from "./HeroBanner"
import WhyChoose from "./WhyChoose"
import Overview from "./Overview"
import ValueAdded from "./ValueAdded"
import Companies from "../shared/Companies"

const index = () => {
  return (
    <div>
      <HeroBanner />
      <WhyChoose />
      <Overview />
      <ValueAdded />
      <Companies />
    </div>
  )
}

export default index
