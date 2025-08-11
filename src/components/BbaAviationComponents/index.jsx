import React from 'react'
import HeroBanner from './HeroBanner'
import WhyChoose from './WhyChoose'
import Overview from './Overview'
import BbaAviationCourseStructure from './BbaAviationCourseStructure'
import ValueAddedPrograms from './ValueAddedPrograms'
import PracticalSkills from './PracticalSkills'
import ReadyToDraw from './ReadyToDraw'
import Ambitions from './Ambitions'

const BbaAviationComponents = ({ announcements }) => {
  return (
    <>
      <HeroBanner announcements={announcements} />
      <WhyChoose />
      <Overview />
      <BbaAviationCourseStructure />
      <ValueAddedPrograms />
      <PracticalSkills />
      <Ambitions />
      <ReadyToDraw />
    </>
  )
}

export default BbaAviationComponents
