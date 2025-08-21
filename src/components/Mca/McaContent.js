import React from 'react'
import Image from 'next/image'

const McaContent = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col items-center justify-center lg:px-0 px-4'>
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

                {/* M.Com at AIMS Image */}
                <div className='flex justify-center mb-10'>
                    <Image
                        src="/mca/why-choose-mca.svg"
                        alt="M.Com at AIMS"
                        width={800}
                        height={400}
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </>
    )
}

export default McaContent