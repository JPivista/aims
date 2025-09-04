'use client'
import React from 'react'

const CfiGlobalCollab = () => {
    const globalCollaborationsData = [
        {
            country: "Canada",
            city: "Vancouver",
            partnerInstitution: "Fairleigh Dickinson University"
        },
        {
            country: "France",
            city: "Troyes, Le Havre",
            partnerInstitution: "Y Schools, EM Normandie Business School"
        },
        {
            country: "Germany",
            city: "Berlin",
            partnerInstitution: "IU University of Applied Sciences"
        },
        {
            country: "Indonesia",
            city: "Yogyakarta, Jakarta",
            partnerInstitution: "Universitas Muhammadiyah, Universitas Ahmad Dahlan, The Gandhi Memorial International School"
        },
        {
            country: "Japan",
            city: "Matsue",
            partnerInstitution: "University of Shimane"
        },
        {
            country: "Latvia",
            city: "Riga",
            partnerInstitution: "BA School of Business and Finance"
        },
        {
            country: "Lithuania",
            city: "Kaunas",
            partnerInstitution: "Vytautas Magnus University"
        },
        {
            country: "Romania",
            city: "Timisoara",
            partnerInstitution: "West University of Timisoara"
        },
        {
            country: "Switzerland",
            city: "Montreux",
            partnerInstitution: "Swiss Education Group"
        },
        {
            country: "USA",
            city: "California, New Jersey, San Marcos",
            partnerInstitution: "University of California Riverside, Fairleigh Dickinson University, Texas State University"
        },
        {
            country: "Vietnam",
            city: "Ho Chi Minh City",
            partnerInstitution: "University of Economics & Finance"
        }
    ]

    return (
        <div className='justify-center items-center mb-10 flex flex-col relative overflow-hidden'>
            <div className='px-4 lg:px-8'>
                <div className='container mx-auto'>
                    <div className='flex flex-col bg-transparent relative z-10'>
                        {/* Header Section */}
                        <div className='grid grid-cols-1 lg:grid-cols-2 md:gap-8 gap-0'>
                            <h3 className='text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                                Our Global Collaborations
                            </h3>
                            <p className='text-lg lg:text-[20px] monser-400 text-gray-700 md:mb-0 mb-4'>
                                AIMS Institutes enjoys close relationships with 20+ universities and organisations across 17 countries. These partnerships enable international summer school programs in Bangalore colleges, joint certifications, and long-term academic cooperation.
                            </p>
                        </div>

                        {/* Global Collaborations Table */}
                        <div>
                            {/* Table Container with Mobile Scroll */}
                            <div className='overflow-x-auto border border-gray-200 rounded-t-lg'>
                                <table className='w-full min-w-[800px] bg-white'>
                                    <thead className='bg-[#531675] text-white sticky top-0'>
                                        <tr>
                                            <th className='px-4 py-3 text-center monser-600 text-sm lg:text-base border-r border-gray-300 lg:w-1/3'>
                                                Country
                                            </th>
                                            <th className='px-4 py-3 text-center monser-600 text-sm lg:text-base border-r border-gray-300 lg:w-1/3'>
                                                City
                                            </th>
                                            <th className='px-4 py-3 text-center monser-600 text-sm lg:text-base lg:w-1/3'>
                                                Partner Institution
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {globalCollaborationsData.map((collaboration, index) => (
                                            <tr
                                                key={index}
                                                className={`border-b border-black hover:bg-gray-50 transition-colors duration-200 ${index % 2 === 0
                                                    }`}
                                            >
                                                <td className='px-4 py-3 text-sm lg:text-base monser-500 bg-[#E1F9F4] border-r border-white align-top'>
                                                    {collaboration.country}
                                                </td>
                                                <td className='px-4 py-3 text-sm lg:text-base monser-400 bg-[#C7E7E0] border-r border-white align-top'>
                                                    {collaboration.city}
                                                </td>
                                                <td className='px-4 py-3 text-sm lg:text-base monser-400 align-top bg-[#E1F9F4]'>
                                                    {collaboration.partnerInstitution}
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                            <div className='flex justify-center items-center mt-4'>
                                <p>
                                    These tie-ups provide AIMers with multiple avenues for international joint programs, enabling global collaboration without compromising on local roots.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CfiGlobalCollab
