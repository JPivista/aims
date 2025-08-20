import React from 'react'
import Image from 'next/image'

const CfsContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 relative overflow-hidden border-b border-gray-200'>
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
                    <div className='flex flex-col bg-transparent relative z-10'>
                        <h3 className='text-start text-[32px] lg:text-[56px] playfair-300 text-[#0C2165]'>
                            AIMing for a Sustainable
                            <br className='hidden md:block' />
                            Future for All
                        </h3>
                        <div className='lg:w-[75%] w-full flex flex-col gap-4'>
                            <p className='text-start text-lg lg:text-[20px] monser-400'>
                                At AIMS, we believe that sustainable progress begins with conscious intention. The AIMS Centre for Sustainability (ACS), established in 2015, equips students with the mindset, skills, and exposure needed to align their ambitions with the planet’s future. Through structured learning and applied action, ACS enables students to build the foundations of a student-centric sustainable college campus in Bangalore.
                            </p>
                            <p className='text-start text-lg lg:text-[20px] monser-400'>
                                Our approach combines academic learning with hands-on understanding, so that sustainability is not only taught, but lived. As students prepare to contribute to society, they are introduced to environmental issues, real-world models, and emerging technologies. The goal is to foster active participation in shaping a more resilient world — starting with campus, and extending to community and career.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CfsContent
