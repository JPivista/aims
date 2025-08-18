import React from "react"
import Banner from "./Banner"
import Campusfacpage from "./Campusfacpage"
import CampusTab from "./CampusTab"
import Impact from "./Impact"
import ReachOutpage from "./ReachOutpage"

const index = () => {
  return (
    <>
      <div>
        <Banner/>
        <Campusfacpage/>
        <CampusTab/>
        <Impact/>
        <ReachOutpage/>
      </div>
    </>
  )
}

export default index
