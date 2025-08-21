import React from 'react'
import Image from 'next/image'

const EsprContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden border-b border-gray-300'>
                <div className='absolute top-[20%] right-0 md:block hidden rotate-180'>
                    <Image
                        src="/school-circle.svg"
                        alt="School Circle Background"
                        width={100}
                        height={100}
                        className="rotate-180"
                    />
                </div>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                        <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                            Guiding Principles <br className='hidden md:block' />
                            for a Greener Campus and <br className='hidden md:block' />
                            Community
                        </h3>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EsprContent
