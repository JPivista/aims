import React from 'react'
import LifeatAims from '../shared/LifeatAims'



const AlumniinHospitalit = () => {
    const bcomAlumniData = {
        image: "/life-at-aims/student-club-img.png",
        subtitle: "From Ideas to Impact",
        description: `“My experience at AIMS institutes was amazing and memorable. I have learnt a lot of valuable lessons; academic wise as well as important life lessons which pushed me to be a better person and improve in all aspects of life. My teachers have played a vital role in shaping me, they have always supported me, corrected my mistakes and motivated me. I'm grateful to AIMS for giving me a lot of wonderful opportunities and I'm extremely thankful. I hope to receive the same support throughout my life.”`,
    }

    return (
      <>
      <div>
        <LifeatAims
            alumniData={bcomAlumniData}
            title="From Ideas to Impact"
          
        />
        </div>
        </>
    )
}

export default AlumniinHospitalit
