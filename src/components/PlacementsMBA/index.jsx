import React from "react";
import HeroBanner from "./HeroBanner";
import AveragePackage from "./AveragePackage";
import Companies from "../shared/Companies";
import SectorWise from "./SectorWise";
import TopRecruitingSectors from "./TopRecruitingSectors/TopRecruitingSectors";
import ReadyToDraw from "../shared/ReadyToDraw";
const PlacementsMBA = () => {
  return (
    <>
      <HeroBanner />
      <AveragePackage />
      <SectorWise />
      <TopRecruitingSectors />
      <ReadyToDraw
        title="What This Means for You"
        subtitle="If you’re aiming for a PGDM that leads to real career outcomes, not just promises, AIMS stands ready. As one of the top colleges for PGDM in Bangalore, our training is precise, our placement pipeline is active, and our results speak for themselves."
        primaryButtonText={false}
        secondaryButtonText={false}
        tertiaryButtonText={false}
      />
    </>
  );
};

export default PlacementsMBA;
