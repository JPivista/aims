"use client";
import React, { useState } from 'react';
import SemesterAccordion from './SemesterAccordion';

const CourseAccordion = ({ course }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mb-4 ">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-4 bg-white text-left rounded-lg shadow-md border border-[#0C2165]"
            >
                <span className="text-lg font-semibold text-[#0C2165]" style={{ fontWeight: '600' }}>{course.title}</span>
                <svg
                    className={`w-6 h-6 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
            </button>

            {isOpen && (
                <div className="mt-2 space-y-0 ml-4">
                    {course.semesters.map((semester) => (
                        <SemesterAccordion key={semester.id} semester={semester} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default CourseAccordion; 