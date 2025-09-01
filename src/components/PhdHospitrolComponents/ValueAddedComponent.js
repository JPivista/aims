


import React from 'react'
import ValueAddedPrograms from '../shared/ValueAddedProgramsProps'

// Sample data structure for value added programs
const sampleProgramsData = [
    {
        id: 'Skill Building Workshops and Trainings',
        title: 'Skill Building Workshops and Trainings',
        content: [
            'Training programs on latest analytical tools viz., SPSS & R',
            'Workshops on paper writing skills',
        ]
    },

]

// Sample props for different use cases
const sampleProps = {
    title: 'Value Added <br/> Programs',
    description: 'The PhD program at AIMS Institutes adheres to and expects high-quality standards. In addition to the norms and procedures of UoM, the research scholars are also expected to attend:',
    disclaimer: 'Presentations by the scholars are scheduled every month in the presence of the respective guides and senior professors which help the scholars in speeding up their research works.'
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