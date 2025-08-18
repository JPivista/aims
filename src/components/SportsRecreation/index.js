import React from "react"
import Banner from "@/components/SportsRecreation/Banner"
import Sportspage from "@/components/SportsRecreation/Sportspage"
import SportsTab from "@/components/SportsRecreation/SportsTab"
import Impact from "@/components/SportsRecreation/Impact"
import SportsSection from "@/components/SportsRecreation/SportsSection"

const index = () => {
  return (
    <>
      <div>
        <Banner/>
        <Sportspage/>
        <SportsTab/>
        <Impact/>
        <SportsSection/>

      </div>
    </>
  )
}

export default index
