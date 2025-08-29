import React from 'react'
import HeroBanner from './HeroBanner'
import Content from './Content'
import OurTopStudent from './OurTopStudent/OurTopStudent'
import Breadcrumbs from '../shared/Breadcrumbs'
const UniversityRankHolders = () => {
  return (
    <>
      <HeroBanner />
      <Breadcrumbs />
      <Content />
      <OurTopStudent />
    </>
  )
}

export default UniversityRankHolders
