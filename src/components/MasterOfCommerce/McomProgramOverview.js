import React from 'react'
import Image from 'next/image'

const McomProgramOverview = () => {
    return (
        <>
            <div className='py-16' style={{ backgroundColor: '#E1F9F4' }}>
                <div className='container mx-auto px-6 lg:px-8 flex flex-col gap-10'>
                    <div className=' items-center justify-between grid grid-cols-2'>
                        <h3 className='text-[#0C2165]'>
                            <span className='italic text-[#A22877]'>M.Com Program</span>
                            <br />
                            Overview
                        </h3>
                        <p>
                            Tailored for aspiring finance professionals, our program equips you with the tools to succeed in corporate finance, accounting, and beyond. Our approach is both structured and strategic, helping you hit the mark with clarity and confidence.
                        </p>
                    </div>
                    {/* Program Overview Image */}
                    <div className='flex justify-center m'>
                        <Image
                            src="/mcom/mcom-program.svg"
                            alt="M.Com Program Overview"
                            width={1000}
                            height={600}
                            className="object-contain"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}

export default McomProgramOverview
