import React from "react"
import SportsRecreation from "@/components/SportsRecreation"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Dynamic Student Community at AIMS | Sports & Recreation",
    description: "Dynamic student community business education with sports & recreation. Among colleges in India with international accreditation, AIMS fosters balance.",
    path: "/sports-recreation",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        {" "}
        <SportsRecreation />
      </div>
    </>
  )
}

export default page
