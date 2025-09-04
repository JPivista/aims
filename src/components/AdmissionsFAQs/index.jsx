import React from "react"
import Banner from "./Banner"
import FAQSection from "./FAQSection"

const AdmissionsFAQs = () => {
  return (
    <>
      <div
        className="w-full overflow-hidden"
        style={{ scrollBehavior: "auto" }}
      >
        <Banner />
        <FAQSection />
      </div>
    </>
  )
}

export default AdmissionsFAQs
