import React from 'react'
import Image from 'next/image'

const AlumniSection = ({ alumniData, title, backgroundColor = "#531574" }) => {
    // Handle case when alumniData is undefined or empty
    if (!alumniData) {
        return (
            <div className="py-16 bg-white">
                <div className="container mx-auto px-6 lg:px-8">
                    <div className="text-center">
                        <h3 className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-4">
                            {title || 'Alumni Section'}
                        </h3>
                        <p className="text-gray-600">Alumni data not available.</p>
                    </div>
                </div>
            </div>
        )
    }

    // Function to render description as multiple paragraphs
    // Function to render description as multiple paragraphs
    const renderDescription = (description) => {
        if (typeof description === 'string') {
            // Split only by double line breaks, not by periods
            const paragraphs = description.split(/\n\s*\n/);

            return paragraphs.map((paragraph, index) => {
                const trimmedParagraph = paragraph.trim();
                if (trimmedParagraph) {
                    return (
                        <p key={index} className="text-white/90 text-base lg:text-lg mb-4 leading-relaxed">
                            {trimmedParagraph}
                        </p>
                    );
                }
                return null;
            });
        }

        // If description is already an array, render each paragraph
        if (Array.isArray(description)) {
            return description.map((paragraph, index) => {
                const hasHTML = /<[^>]*>/.test(paragraph);

                if (hasHTML) {
                    const styledParagraph = paragraph.replace(
                        /<b>/g,
                        '<b style="color: #FFD700; font-weight: bold;">'
                    ).replace(
                        /<strong>/g,
                        '<strong style="color: #FFD700; font-weight: bold;">'
                    );

                    return (
                        <p key={index} className="text-white text-base lg:text-lg mb-4 leading-relaxed">
                            <span dangerouslySetInnerHTML={{ __html: styledParagraph }} />
                        </p>
                    );
                } else {
                    return (
                        <p key={index} className="text-white text-base lg:text-lg mb-4 leading-relaxed">
                            {paragraph}
                        </p>
                    );
                }
            });
        }

        // Fallback to single paragraph
        return (
            <p className="text-white/90 text-base lg:text-lg mb-6 leading-relaxed">
                <span dangerouslySetInnerHTML={{ __html: description }} />
            </p>
        );
    };


    return (
        <div className="bg-[#531574] pb-10 w-full">
            <div className=" md:w-full w-full mx-auto px-6 lg:px-8">
                <section>
                    <div className={`bg-[${backgroundColor}] rounded-2xl overflow-hidden`}>
                        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center md:p-8 p-4">
                            <div className="flex justify-center">
                                <div className="relative">
                                    {/* Circular background */}
                                    <div className="w-72 h-72 lg:w-80 lg:h-80 flex items-center justify-center">
                                        <div className="w-full h-full rounded-full overflow-hidden p-4 flex items-center justify-center">
                                            <Image
                                                src={alumniData.image}
                                                alt={alumniData.subtitle}
                                                width={320}
                                                height={320}
                                                className="object-cover w-full h-full"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="text-white col-span-2">
                                <h3
                                    className='text-white text-2xl lg:text-3xl font-bold mb-6'
                                    dangerouslySetInnerHTML={{ __html: alumniData.subtitle }}
                                />

                                {/* Render description as multiple paragraphs */}
                                <div className="space-y-4">
                                    {renderDescription(alumniData.description)}
                                </div>

                                {alumniData.author && (
                                    <div className="mt-6">
                                        <h6 className='text-white text-lg lg:text-xl font-semibold leading-relaxed'>
                                            - {alumniData.author}
                                        </h6>
                                        {alumniData.authorTitle && (
                                            <p className="text-white/80 text-base italic">
                                                {alumniData.authorTitle}
                                            </p>
                                        )}
                                        {alumniData.authorDescription && (
                                            <p className="text-white/80 text-base leading-relaxed mt-2">
                                                {alumniData.authorDescription}
                                            </p>
                                        )}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default AlumniSection 