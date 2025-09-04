import React from 'react'
import Image from 'next/image'

const SofContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-8 px-4 bg-[#FDE9E9] relative overflow-hidden'>
                {/* Background SVG */}
                <div className='absolute md:-top-1/3 right-0 md:block hidden -rotate-45'>
                    <Image
                        src="/school-circle.svg"
                        alt="School Circle Background"
                        width={250}
                        height={200}
                    // className="w-full h-full"
                    />
                </div>

                <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>

                    <h3 className='text-center text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                        Focused. Forward. Future-Ready.
                    </h3>
                    <div className='lg:w-[60%] w-full mx-auto '>
                        <p className='text-center text-lg lg:text-[20px] monser-400'>
                            At AIMS School of Business, students are equipped with the tools, mindset, and exposure needed to navigate and succeed in the modern business landscape. With every program, we help students sharpen their AIM, build discipline, and hit ambitious career targets across sectors.
                        </p>

                        <p className='text-center text-lg lg:text-[20px] monser-400'>
                            We understand that stepping into the business world means being ready for real challenges. At AIMS, we help you stay focused, build the right skills, and move ahead with confidence.
                        </p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SofContent
