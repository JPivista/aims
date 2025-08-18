import React from "react";
import HeroBannerRecruiter from "./HeroBannerRecruiter";
import AtAims from "./AtAims";
import Companies from "../shared/Companies";
import ReadyToDraw from "../shared/ReadyToDraw";
const Recruiters = () => {
  return (
    <>
      <HeroBannerRecruiter />
      <AtAims />
      <Companies />
      <ReadyToDraw secondaryButtonText={false} tertiaryButtonText={false} />
    </>
  );
};

export default Recruiters;
