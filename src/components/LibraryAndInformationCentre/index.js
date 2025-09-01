import React from "react";
import Banner from "./Banner";
import AcademicHub from "./AcademicHub";
import WhatYouFind from "./WhatYouFind";
import ServicesOffered from "./ServicesOffered";
import Resources from "./Resources";
import QuickLinks from "./QuickLinks";
import Breadcrumbs from "../shared/Breadcrumbs";
const index = () => {
  return (
    <div>
      <Banner />
      <Breadcrumbs />
      <AcademicHub />
      <WhatYouFind />
      <ServicesOffered />
      <Resources />
      <QuickLinks />
    </div>
  );
};

export default index;
