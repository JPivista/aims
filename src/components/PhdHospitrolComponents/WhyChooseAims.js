import React from "react";

const WhyChooseAims = () => {
    const features = [
        {
            number: "01",
            title: "University-Approved Centre",
            description:
                "Approved research centre under the University of Mysore",
        },
        {
            number: "02",
            title: "Expert Faculty Guides",
            description:
                "Guided by experienced supervisors from academia and industry",
        },
        {
            number: "03",
            title: "End-to-End Research Support",
            description:
                "Structured support at every stage, from proposal to publication",
        },
        {
            number: "04",
            title: "Premium Resources",
            description:
                "Full access to research tools, journals, and databases",
        },
        {
            number: "05",
            title: "Conference Presentation",
            description:
                "Opportunities to present at leading conferences",
        },
    ];

    return (
        <div className="bg-[#e1f9f4] py-16">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Heading */}
                <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165] mb-12 pb-12">
                    Why Choose the <br />
                    <span style={{ fontWeight: '600', color: '#a22978' }} className="italic">AIMS PhD?</span>
                </h3>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
                    {features.map((feature) => (
                        <div
                            key={feature.number}
                            className="flex gap-4"
                        >
                            {/* Line + Arrow */}
                            <div className="flex flex-col items-center">
                                {/* Arrow */}
                                <div className="w-0 h-0 border-l-4 border-l-transparent border-r-4 border-r-transparent border-b-4 border-b-[#000000]"></div>
                                {/* Line */}
                                <div className="flex-1 w-px bg-black"></div>
                            </div>

                            {/* Content */}
                            <div>
                                <h5 style={{ fontWeight: '600', fontSize: '1.5rem', textAlign: 'left' }}>
                                    {feature.number}
                                </h5>
                                <h5 style={{ fontWeight: '600', fontSize: '1.25rem', minHeight: '80px' }}>
                                    {feature.title}
                                </h5>
                                <p style={{ fontSize: '0.875rem' }}>
                                    {feature.description}
                                </p>
                            </div>

                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default WhyChooseAims;
