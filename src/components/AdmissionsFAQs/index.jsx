import React from "react"
import Banner from "./Banner"
import FAQSection from "./FAQSection"
import Breadcrumbs from "../shared/Breadcrumbs"

const AdmissionsFAQs = () => {
  return (
    <>
      <div className="w-full overflow-hidden">
        <Banner />
        <Breadcrumbs />
        <FAQSection />
      </div>
    </>
  )
}

export default AdmissionsFAQs
