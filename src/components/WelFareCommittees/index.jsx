import React from 'react'
import HeroBanner from './HeroBanner'
import Committees from './Committees'
import TabSection from './TabSection'
import Breadcrumbs from '../shared/Breadcrumbs'
const WelFareCommittees = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <Committees />
      <TabSection />
    </>
  )
}

export default WelFareCommittees
