'use client'
import React from 'react'
import NewsTabs from '../shared/NewsTabs'
import Breadcrumbs from '../shared/Breadcrumbs'

const NewsletterHeader = () => {
    return (
        <>

            <div className='justify-center items-center flex flex-col relative overflow-hidden bg-[#E1F9F4]'>
                <div className='px-4 lg:px-8'>
                    <div className='container mx-auto py-6 lg:py-10 '>
                        <div className='flex flex-col bg-transparent relative z-10'>
                            {/* Header Section */}
                            <div className='text-center flex flex-col gap-3 lg:gap-4 justify-center items-center mb-6 lg:mb-8'>
                                <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-[56px] playfair-300 text-[#0C2165] leading-tight'>
                                    The AIMS Newsletter
                                </h3>
                                <h5 className='text-lg sm:text-xl monser-600 text-black'>
                                    Resources
                                </h5>
                            </div>

                            {/* Tab Navigation */}
                            <NewsTabs />
                        </div>
                    </div>
                </div>
            </div>
            <Breadcrumbs />
            <div className='px-4 lg:px-8'>
                <div className='justify-center items-center flex flex-col relative overflow-hidden'>
                    <div className='container mx-auto py-10 border-b border-gray-200'>
                        <div className='md:w-[75%] mx-auto text-center flex flex-col gap-4 justify-center items-center'>
                            <h5 className='text-center text-3xl monser-600 text-[#0C2165]'>
                                Insights and Updates from AIMS Institutes
                            </h5>
                            <p>
                                Discover student stories, academic updates, research highlights, and everything that makes AIMS a vibrant, future-focused learning community.
                            </p>
                        </div>
                    </div>
                </div>

                <div className='container mx-auto py-10'>
                    <div className='flex flex-col gap-4'>
                        <h3 className=''>
                            About the <br />
                            AIMS Newsletter
                        </h3>
                        <p>The AIMS Institutes newsletter is your gateway to the vibrant world of academia, innovation, and student life at our institution. Designed to keep our community informed and engaged, it shares key updates, academic achievements, and upcoming campus events. Showcasing groundbreaking research, student successes, workshops, and seminars, the newsletter fosters a strong sense of pride and belonging among students, faculty, alumni, and partners.</p>
                        <p>Through insightful articles, compelling visuals, and interactive content, it inspires curiosity, encourages intellectual dialogue, and celebrates the diverse talents of the AIMS family. Reflecting our commitment to excellence in education, innovation, and community building, the newsletter stands as a testament to the collective achievements and aspirations of all who call AIMS their academic home.</p>
                    </div>
                </div>
            </div>


            {/* Static Content */}
            <div className='px-4 lg:px-8'>
                <div className='container mx-auto'>
                    <div className="bg-[#FFE2E3] border border-[#A22877] rounded-2xl p-6 mb-10">
                        {/* Newsletter 2024 */}
                        <div className="flex flex-col md:flex-row justify-between items-start mb-6 gap-4">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#531574] w-full md:w-1/3">
                                Newsletter 2024
                            </h2>
                            <div className="w-full md:w-2/3 space-y-2 text-gray-800">
                                <div>
                                    <span>BHM Newsletter June-July, 2024 </span>
                                    <a target='_blank' href="https://acrobat.adobe.com/id/urn:aaid:sc:ap:bb2e9967-5e5f-4564-9bb1-703c2a620418" 
                                    className="text-[#A22877] underline font-semibold">View</a>
                                </div>
                            </div>
                        </div>

                        <hr className="border-[#A22877] my-4" />

                        {/* Newsletter 2023 */}
                        <div className="flex flex-col md:flex-row justify-between items-start gap-4">
                            <h2 className="text-2xl md:text-3xl font-medium text-[#531574] w-full md:w-1/3">
                                Newsletter 2023
                            </h2>
                            <div className="w-full md:w-2/3 space-y-2 text-gray-800">
                                <div>
                                    <span>MCA - Newsletter vol 2 Issue 1 Jan - Jun, 2023 </span>
                                    <a target='_blank' href="https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/65e940e9472e953f59b23718/1709785360735/MCA+Newsletter+Vol+2+Issue+1+Jan+-+Jun+2023.pdf" 
                                    className="text-[#A22877] underline font-semibold">View</a>
                                </div>
                                <div>
                                    <span>MCA - Newsletter vol 2 Issue 2 Jul - Dec, 2023 </span>
                                    <a target='_blank' href="https://static1.squarespace.com/static/638476bc795c4e5410b55317/t/65e9412d47d08372c5363ef0/1709785429627/MCA+Newsletter+Vol+2+Issue+2+Jul+-+Dec+2023.pdf" 
                                    className="text-[#A22877] underline font-semibold">View</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default NewsletterHeader