import React from 'react'
import InfoBoxes from '../shared/InfoBoxes'

const WhyChoose = () => {
  const naacBoxes = [
    {
      number: "01",
      title: "NAAC 'A' Grade Institution",
      description: "Recognised among the Top B-Schools in India, with over 25 years of academic excellence"
    },
    {
      number: "02",
      title: "Focus on Industry Readiness",
      description: "Hands-on training, real-world projects, business simulations, and cross-border case studies"
    },
    {
      number: "03",
      title: "Entrepreneurship & Innovation",
      description: "Mentorship and incubation support for students ready to launch"
    },
    {
      number: "04",
      title: "Advanced Learning Tools",
      description: "Digital classrooms, practical casework, and access to global business platforms"
    },
    {
      number: "05",
      title: "Global Exposure Opportunities",
      description: "International collaborations and global exchange programs"
    }
  ]

  return (
    <div className="py-16 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <p className="text-lg md:text-xl text-[#010066] max-w-5xl monser-400 text-center mx-auto pb-10">
        Experience the foundation of business leadership at AIMS Institutes, acknowledged as one of the Top B schools in India where precision, focus, and ambition drive every student’s journey. The Bachelor of Business Administration (BBA) program is crafted for emerging leaders who aspire to chart a clear path in the world of business.
        </p>
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[65px] font-bold text-[#0C2165] mb-4 playfair-300">
            Why Choose the <br/> <span className="text-[#A22877] italic playfair-400 ">AIMS BBA?</span>
          </h2>
    
        </div>
      </div>
      <InfoBoxes boxes={naacBoxes} />
    </div>
  )
}

export default WhyChoose
