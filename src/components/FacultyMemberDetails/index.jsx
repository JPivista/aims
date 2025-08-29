import React from "react"
import HeroBanner from "./HeroBanner"
import MeetTheFaculty from "./MeetTheFaculty"
import SchoolOfBusiness from "./SchoolOfBusiness"
import SchoolOfCommerceAndFinance from "./SchoolOfCommerceAndFinance"
import SchoolOfInformationTechnology from "./SchoolOfInformationTechnology"
import SchoolOfLiberalArtsAndSciences from "./SchoolOfLiberalArtsAndSciences"
import PartTimeFaculty from "./PartTimeFaculty"
import LibraryAndPhysicalEducation from "./LibraryAndPhysicalEducation"
import SchoolOfHospitalityAndTourism from "./SchoolOfHospitalityAndTourism"
import Breadcrumbs from "../shared/Breadcrumbs"
const FacultyMemberDetails = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <Breadcrumbs />
      <MeetTheFaculty />
      <div className="w-full">
        <SchoolOfBusiness />
        <SchoolOfCommerceAndFinance />
        <SchoolOfInformationTechnology />
        <SchoolOfHospitalityAndTourism />
        <SchoolOfLiberalArtsAndSciences />
        <LibraryAndPhysicalEducation />
        <PartTimeFaculty />
      </div>
    </div>
  )
}

export default FacultyMemberDetails
