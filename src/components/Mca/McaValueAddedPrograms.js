import React from 'react'
import ValueAddedPrograms from '../shared/ValueAddedProgramsProps'

// Sample data structure for value added programs
const sampleProgramsData = [
    {
        id: 'technical-skills',
        title: 'Technical Skills',
        content: [
            'Python Programming',
            'Statistics for Data Science using Python',
            'Machine Learning using Python',
            'Full Stack Development',
            'Software Project Management',
            'Software Testing',
            'BlockChain Technology',
            'Cyber Law & Crimes',
            'IoT',
            'Mobile computing',
            'Big Data',
            'Intellectual Property Rights & Ethics'
        ]
    },
    {
        id: 'employability',
        title: 'Employability & Pre-Placement Trainings',
        content: [
            'Aptitude Training',
            'Communication skills',
            'Grooming & Etiquettes',
            'Interpersonal Skills',
            'Presentation Skills',
            'Resume Writing',
            'Interview skills',
            'Mock Interviews & Group Discussion'
        ]
    },
    {
        id: 'workshops-seminars',
        title: 'Workshops / Seminars',
        content: [
            'Industry expert sessions',
            'Case study workshops',
            'Practical application training',
            'Skill development sessions'
        ]
    },
    {
        id: 'entrepreneurship',
        title: 'Program on Entrepreneurship',
        content: [
            'Business model development',
            'Startup planning and execution',
            'Market research and analysis',
            'Financial planning for startups'
        ]
    },
    {
        id: 'social-sensitization',
        title: 'Social Sensitization',
        content: [
            'Rural camp in association with AIMS Centre for Community Service',
            'Session on Sustainability',
            'Community service projects',
            'Social responsibility awareness'
        ]
    }
]

// Sample props for different use cases
const sampleProps = {
    title: 'Value Added <br/> Programs',
    description: 'In our effort to build the profile of the participants of the program and ensure they meet the requirements of the industry (in addition to personality development), we at AIMS incorporate a set of value added programs in each semester.',
    disclaimer: 'Value additions might vary for every semester depending on the feedback from the alumni and industry representatives.'
}

const McaValueAddedProgramsProps = () => {
    return (
        <ValueAddedPrograms
            programsData={sampleProgramsData}
            title={sampleProps.title}
            description={sampleProps.description}
            disclaimer={sampleProps.disclaimer}
        />
    )
}

export default McaValueAddedProgramsProps 