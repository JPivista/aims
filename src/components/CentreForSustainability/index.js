import React from "react";
import HeroBannerCfs from "./HeroBannerCfs";
import CfsContent from "./CfsContent";
import OurGoalsandObjectives from "./OurGoalsandObjectives";
import CfsStudentEvents from "./CfsStudentEvents";
import CfsWhyItMatters from "./CfsWhyItMatters";
import Breadcrumbs from "../shared/Breadcrumbs";

const index = () => {
  return (
    <>
      <HeroBannerCfs />
      <Breadcrumbs />
      <CfsContent />
      <OurGoalsandObjectives />
      <CfsStudentEvents />
      <CfsWhyItMatters />
    </>
  );
};

export default index;
