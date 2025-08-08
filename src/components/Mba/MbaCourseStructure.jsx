'use client'
import React from 'react'
import TabCourseStructure from '../Tab/TabCourseStructure'

// Sample data structure for the MBA course structure
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
                    "Economics for Managers",
                    "Organisational Behaviour",
                    "Accounting for Managers",
                    "Statistics for Management",
                    "Marketing for Customer Value",
                    "Legal Aspects and IPR",
                    "Managerial Skills - 1"
                ]
            },
            {
                key: "semester-2",
                label: "SEMESTER 2",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Economics for Managers",
                    "Organisational Behaviour",
                    "Accounting for Managers",
                    "Statistics for Management",
                    "Marketing for Customer Value",
                    "Legal Aspects and IPR",
                    "Managerial Skills - 1"
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
                    "Strategic Management",
                    "International Business",
                    "Business Analytics",
                    "Corporate Governance",
                    "Elective Course I",
                    "Elective Course II",
                    "SOFT CORE Advanced Excel and Business Tools"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/MBA/first-year.jpg", // Add your image path
                courses: [
                    "Entrepreneurship and Innovation",
                    "Business Ethics and Sustainability",
                    "Project Management",
                    "Elective Course III",
                    "Elective Course IV",
                    "Capstone Project",
                    "SOFT CORE Industry Project and Internship"
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
                    "Advanced Financial Management",
                    "Investment Analysis and Portfolio Management",
                    "Financial Markets and Institutions",
                    "Risk Management",
                    "Corporate Finance",
                    "Financial Modeling",
                    "International Financial Management",
                    "Mergers and Acquisitions",
                    "Financial Derivatives",
                    "Behavioral Finance",
                    "Islamic Banking and Finance",
                    "Fintech and Digital Banking",
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
                    "Marketing Analytics",
                    "Customer Relationship Management",
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
                    "Diversity and Inclusion",
                    "HR Strategy and Planning",
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
                    "Operations Analytics",
                    "Strategic Analytics",
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
                    "E-commerce Logistics",
                    "Supply Chain Strategy",
                    "SOFT CORE Supply Chain Software",
                    "SOFT CORE Advanced SCM Tools"
                ]
            }
        ]
    }
]

const MbaCourseStructure = () => {
    return (
        <>
            <div className="py-10 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2">
                            MBA Program  <br />
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

export default MbaCourseStructure
