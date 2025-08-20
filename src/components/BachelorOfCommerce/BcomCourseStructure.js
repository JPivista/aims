'use client'
import React from 'react'
import TabCourseStructure from '../Tab/TabCourseStructure'

// Sample data structure for the course structure
const sampleCourseData = [
    {
        key: "first-year",
        title: "First Year",
        tabs: [
            {
                key: "semester-1",
                label: "SEMESTER 1",
                image: "/mcom/students-semester1.jpg",
                courses: [
                    "Language: Kannada / Hindi / Additional English / Sanskrit / Tamil / Telugu / Malayalam / Marathi",
                    "English",
                    "Financial Accountancy",
                    "Corporate Law",
                    "Modern Marketing",
                    "Business Quantitative Analysis",
                    "Environmental studies (EVS)"
                ]
            },
            {
                key: "semester-2",
                label: "SEMESTER 2",
                image: "/mcom/students-semester2.jpg",
                courses: [
                    "Language: Kannada / Hindi / Additional English / Sanskrit / Tamil / Telugu / Malayalam / Marathi",
                    "English",
                    "Advanced Financial Accounting",
                    "Environmental studies (EVS)",
                    "Human Capital Management",
                    "Business Data Analysis",
                    "Computer Accounting - Tally Prime (CATP)"
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
                image: "/mcom/students-semester3.jpg",
                courses: [
                    "Language: Kannada / Hindi / Additional English / Sanskrit / Tamil / Telugu / Malayalam / Marathi",
                    "English",
                    "Corporate Accounting",
                    "Financial Management",
                    "Cost Accounting",
                    "Indian Financial System",
                    "Constitution of India (CI)"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/mcom/students-semester4.jpg",
                courses: [
                    "Language: Kannada / Hindi / Additional English / Sanskrit / Tamil / Telugu / Malayalam / Marathi",
                    "English",
                    "Advanced Corporate Accounting",
                    "Costing Methods",
                    "Stock and Commodity markets",
                    "Business Research Methodology",
                    "Corporate Communication"
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
                image: "/mcom/students-semester5.jpg",
                courses: [
                    "Direct Taxation -I",
                    "Business Regulations",
                    "Goods & Services Tax",
                    "Advanced Accounting",
                    "Elective -1",
                    "Elective -2",
                    "Internship Learning (IL)"
                ]
            },
            {
                key: "semester-6",
                label: "SEMESTER 6",
                image: "/mcom/students-semester6.jpg",
                courses: [
                    "Direct Taxation -I",
                    "Management Accounting",
                    "Auditing and Reporting",
                    "Advanced Accounting",
                    "Entrepreneurship Development",
                    "Elective -3",
                    "Elective -4"
                ]
            }
        ]
    }
]

const BcomCourseStructure = () => {
    return (
        <>

            <div className="mb-10 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2">
                            B.Com Program  <br />
                            <span className='text-[#0C2165] playfair-400'>
                                Course Structure
                            </span>
                        </h3>
                    </div>
                </div>
                <TabCourseStructure courseData={sampleCourseData} />
            </div>
        </>
    )
}

export default BcomCourseStructure 