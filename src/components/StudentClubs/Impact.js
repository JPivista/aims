import React from 'react'
import LifeatAims from '../shared/LifeatAims'



const AlumniinHospitalit = () => {
    const bcomAlumniData = {
        image: "/life-at-aims/Student-Clubs-Image.webp",
        subtitle: "From Ideas to Impact",
        description: `At AIMS, clubs are not just co-curricular, they’re an extension of our value-based education. They give every student, regardless of background, the chance to participate, lead, and grow. Whether you're an aspiring entrepreneur or a hospitality enthusiast, there’s a space for your voice, and your vision, here.`,
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
