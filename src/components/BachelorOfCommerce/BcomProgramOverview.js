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
                {/* <p className="text-gray-800 mb-4 text-sm sm:text-base">
                    GCE/JGCSE/GCSE Certification with minimum grades.
                </p>
                <p style={{ fontWeight: '600' }} className="text-gray-800 font-semibold text-sm sm:text-base mb-2">
                    However, this condition is relaxed to 50% in case of:
                </p> */}
                <ul className="list-disc pl-5 text-gray-800 text-sm sm:text-base space-y-1">
                    <li>GCE/JGCSE/GCSE Certification with minimum grades</li>
                    <li>Pass certificate of a 12-Year Secondary Stage Level Examination from a recognized board</li>
                    <li>Communication skills are a valued asset for applicants</li>
                    <li>Visit our Admission Process page for key dates and deadlines</li>
                </ul>
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


const BcomProgramOverview = () => {
    return (
        <>
            <div className='py-10 lg:px-0 px-4' style={{ backgroundColor: '#E1F9F4' }}>
                <div className='container mx-auto flex flex-col gap-10'>
                    <div className=' items-center justify-between grid grid-cols-1 md:grid-cols-2'>
                        <h3 className='text-[#0C2165] playfair-400'>
                            <span className='italic text-[#A22877] playfair-400'>B.Com Program</span>
                            <br />
                            Overview
                        </h3>
                        <p>
                            Whether your target is to pursue higher studies or enter the workforce, the AIMS B.Com gives you the grounding to take confident strides.
                        </p>
                    </div>
                    {/* Program Overview Image */}
                    <div className='justify-center md:flex hidden'>
                        <Image
                            src="/bcom/bcom-program.svg"
                            alt="B.Com Program Overview"
                            width={1000}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                    <div className='justify-center md:hidden flex'>
                        <Image
                            src="/bcom/bcom-program-mobile.svg"
                            alt="B.Com Program Overview"
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

export default BcomProgramOverview
