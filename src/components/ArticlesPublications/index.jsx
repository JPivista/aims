import React from "react"
import HeroBanner from "./HeroBanner"
import Publications from "./Publications"
import OurRepository from "./OurRepository"
import Breadcrumbs from "../shared/Breadcrumbs"
const ArticlesPublications = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <Breadcrumbs />
      <OurRepository />
      <Publications />
      {/* Add more components here as they are created */}
    </div>
  )
}

export default ArticlesPublications
