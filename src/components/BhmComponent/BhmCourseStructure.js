'use client'
import React from 'react'
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
          "Housekeeping Practical - I"
        ]
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
          "Nutrition",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - II",
          "Food & Beverage Service Practical - II",
          "Front Office Practical - II",
          "Housekeeping Practical - II"
        ]
      }
    ]
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
          "Food & Beverage Production - III",
          "Food & Beverage Service - III",
          "Front Office - III",
          "Housekeeping - III",
          "Hotel Engineering",
          "Communication Skills",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - III",
          "Food & Beverage Service Practical - III",
          "Front Office Practical - III",
          "Housekeeping Practical - III"
        ]
      },
      {
        key: "semester-4",
        label: "SEMESTER 4",
        courses: [
          { type: "subheading", text: "Theory" },
          "Food & Beverage Production - IV",
          "Food & Beverage Service - IV",
          "Front Office - IV",
          "Housekeeping - IV",
          "Hotel Accountancy",
          "Computer Applications",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - IV",
          "Food & Beverage Service Practical - IV",
          "Front Office Practical - IV",
          "Housekeeping Practical - IV"
        ]
      }
    ]
  },
  {
    key: "third-year",
    title: "Third Year",
    tabs: [
      {
        key: "semester-5",
        label: "SEMESTER 5",
        courses: [
          { type: "subheading", text: "Theory" },
          "Food & Beverage Production - V",
          "Food & Beverage Service - V",
          "Front Office - V",
          "Housekeeping - V",
          "Financial Management",
          "Food Science",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - V",
          "Food & Beverage Service Practical - V",
          "Front Office Practical - V",
          "Housekeeping Practical - V"
        ]
      },
      {
        key: "semester-6",
        label: "SEMESTER 6",
        courses: [
          { type: "subheading", text: "Theory" },
          "Food & Beverage Production - VI",
          "Food & Beverage Service - VI",
          "Front Office - VI",
          "Housekeeping - VI",
          "Marketing Management",
          "Research Methodology",
          { type: "subheading", text: "Practical" },
          "Food & Beverage Production Practical - VI",
          "Food & Beverage Service Practical - VI",
          "Front Office Practical - VI",
          "Housekeeping Practical - VI"
        ]
      }
    ]
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
          "Strategic Management",
          "Hospitality Law",
          "Human Resource Management",
          "Elective I",
          { type: "subheading", text: "Practical" },
          "Project Work / Internship"
        ]
      },
      {
        key: "semester-8",
        label: "SEMESTER 8",
        courses: [
          { type: "subheading", text: "Theory" },
          "Entrepreneurship Development",
          "Hospitality Management",
          "Elective II",
          { type: "subheading", text: "Practical" },
          "Final Project / Viva Voce"
        ]
      }
    ]
  }
]

const BhmCourseStructure = () => {
  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto ">
        <div>
          <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2 px-4 lg:px-0">
            BHM Program <br />
            <span className="text-[#0C2165] playfair-400">Course Structure</span>
          </h3>
        </div>
      </div>
      <TabCourseStructure courseData={sampleCourseData} />
    </div>
  )
}

export default BhmCourseStructure
