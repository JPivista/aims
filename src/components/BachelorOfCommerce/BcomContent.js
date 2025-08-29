import React from 'react'
import Image from 'next/image'

const BcomContent = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-0'>
                <div className='text-center lg:w-[80%]  py-10'>
                    <p>
                        With a legacy of over 30 years, the B.Com program at AIMS bridges academic theory with industry demands. Designed for ambitious undergraduates, it combines core learning with certifications and real-world case exposure.
                    </p>
                </div>

                <div className='text-center'>
                    <h3 className='text-[#531675] playfair-400'>
                        Why Choose <span className='italic playfair-400'> B.Com at AIMS?</span>
                    </h3>
                </div>

                {/* M.Com at AIMS Image */}
                <div className=' justify-center mb-10 md:flex hidden'>
                    <Image
                        src="/bcom/bcom-at-aims.svg"
                        alt="M.Com at AIMS"
                        width={800}
                        height={400}
                        className="object-contain w-[70%]"
                    />
                </div>

                <div className=' justify-center mb-10 md:hidden flex text-center'>
                    <Image
                        src="/bcom/bcom-at-aims-mobile.svg"
                        alt="M.Com at AIMS"
                        width={800}
                        height={400}
                        className="object-contain w-[70%]"
                    />
                </div>
            </div>
        </>
    )
}

export default BcomContent