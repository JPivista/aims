import React from "react"
import EventsFests from "@/components/EventsFests"
import Seo from "@/components/shared/Seo/Seo"

const page = () => {
  const seoField = {
    title: "Events & Fests | Best Business School in Bangalore",
    description: "Experience valuebased education business school life through vibrant events and fests, built on a global business trends curriculum in Bangalore.",
    path: "/events-fests",
    metaImage: "/images/aims-logo.png",
    pageType: "EducationalOrganization",
  }

  return (
    <>
      <Seo {...seoField} />
      <div>
        <EventsFests />
      </div>
    </>
  )
}

export default page
