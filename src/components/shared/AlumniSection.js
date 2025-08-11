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

    return (
        <div className=" bg-white pb-10">
            <div className="container mx-auto px-6 lg:px-8">
                <section>
                    {/* <h3 className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-8">
                        {title || 'Alumni Section'}
                    </h3> */}

                    <div className={`bg-[${backgroundColor}] rounded-2xl overflow-hidden`}>
                        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-8 items-center md:p-8 p-4">
                            <div className="flex justify-center">
                                <div className="relative">
                                    {/* Circular background */}
                                    <div className="w-80 h-80 lg:w-96 lg:h-96 flex items-center justify-center">
                                        <div className="w-full h-full rounded-full overflow-hidden p-4">
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
                            <div className="text-white">
                                <h3
                                    className='text-white text-2xl lg:text-3xl font-bold mb-4'
                                    dangerouslySetInnerHTML={{ __html: alumniData.subtitle }}
                                />
                                <p className="text-white/90 text-lg lg:text-xl mb-6 leading-relaxed">
                                    {alumniData.description}
                                </p>
                                {alumniData.author && (
                                    <h6 className='text-white text-lg lg:text-xl mb-4 leading-relaxed monser-600'>
                                        {alumniData.author}
                                    </h6>
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