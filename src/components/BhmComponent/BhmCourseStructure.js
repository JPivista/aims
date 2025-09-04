"use client"
import React from "react"
import TabCourseStructure from "@/components/BhmComponent/TabCourseStructure"

// ✅ Full BHM JSON (8 Semesters)
const sampleCourseData = [
  {
    key: "first-year",
    title: "First Year",
    tabs: [
      {
        key: "semester-1",
        label: "SEMESTER 1",
        courses: [
          { type: "subheading", text: "Theory" },
          "Language - I",
          "Language - II",
          "Food & Beverage Production - I",
          "Food & Beverage Service - I",
          "Front Office - I",
          "Housekeeping - I",
          "Environmental Studies",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - I",
          "Food & Beverage Service Practical - I",
          "Front Office Practical - I",
          "Housekeeping Practical - I",
        ],
      },
      {
        key: "semester-2",
        label: "SEMESTER 2",
        courses: [
          { type: "subheading", text: "Theory" },
          "Language - I",
          "Language - II",
          "Food & Beverage Production - II",
          "Food & Beverage Service - II",
          "Front Office - II",
          "Housekeeping - II",
          "Computer Fundamentals with Prime Tally(CFPT)",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - II",
          "Food & Beverage Service Practical - II",
          "Front Office Practical - II",
          "Housekeeping Practical - II",
        ],
      },
    ],
  },
  {
    key: "second-year",
    title: "Second Year",
    tabs: [
      {
        key: "semester-3",
        label: "SEMESTER 3",
        courses: [
          { type: "subheading", text: "Theory" },
          "Language - I",
          "Language - II",
          "Food & Beverage Production - III",
          "Food & Beverage Service - III",
          "Front Office - III",
          "Housekeeping - III",
          "Constitution of India /Constitutional Values",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production - III",
          "Food & Beverage Service Practical - III",
          "Front Office Practical - III",
          "Housekeeping Practical - III",
        ],
      },
      {
        key: "semester-4",
        label: "SEMESTER 4",
        courses: [
          { type: "subheading", text: "Theory" },
          "Language - I",
          "Language - II",
          "Food & Beverage Production– IV",
          "Food & Beverage Service - IV",
          "Front Office - IV",
          "Housekeeping - IV",
          "Hospitality Etiquettes & Communication Skills",

          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - IV",
          "Food & Beverage Service Practical - IV",
          "Front Office Practical - IV",
          "Housekeeping Practical - IV",
        ],
      },
    ],
  },
  {
    key: "third-year",
    title: "Third Year",
    tabs: [
      {
        key: "semester-5",
        label: "SEMESTER 5",
        courses: [
          {
            type: "subheading",
            text: "Industrial Exposure Training (20 Weeks):",
          },
          "Log Book",
          "Viva & Presentation",
          "Industrial Training Report",
        ],
      },
      {
        key: "semester-6",
        label: "SEMESTER 6",
        courses: [
          { type: "subheading", text: "Theory" },
          "Bakery & Pastry Arts",
          "Information Technology in Hotels",
          "Rooms Division Management",
          "Travel and Tourism Management",
          " Hotel Finance and Accounting",

          { type: "subheading", text: "Practical" },
          "Specialisation (Electives) -",
          " - Culinary Management",
          "- Food and Beverage Management",
          "- Front Office Management",
          "- Accommodation Management",
          "Bakery and Pastry Arts Practical",
          "Information Technology in Hotels Practical’s",
        ],
      },
    ],
  },
  {
    key: "fourth-year",
    title: "Fourth Year",
    tabs: [
      {
        key: "semester-7",
        label: "SEMESTER 7",
        courses: [
          { type: "subheading", text: "Theory" },
          "Allied Hospitality Management",
          "Revenue Management in Hotels",
          "Research Methodology",
          "Entrepreneurship Development in Hospitality",
          "Marketing for Hospitality Services & Products.",
          "Creative Design in Hospitality",
          "Project Work –Entrepreneurship Development",
        ],
      },
      {
        key: "semester-8",
        label: "SEMESTER 8",
        courses: [
          { type: "subheading", text: "Theory" },
          "Training Report",
          "Log Book",
          "Specialization Research Paper",
          "Viva Voice & Presentation",
        ],
      },
    ],
  },
]

const BhmCourseStructure = () => {
  return (
    <div className="py-10 bg-white px-4 lg:px-8">
      <div className="container mx-auto ">
        <div>
          <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2 ">
            <span className="italic playfair-400">BHM Program</span> <br />
            <span className="text-[#0C2165] playfair-400">
              Course Structure
            </span>
          </h3>
        </div>
      </div>
      <TabCourseStructure courseData={sampleCourseData} />
    </div>
  )
}

export default BhmCourseStructure
