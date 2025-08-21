import React from 'react'
import ValueAddedPrograms from '../shared/ValueAddedProgramsProps'

// Sample data structure for value added programs
const sampleProgramsData = [
    {
        id: 'life-skills',
        title: 'Life Skills',
        content: [
            'Firefighting at Peenya Fire Station.',
            'Certification on hygiene, sanitation, general nutrition management & physical fitness.',
            'Emotional Wellbeing',
            'Yoga & Meditation'
        ]
    },
    {
        id: 'social-sensitisation',
        title: 'Social Sensitization',
        content: [
            'Rural camp in association with AIMS Centre for Community Service.',
            'NSS in association with AIMS Centre for Community Service.'
        ]
    },
    {
        id: 'employability',
        title: 'Employability & Pre-Placement Trainings',
        content: [
            'Personality Development.',
            'Communication Skills training.',
            'CV Writing.',
            'Income Tax Return Filing.',
            'Dining Etiquettes.'
        ]
    },
    {
        id: 'certifications',
        title: 'Career Oriented Certification',
        content: [
            'Certification in Entrepreneurship.',
            'Certification in Advance Excel and Business Analytics.',
            'Certification in Data Analytics.',
            'Gateway to BFSI (Banking Finance and Insurance sector).',
            'Certification in SPSS.'
        ]
    },
    {
        id: 'workshops',
        title: 'Workshops',
        content: [
            'Workshop on Case Study Analysis.',
            'Workshop on Research.',
            'Workshop on Sustainability.'
        ]
    }
]

// Sample props for different use cases
const sampleProps = {
    title: 'Value Added <br /> Programs',
    description: 'In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.',
    disclaimer: 'Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.'
}

const ValueAddedProgramsProps = () => {
    return (
        <ValueAddedPrograms
            programsData={sampleProgramsData}
            title={sampleProps.title}
            description={sampleProps.description}
            disclaimer={sampleProps.disclaimer}
        />
    )
}

export default ValueAddedProgramsProps 