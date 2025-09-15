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
                    Applicants must have successfully graduated in BCOM or BBA at graduation level.
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


const McomProgramOverview = () => {
    return (
        <>
            <div className='py-10 px-4 lg:px-8' style={{ backgroundColor: '#E1F9F4' }}>
                <div className='container mx-auto px-4 lg:px-0 flex flex-col gap-10'>
                    <div className=' items-center justify-between grid grid-cols-1 md:grid-cols-1  lg:grid-cols-2'>
                        <h3 className='text-[#0C2165] playfair-400'>
                            <span className='italic text-[#A22877] playfair-400'>M.Com Program</span>
                            <br />
                            Overview
                        </h3>
                        <p>
                            Tailored for aspiring finance professionals, our program equips you with the tools to succeed in corporate finance, accounting, and beyond. Our approach is both structured and strategic, helping you hit the mark with clarity and confidence.
                        </p>
                    </div>
                    {/* Program Overview Image */}
                    <div className='justify-center md:flex hidden'>
                        <Image
                            src="/mcom/mcom-program.svg"
                            alt="M.Com Program Overview"
                            width={1000}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                    <div className='justify-center md:hidden flex'>
                        <Image
                            src="/mcom/mcom-program-mobile.svg"
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

export default McomProgramOverview
