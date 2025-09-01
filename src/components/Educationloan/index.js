import React from "react"
import Educationpage from "@/components/Educationloan/Educationpage"
import Banner from "@/components/Educationloan/Banner"
import Breadcrumbs from "../shared/Breadcrumbs"
const index = () => {
  return (
    <>
      <div>
        <Banner/>
        <Breadcrumbs />
        <Educationpage />
      </div>
    </>
  )
}

export default index
