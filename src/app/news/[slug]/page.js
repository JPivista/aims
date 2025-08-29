'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useParams } from 'next/navigation'
import { API_CONFIG } from '../../../config/config'
import Breadcrumbs from '@/components/shared/Breadcrumbs'

const NewsDetail = () => {
    const params = useParams()
    const [newsData, setNewsData] = useState(null)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        if (params.slug) {
            fetchNewsData(params.slug)
        }
    }, [params.slug])

    const fetchNewsData = async (slug) => {
        try {
            setLoading(true)
            // Use news endpoint to match what the news components are using
            let url = `${API_CONFIG.SERVER_URL}news?slug=${slug}&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }

            const data = await response.json()
            console.log('News endpoint response:', data)

            if (Array.isArray(data) && data.length > 0) {
                setNewsData(data[0])
            } else {
                console.error('No news found with slug:', slug)
                setNewsData(null)
            }
        } catch (error) {
            console.error('Error fetching news:', error)
            setNewsData(null)
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

    if (!newsData) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-gray-800 mb-4">News Not Found</h1>
                    <p className="text-gray-600">The news article you&apos;re looking for doesn&apos;t exist.</p>
                    <div className="mt-4 text-sm text-gray-500">
                        <p>Slug: {params.slug}</p>
                        <p>API Endpoint: {API_CONFIG.SERVER_URL}news</p>
                        <p>Categories: 7,8,9,10 (Student Achievements, Events, Placements, Campus Updates)</p>
                        <p>Environment: {API_CONFIG.currentEnvironment}</p>
                        <p>Server ID: {API_CONFIG.PRODUCTION_SERVER_ID}</p>
                    </div>
                    <div className="mt-4">
                        <Link
                            href="/news"
                            className="text-[#A22877] hover:text-[#6E3299] transition-colors duration-300"
                        >
                            ← Back to News
                        </Link>
                    </div>
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
                `}
            </style>
            <Breadcrumbs />
            <div className="min-h-screen pt-10 flex flex-col justify-center items-center">
                <div className='w-full flex flex-col justify-center items-center'
                    style={{
                        background: 'linear-gradient(180deg, white 50%, #E1F9F4 20%)'
                    }}
                >
                    <div className="relative h-96 lg:h-[50vh] w-[50%] bg-[#E1F9F4]">
                        <Image
                            src={newsData.acf.banner_image || newsData.acf.thumbnail_image || '/default-news-banner.jpg'}
                            alt={newsData.title?.rendered || "News Banner"}
                            fill
                            className="object-cover rounded-xl"
                            priority
                        />
                    </div>
                </div>

                <div className='w-full flex flex-col justify-center items-center bg-[#E1F9F4]'>
                    <div className="container mx-auto px-4 flex flex-col justify-center items-center">
                        <div className='w-full flex flex-col justify-center items-center'>
                            <h1
                                className="font-bold text-[#0C2165] my-4"
                                dangerouslySetInnerHTML={{ __html: newsData.title.rendered }}
                            />
                            {newsData.date && (
                                <p className="text-xl text-[#0C2165] mb-6">
                                    📅 {new Date(newsData.date).toLocaleDateString('en-US', {
                                        weekday: 'long',
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </p>
                            )}
                        </div>

                        {/* Main Content */}
                        <div className="py-4 w-full flex flex-col justify-center items-center">
                            <div className="**:">
                                <div
                                    className="prose prose-lg max-w-none text-[#0C2165] leading-relaxed text-base p-class"
                                    dangerouslySetInnerHTML={{ __html: newsData.content.rendered }}
                                />
                            </div>

                            {/* Back Navigation */}
                            <div className="mt-8 flex justify-start items-start w-full">
                                <Link
                                    href="/news"
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

export default NewsDetail
