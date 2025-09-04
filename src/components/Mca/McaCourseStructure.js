
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
                image: "/mca/students-semester1.jpg", // Add your image path
                courses: [
                    "The Art of Programming",
                    "Discrete Mathematics",
                    "Computer Organisation and Architecture",
                    "Theory of Computation",
                    "Object Oriented Programming",
                    "Data Structures",
                    "Data Structures Lab",
                    "Object Oriented Lab"
                ]
            },
            {
                key: "semester-2",
                label: "SEMESTER 2",
                image: "/mca/students-semester2.jpg", // Add your image path
                courses: [
                    "Operating Systems",
                    "Database Management Systems",
                    "Computer Networks",
                    "Software Engineering",
                    "The Design and Analysis of Algorithm",
                    "Artificial Intelligence",
                    "Database Management System Lab",
                    "Unix Programming Lab"
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
                image: "/mca/students-semester3.jpg", // Add your image path
                courses: [
                    "Research Methodology",
                    "Open Elective",
                    "Machine Learning",
                    "Cloud Computing",
                    "Web Programming",
                    "Quantitative, Teaching and Research Aptitude",
                    "Cryptography & Network Security, Big Data Analytics",
                    "MINI PROJECT"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/mca/students-semester4.jpg", // Add your image path
                courses: [
                    "MAIN PROJECT"
                ]
            }
        ]
    }
]

const McaCourseStructure = () => {
    return (
        <>

            <div className="pb-10 bg-white px-4 lg:px-8">
                <div className="container mx-auto">
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