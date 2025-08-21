import React from 'react'
import AlumniSection from '../shared/AlumniSection'

const BcaAlumni = () => {
    const bcaAlumniData = {
        image: "/bca/vadhavana.png",
        subtitle: "Connect with <br /> Our Alumni",
        description: [
            '“I am Milan K Vadhavana, student of BCA final year at AIMS Institutes. The college is very good for education as well as sports. AIMS Institutes provides good  facilities to sports persons and is one of the best colleges in Karnataka. The faculty are too good, they guide  students to develop in their careers. Our institute provides good placement with internships. I am a sports person, they always support me  and provide  good facilities.I got several medals in inter-college and University wrestling competitions. I built my future in AIMS institutes and  feel proud to be a part of it.”',
        ],
        author: "Milan K Vadhavana ",
        authorTitle: "BCA - AIMS School of IT"
    }

    return (
        <AlumniSection
            alumniData={bcaAlumniData}
            title="BCA Alumni Success Stories"
            backgroundColor="#531574"
        />
    )
}

export default BcaAlumni
