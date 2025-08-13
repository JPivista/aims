import React from 'react'
import Image from 'next/image'

const RcContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden border-b border-gray-300'>
                <div className='absolute top-[20%] right-0 md:block hidden rotate-180'>
                    <Image
                        src="/school-circle.svg"
                        alt="School Circle Background"
                        width={100}
                        height={100}
                        className=" rotate-180"
                    />
                </div>
                <div className='container mx-auto'>
                    <div className='flex flex-col bg-transparent relative z-10'>
                        <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                            Empowering young
                            <br className='hidden md:block' />
                            leaders to make a
                            <br className='hidden md:block' />
                            difference in the world
                        </h3>
                    </div>

                    <p className='mt-4'>
                        The Rotaract Club is a community of young leaders who are passionate about making a positive impact in the world. Our vision is to empower our members with the skills, knowledge, and resources they need to drive change and create a better future for all. We believe that every person has the potential to make a difference, and we work to cultivate that potential through service, leadership development, and networking opportunities. Our club offers a platform for young people to take on meaningful projects, gain practical experience, and make a tangible impact in their communities. By empowering young leaders to create positive change, we aim to build a better future for all, one step at a time.
                    </p>
                </div>
            </div>
        </>
    )
}

export default RcContent
