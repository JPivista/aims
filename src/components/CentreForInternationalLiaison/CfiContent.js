import React from 'react'
import Image from 'next/image'

const CfiContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden '>
                <div className='absolute top-[20%] right-0 md:block hidden rotate-180'>
                    <Image
                        src="/school-circle.svg"
                        alt="School Circle Background"
                        width={150}
                        height={150}
                        className=" rotate-180"
                    />
                </div>
                <div className='container mx-auto'>
                    <div className='flex flex-col lg:px-0 px-4 bg-transparent relative z-10'>
                        <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                            AIM for Global Perspective
                            <br className='hidden md:block' />
                            Future for All
                        </h3>
                        <div className='lg:w-[75%] w-full '>
                            <p className='text-start text-lg lg:text-[20px] monser-400'>
                                We will be happy to collaborate with you. Contact us at <a href='mailto:acil@theaims.ac.in' className='text-[#A22877]'>acil@theaims.ac.in</a>
                            </p>
                            <p className='text-start text-lg lg:text-[20px] monser-400'>
                                At AIMS Institutes, we believe in preparing students for a global tomorrow. The AIMS Centre for International Liaison (ACIL) was established in 2009 to offer meaningful global immersion programs in Bangalore colleges, providing AIMers with the exposure and experience needed to thrive in international academic and professional environments.
                            </p>
                            <p className='text-start text-lg lg:text-[20px] monser-400'>
                                ACIL serves as a bridge between AIMS and the world, opening doors to international joint programs, student and faculty exchanges, collaborative research, conferences, and career pathway opportunities. AIMS enjoys a close working relationship with 20 international universities, 2 accreditation bodies, and 3 international professional associations spread across 17 countries.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfiContent
