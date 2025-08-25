import React from 'react'
import Blogs from '@/components/Blogs'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top B School in India | Best Business School in Bangalore",
        description: "Explore insights, updates, and success stories from AIMS, Top B School in India and the Best Business School in Bangalore, guiding your career forward.",
        path: "/blogs",
        metaImage: "/images/aims-logo.png",
        pageType: "WebSite",
    }

    return (
        <>
            <Seo {...seoField} />
            <Blogs />
        </>
    )
}

export default page