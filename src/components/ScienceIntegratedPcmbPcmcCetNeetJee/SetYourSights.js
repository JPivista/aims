import TabbedInfoSection from "@/components/shared/Pcmc";

const examData = {
    KCET: {
        title: "KCET",
        subtitle: "(Karnataka Common Entrance Test)",
        description:
            "Our integrated KCET course is meticulously crafted to cover the entire syllabus of the KCET examination, ensuring that students are well-prepared to tackle the challenges posed by this prestigious entrance test. With a focus on conceptual clarity, problem-solving skills, and exam strategies, our expert faculty guides students through rigorous preparation, positioning us among the top colleges for PU with CET coaching in Bangalore.",
    },
    JEE: {
        title: "JEE",
        subtitle: "(Joint Entrance Examination)",
        description:
            "Our JEE coaching program provides in-depth coverage of Physics, Chemistry, and Mathematics...",
    },
    NEET: {
        title: "NEET",
        subtitle: "(National Eligibility Cum Entrance Test)",
        description:
            "Our NEET program is designed to help aspiring medical students master Biology...",
    },
};

export default function Page() {
    return (
        <>
            <TabbedInfoSection
                mainHeading={`Set Your Sights.<br />Strengthen Your AIM.`}
                mainDescription={`Established in 1994, AIMS Pre-University College lays the foundation for future success. Recognised as one of the best PU colleges in Bangalore, our institution offers structured academics, personalised support, and future-focused guidance. Whether you're aiming for a professional degree or career clarity, our PU program helps you chart a clear course from classroom to career. As a top PU college for PCMB and PCMC in Bangalore, we ensure every student receives the tools and support they need to thrive.`}
                subHeading={`Integrated Coaching <br /> Approach`}
                subDescription={[
                    `In addition to preparing students for their pre-university coursework, our extensive program also gets them ready for competitive entrance exams like NEET, KCET, and JEE, making AIMS one of the top colleges for PU with CET coaching and JEE coaching in Bangalore.`,
                    `Each student receives individualised attention and assistance from our knowledgeable educators, who work to help them realise their greatest potential. You'll have access to state-of-the-art tools and creative teaching strategies, giving you the knowledge and abilities to thrive in the rapidly developing world of science.`
                ]}
                tabData={examData}
                bgImage={"/pre-university-college/pcmc_pcmb/right_half_circle.svg"}
            />
            <hr className="border-gray-400 mb-10" />
        </>
    );
}
