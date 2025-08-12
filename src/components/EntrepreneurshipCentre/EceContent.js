import React from 'react'
import Image from 'next/image'

const EceContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden'>
                <div className='container mx-auto'>
                    <div className='flex flex-col justify-center items-center gap-4 lg:px-0 px-4 bg-transparent relative z-10'>
                        <h3 className='text-center text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                            Choose Your Goal.
                            <br className='hidden md:block' />
                            AIM to Build.
                        </h3>
                        <div className='lg:w-[75%] w-full flex flex-col gap-4'>
                            <p className='text-center text-lg lg:text-[20px] monser-400'>
                                We will be happy to collaborate with you. Contact us at  <a href='mailto:acil@theaims.ac.in' className='text-[#A22877]'>acil@theaims.ac.in</a>
                            </p>
                            <p className='text-center text-lg lg:text-[20px] monser-400'>
                                How to become an entrepreneur after college? At AIMS Institutes, the journey doesn&apos;t stop with academics. It begins with ideas, courage, and the right guidance. The AIMS Entrepreneurship Excellence Centre (AEEC) was established in 2007 to cultivate an entrepreneurial ecosystem in Bangalore colleges,  one that helps students and stakeholders turn ideas into action.
                            </p>
                            <p className='text-center text-lg lg:text-[20px] monser-400'>
                                Whether you&apos;re dreaming of a tech startup, a sustainable enterprise, or a local business with social impact, AEEC is here to support you with mentorship, concept validation, business plan development, and funding assistance for student startups in Bangalore colleges.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default EceContent
