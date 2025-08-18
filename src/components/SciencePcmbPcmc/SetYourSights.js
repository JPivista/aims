import TabbedInfoSection from "@/components/shared/Pcmc";

const examData = {
    Holistic: {
        title: "Holistic Learning Approach",
        subtitle: "",
        description:
            "We believe in nurturing well-rounded individuals, and our curriculum is structured to provide a balanced education that goes beyond textbooks. Through practical experiments, projects, and interactive sessions, students gain practical exposure and develop critical thinking skills.",
    },
    Experienced: {
        title: "Experienced Faculty",
        subtitle: "",
        description:
            "Our JEE coaching program provides in-depth coverage of Physics, Chemistry, and Mathematics...",
    },
    State: {
        title: "State-of-the-art Facilities",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
    Focus: {
        title: "Focus on Competitive Edge",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
    Personalised: {
        title: "Personalised Attention",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
    Career: {
        title: "Career Guidance and Counselling",
        subtitle: "",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
};

export default function Page() {
    return (
        <>
            <TabbedInfoSection
                mainHeading={`AIM to Build.<br />Your Future in Science.`}
                mainDescription={`At AIMS PU College, one of the best PU colleges in Bangalore for science, we ignite a passion for science and empower students to excel in their academic journey. Our comprehensive programs are designed to cultivate a deep understanding of Physics, Chemistry, Mathematics, Biology, and Computer Science, ensuring that students master the fundamentals of each subject. As one of the top colleges for PU with CET coaching and JEE coaching, we equip students with the tools to succeed.`}
                subHeading={`Key Features of our PUC <br /> Science Program:`}
                subDescription={[
                    ``,
                    ``
                ]}
                tabData={examData}
                bgImage={"/pre-university-college/pcmc_pcmb/right_half_circle.svg"}
                tabDescription={`At AIMS PU College, among the best PU colleges for PCMB and PCMC in Bangalore, we are committed to fostering a nurturing and stimulating environment where students can thrive academically and personally. Join us in exploring the fascinating world of science and unlock your full potential!`}
            />
            <hr className="my-10 border-gray-400" />
        </>
    );
}
