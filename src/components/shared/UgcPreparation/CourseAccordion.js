"use client";
import React, { useState } from 'react';
import SemesterAccordion from './SemesterAccordion';

const CourseAccordion = ({ course, isOpen, onToggle }) => {
    const [openSemesterId, setOpenSemesterId] = useState(null);

    const handleSemesterToggle = (id) => {
        setOpenSemesterId(prev => (prev === id ? null : id));
    };

    return (
        <div className="mb-4">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between p-4 bg-white text-left rounded-lg shadow-md border border-[#0C2165] hover:shadow-lg transition-all duration-200"
            >
                <span className="text-lg font-semibold text-[#0C2165]" style={{ fontWeight: '600' }}>{course.title}</span>
                <svg
                    className={`w-6 h-6 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}
            >
                <div className="mt-2 space-y-0 ml-4">
                    {course.semesters.map((semester) => (
                        <SemesterAccordion
                            key={semester.id}
                            semester={semester}
                            isOpen={openSemesterId === semester.id}
                            onToggle={() => handleSemesterToggle(semester.id)}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default CourseAccordion;
