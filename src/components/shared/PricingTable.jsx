"use client"
import React from "react";

const PricingTable = ({ className = "" }) => {
  const pricingData = [
    {
      type: "Individual",
      "1 Year": "₹400",
      "2 Years": "₹700", 
      "5 Years": "₹1700"
    },
    {
      type: "Institution",
      "1 Year": "₹500",
      "2 Years": "₹900",
      "5 Years": "₹2200"
    },
    {
      type: "Corporate",
      "1 Year": "₹750",
      "2 Years": "₹1400",
      "5 Years": "₹3200"
    }
  ];

  return (
    <div className={`overflow-x-auto ${className}`}>
      <table className="w-full border-collapse border border-gray-300 bg-white rounded-lg shadow-sm">
        <thead>
          <tr className="bg-[#A22877] text-white">
            <th className="border border-gray-300 px-4 py-3 text-left font-semibold">
              Type
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              1 Year
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              2 Years
            </th>
            <th className="border border-gray-300 px-4 py-3 text-center font-semibold">
              5 Years
            </th>
          </tr>
        </thead>
        <tbody>
          {pricingData.map((row, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}>
              <td className="border border-gray-300 px-4 py-3 font-medium text-gray-900">
                {row.type}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#A22877]">
                {row["1 Year"]}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#A22877]">
                {row["2 Years"]}
              </td>
              <td className="border border-gray-300 px-4 py-3 text-center font-semibold text-[#A22877]">
                {row["5 Years"]}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PricingTable; 