import React from 'react'
import Banner from './Banner'
import Studentpage from './Studentpage'
import StudentclubTab from './StudentclubTab'
import Impact from './Impact'
import GetInvolvedSection from './GetInvolvedSection'
import Breadcrumbs from '../shared/Breadcrumbs'
const index = () => {
  return (
    <>
    <div>
      <Banner/>
      <Breadcrumbs />
      <Studentpage/>
      <StudentclubTab/>
      <Impact/>
      <GetInvolvedSection/>
    </div>
    </>
  )
}

export default index