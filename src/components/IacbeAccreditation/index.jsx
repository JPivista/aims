import React from "react";
import HeroBanner from "./HeroBanner";
import Accredited from "./Accredited";
import PublicDisclosure from "./PublicDisclosure";
import Breadcrumbs from "../shared/Breadcrumbs";
const index = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <Accredited />
      <PublicDisclosure />
    </>
  );
};

export default index;
