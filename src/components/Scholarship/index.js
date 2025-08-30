import React from "react"
import Banner from "@/components/Scholarship/Banner"
import Scholarship from "@/components/Scholarship/Scholarship"
import FeeconcessionTable from "@/components/Scholarship/FeeconcessionTable"
import Breadcrumbs from "../shared/Breadcrumbs"

const index = () => {
  return (
    <>
      <div>
        <Banner />
        <Breadcrumbs />
        <Scholarship />
        <FeeconcessionTable />
      </div>
    </>
  )
}

export default index
