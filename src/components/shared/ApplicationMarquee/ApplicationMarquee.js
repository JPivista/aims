'use client'
import React from 'react'

const ApplicationMarquee = ({ announcements, pageType = 'business' }) => {
    // Page-specific announcements with links
    const pageAnnouncements = {
        business: [
            { text: "APPLY NOW FOR MBA SELECTION PROCESS 2025-26", link: "/apply/mba" },
            { text: "APPLY NOW FOR BBA SELECTION PROCESS 2025-26", link: "/apply/bba" },
            { text: "APPLY NOW FOR BBA AVIATION SELECTION PROCESS 2025-26", link: "/apply/bba-aviation" }
        ],
        engineering: [
            { text: "APPLY NOW FOR B.TECH ADMISSION 2025-26", link: "/apply/btech" },
            { text: "APPLY NOW FOR M.TECH SELECTION PROCESS 2025-26", link: "/apply/mtech" },
            { text: "APPLY NOW FOR ENGINEERING DIPLOMA 2025-26", link: "/apply/diploma" }
        ],
        medical: [
            { text: "APPLY NOW FOR MBBS ADMISSION 2025-26", link: "/apply/mbbs" },
            { text: "APPLY NOW FOR BDS SELECTION PROCESS 2025-26", link: "/apply/bds" },
            { text: "APPLY NOW FOR NURSING ADMISSION 2025-26", link: "/apply/nursing" }
        ],
        home: [
            { text: "ADMISSIONS OPEN FOR 2025-26 ACADEMIC YEAR", link: "/admissions" },
            { text: "APPLY NOW FOR ALL COURSES", link: "/apply" },
            { text: "LIMITED SEATS AVAILABLE - APPLY TODAY", link: "/apply" }
        ],
        aboutAims: [
            { text: "DISCOVER AIMS - EMPOWERING MINDS SINCE 1994", link: "/about-aims" },
            { text: "IACBE ACCREDITED • NAAC 'A' GRADE • VET BY EHL", link: "/accreditation" },
            { text: "QUALITY EDUCATION • PROFESSIONAL EXCELLENCE", link: "/about-aims" }
        ]
    }

    // Convert announcements to objects if they're strings
    const formatAnnouncements = (items) => {
        if (!items) return null
        return items.map(item =>
            typeof item === 'string' ? { text: item, link: '/apply' } : item
        )
    }

    const displayAnnouncements = formatAnnouncements(announcements) || pageAnnouncements[pageType] || pageAnnouncements.business

    return (
        <div
            className="py-4 overflow-hidden shadow-lg"
            style={{ backgroundColor: '#A22877' }}
        >
            <div className='container mx-auto'

                onMouseEnter={(e) => {
                    const marquee = e.currentTarget.querySelector('marquee')
                    if (marquee) marquee.stop()
                }}
                onMouseLeave={(e) => {
                    const marquee = e.currentTarget.querySelector('marquee')
                    if (marquee) marquee.start()
                }}
            >
                <marquee
                    behavior="scroll"
                    direction="left"
                    scrollamount="10"
                // style={{ transform: 'translateX(50%)' }}
                >
                    {displayAnnouncements.map((announcement, index) => (
                        <span key={index} className="mx-8">
                            <a
                                href={announcement.link}
                                className="text-white font-semibold text-lg tracking-wide hover:text-yellow-300 transition-colors duration-200 cursor-pointer"
                                style={{ textDecoration: 'none' }}
                            >
                                {announcement.text}
                            </a>
                        </span>
                    ))}
                </marquee>
            </div>
        </div>
    )
}

export default ApplicationMarquee