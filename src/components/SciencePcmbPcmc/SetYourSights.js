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
            "Our team of experienced and dedicated faculty members are committed to providing quality education and guidance to our students. They employ innovative teaching methodologies to make learning enjoyable and effective.",
    },
    State: {
        title: "State-of-the-art Facilities",
        subtitle: "",
        description:
            "Our college is equipped with modern laboratories, libraries, and technology-enabled classrooms to facilitate experiential learning. Students have access to a wide range of resources to support their academic pursuits.",
    },
    Focus: {
        title: "Focus on Competitive Edge",
        subtitle: "",
        description:
            "We foster a competitive yet supportive environment that encourages students to strive for excellence. Regular assessments, mock tests, and competitive exam preparation help students stay ahead and achieve their academic goals.",
    },
    Personalised: {
        title: "Personalised Attention",
        subtitle: "",
        description:
            "We understand that each student is unique and has different learning needs. Our small class sizes enable our faculty to provide personalised attention and support to every student, ensuring their academic success.",
    },
    Career: {
        title: "Career Guidance and Counselling",
        subtitle: "",
        description:
            "Along with academic support, we also offer career guidance and counselling to help students make informed decisions about their future. Whether they aspire to pursue higher education or enter the workforce, we provide the necessary guidance and resources to help them achieve their goals.",
    },
};

export default function Page() {
    return (
        <>
            <TabbedInfoSection
                mainHeading={`AIM to Build.<br />Your Future in Science.`}
                mainDescription={[
                    `At AIMS PU College, one of the best PU colleges in Bangalore for science, we ignite a passion for science and empower students to excel in their academic journey. Our comprehensive programme is designed to cultivate a deep understanding of Physics, Chemistry, Mathematics, and Biology/Computer Science, ensuring that students master the fundamentals of each subject. As one of the top colleges for PU with CET coaching and JEE coaching, we equip students with the tools to succeed.`,
                    `<b style="color:black;">Our vision:</b> To transform youth into professionals of global excellence with a deep concern for society.`,
                ]}
                subHeading={`Key Features of our <br />PUC Science Program:`}
                subDescription={[
                    ``,
                    ``
                ]}
                tabData={examData}
                bgImage={"/pre-university-college/pcmc_pcmb/right_half_circle.webp"}
                tabDescription={`At AIMS PU College,  among the best PU colleges for PCMB and PCMC in Bangalore,  we are committed to fostering a nurturing and stimulating environment where students can thrive academically and personally. Join us in exploring the fascinating world of science and unlock your full potential!`}
            />
            <hr className="my-10 border-gray-400" />
        </>
    );
}
