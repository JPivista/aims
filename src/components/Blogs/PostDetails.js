'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { API_CONFIG } from '../../config/config'
import Button from '@/shared/Button'

const BlogPostDetails = () => {
    const [eventsData, setEventsData] = useState([])
    const [displayedEvents, setDisplayedEvents] = useState([])
    const [visibleCount, setVisibleCount] = useState(6)
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
            let url = `${API_CONFIG.SERVER_URL}posts?categories=5&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`
            const response = await fetch(url)
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const data = await response.json()

            if (Array.isArray(data)) setEventsData(data)
            else setEventsData([])
        } catch (error) {
            console.error('Error fetching events:', error)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = () => {
        if (eventsData.length > visibleCount) {
            setVisibleCount(prev => prev + 4)
        }
    }

    const stripHtml = (html) => {
        if (!html) return ''
        const tmp = document.createElement('div')
        tmp.innerHTML = html
        return tmp.textContent || tmp.innerText || ''
    }

    if (!loading && eventsData.length === 0) return null

    return (
        <div className="py-10 px-4">
            <div className="container mx-auto space-y-10">

                {/* Events List */}
                {displayedEvents.map((event, index) => (
                    <div
                        key={event.id}
                        className="flex flex-col lg:flex-row items-center bg-white rounded-2xl overflow-hidden border border-[#A22877]"
                    >
                        {/* Alternate image left/right like screenshot */}
                        {index % 2 === 0 ? (
                            <>
                                <div className="w-full lg:w-1/2">
                                    <Image
                                        src={event.acf.thumbnail_image || event.acf.banner_image}
                                        alt={event.title?.rendered || "Event Image"}
                                        width={800}
                                        height={500}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                                <div className="p-6 w-full lg:w-1/2 flex flex-col justify-center">
                                    <p className="text-sm mb-2 border border-gray-200 px-2 py-1 w-fit">
                                        {new Date(event.date).toLocaleDateString('en-GB')}
                                    </p>
                                    <h5 className="text-xl font-semibold text-gray-900 mb-3"
                                        dangerouslySetInnerHTML={{ __html: event.title.rendered }}
                                    />
                                    <p className="text-gray-700 mb-4">
                                        {stripHtml(event.excerpt?.rendered)?.slice(0, 220)}...
                                    </p>
                                    <Button className="w-fit">Read More </Button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="p-6 w-full lg:w-1/2 flex flex-col justify-center">
                                    <p className="text-sm mb-2 border border-gray-200 px-2 py-1 w-fit">
                                        {new Date(event.date).toLocaleDateString('en-GB')}
                                    </p>
                                    <h5 className="text-xl font-semibold text-gray-900 mb-3"
                                        dangerouslySetInnerHTML={{ __html: event.title.rendered }}
                                    />
                                    <p className="text-gray-700 mb-4">
                                        {stripHtml(event.excerpt?.rendered)?.slice(0, 220)}...
                                    </p>
                                    <Button className="w-fit">Read More </Button>
                                </div>
                                <div className="w-full lg:w-1/2">
                                    <Image
                                        src={event.acf.thumbnail_image || event.acf.banner_image}
                                        alt={event.title?.rendered || "Event Image"}
                                        width={800}
                                        height={500}
                                        className="object-cover w-full h-full"
                                    />
                                </div>
                            </>
                        )}
                    </div>
                ))}

                {/* View More */}
                {visibleCount < eventsData.length && (
                    <div className="text-center mt-8">
                        <Button onClick={loadMore} variant="teal">
                            View More
                        </Button>
                    </div>
                )}

                {/* Loading indicator */}
                {loading && (
                    <div className="text-center mt-4">
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-teal-400 mx-auto"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default BlogPostDetails
