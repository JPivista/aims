import React from 'react'
import News from '@/components/News'
import Seo from '@/components/shared/Seo/Seo'

const page = () => {
    const seoField = {
        title: "Top B School in India | Best Business School in Bangalore",
        description: "Stay updated with AIMS Institutes, a Top B School in India and the Best Business School in Bangalore. Explore campus news, events, achievements, and more.",
        path: "/news",
        metaImage: "/images/aims-logo.png",
        pageType: "WebSite",
    }

    return (
        <>
            <Seo {...seoField} />
            <News />
        </>
    )
}

export default page
