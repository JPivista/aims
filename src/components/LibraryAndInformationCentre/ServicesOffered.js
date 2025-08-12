import React from 'react';
import Image from 'next/image';

const ServicesOffered = () => {
    const services = [
        "Book Lending Service",
        "OPAC (Online Public Access Catalogue)",
        "Study and Research Assistance",
        "Inter-Library Loan",
        "E-Resource Access",
        "Reference & Awareness Services",
        "Book Bank Scheme",
        "Newspaper Clipping Service"
    ];

    return (
        <div className="max-w-7xl mx-auto px-6 py-12">
            {/* Top Section */}
            <h3 className="text-3xl md:text-4xl font-bold text-[#0d2352] mb-6">
                Services Offered:
            </h3>
            <div className="grid md:grid-cols-2 gap-8 items-center">
                {/* Image (first on mobile, second on desktop) */}
                <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden order-1 md:order-2">
                    <Image
                        src="/library-and-information-centre/services_offered.png"
                        alt="Library services"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Services List */}
                <div className="order-2 md:order-1">
                    <ol className="list-decimal list-inside space-y-2 text-gray-900 text-lg">
                        {services.map((service, index) => (
                            <li key={index}>{service}</li>
                        ))}
                    </ol>
                </div>
            </div>


            {/* Divider */}
            <hr className="my-12 border-gray-300" />

            {/* Vision & Mission */}
            <div className="grid md:grid-cols-2 gap-10">
                <div>
                    <h4 className="text-2xl text-[#0d2352] mb-3" style={{ fontWeight: "600" }}>Vision</h4>
                    <p className="text-gray-800 leading-relaxed">
                        To empower students, faculty, and the community through innovative
                        technology, resources, and collaboration for continuous learning and
                        growth.
                    </p>
                </div>
                <div>
                    <h4 className="text-2xl text-[#0d2352] mb-3" style={{ fontWeight: "600" }}>Mission</h4>
                    <p className="text-gray-800 leading-relaxed">
                        To provide accessible, advanced resources and services that inspire
                        academic excellence, foster research and creativity, and support the
                        evolving needs of our diverse campus community.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ServicesOffered;
