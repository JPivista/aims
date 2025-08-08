import React from "react"

const ValueAdded = () => {
  return (
    <>
      <div className="bg-white min-h-[300px] sm:min-h-[350px] md:min-h-[400px] lg:min-h-[500px] my-4 sm:my-6 md:my-8 lg:my-10 px-4 md:px-6 lg:px-0">
        <div className="container mx-auto py-6 sm:py-8 md:py-10 lg:py-12">
          <div className="text-center mb-6 sm:mb-8 md:mb-10 lg:mb-12">
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-aims-purple mb-3 sm:mb-4 leading-tight">
              Value Added Programs
            </h2>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-gray-600 max-w-2xl sm:max-w-3xl mx-auto px-2 sm:px-4 leading-relaxed">
              Enhance your MBA experience with our specialized value-added
              programs designed to give you a competitive edge in the business
              world.
            </p>
          </div>

          {/* Placeholder for future content */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-aims-orange rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">1</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-aims-purple mb-2 sm:mb-3 leading-tight">
                Industry Certifications
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Get certified in industry-standard tools and methodologies.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 text-center">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-aims-teal rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">2</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-aims-purple mb-2 sm:mb-3 leading-tight">
                Soft Skills Training
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
                Develop essential leadership and communication skills.
              </p>
            </div>

            <div className="bg-gray-50 rounded-lg p-4 sm:p-6 md:p-8 text-center sm:col-span-2 lg:col-span-1">
              <div className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 bg-aims-blue rounded-full mx-auto mb-3 sm:mb-4 flex items-center justify-center">
                <span className="text-white font-bold text-lg sm:text-xl">3</span>
              </div>
              <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-semibold text-aims-purple mb-2 sm:mb-3 leading-tight">
                Career Development
              </h3>
              <p className="text-xs sm:text-sm md:text-base lg:text-lg text-gray-600 leading-relaxed">
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
