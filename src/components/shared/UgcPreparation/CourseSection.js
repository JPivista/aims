"use client";
import React, { useState } from 'react';
import CourseAccordion from './CourseAccordion';

const CourseSection = ({ title, courses, gradientClass }) => {
    const [openCourseId, setOpenCourseId] = useState(null);

    const handleCourseToggle = (courseId) => {
        setOpenCourseId(openCourseId === courseId ? null : courseId);
    };

    return (
        <div className="mb-8 bg-[#F7E9F2] rounded-lg pb-10">
            <div className={`${gradientClass} text-white p-4 rounded-lg mb-6 shadow-lg`}>
                <h2 className="text-2xl font-bold" style={{ fontWeight: '600' }}>{title}</h2>
            </div>

            <div className="space-y-4 px-4">
                {courses.map((course) => (
                    <CourseAccordion
                        key={course.id}
                        course={course}
                        isOpen={openCourseId === course.id}
                        onToggle={() => handleCourseToggle(course.id)}
                    />
                ))}
            </div>
        </div>
    );
};

export default CourseSection; 