'use client'
import React from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const NewsTabs = () => {
    const pathname = usePathname()

    const tabs = [
        { id: 'news', label: 'News', path: '/news' },
        { id: 'newsletter', label: 'Newsletter', path: '/aims-newsletters' },
        { id: 'events', label: 'Events', path: '/events' },
        { id: 'blogs', label: 'Blogs', path: '/blogs' }
    ]

    const getActiveTab = () => {
        if (pathname === '/news') return 'news'
        if (pathname === '/aims-newsletters') return 'newsletter'
        if (pathname === '/events') return 'events'
        if (pathname === '/blogs') return 'blogs'
        return 'news'
    }

    const activeTab = getActiveTab()

    return (
        <div className='flex justify-center my-4'>
            <div className='flex flex-wrap justify-center gap-2 sm:gap-3 lg:gap-4'>
                {tabs.map((tab) => (
                    <Link
                        key={tab.id}
                        href={tab.path}
                        className={`px-3 sm:px-4 lg:px-6 py-2 rounded-sm transition-all duration-300 border-[1px] font-semibold text-sm sm:text-base lg:text-lg ${activeTab === tab.id
                            ? 'bg-[#531574] text-white border-[#531574]'
                            : 'bg-white text-black border-gray-300 hover:border-[#A22877]'
                            }`}
                    >
                        {tab.label}
                    </Link>
                ))}
            </div>
        </div>
    )
}

export default NewsTabs
