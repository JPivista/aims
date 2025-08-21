import React from 'react';
import { CourseSection, ugcPreparationData } from '@/components/shared/UgcPreparation';

const UgcPreparation = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-8">
            <div className="container mx-auto px-4 lg:px-8">
                {/* Header Section */}
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-bold text-[#0C2165] mb-6">
                        Your Reliable Source for Bangalore University Previous Year Question Papers
                    </h1>
                    <div className="md:max-w-6xl mx-auto space-y-4 text-lg text-gray-600">
                        <p>
                            Accessing Bangalore University&apos;s previous year question papers is one of the most effective ways to understand exam patterns and perform better. At AIMS, we make it easy for you to find old exam papers for academic reference.
                        </p>
                        <p className='md:px-10'>
                            Whether you&apos;re pursuing a bachelor&apos;s or masters degree, the Library hosts a growing archive of subject-wise, semester-wise PDFs.
                        </p>
                    </div>
                </div>

                {/* UG Courses Section */}
                <CourseSection
                    title="UG Previous Year Question Papers"
                    courses={ugcPreparationData.ugCourses}
                    gradientClass="bg-gradient-to-r from-[#0C2165] to-[#8C5FBC]"
                />

                {/* PG Courses Section */}
                <CourseSection
                    title="PG Previous Year Question Papers"
                    courses={ugcPreparationData.pgCourses}
                    gradientClass="bg-gradient-to-r from-[#295D98] to-[#5EC4D2]"
                />
            </div>
        </div>
    );
};

export default UgcPreparation;