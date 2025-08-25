import React from "react"
import StudentHandbook from "@/components/StudentHandbook"
import Seo from "@/components/shared/Seo/Seo"

const StudentInformationZone = () => {
  const seoField = {
    title: "Innovative Business Curriculum Bangalore | AIMS",
    description: "Explore AIMS' innovative business curriculum Bangalore. Among affordable private MBA colleges in Bangalore with hostel, we're one of the top management colleges near Peenya.",
    path: "/student-information-zone",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div className="w-full">
        <StudentHandbook />
      </div>
    </>
  )
}

export default StudentInformationZone
