'use client'
import React from 'react'
import TabCourseStructure from '../Tab/TabCourseStructure'

// Sample data structure for the BBA course structure
const sampleCourseData = [
    {
        key: "first-year",
        title: "First Year",
        tabs: [
            {
                key: "semester-1",
                label: "SEMESTER 1",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Principles of Management",
                    "Business Communication",
                    "Financial Accounting",
                    "Business Mathematics",
                    "Business Environment",
                    "Computer Applications in Business",
                    "SOFT CORE Professional Skills Development"
                ]
            },
            {
                key: "semester-2",
                label: "SEMESTER 2",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Organizational Behavior",
                    "Business Statistics",
                    "Cost Accounting",
                    "Marketing Management",
                    "Business Law",
                    "Information Technology for Business",
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
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Human Resource Management",
                    "Financial Management",
                    "Operations Management",
                    "Business Research Methods",
                    "Managerial Economics",
                    "Database Management Systems",
                    "SOFT CORE Advanced Excel and Business Tools"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Strategic Management",
                    "International Business",
                    "Business Analytics",
                    "Corporate Governance",
                    "Elective Course I",
                    "Elective Course II",
                    "SOFT CORE Industry Project and Internship"
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
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Entrepreneurship Development",
                    "Business Ethics and Sustainability",
                    "Project Management",
                    "Elective Course III",
                    "Elective Course IV",
                    "Elective Course V",
                    "SOFT CORE Advanced Business Tools"
                ]
            },
            {
                key: "semester-6",
                label: "SEMESTER 6",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Business Strategy",
                    "Global Business Environment",
                    "Elective Course VI",
                    "Elective Course VII",
                    "Elective Course VIII",
                    "Capstone Project",
                    "SOFT CORE Industry Internship"
                ]
            }
        ]
    },
    {
        key: "specialization-tracks",
        title: "Specialisation Tracks",
        tabs: [
            {
                key: "finance",
                label: "FINANCE",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Financial Management",
                    "Investment Analysis",
                    "Financial Markets",
                    "Risk Management",
                    "Corporate Finance",
                    "Financial Modeling",
                    "International Financial Management",
                    "Financial Derivatives",
                    "Behavioral Finance",
                    "Islamic Banking and Finance",
                    "SOFT CORE Financial Software Training",
                    "SOFT CORE Advanced Financial Analytics"
                ]
            },
            {
                key: "marketing",
                label: "MARKETING",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Consumer Behavior",
                    "Digital Marketing",
                    "Brand Management",
                    "Marketing Research",
                    "Sales Management",
                    "International Marketing",
                    "Strategic Marketing Management",
                    "Services Marketing",
                    "Retail Marketing",
                    "Social Media Marketing",
                    "SOFT CORE Marketing Analytics Tools",
                    "SOFT CORE Advanced Marketing Tools"
                ]
            },
            {
                key: "hr",
                label: "HUMAN RESOURCES",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Strategic Human Resource Management",
                    "Organizational Development",
                    "Compensation and Benefits",
                    "Performance Management",
                    "Employee Relations",
                    "Training and Development",
                    "International Human Resource Management",
                    "Talent Management",
                    "HR Analytics",
                    "Industrial Relations",
                    "SOFT CORE HR Information Systems",
                    "SOFT CORE Advanced HR Tools"
                ]
            },
            {
                key: "analytics",
                label: "BUSINESS ANALYTICS",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Data Analytics for Business",
                    "Statistical Analysis",
                    "Predictive Modeling",
                    "Business Intelligence",
                    "Data Visualization",
                    "Machine Learning for Business",
                    "Advanced Business Analytics",
                    "Big Data Analytics",
                    "Customer Analytics",
                    "Financial Analytics",
                    "SOFT CORE Analytics Tools Training",
                    "SOFT CORE Advanced Analytics Tools"
                ]
            },
            {
                key: "logistics",
                label: "LOGISTICS & SUPPLY CHAIN MANAGEMENT",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Supply Chain Management",
                    "Logistics Operations",
                    "Inventory Management",
                    "Transportation Management",
                    "Warehouse Management",
                    "Procurement and Sourcing",
                    "Global Supply Chain Management",
                    "Supply Chain Analytics",
                    "Risk Management in SCM",
                    "Sustainable Supply Chain",
                    "SOFT CORE Supply Chain Software",
                    "SOFT CORE Advanced SCM Tools"
                ]
            }
        ]
    }
]

const BbaCourseStructure = () => {
    return (
        <>
            <div className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2">
                            BBA Program  <br />
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

export default BbaCourseStructure
