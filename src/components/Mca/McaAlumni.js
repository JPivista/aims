import React from 'react'
import AlumniSection from '../shared/AlumniSection'

const McaAlumni = () => {
    const mcaAlumniData = {
        image: "/mca/mca-alumni.svg",
        subtitle: "Connect with <br /> Our Alumni",
        description: [
            '<b>"Look at your handicap as a gift vs something to be embarrassed by, and it will help minimize the stigma and confusion with individuals who are not impaired."</b>',
            "AIMS and my fellow learners helped me minimize the stigma by focusing on my ability rather than my disability. The college has been an excellent place for specially-abled individuals like me.",
            "The management and staff at AIMS are very supportive. I was pleasantly surprised by the compassionate personnel and administration. The college provides accessible restrooms, wheelchair-friendly ramps, and fee concessions for students with disabilities.",
            "The faculty and department are dedicated to shaping students' destinies. My three years at AIMS have been a tremendous learning experience with exposure to the outside world.",
            "I maintained a good CGPA and received 'The Best Outgoing Student' award in 2015. After graduation, I joined DELL EMC as a Technical Support Engineer. AIMS helped me develop self-confidence and is a safe place for students with disabilities.",
            "AIMS has a remarkable quality of remembering alumni and appreciating their achievements. They provide opportunities to share experiences with current students. The overall experience at AIMS was kind and friendly.",
            "Good luck to AIMS management and staff, and congratulations to future AIMS students."
        ],
        author: "Ramitha Kulal Ganesh",
        authorTitle: "Alumni, MCA - AIMS School of IT"
    }

    return (
        <AlumniSection
            alumniData={mcaAlumniData}
            title="MCA Alumni Success Stories"
            backgroundColor="#531574"
        />
    )
}

export default McaAlumni
