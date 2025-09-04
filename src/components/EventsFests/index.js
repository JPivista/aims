import React from "react"
import Banner from "../../components/EventsFests/Banner"
import EventsFestspage from "../../components/EventsFests/EventsFestspage"
import EventsTab from "../../components/EventsFests/EventsTab"
import Impact from "../../components/EventsFests/Impact"
import ReadytoGet from "./ReadytoGet"

const index = () => {
  return (
    <div>
      <Banner />
      <EventsFestspage />
      <EventsTab />
      <Impact />
      <ReadytoGet />
    </div>
  )
}

export default index
