import React from "react";
import HeroBanner from "./HeroBanner";
import BridgingCampus from "./BridgingCampus";
import PreplacementTraining from "./PreplacementTraining/PreplacementTraining";
import PlacementPolicy from "./PlacementPolicy";
import IneligibilityAndRecruitment from "./IneligibilityAndRecruitment";
const PlacementPolicies = () => {
  return (
    <>
      <HeroBanner />
      <BridgingCampus />
      <PreplacementTraining />
      <PlacementPolicy />
      <IneligibilityAndRecruitment />
    </>
  );
};

export default PlacementPolicies;
