import React from 'react'
import Image from 'next/image'
import InfoBoxes from '../shared/InfoBoxes'

const WhyChoose = () => {
 

  const naacBoxes = [
    {
      number: "01",
      title: "Industry-Aligned Curriculum",
      description: "Designed with aviation sector standards in mind"
    },
    {
      number: "02",
      title: "Strategic Industry Exposure",
      description: "Build hands-on skills for airlines, airports, and MROs"
    },
    {
      number: "03",
      title: "Career-Ready Soft Skills",
      description: "Communication, leadership, and teamwork from Day 1"
    },
    {
      number: "04",
      title: "Faculty with Field Experience",
      description: "Learn from mentors who've worked in aviation"
    },
    {
      number: "05",
      title: "Operational Readiness",
      description: "Focus on real-world roles from ground to management"
    }
  ]

  return (
    <>
     <div className='bg-[#FFEFE3] py-16'>
      <p className="text-lg md:text-xl text-[#010066] max-w-5xl monser-400 text-center mx-auto">
      BBA Aviation Management program at AIMS is designed for students aiming to take flight in a competitive global market. With strong academic grounding and industry links, our course equips you with the tools to navigate the aviation sector from day one. Considered as one of the Best BBA Aviation Management College in Bengaluru, you will graduate with the expertise to soar in one of the world’s fastest-growing industries.
        </p></div>
     <div className="py-16 md:py-16">
      <div className="container mx-auto px-4 md:px-6"> 
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[65px] font-bold text-[#0C2165] mb-4 playfair-300">
            Why Choose the <br/> <span className="text-[#A22877] italic playfair-400 ">
            BBA in Aviation Management</span> <span className='text-[#A22877] playfair-400'>at AIMS</span>
          </h2>
        </div>
      </div>
      <InfoBoxes boxes={naacBoxes} />
    </div>
    </>
     
  )
}

export default WhyChoose
