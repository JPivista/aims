
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
                image: "/bca/students-semester1.jpg", // Add your image path
                courses: [
                    "Part 1 Languages <br /> Languages: Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/Malayalam/Marathi/Telugu",
                    "Language II: English",
                    "Part 2 Optional",
                    "Discrete Mathematics",
                    "Problem Solving Techniques",
                    "Data Structure",
                    "Problem Solving Lab",
                    "Data Structure Lab"
                ]
            },
            {
                key: "semester-2",
                label: "SEMESTER 2",
                image: "/bca/students-semester2.jpg", // Add your image path
                courses: [
                    "Part 1 Languages <br /> Languages: Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/Malayalam/Marathi/Telugu",
                    "Language II: English",
                    "Part 2 Optional",
                    "Computer Architecture",
                    "Object Oriented Programming Using Java",
                    "Database Management System",
                    "Java LAB",
                    "Database Management System Lab"
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
                image: "/bca/students-semester3.jpg", // Add your image path
                courses: [
                    "Part 1 Languages <br /> Languages: Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/Malayalam/Marathi/Telugu",
                    "Language II: English",
                    "Part 2 Optional",
                    "Operating Systems",
                    "Computer Networks",
                    "Python Programming",
                    "Computer Networks Lab",
                    "Python Programming Lab"
                ]
            },
            {
                key: "semester-4",
                label: "SEMESTER 4",
                image: "/bca/students-semester4.jpg", // Add your image path
                courses: [
                    "Part 1 Languages",
                    "Languages: Kannada/Additional English/Hindi/Urdu/Sanskrit/Tamil/Malayalam/Marathi/Telugu",
                    "Language II: English",
                    "Part 2 Optional",
                    "Software Engineering",
                    "Artificial Intelligence",
                    "Internet Technologies",
                    "Artificial Intelligence LAB",
                    "Internet Technologies LAB"
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
                image: "/bca/students-semester5.jpg", // Add your image path
                courses: [
                    "Design & Analysis of Algorithm",
                    "Data Analytics Computer Architecture",
                    "Web Programming",
                    "Data Analytics Lab",
                    "Web Programming Lab",
                    "Project Work"
                ]
            },
            {
                key: "semester-6",
                label: "SEMESTER 6",
                image: "/bca/students-semester6.jpg", // Add your image path
                courses: [
                    "Theory of Computation",
                    "Machine Learning",
                    "Mobile Application Development",
                    "Machine Learning Lab",
                    "Mobile Application Development Lab",
                    "Project Work"
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
                image: "/bca/students-semester7.jpg", // Add your image path
                courses: [
                    "Cloud Computing.",
                    "Internet of Things.",
                    "Internship.",
                    "Cloud Computing Lab.",
                    "Internet of Things Lab."
                ]
            },
            {
                key: "semester-8",
                label: "SEMESTER 8",
                image: "/bca/students-semester8.jpg", // Add your image path
                courses: [
                    "Block Chain Technologies.",
                    "Cryptography & System Security.",
                    "Block Chain Technologies Lab."
                ]
            }
        ]
    }
]

const BcaCourseStructure = () => {
    return (
        <>

            <div className="pb-10 bg-white px-4 lg:px-8">
                <div className="container mx-auto">
                    <div className="">
                        <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2 playfair-400">
                            <span className='italic playfair-400'>BCA</span>  <br />
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

export default BcaCourseStructure 