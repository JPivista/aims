import React from "react"
import Banner from "./Banner"
import Aboutpage from "./Aboutpage"
import OurVision from "./OurVision"
import OurObjectives from "./OurObjectives"
import QualityPolicy from "./QualityPolicy"
import About from "./About"
import Curriculum from "./Curriculum"

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Aboutpage />
        <Curriculum />
        <OurVision />
        <OurObjectives />
        <QualityPolicy />
        <About />
      </div>
    </>
  )
}

export default index
