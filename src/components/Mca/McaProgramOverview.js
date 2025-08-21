import React from 'react'
import Image from 'next/image'
import PhdTabs from '../Tab/TabProps'

const tabData = [
    {
        key: "important-dates",
        label: "Important Dates",
        content: (
            <>
                <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
                    Important Dates
                </h6>
                <p className="text-gray-800 text-sm sm:text-base">
                    Please see the Admission Process page for important dates and deadlines for this course.
                </p>
            </>
        ),
    },
    {
        key: "eligibility",
        label: "Eligibility",
        content: (
            <>
                <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
                    Eligibility
                </h6>
                <p className="text-gray-800 mb-4 text-sm sm:text-base">
                    A candidate who has passed any recognized BCA / Bachelor Degree in Computer Science Engineering or equivalent Degree Or Passed B.Sc./B.Com / B.A. with Mathematics at 10 + 2 level or at Graduation level (with additional bridge courses as per the norms of the concerned University) and obtained an aggregate minimum of 50% marks taken together in all the subjects in all the years of the Degree Examination is eligible for admission to MCA courses.
                </p>
                <p style={{ fontWeight: '600' }} className="text-gray-800 font-semibold text-sm sm:text-base mb-2">
                    45% of marks in Q. E. in case of SC, ST and Category-I of Karnataka candidates.
                </p>
                <p>
                    NOTE: Rounding off aggregate percent is not permitted.
                </p>
            </>
        ),
    },
    {
        key: "selection-process",
        label: "Selection Process",
        content: (
            <>
                <h6 style={{ color: "#A22877", fontSize: "1.2rem", fontWeight: '600' }} className="text-[#932c79] font-semibold text-lg sm:text-xl mb-3">
                    Selection Process
                </h6>
                <p className="text-gray-800 text-sm sm:text-base">
                    Please see the Admission Process page for important dates and deadlines for this course.
                </p>
            </>
        ),
    },
];


const McaProgramOverview = () => {
    return (
        <>
            <div className='py-10' style={{ backgroundColor: '#E1F9F4' }}>
                <div className='container mx-auto px-4 lg:px-0 flex flex-col gap-10'>
                    <div className=' items-center justify-between grid grid-cols-1 md:grid-cols-2'>
                        <h3 className='text-[#0C2165]'>
                            <span className='italic text-[#A22877] playfair-400'>MCA Program</span>
                            <br />
                            Overview
                        </h3>
                        <p>
                            Our MCA program blends coding rigour with conceptual clarity. With a focus on solving real business and societal problems through technology, students build the confidence to develop and lead. Whether your ambition is to work in a top tech firm or launch your own venture, AIMS gives you the runway to take off.
                        </p>
                    </div>
                    {/* Program Overview Image */}
                    <div className='md:flex justify-center hidden'>
                        <Image
                            src="/mca/mca-program.svg"
                            alt="M.Com Program Overview"
                            width={1000}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                    <div className='md:hidden justify-center flex'>
                        <Image
                            src="/mca/mca-program-mobile.svg"
                            alt="M.Com Program Overview"
                            width={1000}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                </div>
                <PhdTabs tabs={tabData} />
            </div>

        </>
    )
}

export default McaProgramOverview
