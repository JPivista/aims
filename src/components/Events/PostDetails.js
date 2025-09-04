'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { API_CONFIG } from '../../config/config'
import Button from '@/shared/Button'

const EventsWorkshops = () => {
    const [eventsData, setEventsData] = useState([])
    const [displayedEvents, setDisplayedEvents] = useState([])
    const [visibleCount, setVisibleCount] = useState(8)
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
            let url = `${API_CONFIG.SERVER_URL}posts?categories=4&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish&per_page=100`

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

    if (!loading && eventsData.length === 0) return null

    return (
        <div className="py-10 px-4 lg:px-8">
            <div className="container mx-auto">
                {/* Events Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {displayedEvents.map((event) => (
                        <div
                            key={event.id}
                            className="bg-white rounded-xl shadow-md hover:shadow-lg transition-all duration-300 flex flex-col"
                        >
                            {/* Event Image */}
                            <div className="w-full h-48 relative">
                                <Image
                                    src={event.acf.thumbnail_image || event.acf.banner_image}
                                    alt={event.title?.rendered || "Event Image"}
                                    fill
                                    className="object-cover rounded-t-xl"
                                />
                            </div>

                            {/* Event Content */}
                            <div className="p-4 flex flex-col flex-grow">
                                <h5 className="text-base sm:text-lg mb-10">
                                    <span dangerouslySetInnerHTML={{ __html: event.title.rendered }} style={{ fontWeight: "600", color: "#0C2165" }} />
                                </h5>

                                <Button
                                    href={`/events/${event.slug}`}
                                    className="mt-auto w-full sm:w-fit"
                                >
                                    View Event
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>

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
                        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-[#B3DBD3] mx-auto"></div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default EventsWorkshops
