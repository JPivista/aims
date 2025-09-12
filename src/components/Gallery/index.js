import React from 'react'
import InfrastructuresGallery from './InfrastructuresGallery'
import Banner from './Banner'
import CampusAndEventGallery from './CampusAndEventGallery'

const index = () => {
  return (
    <div>
      <Banner />
      <InfrastructuresGallery />
      <CampusAndEventGallery />
    </div>
  )
}

export default index