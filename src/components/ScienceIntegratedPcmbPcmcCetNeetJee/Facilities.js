import Facilities from "../shared/FacilitiesData"

export default function Page() {
    const facilitiesData = {
        title: "Facilities",
        items: [
            "Highly qualified and experienced faculty trained to bring out the best in students at one of the top PU colleges for PCMB in Bangalore",
            "Well-ventilated classrooms equipped with lights, fans, and glass boards",
            "Spacious library with reading room and computer access to global journals and internet facilities, supporting excellence at the best PU college for PCMC in Bangalore",
            "Modern laboratories with sophisticated equipment for uninterrupted practical work",
            "Accessible administrative block adjacent to the main building",
            "A full-fledged canteen for student needs",
            "In-house clinical care with a full-time nurse for students and staff",
        ],
        imageSrc: "/pre-university-college/pcmc_pcmb/science_integrated_facilities.webp",
        imageAlt: "Facilities",
    }

    return <Facilities {...facilitiesData} />
}
