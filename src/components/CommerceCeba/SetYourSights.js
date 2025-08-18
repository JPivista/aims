import TabbedInfoSection from "@/components/shared/Pcmc";

const examData = {
    Comprehensive: {
        title: "Comprehensive Curriculum",
        subtitle: "",
        description:
            "Our curriculum is meticulously crafted to cover essential subjects such as Economics, Business Studies, Accountancy, and Computer Science. This holistic approach ensures that students develop a well-rounded understanding of various business disciplines.",
    },
    Practical: {
        title: "Practical Learning",
        subtitle: "",
        description:
            "We believe in experiential learning, and our teaching methods incorporate real-world applications and case studies. This hands-on approach enables students to bridge the gap between theory and practice, preparing them for the challenges of the business world.",
    },
    Expert: {
        title: "Expert Faculty",
        subtitle: "",
        description:
            "Our faculty members are highly qualified professionals with extensive experience in their respective fields. They are dedicated to nurturing students' intellectual curiosity, fostering a stimulating learning environment conducive to academic excellence.",
    },
    Skills: {
        title: "Focus on Skill Development",
        subtitle: "",
        description:
            " In addition to academic knowledge, we emphasise the development of essential skills such as communication, teamwork, leadership, and problem-solving. These skills are invaluable assets that empower students to thrive in today's competitive global marketplace.",
    },
    Guidance: {
        title: "Career Guidance",
        subtitle: "",
        description:
            "We offer comprehensive career guidance services to help students explore various career pathways and make informed decisions about their future.",
    },
};

export default function Page() {
    return (
        <>
            <TabbedInfoSection
                mainHeading={`The First Step<br />Towards Your AIM`}
                mainDescription={[`At AIMS PU College,  one of the best PU colleges for commerce in Bangalore, we foster comprehensive education that equips students with a diverse skill set for success in the dynamic world of business. Our PU program builds a strong foundation in Economics, Business Studies, Accountancy, and Computer Science, offering students the right blend of theory and application.`,
                    `We prioritise academic excellence, career readiness, and student growth. Recognised as a top PU college for EBAC in Bangalore, AIMS offers a challenging yet supportive learning environment that nurtures analytical thinking, leadership, and confidence.`,
                ]}
                mainDescription2={`We prioritise academic excellence, career readiness, and student growth. Recognised as a top PU college for EBAC in Bangalore, AIMS offers a challenging yet supportive learning environment that nurtures analytical thinking, leadership, and confidence.`}

                subHeading={`Key Features of the <br /> Commerce Program`}
                subDescription={[
                    ``,
                    ``
                ]}
                tabData={examData}
                bgImage={"/pre-university-college/pcmc_pcmb/right_half_circle.svg"}
            />
            <hr className="border-gray-400 mb-10" />
        </>
    );
}
