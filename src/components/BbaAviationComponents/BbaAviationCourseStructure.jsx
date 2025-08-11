'use client'
import React from 'react'
import TabCourseStructure from '../Tab/TabCourseStructure'

// Sample data structure for the BBA Aviation course structure
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
                    "Introduction to Aviation Industry",
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
                    "Aviation Business Fundamentals",
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
                    "Aviation Operations Management",
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
                    "Aviation Marketing and Sales",
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
                    "Aviation Safety and Security",
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
                    "Aviation Industry Project",
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
                key: "aviation-management",
                label: "AVIATION MANAGEMENT",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Airline Operations Management",
                    "Airport Management",
                    "Aviation Safety and Security",
                    "Aviation Law and Regulations",
                    "Aviation Finance and Economics",
                    "Aviation Marketing and Sales",
                    "Aviation Human Resource Management",
                    "Aviation Technology and Innovation",
                    "Aviation Customer Service",
                    "Aviation Supply Chain Management",
                    "SOFT CORE Aviation Software Training",
                    "SOFT CORE Advanced Aviation Analytics"
                ]
            },
            {
                key: "aviation-finance",
                label: "AVIATION FINANCE",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Aviation Financial Management",
                    "Airline Financial Analysis",
                    "Aviation Investment and Risk Management",
                    "Aviation Insurance and Claims",
                    "Aviation Taxation",
                    "Aviation Mergers and Acquisitions",
                    "Aviation Financial Modeling",
                    "Aviation Cost Management",
                    "Aviation Revenue Management",
                    "Aviation Financial Regulations",
                    "SOFT CORE Aviation Financial Software",
                    "SOFT CORE Advanced Financial Analytics"
                ]
            },
            {
                key: "aviation-marketing",
                label: "AVIATION MARKETING",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Aviation Marketing Strategy",
                    "Airline Brand Management",
                    "Aviation Digital Marketing",
                    "Aviation Customer Relationship Management",
                    "Aviation Market Research",
                    "Aviation Sales Management",
                    "Aviation Advertising and Promotion",
                    "Aviation Pricing Strategies",
                    "Aviation Distribution Channels",
                    "Aviation Marketing Analytics",
                    "SOFT CORE Aviation Marketing Tools",
                    "SOFT CORE Advanced Marketing Analytics"
                ]
            },
            {
                key: "aviation-operations",
                label: "AVIATION OPERATIONS",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Airline Operations Management",
                    "Airport Operations and Management",
                    "Aviation Logistics and Supply Chain",
                    "Aviation Quality Management",
                    "Aviation Project Management",
                    "Aviation Maintenance Management",
                    "Aviation Fleet Management",
                    "Aviation Route Planning",
                    "Aviation Scheduling and Planning",
                    "Aviation Operations Analytics",
                    "SOFT CORE Aviation Operations Software",
                    "SOFT CORE Advanced Operations Analytics"
                ]
            }
        ]
    }
]

const BbaAviationCourseStructure = () => {
    return (
        <>
            <div className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2">
                            BBA Aviation Program  <br />
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

export default BbaAviationCourseStructure
