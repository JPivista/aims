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
                    <p className=''>
                        At AIMS Institutes, your journey doesn’t end at graduation. Whether you're across the country or halfway across the world, the AIMS Alumni Association is your lifelong connection to where it all began.
                    </p>
                    <p className=''>
                        This growing network brings together AIMers from every batch, industry, and walk of life, offering opportunities to reconnect, contribute, and celebrate the milestones that continue beyond campus. As an alumnus, you remain a vital part of our community, our legacy, and our future.
                    </p>
                </div>
            </div>
        </>
    )
}

export default RcContent
