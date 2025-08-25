import React from "react";
import RotaractClub from "@/components/RotaractClub";
import Seo from "@/components/shared/Seo/Seo";

const page = () => {
  const seoField = {
    title: "Civic-Minded Students | AIMS Rotaract Club, Bangalore",
    description: "Colleges for civic responsibility development in Bangalore: Student-led social initiatives, community service & skills development through consulting in Bangalore.",
    path: "/rotaract-club",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  };

  return (
    <>
      <Seo {...seoField} />
      <RotaractClub />
    </>
  );
};

export default page;
