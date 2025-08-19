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
                image: "/mcom/students-semester1.jpg", // Add your image path
                courses: [
                    "Monetary System",
                    "International Business Environment",
                    "Principles and Practices of Business Decisions",
                    "Information Technology for Business",
                    "Managerial Finance",
                    "Global Talent Management",
                    "SOFT CORE Corporate Communication Skills"
                ]
            },
            {
                key: "semester-2",
                label: "SEMESTER 2",
                image: "/mcom/students-semester2.jpg", // Add your image path
                courses: [
                    "Modern Indian Banking",
                    "Risk Management & Derivatives",
                    "Advanced Research Methodology",
                    "Digital Marketing",
                    "Emerging Trends in Entrepreneurship",
                    "Indian Ethos and Leadership",
                    "SOFT CORE Artificial and Business Intelligence"
                ]
            }
        ]
    },
    {
        key: "specialization-tracks",
        title: "Specialisation Courses",
        tabs: [
            {
                key: "accounting-taxation",
                label: "SEMESTER 3: Accounting & Taxation",
                image: "/mcom/accounting-students.jpg", // Add your image path
                courses: [
                    "Intellectual Property Rights",
                    "Logistics and Supply Chain Management",
                    "Corporate Reporting Practices-I",
                    "Strategic Cost Management – I",
                    "Corporate Tax Planning",
                    "Open Elective"
                ]
            },
            {
                key: "finance-banking-sem3",
                label: "SEMESTER 3: Finance & Banking",
                image: "/mcom/finance-students.jpg", // Add your image path
                courses: [
                    "Intellectual Property Rights",
                    "Logistics and Supply Chain Management",
                    "Financial Markets & Services",
                    "Financial Planning",
                    "Innovation in Banking & Technology",
                    "Open Elective"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/mcom/students-semester4.jpg", // Add your image path
                courses: [
                    "Business Analytics",
                    "Forensic Accounting & Auditing",
                    "Forex Management",
                    "Security Analysis & Portfolio Management",
                    "Strategies for Ranking Risk and Marketing Management",
                    "Dissertation / Project"
                ]
            }
        ]
    }
]

const McomCourseStructure = () => {
    return (
        <>

            <div className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2 playfair-400">
                            M.Com Program  <br />
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

export default McomCourseStructure 