"use client"
import React, { useEffect, useRef, useState } from "react"

const Table = ({ title, headers, data }) => {
  const [isVisible, setIsVisible] = useState(false)
  const tableRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
        } else {
          setIsVisible(false)
        }
      },
      { threshold: 0.1 }
    )

    if (tableRef.current) {
      observer.observe(tableRef.current)
    }

    return () => {
      if (tableRef.current) {
        observer.unobserve(tableRef.current)
      }
    }
  }, [])

  return (
    <div className="py-8" ref={tableRef}>
      <div className="container mx-auto">
        {/* Title */}
        <div
          className={`text-2xl md:text-[65px] mb-6 playfair-300 text-center transition-all duration-700 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {title}
        </div>

        {/* Table */}
        <div
          className={`overflow-x-auto transition-all duration-700 delay-300 ease-out ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <table className="w-full border-collapse border border-[#808080]">
            {/* Header */}
            <thead>
              <tr>
                {headers.map((header, index) => (
                  <th
                    key={index}
                    className={`bg-[#531675] text-white text-sm md:text-[20px] py-2 px-2 text-center border border-[#808080] monser-600 transition-all duration-500 ease-out ${
                      isVisible
                        ? "opacity-100 translate-y-0"
                        : "opacity-0 -translate-y-4"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    {header}
                  </th>
                ))}
              </tr>
            </thead>

            {/* Body */}
            <tbody>
              {data.map((row, rowIndex) => (
                <tr
                  key={rowIndex}
                  className={`transition-all duration-800 ease-out hover:bg-gray-50 ${
                    isVisible
                      ? "opacity-100 translate-x-0"
                      : "opacity-0 -translate-x-4"
                  }`}
                  style={{ transitionDelay: `${rowIndex * 150}ms` }}
                >
                  {row.map((cell, cellIndex) => (
                    <td
                      key={cellIndex}
                      className={`text-sm sm:text-base md:text-lg py-3 sm:py-4 px-2 sm:px-4 text-center border border-gray-300 transition-all duration-200 ${
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
