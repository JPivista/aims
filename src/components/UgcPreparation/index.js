import React from "react";
import SemesterAccordion from "./SemesterAccordion";
import Banner from "./Banner";
import Breadcrumbs from "../shared/Breadcrumbs";
const index = () => {
  return (
    <div>
      <Banner />
      <Breadcrumbs />
      <SemesterAccordion />
    </div>
  );
};

export default index;
