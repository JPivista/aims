import React from "react"
import Banner from "../../components/AccreditationsRankings/Banner"
import Accreditationpage from "../../components/AccreditationsRankings/Accreditationpage"
import Breadcrumbs from "../shared/Breadcrumbs"
const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Breadcrumbs />
        <Accreditationpage />
      </div>
    </>
  )
}

export default index
