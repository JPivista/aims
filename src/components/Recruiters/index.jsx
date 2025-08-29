import React from "react";
import HeroBannerRecruiter from "./HeroBannerRecruiter";
import AtAims from "./AtAims";
import Companies from "../shared/Companies";
import ReadyToDraw from "../shared/ReadyToDraw";
import Breadcrumbs from "../shared/Breadcrumbs";
const Recruiters = () => {
  return (
    <>
      <HeroBannerRecruiter />
      <Breadcrumbs />
      <AtAims />
      <Companies />
      <ReadyToDraw secondaryButtonText={false} tertiaryButtonText={false} />
    </>
  );
};

export default Recruiters;
