import React from 'react'
import Events from '@/components/Events'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Events | Top B School in India, Best Business School in Bangalore",
        description: "Discover events at AIMS, a Top B School in India and the Best Business School in Bangalore. Explore seminars, fests, and opportunities shaping student success.",
        path: "/events",
        metaImage: "/images/aims-logo.png",
        pageType: "WebSite",
    }

    return (
        <>
            <Seo {...seoField} />
            <Events />
        </>
    )
}

export default page