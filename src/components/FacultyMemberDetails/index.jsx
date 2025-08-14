import React from "react"
import HeroBanner from "./HeroBanner"
import MeetTheFaculty from "./MeetTheFaculty"
import SchoolOfBusiness from "./SchoolOfBusiness"
import SchoolOfCommerceAndFinance from "./SchoolOfCommerceAndFinance"
import SchoolOfLiberalArtsAndSciences from "./SchoolOfLiberalArtsAndSciences"
import PartTimeFaculty from "./PartTimeFaculty"
import LibraryAndPhysicalEducation from "./LibraryAndPhysicalEducation"
import SchoolOfHospitalityAndTourism from "./SchoolOfHospitalityAndTourism"

const FacultyMemberDetails = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <MeetTheFaculty />
      <div className="w-full">
        <SchoolOfBusiness />
        <SchoolOfCommerceAndFinance />
        <SchoolOfHospitalityAndTourism />
        <SchoolOfLiberalArtsAndSciences />
        <LibraryAndPhysicalEducation />
        <PartTimeFaculty />
      </div>
    </div>
  )
}

export default FacultyMemberDetails
