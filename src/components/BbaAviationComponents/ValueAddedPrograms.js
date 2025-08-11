import React from 'react'
import Image from 'next/image'
import ValueAddedProgramsProps from '../shared/ValueAddedProgramsProps'

const ValueAddedPrograms = () => {
  const sampleProps = {
    title: 'Value Added<br/>Programs',
    description: 'In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.',
    disclaimer: 'Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.',
    image: '/bba/one-degree.jpg',
    programs: [
      {
        title: 'Certifications (Technical & Domain-Specific)',
        content: [
          'Capstone CAPSIM Simulation',
          'Certification on Advanced Excel',
          'Certification on Sustainability',
          'Certification on Insurance Management',
          'Certification on Entrepreneurship',
          'Certification on BFSI',
          'Certification on SCM',
          'Certification on Digital Marketing',
          'Global Online Certifications on Change Management, and Operations & Information Management'
        ]
      },
      {
        title: 'Workshops & Specialised Training',
        content: [
          'Capstone CAPSIM Simulation',
          'Certification on Advanced Excel',
          'Certification on Sustainability',
          'Certification on Insurance Management',
          'Certification on Entrepreneurship',
          'Certification on BFSI',
          'Certification on SCM',
          'Certification on Digital Marketing',
          'Global Online Certifications on Change Management, and Operations & Information Management'
        ]
      },
      {
        title: 'Placement & Career Preparation',
        content: [
          'Capstone CAPSIM Simulation',
          'Certification on Advanced Excel',
          'Certification on Sustainability',
          'Certification on Insurance Management',
          'Certification on Entrepreneurship',
          'Certification on BFSI',
          'Certification on SCM',
          'Certification on Digital Marketing',
          'Global Online Certifications on Change Management, and Operations & Information Management'
        ]
      },
      {
        title: 'Soft Skills & Professional Grooming',
        content: [
          'Capstone CAPSIM Simulation',
          'Certification on Advanced Excel',
          'Certification on Sustainability',
          'Certification on Insurance Management',
          'Certification on Entrepreneurship',
          'Certification on BFSI',
          'Certification on SCM',
          'Certification on Digital Marketing',
          'Global Online Certifications on Change Management, and Operations & Information Management'
        ]
      },
      {
        title: 'Wellness & Life Skills',
        content: [
          'Firefighting at Peenya Fire Station',
          'Certification in hygiene, sanitation, general nutrition management & physical fitness',
          'Webinar on emotional wellbeing',
          'Yoga & Meditation',
          'Survival Training'
        ]
      }
    ]
  }

  return (
    <div className="relative">
      {/* Background Image */}
      <div className="relative w-full h-[400px] md:h-[500px]">
        <Image
          src={sampleProps.image}
          alt="Value Added Programs"
          fill
          className="object-cover"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-[#0C2165] opacity-80"></div>
        
        {/* Content */}
        <div className="absolute inset-0 flex items-center">
          <div className="container mx-auto px-4 md:px-6">
            <ValueAddedProgramsProps {...sampleProps} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ValueAddedPrograms
