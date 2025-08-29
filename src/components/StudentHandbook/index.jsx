import React from "react"
import HeroBannerAlumi from "./HeroBannerAlumi"
import AimsContent from "./AimsContent"
import Handbook from "./Handbook"
import StudentExitFormalities from "./StudentExitFormalities"
import StudentHandbookMain from "./StudentHandbookMain"
import Breadcrumbs from "../shared/Breadcrumbs"
const StudentHandbook = () => {
  return (
    <>
      <HeroBannerAlumi />
      <Breadcrumbs />
      <AimsContent />
      <Handbook />
      <StudentExitFormalities />
      <StudentHandbookMain />
    </>
  )
}

export default StudentHandbook
