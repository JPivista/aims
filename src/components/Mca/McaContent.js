import React from 'react'
import Image from 'next/image'

const McaContent = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col items-center justify-center'>
                <div className='text-center lg:w-[80%]  py-10'>
                    <p>
                        With a legacy of over 30 years, the B.Com program at AIMS bridges academic theory with industry demands. Designed for ambitious undergraduates, it combines core learning with certifications and real-world case exposure.
                    </p>
                </div>

                <div className='text-center'>
                    <h3 className='text-[#531675]'>
                        Why Choose <span className='italic playfair-400'>B.Com at AIMS ?</span>
                    </h3>
                </div>

                {/* M.Com at AIMS Image */}
                <div className='flex justify-center mb-10'>
                    <Image
                        src="/mca/why-choose-mca.svg"
                        alt="M.Com at AIMS"
                        width={800}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default McaContent