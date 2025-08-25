import React from "react";
import ArticlesPublications from "@/components/ArticlesPublications";
import Seo from "@/components/shared/Seo/Seo";

const ArticlesPublicationsPage = () => {
  const seoField = {
    title: "Articles & Publications | Top MBA Colleges in Bangalore",
    description: "Explore insights from one of the few colleges with IACBE and ACBSP equivalent accreditations in India. AIMS ranks among the Top MBA Colleges in Bangalore.",
    path: "/articles-publications",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  };

  return (
    <>
      <Seo {...seoField} />
      <ArticlesPublications />
    </>
  );
};

export default ArticlesPublicationsPage;
