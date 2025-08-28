import React from "react";
import Image from "next/image";

const principalData = {
    image: "/pre-university-college/principal.webp",
    name: "MR. M L KUMAR",
    title: "PRINCIPAL, AIMS PU COLLEGE",
    headingItalic: "Principal’s",
    headingNormal: "Message",
    message: [
        "Dear Students and Parents,",
        "On behalf of AIMS PU COLLEGE, I am delighted to welcome you to our college. Our commitment is to endow our students with innovative, in-depth and high-level learning, develop their moral values, and empower them with contemporary skills and attributes of an ingenious problem solver and critical thinker. We prepare our students confidently to face the challenges of the highly competitive modern world, have sufficient career progression, and also nurture them to become responsible human beings who are able to effectively deliver the needs of a developing nation. The college has also institutionalised ways to encourage students’ involvement in social activities.",
        "Ours is one of the <b>leading PU colleges in Bangalore</b>, with wonderful infrastructure and an education-friendly environment supported by nature. We also have highly qualified, experienced and talented teaching faculty members who facilitate the students to keep abreast with academic challenges and developments. Our teaching-learning methods encourage inter-disciplinary approaches through innovative projects, seminars etc. Experiential learning techniques are used for the effective implementation of the curriculum.",
        "I welcome you all to this esteemed institution of higher learning and assure you of a nurturing and caring environment that will see all of you blossom into empowered and sensitive human beings.",
    ],
    footer: "“BRIGHT EDUCATION FOR RIGHT DESTINATION”",
};

const PrincipalsMessage = () => {
    return (
        <section className="bg-[#E1F9F4] py-12 px-6 lg:px-20">
            <div className="grid grid-cols-1 md:grid-cols-[40%_60%] gap-10 items-center container mx-auto">

                {/* Left Side - Vertically Centered */}
                <div className="flex flex-col justify-center items-center h-full">
                    <div className="relative w-[200px] h-[200px] sm:w-[250px] sm:h-[250px] lg:w-[450px] lg:h-[450px] flex items-center">
                        <Image
                            src={principalData.image}
                            alt="Principal"
                            width={600}
                            height={600}
                            className="object-cover rounded-full"
                        />
                    </div>
                    <p className="mt-5 text-lg font-bold" style={{ fontWeight: "600" }}>{principalData.name}</p>
                    <h5 className="text-center">
                        {principalData.title}
                    </h5>
                </div>

                {/* Right Side */}
                <div>
                    <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165] lg:mb-12 lg:pb-5">
                        <span style={{ fontWeight: '500', color: '#a22978', fontFamily: 'Playfair Display' }} className="italic">{principalData.headingItalic}</span> <br />
                        {principalData.headingNormal}
                    </h3>

                    {principalData.message.map((para, index) => (
                        <p
                            key={index}
                            className={`mt-${index === 0 ? "6" : "4"} text-gray-800 leading-relaxed`}
                            dangerouslySetInnerHTML={{ __html: para }}
                        />
                    ))}


                    <p className="mt-6" style={{ fontWeight: "600" }}>
                        {principalData.footer}
                    </p>
                </div>
            </div>
        </section>
    );
};

export default PrincipalsMessage;
