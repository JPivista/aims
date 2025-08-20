import React from "react"

const AcademicCalendarContent = () => {
  const handleCalendarClick = (text, link) => {
    console.log(`Opening academic calendar: ${text} - ${link}`)
    // Add your navigation logic here
  }

  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h2 className="text-2xl md:text-[36px] font-bold text-[#A22877] mb-4">
        Academic Calendar
      </h2>

      {/* Sub-Heading */}
      <h5 className="text-base sm:text-lg md:text-[28px] text-[#0C2165] monser-500 mb-3 px-2 sm:px-0">
        Stay on Track with Important Dates and Key Academic Milestones:
      </h5>

      {/* Academic Year Links */}
      <div className="space-y-3 sm:space-y-4 px-2 sm:px-0">
        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-all duration-200 min-h-[60px] sm:min-h-auto touch-manipulation"
          onClick={() =>
            handleCalendarClick("Academic Year 2023-24", "/calendar/2023-24")
          }
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-[18px] text-gray-800 mb-2 sm:mb-0">
            Academic Year 2023-24
          </span>
          <span className="text-sm sm:text-sm text-[#A22877] font-medium self-start sm:self-auto">
            [View Here]
          </span>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-all duration-200 min-h-[60px] sm:min-h-auto touch-manipulation"
          onClick={() =>
            handleCalendarClick("Academic Year 2022-23", "/calendar/2022-23")
          }
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-[18px] text-gray-800 mb-2 sm:mb-0">
            Academic Year 2022-23
          </span>
          <span className="text-sm sm:text-sm text-[#A22877] font-medium self-start sm:self-auto">
            [View Here]
          </span>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-all duration-200 min-h-[60px] sm:min-h-auto touch-manipulation"
          onClick={() =>
            handleCalendarClick("Academic Year 2021-22", "/calendar/2021-22")
          }
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-[18px] text-gray-800 mb-2 sm:mb-0">
            Academic Year 2021-22
          </span>
          <span className="text-sm sm:text-sm text-[#A22877] font-medium self-start sm:self-auto">
            [View Here]
          </span>
        </div>

        <div
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between p-4 sm:p-4 border border-gray-200 rounded-lg hover:bg-gray-50 active:bg-gray-100 cursor-pointer transition-all duration-200 min-h-[60px] sm:min-h-auto touch-manipulation"
          onClick={() =>
            handleCalendarClick("Academic Year 2020-21", "/calendar/2020-21")
          }
        >
          <span className="text-base sm:text-lg md:text-xl lg:text-[18px] text-gray-800 mb-2 sm:mb-0">
            Academic Year 2020-21
          </span>
          <span className="text-sm sm:text-sm text-[#A22877] font-medium self-start sm:self-auto">
            [View Here]
          </span>
        </div>
      </div>
    </div>
  )
}

export default AcademicCalendarContent
