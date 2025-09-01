import React from "react"
import Banner from "@/components/SportsRecreation/Banner"
import Sportspage from "@/components/SportsRecreation/Sportspage"
import SportsTab from "@/components/SportsRecreation/SportsTab"
import Impact from "@/components/SportsRecreation/Impact"
import SportsSection from "@/components/SportsRecreation/SportsSection"
import Breadcrumbs from "../shared/Breadcrumbs"

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Breadcrumbs />
        <Sportspage />
        <SportsTab />
        <Impact />
        <SportsSection />
      </div>
    </>
  )
}

export default index
