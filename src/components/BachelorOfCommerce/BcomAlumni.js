import React from 'react'
import AlumniSection from '../shared/AlumniSection'

const BcomAlumni = () => {
    const bcomAlumniData = {
        image: "/bcom/connect-with-our-alumni.png", // Add your image path
        subtitle: "Connect with Our Alumni",
        description: "AIMS Institutes, along with its faculty members and my fellow students, have helped me in development as a person, unearthing my 'Unknown self driving factors' in the present state of being...to develop for the present and future...acceptance in society.This has helped me strive to improve my skills and make me better for today and tomorrow.I can testify to the fact that the person who stepped into this campus on day one is not who I am today...after three years; remarkable change.I am grateful for all the beautiful people whom I have met in this college, faculty and friends alike, who encouraged me to pursue great heights.Thank you all.",
        // link: "/alumni/bcom-success-stories"
        author: "Rakshitha Gowda B.Com 2021"
    }

    return (
        <AlumniSection
            alumniData={bcomAlumniData}
            title="B.Com Alumni Success Stories"
            backgroundColor="#531574"
        />
    )
}

export default BcomAlumni
