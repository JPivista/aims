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
                <ul className="list-disc pl-5 text-gray-800 text-sm sm:text-base space-y-1">
                    <li>Pass in Pre-University Course (PUC) / 12th or any other equivalent examination. Students with good communication skills are preferred. (or)</li>
                    <li>GCE/JGCSE/GCSE Certification with a pass in a minimum of FIVE subjects at &apos;O&apos; level & TWO subjects at &apos;A&apos; level. (or)</li>
                    <li>Pass certificate / Diploma of a Secondary Stage Level Examination (TWELVE Years) of any discipline, recognized by the national level board / council of any country.</li>
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


const BcaProgramOverview = () => {
    return (
        <>
            <div className='py-10' style={{ backgroundColor: '#E1F9F4' }}>
                <div className='container mx-auto px-4 lg:px-0 flex flex-col gap-10'>
                    <div className=' items-center justify-between grid grid-cols-1 md:grid-cols-2'>
                        <h3 className='text-[#0C2165]'>
                            <span className='italic text-[#A22877] playfair-400'>BCA Program</span>
                            <br />
                            Overview
                        </h3>
                        <p>
                            Whether you&apos;re aiming for a role in tech, analytics, or entrepreneurship, our curriculum helps you hit the ground running. Learn by doing, think like a problem-solver, and graduate with more than just a certificate, graduate with clarity.
                        </p>
                    </div>
                    {/* Program Overview Image */}
                    <div className='flex justify-center m'>
                        <Image
                            src="/bca/bca-program.svg"
                            alt="BCA Program Overview"
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

export default BcaProgramOverview
