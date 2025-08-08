'use client'

import React, { useState } from 'react'
import Image from 'next/image'

const TabCourseStructure = ({ courseData }) => {
    const [activeTab, setActiveTab] = useState(courseData?.[0]?.tabs?.[0]?.key || "")

    // Simple check to prevent map error
    if (!courseData) {
        return null
    }

    return (
        <div className="bg-white">
            <div className="container mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

                    {/* Left Column - Navigation */}
                    <div className="space-y-8 md:border-r border-black ">
                        {/* Navigation Tabs */}
                        <div className="space-y-6">
                            {courseData.map((section) => (
                                <div key={section.key} className="space-y-3">
                                    <h4 className="text-[#0C2165] monser-600 text-lg">
                                        {section.title}
                                    </h4>
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {section.tabs.map((tab) => (
                                            <button
                                                key={tab.key}
                                                onClick={() => setActiveTab(tab.key)}
                                                className={`px-3 py-[0.2] rounded-full text-sm font-medium transition-all duration-200 border-2
                                                    ${activeTab === tab.key
                                                        ? 'bg-[#A22877] text-white border-[#A22877]'
                                                        : 'bg-white text-black border-black hover:bg-[#A22878] hover:text-white hover:border-[#A22878]'
                                                    }`}
                                            >
                                                {tab.label}
                                            </button>
                                        ))}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Column - Content Display */}
                    <div className="space-y-6">
                        {courseData.map((section) => (
                            section.tabs.map((tab) => (
                                activeTab === tab.key && (
                                    <div key={tab.key} className="space-y-6">
                                        <h5 className="text-[#A22877] text-3xl lg:text-5xl monser-600">
                                            {section.title}
                                        </h5>

                                        {/* Student Image */}
                                        {tab.image && (
                                            <div className="border-2 border-blue-200 rounded-lg overflow-hidden">
                                                <Image
                                                    src={tab.image}
                                                    alt="Students"
                                                    width={400}
                                                    height={150}
                                                    className="w-full h-auto object-cover"
                                                />
                                            </div>
                                        )}

                                        {/* Course Content */}
                                        <div className="bg-[#A22877] rounded-lg p-6 text-white">
                                            <h5 className="text-xl font-bold mb-4 monser-400 md:text-5xl">
                                                {tab.label}
                                            </h5>
                                            <ol className="text-white">
                                                {tab.courses.map((course, index) => (
                                                    <li key={index} className="flex items-start">
                                                        <span className="mr-3">{index + 1}.</span>
                                                        <span>{course}</span>
                                                    </li>
                                                ))}
                                            </ol>

                                        </div>
                                    </div>
                                )
                            ))
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default TabCourseStructure 