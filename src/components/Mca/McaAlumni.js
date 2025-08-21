import React from 'react'
import AlumniSection from '../shared/AlumniSection'

const McaAlumni = () => {
    const mcaAlumniData = {
        image: "/mca/mca-alumni.svg",
        subtitle: "Connect with <br /> Our Alumni",
        description: [
            '"Look at your handicap as a gift vs something to be embarrassed by, and it will help minimize the stigma and confusion with individuals who are not impaired."',
            "The above lesson is what AIMS has taught my fellow learners and me on campus. They minimized the stigma by treating me like any other student on campus. They always looked at my ability rather than my disability, and so did my fellow learners. AIMS is an excellent college for anyone, especially for someone like me, who is specially-abled. The management and staff of AIMS are very supportive.I was worried about the MCA department because I didn't know whether I would be accepted in the beginning. However, after joining the college, I was pleasantly pleased by how compassionate, sympathetic, and helpful the personnel and administration have been, owing to the assistance and the advice I have gotten. They even provided me with a restroom easily accessible by me and any specially abled individual. They made the campus wheelchair-friendly by installing ramps and gave me concession in my college fees. Regarding education, the faculty members and department work tirelessly to mould students' destinies. My three years at AIMS has been a tremendous learning experience with a lot of exposure to the outside world. I've kept my CGPA good, received &quot;The Best Outgoing Student&quot; award for the year 2015. I joined DELL EMC  as a Technical Support Engineer for enterprise storage, and developed greater self-confidence. AIMS is a safe place for any student with a disability to learn and grow. Like a cherry on the top, AIMS has one more remarkable quality; they remember their alumni. They wholeheartedly appreciated my achievements and growth, even after passing out from college. They facilitated the same and provided me with an opportunity to share my experience with the present students of the college and to motivate them. Overall, my experience at AIMS has been kind and friendly.",
            "Good Luck to the Management and Staff for their future endeavors, and congratulations in advance to AIMS students for making a great decision by choosing AIMS."
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
