import React from "react";
import CentreForSustainability from "@/components/CentreForSustainability";
import Seo from "@/components/shared/Seo/Seo";

const page = () => {
  const seoField = {
    title: "Sustainability Learning in Higher Education Bangalore",
    description: "AIMS Institutes promotes sustainability through education programs in Bengaluru. Explore eco-initiatives, research, and student-driven green projects.",
    path: "/centre-for-sustainability",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  };

  return (
    <>
      <Seo {...seoField} />
      <CentreForSustainability />
    </>
  );
};

export default page;
