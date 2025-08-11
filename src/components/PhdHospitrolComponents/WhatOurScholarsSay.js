import React from 'react'
import AlumniSection from '../shared/AlumniSection'

const WhatOurScholarsSay = () => {
    const bcomAlumniData = {
        image: "/business_school/phd/what-our-scholars-say.png", // Add your image path
        subtitle: "What Our Scholars Say",
        description: "“I am happy and privileged to state that I have completed the Doctoral Program from AIMS Centre for Advanced Research affiliated to University of Mysore and it has contributed towards my leadership and research skills. I am thankful to my mentor and guide Dr. R Jayaprakash Reddy, who nurtured my thoughts, motivated and provided me timely guidance in successful completion of my research work. The professors at AIMS Institutes are passionate researchers, hardworking and always willing to provide help. The cross cultural interaction among scholars at the research centre also gave me friends from various parts of the world. I am always grateful to Dr. Kiran Reddy, Principal, AIMS Institutes for providing me the opportunity to participate in the Erasmus + Exchange Program at BA School of Business and Finance University, RIGA, Latvia which enhanced my research skills and international exposure. My stay at AIMS Institutes is very memorable and I thank all the Professors and the supporting staff who contributed towards my overall development”.",
        // link: "/alumni/bcom-success-stories"
        author: "Rakshitha Gowda B.Com 2021",
        authorDescription : "Research Scholar 2016-2021, AIMS Centre for Research"
    }

    return (
        <AlumniSection
            alumniData={bcomAlumniData}
            title="B.Com Alumni Success Stories"
            backgroundColor="#531574"
        />
    )
}

export default WhatOurScholarsSay
