"use client";
import { useState } from "react";

const TableComponent = () => {
  const [search, setSearch] = useState("");
  const [selectedYear, setSelectedYear] = useState("All Years");

  const data = [
    {
      rank: 2,
      name: "Ms. Gayatri Singh",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Mahesh Kumar Sah",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Denkala Hari Krishna",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Louis Sudeep",
      course: "BHM",
      year: 2023,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Louis Sudeep",
      course: "BHM",
      year: 2022,
      university: "Bangalore University",
    },
    {
      rank: 3,
      name: "Mr. Louis Sudeep",
      course: "BHM",
      year: 2021,
      university: "Bangalore University",
    },
  ];

  // 🔎 Apply filters: search + year
  const filteredData = data.filter((item) => {
    const matchesSearch =
      item.name.toLowerCase().includes(search.toLowerCase()) ||
      item.course.toLowerCase().includes(search.toLowerCase());

    const matchesYear =
      selectedYear === "All Years" || item.year.toString() === selectedYear;

    return matchesSearch && matchesYear;
  });

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      {/* Search and Year Filter */}
      <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-6">
        <input
          type="text"
          placeholder="Search by name or course"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full md:w-2/3 px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-0 bg-[#0A1F63] text-white placeholder-white"
        />
        <select
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className="px-6 py-2 bg-[#0C2165] text-white font-semibold rounded-lg"
        >
          <option>All Years</option>
          <option>2023</option>
          <option>2022</option>
          <option>2021</option>
        </select>
      </div>

      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm md:text-base">
          <thead>
            <tr className="bg-[#531675] text-white text-left">
              <th className="p-3 border-r">Rank</th>
              <th className="p-3 border-r">Name</th>
              <th className="p-3 border-r">Course</th>
              <th className="p-3 border-r">Year</th>
              <th className="p-3">University</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.length > 0 ? (
              filteredData.map((row, index) => (
                <tr
                  key={index}
                  className="border border-black text-gray-800 text-left"
                >
                  <td className="p-3 border-r border-black">{row.rank}</td>
                  <td className="p-3 bg-[#e0f9f4] border-r border-black">
                    {row.name}
                  </td>
                  <td className="p-3 border-r border-black">{row.course}</td>
                  <td className="p-3 bg-[#e0f9f4] border-r border-black">
                    {row.year}
                  </td>
                  <td className="p-3">{row.university}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center p-4 text-gray-500">
                  No data found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TableComponent;
