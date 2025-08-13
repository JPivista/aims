import React from 'react'
import Image from 'next/image'

const EventsForACause = () => {
    return (
        <div className='w-full bg-white pb-10 lg:px-0 px-4'>
            <div className='grid grid-cols-1 md:grid-cols-2 gap-8'>
                {/* Left Column - Content */}
                <div className='flex flex-col md:pl-8 pl-0 justify-center lg:order-1 order-2'>
                    <h3 className='text-[#0C2165]'>
                        Events for a Cause
                    </h3>
                    <div>
                        <p>
                            The Rotaract Club organizes impactful events to raise awareness and funds for local and global issues. We believe in hosting events that educate, engage, and inspire our community to create meaningful change and positive impact in the world around us.
                        </p>
                        <p className='mt-4'>
                            From fundraising galas to awareness campaigns and community workshops, we view events as a powerful catalyst for social change. Each event is carefully designed to not only raise resources but also to build community spirit and foster lasting connections among participants.
                        </p>
                    </div>
                </div>

                {/* Right Column - Image */}
                <div className='flex flex-col gap-4 lg:order-2 order-1'>
                    <Image
                        src="/rotaract-club/events-for-a-cause.png"
                        alt="Young men playing basketball outdoors"
                        width={500}
                        height={500}
                        className='w-full h-full object-cover'
                    />
                </div>
            </div >
        </div >
    )
}

export default EventsForACause
