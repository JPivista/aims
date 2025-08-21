import React from "react";
import HeroBanner from "./HeroBanner";

import Since from "./Since";

// import AimersInAction from './AimersInAction'

import Slide from "./Slide";
import CampusUpdates from "./CampusUpdates";
import CampusUpdatesSlider from "./CampusUpdatesCarousel";

const HomeComponents = () => {
  return (
    <>
      <HeroBanner />
      <Since />

      <Slide />
      {/* <CampusUpdatesSlider />
      <CampusUpdates /> */}

    </>
  );
};

export default HomeComponents;
