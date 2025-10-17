import React from 'react'
import Image from 'next/image'
import Button from '@/shared/Button'

const McomContent = () => {
    return (
        <>
            <div className="px-4 lg:px-8">
                <div className='container mx-auto flex flex-col items-center justify-center'>
                    <div className='text-center lg:w-[75%]  py-10'>
                        <p>
                            Offered under the University of Bangalore, the AIMS M.Com program is designed to build high-level financial acumen and business sense. With value-added certifications and immersive workshops, we help you bridge the gap between classroom learning and real-world application.
                        </p>
                    </div>

                    <div className='text-center'>
                        <h3 className='text-[#531675]'>
                            Why Choose <span className='italic playfair-400'>M.Com at AIMS ?</span>
                        </h3>
                    </div>

                    {/* M.Com at AIMS Image */}
                    <div className='md:flex justify-center hidden'>
                        <Image
                            src="/mcom/mcom-at-aims.svg"
                            alt="M.Com at AIMS"
                            width={800}
                            height={400}
                            className="object-contain w-[70%]"
                        />
                    </div>
                    <div className='md:hidden flex justify-center'>
                        <Image
                            src="/mcom/mcom-at-aims-mobile.svg"
                            alt="M.Com at AIMS"
                            width={800}
                            height={400}
                            className="object-contain w-[95%]"
                        />
                    </div>
                    <div className="flex justify-center my-10">
                        <Button
                            variant="placement"
                            showArrow={true}
                            href="https://apply.theaims.ac.in/login"
                        >
                            Apply Now
                        </Button>
                    </div>
                </div>
            </div>
        </>
    )
}

export default McomContent