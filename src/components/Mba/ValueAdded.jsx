import React from "react"

const ValueAdded = () => {
  return (
    <>
      <div className="bg-white min-h-[400px] md:min-h-[500px] my-6 md:my-8 lg:my-10 px-4 md:px-6 lg:px-0">
        <div className="container mx-auto py-8 md:py-12">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-aims-purple mb-4">
              Value Added Programs
            </h2>
            <p className="text-sm md:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto">
              Enhance your MBA experience with our specialized value-added
              programs designed to give you a competitive edge in the business
              world.
            </p>
          </div>

          {/* Placeholder for future content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
              <div className="w-16 h-16 bg-aims-orange rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-aims-purple mb-2">
                Industry Certifications
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Get certified in industry-standard tools and methodologies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center">
              <div className="w-16 h-16 bg-aims-teal rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-aims-purple mb-2">
                Soft Skills Training
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Develop essential leadership and communication skills.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-6 md:p-8 text-center md:col-span-2 lg:col-span-1">
              <div className="w-16 h-16 bg-aims-blue rounded-full mx-auto mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-aims-purple mb-2">
                Career Development
              </h3>
              <p className="text-sm md:text-base text-gray-600">
                Personalized career guidance and placement support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default ValueAdded
