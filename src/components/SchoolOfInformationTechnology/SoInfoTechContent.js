import React from 'react'
import Image from 'next/image'

const SoInfoTechContent = () => {
    return (
        <>
            <div className='justify-center items-center py-10 flex flex-col lg:px-0 px-4 bg-[#FDE9E9] relative overflow-hidden'
                style={{
                    background: 'linear-gradient(135deg, #F0DBFC 0%, #F0DBFC 50%, #FBDCE2 100%)'
                }}>
                {/* Background SVG */}
                <div className='absolute md:-top-1/3 right-0 md:block hidden -rotate-30'>
                    <Image
                        src="/school-circle.svg"
                        alt="School Circle Background"
                        width={200}
                        height={200}
                    // className="w-full h-full"
                    />
                </div>
                <div className='flex flex-col px-0 bg-transparent relative z-10 gap-5'>
                    <div className="w-full rounded-2xl overflow-hidden">
                        <div className="px-4 lg:px-0">
                            <h3 className='text-center text-[32px] lg:text-[56px] playfair-300 text-[#0C2165] mb-6'>
                                Sharpen your skills.
                                <br />
                                Take AIM at the digital frontier.
                            </h3>
                            <div className='lg:w-[70%] w-full mx-auto flex flex-col gap-4'>
                                <p className='text-center text-lg lg:text-[20px] monser-400 text-gray-700'>
                                    In a world driven by code, data, and rapid disruption, AIMS School of Information & Technology helps you set your sights on a future-proof career. Whether you&apos;re starting from the ground up or aiming to specialise, our programs equip you with the tools, training, and direction to stay ahead.
                                </p>
                            </div>

                            <div className='text-center mt-6'>
                                <h5 className='text-[#A22877] text-lg monser-600'>
                                    We don&apos;t just teach IT, we train digital sharpshooters.
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default SoInfoTechContent