import React from 'react'
import Image from 'next/image'

const McaContent = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-8'>
                <div className='text-center lg:w-[80%]  py-10'>
                    <p>
                        AIMS MCA is structured to develop skilled professionals with strong technical foundations, software development expertise, and industry-readiness. Designed to keep pace with emerging technologies, the program is tailored for students looking to build impactful careers in IT, analytics, and beyond.
                    </p>
                </div>

                <div className='text-center'>
                    <h3 className='text-[#531675]'>
                        Why Choose <span className='italic playfair-400'>MCA at AIMS ?</span>
                    </h3>
                </div>

                {/* MCA at AIMS Image */}
                <div className='md:flex justify-center mb-10 hidden'>
                    <Image
                        src="/mca/why-choose-mca.svg"
                        alt="MCA at AIMS"
                        width={800}
                        height={400}
                        className="object-cover w-[70%]"
                    />
                </div>
                <div className='md:hidden justify-center mb-10 flex'>
                    <Image
                        src="/mca/why-choose-mca-mobile.svg"
                        alt="MCA at AIMS"
                        width={800}
                        height={400}
                        className="object-cover w-[70%]"
                    />
                </div>
            </div>
        </>
    )
}

export default McaContent