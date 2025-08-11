import React from 'react'
import Image from 'next/image'

const PracticalSkills = () => {
  const skills = [
    {
      id: 1,
      title: "Aviation Business Analysis",
      description: "Develop analytical skills to evaluate aviation market trends, airline performance metrics, and industry dynamics.",
      icon: "📊"
    },
    {
      id: 2,
      title: "Aviation Operations Management",
      description: "Learn to manage airline operations, airport logistics, and aviation supply chain processes effectively.",
      icon: "✈️"
    },
    {
      id: 3,
      title: "Aviation Financial Management",
      description: "Master aviation finance, cost analysis, revenue management, and financial planning for aviation businesses.",
      icon: "💰"
    },
    {
      id: 4,
      title: "Aviation Marketing & Sales",
      description: "Develop skills in aviation marketing strategies, customer relationship management, and sales techniques.",
      icon: "🎯"
    },
    {
      id: 5,
      title: "Aviation Safety & Security",
      description: "Understand aviation safety protocols, security measures, and regulatory compliance requirements.",
      icon: "🛡️"
    },
    {
      id: 6,
      title: "Aviation Technology & Innovation",
      description: "Stay updated with aviation technology trends, digital transformation, and innovation in the industry.",
      icon: "🚀"
    }
  ]

  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-[65px] font-bold text-[#0C2165] mb-4 playfair-300">
            Practical Skills You'll <br/> <span className="text-[#A22877] italic playfair-400">Develop</span>
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto monser-400">
            Our BBA Aviation program focuses on developing practical skills that are essential for success in the aviation industry.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div
              key={skill.id}
              className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="text-4xl md:text-5xl mb-4">{skill.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#0C2165] mb-3 playfair-300">
                {skill.title}
              </h3>
              <p className="text-gray-600 monser-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 md:mt-16 text-center">
          <p className="text-lg md:text-xl text-gray-700 max-w-4xl mx-auto monser-400">
            These practical skills are integrated throughout our curriculum and reinforced through real-world projects, 
            industry internships, and hands-on training sessions with aviation professionals.
          </p>
        </div>
      </div>
    </div>
  )
}

export default PracticalSkills
