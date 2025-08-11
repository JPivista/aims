
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
                    "Advanced Financial Management",
                    "International Marketing",
                    "Business Research Methods",
                    "Strategic Management",
                    "Digital Business",
                    "Business Ethics and Corporate Governance",
                    "SOFT CORE Leadership and Team Management"
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
                image: "/mcom/students-semester3.jpg", // Add your image path
                courses: [
                    "Advanced Corporate Finance",
                    "Investment Analysis and Portfolio Management",
                    "Financial Derivatives",
                    "International Financial Management",
                    "Research Project I",
                    "Elective Course I",
                    "SOFT CORE Financial Modeling"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/mcom/students-semester4.jpg", // Add your image path
                courses: [
                    "Financial Risk Management",
                    "Mergers and Acquisitions",
                    "Behavioral Finance",
                    "Research Project II",
                    "Elective Course II",
                    "Elective Course III",
                    "SOFT CORE Advanced Excel and Financial Tools"
                ]
            }
        ]
    },
    {
        key: "specialization-tracks",
        title: "Specialisation Tracks",
        tabs: [
            {
                key: "accounting-taxation",
                label: "SEMESTER 3: Accounting & Taxation",
                image: "/mcom/accounting-students.jpg", // Add your image path
                courses: [
                    "Advanced Financial Accounting",
                    "Corporate Tax Planning",
                    "Auditing and Assurance",
                    "Cost and Management Accounting",
                    "International Accounting Standards",
                    "Taxation Laws and Practice",
                    "SOFT CORE Accounting Software Training"
                ]
            },
            {
                key: "finance-banking-sem3",
                label: "SEMESTER 3: Finance & Banking",
                image: "/mcom/finance-students.jpg", // Add your image path
                courses: [
                    "Commercial Banking",
                    "Investment Banking",
                    "Credit Risk Management",
                    "Financial Markets and Institutions",
                    "Banking Regulations",
                    "Financial Technology",
                    "SOFT CORE Banking Software Training"
                ]
            },
            {
                key: "finance-banking-sem4",
                label: "SEMESTER 4: Finance & Banking",
                image: "/mcom/finance-students-sem4.jpg", // Add your image path
                courses: [
                    "Advanced Banking Operations",
                    "Islamic Banking and Finance",
                    "Financial Engineering",
                    "Banking Analytics",
                    "International Banking",
                    "Fintech and Digital Banking",
                    "SOFT CORE Advanced Financial Modeling"
                ]
            }
        ]
    }
]

const McaCourseStructure = () => {
    return (
        <>

            <div className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2 playfair-400">
                            <span className='italic playfair-400'>MCA</span>  <br />
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

export default McaCourseStructure 