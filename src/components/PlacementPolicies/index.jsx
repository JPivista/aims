import React from "react";
import HeroBanner from "./HeroBanner";
import BridgingCampus from "./BridgingCampus";
import PreplacementTraining from "./PreplacementTraining/PreplacementTraining";
import PlacementPolicy from "./PlacementPolicy";
import IneligibilityAndRecruitment from "./IneligibilityAndRecruitment";
import ReadyToDraw from "../shared/ReadyToDraw";
import Breadcrumbs from "../shared/Breadcrumbs";
const PlacementPolicies = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <BridgingCampus />
      <PreplacementTraining />
      <PlacementPolicy />
      <IneligibilityAndRecruitment />
      <ReadyToDraw
        title="Have questions about placements or need guidance? We’re here to help."
        subtitle={false}
        primaryButtonText="Contact Us"
        secondaryButtonText={false}
        tertiaryButtonText={false}
      />
    </>
  );
};

export default PlacementPolicies;
