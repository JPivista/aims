import React from "react";
import HeroBanner from "./HeroBanner";

import Since from "./Since";

// import AimersInAction from './AimersInAction'

import Slide from "./Slide";
import CampusUpdates from "./CampusUpdates";

const HomeComponents = () => {
  return (
    <>
      <HeroBanner />
      <Since />

      <Slide />
      <CampusUpdates />
    </>
  );
};

export default HomeComponents;
