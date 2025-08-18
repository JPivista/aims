import React from "react";
import Image from "next/image";
import Button from "@/shared/Button";

const OurPrograms = () => {
    return (
        <div className="relative overflow-hidden"> {/* relative for absolute positioning */}
            <hr className="border-t-1 border-gray-400" />
            <div className="container mx-auto py-10 relative z-10">
                {/* Heading */}
                <div className="text-center max-w-4xl mx-auto px-4">
                    <h3 className="text-4xl font-serif font-bold mb-4">Our Programs</h3>
                    <p className="text-gray-600">
                        At AIMS PUC, we offer a choice of streams tailored to your academic
                        strengths and career goals, making us a preferred destination among
                        the top colleges for PU in commerce and science.
                    </p>
                </div>

                {/* Science Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center mt-14 px-4 lg:px-20">
                    <div>
                        <Image
                            src={"/pre-university-college/our_program1.png"}
                            width={500}
                            height={500}
                            alt="Science Students"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                    <div>
                        <h4 className="mb-3" style={{ fontWeight: "600", fontSize: "28px" }}>Science</h4>
                        <p className="text-gray-700 mb-6">
                            Recognised as the best PU college for PCMB in Bangalore and PCMC in
                            Bangalore, we provide rigorous academic training and entrance
                            coaching.
                        </p>
                        <div className="flex flex-col gap-3 w-fit ">
                            <Button href="/pre-university-college/science-integrated-pcmb-pcmc-cet-neet-jee" showReadMore={false}>PCMB/PCMC Integrated</Button>
                            <Button href="/pre-university-college/science-pcmb-pcmc" showReadMore={false}>PCMB/PCMC</Button>
                        </div>
                    </div>

                </div>

                {/* Commerce Section */}
                <div className="grid md:grid-cols-2 gap-10 items-center mt-14 px-4 lg:px-20">
                    <div>
                        <h4 className="mb-3" style={{ fontWeight: "600", fontSize: "28px" }}>Commerce</h4>
                        <p className="text-gray-700 mb-6">
                            AIMS is also ranked among the top colleges and the best PU college
                            for CEBA in Bangalore.
                        </p>
                        <div className="flex flex-col gap-3 w-fit ">
                            <Button href="/pre-university-college/commerce-ceba" showReadMore={false}>CEBA</Button>
                        </div>
                    </div>
                    <div>
                        <Image
                            src={"/pre-university-college/our_program2.png"}
                            width={500}
                            height={500}
                            alt="Commerce Students"
                            className="rounded-2xl w-full object-cover"
                        />
                    </div>
                </div>
            </div>
            {/* Half Circle Background */}
            <div className="absolute bottom-10 -left-10 z-0 pointer-events-none">
                <Image
                    src={"/pre-university-college/half_circle.svg"}
                    width={130}
                    height={130}
                    alt="Decorative Half Circle"
                    className="object-contain"
                />
            </div>
        </div>
    );
};

export default OurPrograms;
