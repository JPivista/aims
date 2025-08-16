import React from "react"

const Table = ({ title, headers, data }) => {
  return (
    <div className="py-8">
      <div className="container mx-auto">
        {/* Title */}
        <h2 className="text-2xl md:text-[65px]  mb-6 playfair-300 text-center">
          {title}
        </h2>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-[#808080]">
            {/* Header */}
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className="bg-[#531675] text-white text-sm md:text-[20px] py-2 px-2 text-center border border-[#808080] monser-600"
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, rowIndex) => (
                <tr key={rowIndex}>
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`text-sm sm:text-base md:text-lg py-3 sm:py-4 px-2 sm:px-4 text-center border border-gray-300 ${
                        cellIndex === 1 || cellIndex === 3
                          ? "bg-[#E1F9F4]"
                          : "bg-white"
                      }`}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Table
