import React from 'react'
import Image from 'next/image'

const PracticalSkills = () => {
  const skills = [
    {
      id: 1,
      title: "Business Communication",
      description: "Develop strong written and verbal communication skills essential for professional success.",
      icon: "💬"
    },
    {
      id: 2,
      title: "Financial Analysis",
      description: "Learn to analyze financial statements and make informed business decisions.",
      icon: "📊"
    },
    {
      id: 3,
      title: "Marketing Strategy",
      description: "Understand market dynamics and develop effective marketing campaigns.",
      icon: "🎯"
    },
    {
      id: 4,
      title: "Project Management",
      description: "Master project planning, execution, and monitoring techniques.",
      icon: "📋"
    },
    {
      id: 5,
      title: "Data Analytics",
      description: "Learn to interpret business data and make data-driven decisions.",
      icon: "📈"
    },
    {
      id: 6,
      title: "Leadership Skills",
      description: "Develop leadership qualities and team management capabilities.",
      icon: "👥"
    }
  ]

  return (
    <div className="bg-[#F8F9FA] py-16 md:py-20">
      <div className="container mx-auto px-4 md:px-6">
        {/* Header */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0C2165] mb-4 playfair-400">
            Practical Skills You'll Develop
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto monser-400">
            Our BBA program focuses on developing practical skills that are directly applicable in the business world.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skills.map((skill) => (
            <div key={skill.id} className="bg-white rounded-lg p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
              <div className="text-4xl mb-4">{skill.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold text-[#A22877] mb-3 monser-600">
                {skill.title}
              </h3>
              <p className="text-gray-600 leading-relaxed monser-400">
                {skill.description}
              </p>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-16 md:mt-20 bg-white rounded-2xl p-8 md:p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-[#A22877] mb-4 monser-600">
                Industry-Ready Skills
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6 monser-400">
                Our curriculum is designed in collaboration with industry experts to ensure students develop skills that are immediately applicable in the workplace. From case studies to real-world projects, every aspect of learning is practical and relevant.
              </p>
              <ul className="space-y-2 monser-400">
                <li className="flex items-center text-gray-600">
                  <span className="text-[#A22877] mr-2">✓</span>
                  Hands-on project work
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-[#A22877] mr-2">✓</span>
                  Industry internships
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-[#A22877] mr-2">✓</span>
                  Live case studies
                </li>
                <li className="flex items-center text-gray-600">
                  <span className="text-[#A22877] mr-2">✓</span>
                  Professional certifications
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
              <Image
                src="/MBA/workspace.png"
                alt="Practical Learning"
                width={400}
                height={300}
                className="rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PracticalSkills
