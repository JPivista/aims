'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { API_CONFIG } from '../../config/config'
import Button from '@/shared/Button'

const CampusUpdates = () => {
    const [campusData, setCampusData] = useState([])
    const [displayedCampus, setDisplayedCampus] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchCampusData()
    }, [])

    useEffect(() => {
        if (Array.isArray(campusData) && campusData.length > 0) {
            setDisplayedCampus(campusData.slice(0, visibleCount))
        }
    }, [campusData, visibleCount])

    const fetchCampusData = async () => {
        try {
            setLoading(true)

            // Build URL for campus updates - using categories=10 for campus updates (adjust if needed)
            let url = `${API_CONFIG.SERVER_URL}news?categories=10&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`

            console.log('Fetching campus updates from:', url)
            console.log('Current environment:', API_CONFIG.currentEnvironment)
            console.log('Production Server ID:', API_CONFIG.PRODUCTION_SERVER_ID)

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()

            // Ensure data is an array
            if (Array.isArray(data)) {
                setCampusData(data)
                console.log('Campus updates data:', data)

                // Debug the first campus update item structure
                if (data.length > 0) {
                    console.log('First campus update item:', data[0])
                    console.log('ACF data:', data[0].acf)
                    console.log('Thumbnail image:', data[0].acf?.thumbnail_image)
                    console.log('Banner image:', data[0].acf?.banner_image)
                    console.log('Featured media:', data[0].featured_media)
                    console.log('Embedded data:', data[0]._embedded)
                    if (data[0]._embedded && data[0]._embedded['wp:featuredmedia']) {
                        console.log('Featured media embedded:', data[0]._embedded['wp:featuredmedia'])
                    }
                }
            } else {
                console.error('API returned non-array data:', data)
                setCampusData([])
            }
        } catch (error) {
            console.error('Error fetching campus updates:', error)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = () => {
        if (Array.isArray(campusData) && campusData.length > visibleCount) {
            setVisibleCount(prev => prev + 4)
        }
    }

    const formatDate = (dateString) => {
        const date = new Date(dateString)
        return date.toLocaleDateString('en-GB', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        })
    }

    const stripHtml = (html) => {
        const tmp = document.createElement('div')
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ''
    }

    // Don't render anything if there's no data and not loading
    if (!loading && campusData.length === 0) {
        return null
    }

    // Show loading state
    if (loading && campusData.length === 0) {
        return (
            <div className='container mx-auto py-10 px-4'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#A22877] mx-auto'></div>
                    <p className='mt-4 text-gray-600'>Loading campus updates...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden bg-[#E1F9F4]'>
                <div className='container mx-auto py-6 lg:py-10 px-4 lg:px-0'>
                    {/* Section Title */}
                    <div className='text-start mb-6 lg:mb-8'>
                        <h5 className='text-2xl sm:text-3xl lg:text-3xl monser-600 text-gray-800 mb-3 lg:mb-4'>
                            Campus Updates
                        </h5>
                        <div className='text-sm text-gray-500 mb-2'>
                            {/* Environment: {API_CONFIG.currentEnvironment} | Server ID: {API_CONFIG.PRODUCTION_SERVER_ID} | API: {API_CONFIG.SERVER_URL} */}
                        </div>
                    </div>

                    {/* Campus Updates Column Layout */}
                    <div className='flex flex-col gap-4 sm:gap-6'>
                        {displayedCampus.map((campus) => (
                            <div key={campus.id} className='bg-[#E1F9F4] rounded-lg  overflow-hidden transition-shadow duration-300 border-b border-gray-200'>
                                {/* Campus Update Content */}
                                <div className=''>
                                    <div className='flex flex-col lg:flex-row gap-4 sm:gap-6 mb-4 lg:mb-5'>
                                        {/* Left Side - Image */}
                                        <div className='lg:w-1/3'>
                                            {campus.acf && campus.acf.thumbnail_image ? (
                                                <div className='h-48 sm:h-56 lg:h-64 relative overflow-hidden rounded-lg'>
                                                    <Image
                                                        src={campus.acf.thumbnail_image}
                                                        alt={campus.title.rendered}
                                                        fill
                                                        className='object-cover'
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                                    />
                                                </div>
                                            ) : campus.acf && campus.acf.banner_image ? (
                                                <div className='h-48 sm:h-56 lg:h-64 relative overflow-hidden rounded-lg'>
                                                    <Image
                                                        src={campus.acf.banner_image}
                                                        alt={campus.title.rendered}
                                                        fill
                                                        className='object-cover'
                                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
                                                    />
                                                </div>
                                            ) : (
                                                <div className='h-48 sm:h-56 lg:h-64 bg-gradient-to-br from-blue-600 via-purple-600 to-blue-800 flex items-center justify-center rounded-lg'>
                                                    <div className='text-center text-white'>
                                                        <div className='text-4xl mb-2'>🏛️</div>
                                                        <div className='text-sm font-semibold'>Campus Update</div>
                                                    </div>
                                                </div>
                                            )}
                                        </div>

                                        {/* Right Side - Content */}
                                        <div className='lg:w-2/3 flex flex-col'>
                                            <div className='text-sm text-gray-500 mb-2'>
                                                {formatDate(campus.date)}
                                            </div>
                                            <h5 className='monser-600 text-xl mb-3 line-clamp-2'>
                                                <span dangerouslySetInnerHTML={{ __html: campus.title.rendered }} />
                                            </h5>
                                            <p className='text-gray-600 mb-4 line-clamp-3 flex-grow'>
                                                {stripHtml(campus.content.rendered)}
                                            </p>
                                            <div className='mt-auto'>
                                                <Button>Read More</Button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    {Array.isArray(campusData) && visibleCount < campusData.length && (
                        <div className='text-center flex flex-col justify-center items-center mt-8'>
                            <Button
                                onClick={loadMore}
                                variant="teal"
                            >
                                View More
                            </Button>
                        </div>
                    )}

                    {/* Loading indicator for "View More" */}
                    {loading && campusData.length > 0 && (
                        <div className='text-center mt-4'>
                            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#B3DBD3] mx-auto'></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default CampusUpdates
