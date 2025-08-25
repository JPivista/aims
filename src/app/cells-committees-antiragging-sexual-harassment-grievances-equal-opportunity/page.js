import React from "react";
import WelFareCommittees from "@/components/WelFareCommittees";
import Seo from "@/components/shared/Seo/Seo";

const page = () => {
  const seoField = {
    title: "Student Development & Dynamic Community | AIMS",
    description: "Discover student development in business education at AIMS. Join a dynamic student community in one of the top colleges in Bangalore for growth & opportunity.",
    path: "/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  };

  return (
    <>
      <Seo {...seoField} />
      <WelFareCommittees />
    </>
  );
};

export default page;
