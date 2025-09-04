'use client'
import React from 'react'

const CfcAssignments = () => {
    const assignmentsData = [
        {
            company: "Sixth Sense Media",
            website: "www.sixthsensemedia.com",
            assignments: "Outsourced CFO & Vice President Finance, Business Development, BPO, Internal Audit and Collections"
        },
        {
            company: "Plastiglove and Allied Industries Pvt Ltd",
            website: "www.plusgloves.com",
            assignments: "Outsourced CEO, Business Development, Systems and Procedures, Audit & Accounts"
        },
        {
            company: "Whistle Blowers (Pty) Ltd",
            website: "www.whistleblowers.co.in",
            assignments: "Development of Concept and Strategic Selling of Outsourced Whistleblowing in India"
        },
        {
            company: "Redwood Associates",
            website: "www.redwoodassociates.in",
            assignments: "Strategic Consulting"
        },
        {
            company: "Maveric Systems",
            website: "www.maveric-systems.com",
            assignments: "Training material on Financial Systems"
        },
        {
            company: "Grassroots BPO",
            website: "www.grassrootsbpo.com",
            assignments: "Strategic Marketing of BPO and Staffing Services"
        },
        {
            company: "Look Beyond Resumes",
            website: "www.lookbeyondresumes.com",
            assignments: "Strategic Marketing Consultancy work"
        },
        {
            company: "Bangalore Stock Exchange",
            website: "www.bgse.co.in",
            assignments: "We delivered a combined training course with them for Investors"
        },
        {
            company: "Jus' Trufs Chocolatiers Company Private Limited",
            website: "www.justrufs.com",
            assignments: "Accounting, Systems, Marketing"
        },
        {
            company: "Vangal",
            website: "www.vangal.com",
            assignments: "Consulting fees for strategic marketing consulting work"
        },
        {
            company: "DataTracks India (A unit of TaurusQuest Services Private Limited)",
            website: "www.datatracks.in",
            assignments: "Strategic Marketing, Creation of Linked In Group, marketing in CA Conference"
        },
        {
            company: "Maarga",
            website: "N.A.",
            assignments: "Helping in training course marketing"
        },
        {
            company: "Atharvana Workshop",
            website: "www.atharvanworkshop.com",
            assignments: "Management of Workshops, Executive Education, and Development of Content"
        },
        {
            company: "Hedge-Square Consultancy Services Private Limited",
            website: "www.hedge-square.com",
            assignments: "XBRL, Outsourcing Consulting"
        },
        {
            company: "Sprouted Soul Retail Private Ltd (It's my Meal)",
            website: "www.itsmymeal.in",
            assignments: "Marketing and Finance Consulting"
        },
        {
            company: "Study Pride",
            website: "www.studypride.com",
            assignments: "Strategic Marketing, Financing, Image Consulting"
        },
        {
            company: "Master OF Business Leadership (MBL)",
            website: "www.masterofbusinessleadership.com",
            assignments: "Helping this graduate level system and coaching platform find clients to go further, faster, better, and making it available globally to individuals and companies who want better result"
        },
        {
            company: "Elevations Advertising",
            website: "www.elevationsads.com",
            assignments: "Strategic Marketing Inputs and Selling Assistance"
        },
        {
            company: "Buzan Centre Pune, India",
            website: "www.buzanpune.com",
            assignments: "To promote the techniques of 'Mind Maps', 'Speed Reading', 'Power Recall', 'Multiple Intelligences'"
        }
    ]

    return (
        <div className='justify-center items-center py-10 flex flex-col relative overflow-hidden'>
            <div className='px-4 lg:px-8'>
                <div className='container mx-auto'>
                    <div className='flex flex-col bg-transparent relative z-10'>
                        {/* Header Section */}
                        <div className='text-left'>
                            <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-4'>
                                Assignments
                            </h3>
                            <p className='text-lg lg:text-[20px] monser-400 text-gray-700 max-w-4xl mb-8'>
                                ACC has already taken up a number of assignments with some of the leading companies in India. Following is a list of completed and current assignments.
                            </p>
                        </div>

                        {/* Completed Assignments Section */}
                        <div>
                            <h4 className='text-2xl lg:text-3xl monser-600 text-[#0C2165] mb-6'>
                                Completed Assignments
                            </h4>

                            {/* Table Container with Mobile Scroll */}
                            <div className='overflow-x-auto border border-gray-200 rounded-lg'>
                                <table className='w-full min-w-[800px] bg-white'>
                                    <thead className='bg-[#531675] text-white sticky top-0'>
                                        <tr>
                                            <th className='px-4 py-3 text-center monser-600 text-sm lg:text-base border-r border-gray-300 lg:w-1/3'>
                                                Company
                                            </th>
                                            <th className='px-4 py-3 text-center monser-600 text-sm lg:text-base border-r border-gray-300 lg:w-1/3'>
                                                Website
                                            </th>
                                            <th className='px-4 py-3 text-center monser-600 text-sm lg:text-base lg:w-1/3'>
                                                Completed Assignments
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {assignmentsData.map((assignment, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b border-gray-200 hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0 ? 'bg-white' : 'bg-gray-50'
                                                    }`}
                                            >
                                                <td className='px-4 py-3 text-sm lg:text-base monser-500 text-[#0C2165] border-r border-gray-200 align-top bg-[#E1F9F4]'>
                                                    {assignment.company}
                                                </td>
                                                <td className='px-4 py-3 text-sm lg:text-base monser-400 text-blue-600 border-r border-gray-200 align-top bg-[#C7E7E0]'>
                                                    <a
                                                        href={`https://${assignment.website}`}
                                                        target="_blank"
                                                        rel="noopener noreferrer"
                                                        className='hover:text-blue-800 underline text-black'
                                                    >
                                                        {assignment.website}
                                                    </a>
                                                </td>
                                                <td className='px-4 py-3 text-sm lg:text-base monser-400 text-gray-700 align-top bg-[#E1F9F4]'>
                                                    {assignment.assignments}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CfcAssignments
