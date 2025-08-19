import React from 'react'
import ValueAddedPrograms from '../shared/ValueAddedProgramsProps'

// Sample data structure for value added programs
const sampleProgramsData = [
    {
        id: 'life-skills',
        title: 'Life Skills',
        content: [
            'Firefighting at Peenya Fire Station.',
            'Certification in hygiene, sanitation, general nutrition management & physical fitness.',
            'Webinar on Emotional Wellbeing.',
            'Yoga & Meditation'
        ]
    },
    {
        id: 'social-sensitisation',
        title: 'Social Sensitisation',
        content: [
            'Rural camp in association with AIMS Centre for Community Service.',
            'NSS in association with AIMS Centre for Community Service.'
        ]
    },
    {
        id: 'employability',
        title: 'Employability & Pre-Placement Trainings',
        content: [
            'Power dressing and Grooming.',
            'Communication Skills training.',
            'Etiquettes - Business & Dining Etiquettes.',
            'Presentation Skills and CV Writing.',
            'CV Writing and Interview Skills.',
            'Aptitude & GD Training.',
            'Mock Interviews.',
            'Presentation on Dissertation Projects.',
            'Company Specific Placement training.',
            'Soft Skills Training (Including Language Lab).',
            'Career Guidance Sessions.'
        ]
    },
    {
        id: 'certifications',
        title: 'Career Oriented Certifications',
        content: [
            'Augmentation in HTML.',
            'Certification in Cloud Computing AWS.',
            'Certification in DOTNET Full Stack development.',
            'Certification in Entrepreneurship.',
            'Certification in Cloud Computing AZURE Fundamentals 900.',
            'Augmentation in AI based Chatbots.',
            'Certification in PHP and MySQL.',
            'Certification in IOT.'
        ]
    },
    {
        id: 'workshops',
        title: 'Workshops',
        content: [
            'Workshop on Research Writing.',
            'Workshop on Cyber Security.',
            'Workshop on Sustainability.'
        ]
    }
]

// Sample props for different use cases
const sampleProps = {
    title: 'Value Added <br/> Programs',
    description: 'In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.',
    disclaimer: 'Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.'
}

const BcaValueAddedProgramsProps = () => {
    return (
        <ValueAddedPrograms
            programsData={sampleProgramsData}
            title={sampleProps.title}
            description={sampleProps.description}
            disclaimer={sampleProps.disclaimer}
        />
    )
}

export default BcaValueAddedProgramsProps 