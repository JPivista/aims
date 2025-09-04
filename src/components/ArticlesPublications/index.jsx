import React from "react"
import HeroBanner from "./HeroBanner"
import Publications from "./Publications"
import OurRepository from "./OurRepository"
const ArticlesPublications = () => {
  return (
    <div className="w-full">
      <HeroBanner />
      <OurRepository />
      <Publications />
      {/* Add more components here as they are created */}
    </div>
  )
}

export default ArticlesPublications
