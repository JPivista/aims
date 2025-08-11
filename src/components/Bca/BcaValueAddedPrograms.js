import React from 'react'
import ValueAddedPrograms from '../shared/ValueAddedProgramsProps'

// Sample data structure for value added programs
const sampleProgramsData = [
    {
        id: 'life-skills',
        title: 'Life Skills',
        content: [
            'Python Programming',
            'Statistics for Data Science using Python',
            'Machine Learning using Python',
            'Full Stack Development'
        ]
    },
    {
        id: 'social-sensitisation',
        title: 'Social Sensitisation',
        content: [
            'Community service projects',
            'Social responsibility awareness',
            'Environmental consciousness programs'
        ]
    },
    {
        id: 'employability',
        title: 'Employability & Pre-Placement Trainings',
        content: [
            'Resume building workshops',
            'Interview preparation sessions',
            'Professional communication skills',
            'Industry-specific training modules'
        ]
    },
    {
        id: 'certifications',
        title: 'Career Oriented Certifications',
        content: [
            'Financial modeling certifications',
            'Data analytics tools training',
            'Enterprise software proficiency',
            'Industry-recognized credentials'
        ]
    },
    {
        id: 'workshops',
        title: 'Workshops',
        content: [
            'Industry expert sessions',
            'Case study workshops',
            'Practical application training',
            'Skill development sessions'
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