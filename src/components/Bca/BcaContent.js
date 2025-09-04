import React from 'react'
import Image from 'next/image'

const BcaContent = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col items-center justify-center px-4 lg:px-8'>
                <div className='text-center lg:w-[80%]  py-10'>
                    <p>
                        Our BCA program is designed for those who want more than just a degree. From fundamentals to future-facing tech, we equip you with the tools to AIM higher, think sharper, and build the skills today’s digital world demands.
                    </p>
                </div>

                <div className='text-center'>
                    <h3 className='text-[#531675]'>
                        Why Choose <span className='italic playfair-400'>BCA at AIMS ?</span>
                    </h3>
                </div>

                {/* M.Com at AIMS Image */}
                <div className='md:flex justify-center mb-10 hidden'>
                    <Image
                        src="/bca/why-choose-bca.svg"
                        alt="BCA at AIMS"
                        width={800}
                        height={400}
                        className="object-contain w-[70%]"
                    />
                </div>
                <div className='md:hidden flex justify-center mb-10'>
                    <Image
                        src="/bca/why-choose-bca-mobile.svg"
                        alt="BCA at AIMS"
                        width={800}
                        height={400}
                        className="object-contain w-[70%]"
                    />
                </div>
            </div>
        </>
    )
}

export default BcaContent