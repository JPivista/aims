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
            "Our JEE coaching program provides in-depth coverage of Physics, Chemistry, and Mathematics...",
    },
    Expert: {
        title: "Expert Faculty",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
    Skills: {
        title: "Focus on Skill Development",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
    Guidance: {
        title: "Career Guidance",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
};

export default function Page() {
    return (
        <>
            <TabbedInfoSection
                mainHeading={`The First Step<br />Towards Your AIM`}
                mainDescription={`At AIMS PU College, one of the best PU colleges for commerce in Bangalore, we foster comprehensive education that equips students with a diverse skill set for success in the dynamic world of business. Our PU program builds a strong foundation in Economics, Business Studies, Accountancy, and Computer Science, offering students the right blend of theory and application.`}
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
