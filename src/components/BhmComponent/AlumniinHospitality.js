import React from 'react'
import AlumniSection from '../shared/AlumniSection'

const AlumniinHospitality = () => {
    const bcomAlumniData = {
        image: "/bhm/Alumnis.png",
        subtitle: "Alumni in Hospitality",
        description: "“My experience at AIMS institutes was amazing and memorable. I have learnt a lot of valuable lessons; academic wise as well as important life lessons which pushed me to be a better person and improve in all aspects of life.  My teachers have played a vital role in shaping me, they have always supported me, corrected my mistakes and motivated me. I'm grateful to AIMS for giving me  a lot of wonderful opportunities and I'm extremely thankful.  I hope to receive the same support throughout my life.”",
        // link: "/alumni/bcom-success-stories"
        author: " Louis S Sudeep, BHM",
        // authorDescription : "Research Scholar 2016-2021, AIMS Centre for Research"
    }

    return (
        <AlumniSection
            alumniData={bcomAlumniData}
            title="B.Com Alumni Success Stories"
            backgroundColor="#531574"
        />
    )
}

export default AlumniinHospitality
