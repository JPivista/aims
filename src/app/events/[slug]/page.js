'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { API_CONFIG } from '../../../config/config'
import Button from '@/shared/Button'

const EventDetail = () => {
    const params = useParams()
    const [eventData, setEventData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (params.slug) {
            fetchEventData(params.slug)
        }
    }, [params.slug])

    const fetchEventData = async (slug) => {
        try {
            setLoading(true)
            let url = `${API_CONFIG.SERVER_URL}posts?slug=${slug}&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`

            const response = await fetch(url)
            if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`)
            const data = await response.json()
            console.log(data)

            if (Array.isArray(data) && data.length > 0) {
                setEventData(data[0])
            }
        } catch (error) {
            console.error('Error fetching event:', error)
        } finally {
            setLoading(false)
        }
    }

    if (loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#6E3299]"></div>
            </div>
        )
    }

    if (!eventData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">Event Not Found</h1>
                    <p className="text-gray-600">The event you're looking for doesn't exist.</p>
                </div>
            </div>
        )
    }

    return (
        <>

            <style>
                {`
                    h1 {
                       font-size: 40px !important;
                       font-weight: 600 !important;
                       color: #0C2165 !important;
                       margin-bottom: 1rem !important;
                       text-align: center !important;
                       line-height: 1.2 !important;
                    }
                    // p  {
                    //     margin-bottom: 1rem !important;
                    //     font-size: 18px !important;
                    // }
                `}
            </style>
            <div className="min-h-screen pt-10  flex flex-col justify-center items-center"
            // style={{
            //     background: 'linear-gradient(180deg, white 25%, #E1F9F4 20%)'
            // }}
            >
                <div className='w-full flex flex-col justify-center items-center'
                    style={{
                        background: 'linear-gradient(180deg, white 50%, #E1F9F4 20%)'
                    }}
                >
                    <div className="relative h-96 lg:h-[50vh] w-[50%] bg-[#E1F9F4]"

                    >
                        <Image
                            src={eventData.acf.banner_image || eventData.acf.thumbnail_image || '/default-event-banner.jpg'}
                            alt={eventData.title?.rendered || "Event Banner"}
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center bg-[#E1F9F4]'>
                    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                        {/* Hero Section */}
                        {/* <div className="relative h-96 lg:h-[50vh] w-[50%] ">
                        <Image
                            src={eventData.acf.banner_image || eventData.acf.thumbnail_image || '/default-event-banner.jpg'}
                            alt={eventData.title?.rendered || "Event Banner"}
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div> */}

                        <div className='w-full flex flex-col justify-center items-center'>
                            <h1
                                className="font-bold text-[#0C2165] my-4"
                                dangerouslySetInnerHTML={{ __html: eventData.title.rendered }}
                            />
                            {eventData.acf.event_date && (
                                <p className="text-xl text-white/90 mb-6">
                                    📅 {new Date(eventData.acf.event_date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            )}
                        </div>

                        {/* Event Details Box */}
                        <div className="py-4 w-full flex flex-col justify-center items-center">
                            {/* Main Content */}
                            <div className="**:">
                                <div
                                    className="prose prose-lg max-w-none text-[#0C2165] leading-relaxed text-base p-class"
                                    dangerouslySetInnerHTML={{ __html: eventData.content.rendered }}
                                />
                            </div>

                            {/* Back Navigation */}
                            <div className="mt-8 flex justify-start items-start w-full">
                                <Link
                                    href="/events"
                                    className="text-[#A22877] hover:text-[#6E3299] transition-colors duration-300 flex items-center gap-2 p-class"
                                >
                                    <span>←</span>
                                    <span>Back</span>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EventDetail
