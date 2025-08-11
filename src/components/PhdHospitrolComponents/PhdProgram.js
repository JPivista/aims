import React from 'react'
import Image from "next/image";
import Button from '@/shared/Button';

const PhdProgram = () => {
    return (
        <>
            {/* Top Banner Section */}
            <div className='bg-[#FFF6F6]'>
                <div className="flex flex-col lg:flex-row items-center gap-6 container mx-auto px-4 py-10">

                    {/* Left Side - Title */}
        
                    <div className="lg:w-1/2 items-center text-center lg:text-left">
                        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold text-[#A22877] italic">
                        PhD Program
                        </h3>
                        <h3 className="text-3xl md:text-4xl lg:text-5xl text-[#0c2165]  -mt-6">
                        Course Structure
                        </h3>
                    </div>

                    {/* Right Side - Paragraph */}
                    <div className="lg:w-1/2 flex items-center">
                        <p className="text-gray-700 text-sm md:text-base lg:text-lg leading-relaxed text-center lg:text-left">
                            All provisionally registered candidates shall undergo course-work of one semester duration of 20 weeks inclusive course-end assessment. The University shall notify the time table and details of the course work including the schedule.
                        </p>
                    </div>
                </div>
            </div>

            {/* Middle Section */}
            <div className="flex flex-col md:flex-row gap-0 md:gap-8">

                {/* Left Side: Text Content */}
                <div className="md:w-1/2 w-full flex flex-col justify-center items-start p-6 lg:p-20">
                    <h2 className="text-xl md:text-2xl font-semibold mb-4">
                        The suggested course structure for PhD Programs in Management, Commerce and English of UoM generally consists of:
                    </h2>
                    <ul className="list-disc list-inside space-y-2 mb-6 text-sm md:text-base">
                        <li>Research Methodology</li>
                        <li>Review of Literature and Seminars</li>
                        <li>Submission of Annual progress reports</li>
                        <li>Two research paper publications</li>
                        <li>Thesis submission - After 30 months (minimum)</li>
                    </ul>
                </div>

                {/* Right Side: Full-Width Edge Image */}
                <div className="md:w-1/2 w-full">
                    <img
                        src="/business_school/phd/phd_program.png"
                        alt="Students"
                        className="object-cover w-full h-full max-h-[500px] md:max-h-none"
                    />
                </div>
            </div>

            {/* Bottom Section */}
            <div className="bg-[#A12E79] text-white">
                <div className='container mx-auto flex flex-col md:flex-row'>

                    {/* Left Side (70%) */}
                    <div className="md:w-[70%] w-full flex flex-col justify-center items-start py-10 px-6">
                        <p className="mb-4 text-sm md:text-base">
                            The syllabus for research methodology for each course is separate.
                            <br />
                            For details regarding the course structure, kindly refer to the details here:
                        </p>
                        <Button
                            showArrow={true}
                            showReadMore={false}
                            variant="secondary"
                            className="bg-white text-[#0C2165] px-4 py-2 rounded-full hover:bg-gray-100 flex items-center gap-1"
                        >
                            Download PDF
                        </Button>
                    </div>

                    {/* Right Side (30%) */}
                    <div className="md:w-[30%] w-full flex justify-center items-center p-4">
                        <Image
                            src="/business_school/phd/arrow.svg"
                            alt="Arrow Icon"
                            width={200}
                            height={200}
                            className="h-25 w-25"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default PhdProgram
