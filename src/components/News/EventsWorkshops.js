'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { API_CONFIG } from '../../config/config'
import Button from '@/shared/Button'

const EventsWorkshops = () => {
    const [eventsData, setEventsData] = useState([])
    const [displayedEvents, setDisplayedEvents] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchEventsData()
    }, [])

    useEffect(() => {
        if (Array.isArray(eventsData) && eventsData.length > 0) {
            setDisplayedEvents(eventsData.slice(0, visibleCount))
        }
    }, [eventsData, visibleCount])

    const fetchEventsData = async () => {
        try {
            setLoading(true)

            // Build URL for events - using categories=8 for events (adjust if needed)
            let url = `${API_CONFIG.SERVER_URL}news?categories=8&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`

            console.log('Fetching events from:', url)
            console.log('Current environment:', API_CONFIG.currentEnvironment)
            console.log('Production Server ID:', API_CONFIG.PRODUCTION_SERVER_ID)

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()

            // Ensure data is an array
            if (Array.isArray(data)) {
                setEventsData(data)
                console.log('Events data:', data)

                // Debug the first event item structure
                if (data.length > 0) {
                    console.log('First event item:', data[0])
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
                setEventsData([])
            }
        } catch (error) {
            console.error('Error fetching events:', error)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = () => {
        if (Array.isArray(eventsData) && eventsData.length > visibleCount) {
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
    if (!loading && eventsData.length === 0) {
        return null
    }

    // Show loading state
    if (loading && eventsData.length === 0) {
        return (
            <div className='container mx-auto py-10 px-4'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#A22877] mx-auto'></div>
                    <p className='mt-4 text-gray-600'>Loading events...</p>
                </div>
            </div>
        )
    }

    return (
        <>
            <div className='justify-center items-center flex flex-col lg:px-0 px-4 relative overflow-hidden bg-[#FFE2E3]'>
                <div className='container mx-auto py-6 lg:py-10 px-4 lg:px-0'>
                    {/* Section Title */}
                    <div className='text-start mb-6 lg:mb-8'>
                        <h5 className='text-2xl sm:text-3xl lg:text-3xl monser-600 text-gray-800 mb-3 lg:mb-4'>
                            Events & Workshops
                        </h5>
                        <div className='text-sm text-gray-500 mb-2'>
                            {/* Environment: {API_CONFIG.currentEnvironment} | Server ID: {API_CONFIG.PRODUCTION_SERVER_ID} | API: {API_CONFIG.SERVER_URL} */}
                        </div>
                    </div>

                    {/* Events Grid */}
                    <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 lg:mb-10'>
                        {displayedEvents.map((event) => (
                            <div key={event.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full'>
                                {/* Event Image */}
                                <div className='relative'>
                                    {event.acf && event.acf.thumbnail_image ? (
                                        <div className='h-[200px] sm:h-[400px] md:h-[350px] relative overflow-hidden'>
                                            <Image
                                                src={event.acf.thumbnail_image}
                                                alt={event.title.rendered}
                                                fill
                                                className='md:object-contain object-cover'
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    ) : event.acf && event.acf.banner_image ? (
                                        <div className='h-48 relative overflow-hidden'>
                                            <Image
                                                src={event.acf.banner_image}
                                                alt={event.title.rendered}
                                                fill
                                                className='object-cover'
                                                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                            />
                                        </div>
                                    ) : (
                                        <div className='h-48 bg-gradient-to-br from-blue-400 via-purple-400 to-pink-400 flex items-center justify-center'>
                                            <div className='text-center text-white'>
                                                <div className='text-4xl mb-2'>🎪</div>
                                                <div className='text-sm font-semibold'>Event</div>
                                            </div>
                                        </div>
                                    )}

                                    <div className='text-sm text-black py-2 px-3 bg-white absolute bottom-0 left-0'>
                                        {formatDate(event.date)}
                                    </div>
                                </div>

                                {/* Event Content */}
                                <div className='p-4 sm:p-5 lg:p-6 flex flex-col flex-grow'>
                                    <h5 className='monser-600 text-xl mb-3 line-clamp-2 min-h-[3rem]'>
                                        <span dangerouslySetInnerHTML={{ __html: event.title.rendered }} />
                                    </h5>
                                    <p className='text-gray-600 mb-4 line-clamp-3 flex-grow'>
                                        {stripHtml(event.content.rendered)}
                                    </p>
                                    <div className='mt-auto flex justify-start items-start'>
                                        <Button href={`/news/${event.slug}`}>Read More</Button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* View More Button */}
                    {Array.isArray(eventsData) && visibleCount < eventsData.length && (
                        <div className='text-center flex flex-col justify-center items-center'>
                            <Button
                                onClick={loadMore}
                                variant="teal"
                            >
                                View More
                            </Button>
                        </div>
                    )}

                    {/* Loading indicator for "View More" */}
                    {loading && eventsData.length > 0 && (
                        <div className='text-center mt-4'>
                            <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#B3DBD3] mx-auto'></div>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}

export default EventsWorkshops
