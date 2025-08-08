import React from 'react'
import ValueAddedPrograms from '../shared/ValueAddedProgramsProps'
import Image from 'next/image'

// Sample data structure for value added programs
const sampleProgramsData = [
    {
        id: 'certifications',
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
        id: 'workshops-specialised',
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
        id: 'placement-career',
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
        id: 'soft-skills',
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
        id: 'wellness-life-skills',
        title: 'Wellness & Life Skills',
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
    }
]

// Sample props for different use cases
const sampleProps = {
    title: 'Value Added Programs',
    description: 'In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.',
    disclaimer: 'Presentations by the scholars are scheduled every month in the presence of the respective guides and senior professors which help the scholars in speeding up their research works.',
}

const ValueAddedProgramsProps = () => {
    return (
        <>
         <ValueAddedPrograms
            programsData={sampleProgramsData}
            title={sampleProps.title}
            description={sampleProps.description}
            disclaimer={sampleProps.disclaimer}
        />
         {/* Student Image with Overlay */}
         <div className="relative">
          <div className="w-full h-auto">
            <Image
              src="/MBA/student.jpg"
              alt="AIMS Students"
              width={800}
              height={400}
              className="w-full h-auto"
              priority
            />
          </div>
          
          {/* Gradient Overlay */}
          <div 
            className="absolute inset-0 w-1/2 h-full"
            style={{
              background: 'linear-gradient(90deg, var(--Aims-Blue, #0C2165) 1.84%, var(--Aims-Blue, #0C2165) 64.13%, rgba(12, 33, 101, 0.00) 100%)'
            }}
          ></div>
          
          {/* Text Overlay */}
          <div className="absolute inset-0 flex items-center">
            <div className="w-1/2 px-4 sm:px-6  md:ml-10">
              <h2 className="text-white text-xl md:text-[72px] playfair-300 mb-3 md:mb-6 leading-tight">
                Companies <br/>Our Students Have <br/> Been Placed In
              </h2>
              <p className="text-white text-xs sm:text-sm md:text-base monser-400 leading-relaxed">
                Our MBA graduates have found opportunities with a wide range of dependable recruiters from across industries, including:
              </p>
            </div>
          </div>
        </div>
        </>
       
    )
}

export default ValueAddedProgramsProps 