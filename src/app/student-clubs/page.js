import React from "react"
import StudentClubs from  "@/components/StudentClubs"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Dynamic Student Community | Best Business School Bangalore",
    description: "Discover a dynamic student community in business education. AIMS fosters student development in business education as the best business school in Bangalore.",
    path: "/student-clubs",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <StudentClubs/>
      </div>
    </>
  )
}

export default page
