import React from 'react'
import Image from 'next/image'

const McomContent = () => {
    return (
        <>
            <div className='container mx-auto flex flex-col items-center justify-center'>
                <div className='text-center lg:w-[80%]  py-10'>
                    <p>
                        Offered under the University of Bangalore, the AIMS M.Com program is designed to build high-level financial acumen and business sense. With value-added certifications and immersive workshops, we help you bridge the gap between classroom learning and real-world application.
                    </p>
                </div>

                <div className='text-center'>
                    <h3 className='text-[#531675]'>
                        Why Choose <span className='italic'>M.Com at AIMS ?</span>
                    </h3>
                </div>

                {/* M.Com at AIMS Image */}
                <div className='flex justify-center mb-10'>
                    <Image
                        src="/mcom/mcom-at-aims.svg"
                        alt="M.Com at AIMS"
                        width={800}
                        height={400}
                        className="object-contain"
                    />
                </div>
            </div>
        </>
    )
}

export default McomContent