'use client'
import React, { useState, useEffect } from 'react'
import Image from 'next/image'
import { API_CONFIG } from '../../config/config'
import Button from '@/shared/Button'

const StudentAchievements = () => {
    const [newsData, setNewsData] = useState([])
    const [displayedNews, setDisplayedNews] = useState([])
    const [visibleCount, setVisibleCount] = useState(4)
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        fetchNewsData()
    }, [])

    useEffect(() => {
        if (Array.isArray(newsData) && newsData.length > 0) {
            setDisplayedNews(newsData.slice(0, visibleCount))
        }
    }, [newsData, visibleCount])

    const fetchNewsData = async () => {
        try {
            setLoading(true)

            // Build URL based on environment
            let url = `${API_CONFIG.SERVER_URL}news?categories=7&_embed&production=${API_CONFIG.PRODUCTION_SERVER_ID}&status=publish`

            console.log('Fetching from:', url)
            console.log('Current environment:', API_CONFIG.currentEnvironment)
            console.log('Production Server ID:', API_CONFIG.PRODUCTION_SERVER_ID)

            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`)
            }
            const data = await response.json()

            // Ensure data is an array
            if (Array.isArray(data)) {
                setNewsData(data)
                console.log('News data:', data)

                // Debug the first news item structure
                if (data.length > 0) {
                    console.log('First news item:', data[0])
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
                setNewsData([])
            }
        } catch (error) {
            console.error('Error fetching news:', error)
        } finally {
            setLoading(false)
        }
    }

    const loadMore = () => {
        if (Array.isArray(newsData) && newsData.length > visibleCount) {
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
    if (!loading && newsData.length === 0) {
        return null
    }

    // Show loading state
    if (loading && newsData.length === 0) {
        return (
            <div className='container mx-auto py-10 px-4'>
                <div className='text-center'>
                    <div className='animate-spin rounded-full h-12 w-12 border-b-2 border-[#A22877] mx-auto'></div>
                    <p className='mt-4 text-gray-600'>Loading news...</p>
                </div>
            </div>
        )
    }

    return (
        <div className='container mx-auto py-6 lg:py-10 px-4 lg:px-0'>
            {/* Section Title */}
            <div className='text-start mb-6 lg:mb-8'>
                <h5 className='text-2xl sm:text-3xl lg:text-3xl monser-600 text-gray-800 mb-3 lg:mb-4'>
                    Student Achievements
                </h5>
                <div className='text-sm text-gray-500 mb-2'>
                    {/* Environment: {API_CONFIG.currentEnvironment} | Server ID: {API_CONFIG.PRODUCTION_SERVER_ID} | API: {API_CONFIG.SERVER_URL} */}
                </div>
            </div>

            {/* News Grid */}
            <div className='grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 sm:gap-6 mb-8 lg:mb-10'>
                {displayedNews.map((news) => (
                    <div key={news.id} className='bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300 flex flex-col h-full'>
                        {/* News Image */}
                        <div className='relative'>
                            {news.acf && news.acf.thumbnail_image ? (
                                <div className='h-[200px] sm:h-[400px] md:h-[350px] relative overflow-hidden'>
                                    <Image
                                        src={news.acf.thumbnail_image}
                                        alt={news.title.rendered}
                                        fill
                                        className='md:object-contain object-cover'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ) : news.acf && news.acf.banner_image ? (
                                <div className='h-48 relative overflow-hidden'>
                                    <Image
                                        src={news.acf.banner_image}
                                        alt={news.title.rendered}
                                        fill
                                        className='object-cover'
                                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                                    />
                                </div>
                            ) : (
                                <div className='h-48 bg-gradient-to-br from-purple-400 via-pink-400 to-orange-400 flex items-center justify-center'>
                                    <div className='text-center text-white'>
                                        <div className='text-4xl mb-2'>🎓</div>
                                        <div className='text-sm font-semibold'>Student Achievement</div>
                                    </div>
                                </div>
                            )}

                            <div className='text-sm text-black py-2 px-3 bg-white absolute bottom-0 left-0'>
                                {formatDate(news.date)}
                            </div>
                        </div>

                        {/* News Content */}
                        <div className='p-4 sm:p-5 lg:p-6 flex flex-col flex-grow'>

                            <h5 className='monser-600 text-xl mb-3 line-clamp-2 min-h-[3rem]'>
                                <span dangerouslySetInnerHTML={{ __html: news.title.rendered }} />
                            </h5>
                            <p className='text-gray-600 mb-4 line-clamp-3 flex-grow'>
                                {stripHtml(news.content.rendered)}
                            </p>
                            <div className='mt-auto flex justify-start items-start'>
                                <Button href={`/news/${news.slug}`}>Read More</Button>
                            </div>
                        </div>
                    </div>
                ))}
            </div>

            {/* View More Button */}
            {Array.isArray(newsData) && visibleCount < newsData.length && (
                <div className='text-center'>
                    <Button
                        onClick={loadMore}
                        variant="teal"
                    >
                        View More
                    </Button>
                </div>
            )}

            {/* Loading indicator for "View More" */}
            {loading && newsData.length > 0 && (
                <div className='text-center mt-4'>
                    <div className='animate-spin rounded-full h-8 w-8 border-b-2 border-[#B3DBD3] mx-auto'></div>
                </div>
            )}
        </div>
    )
}

export default StudentAchievements
