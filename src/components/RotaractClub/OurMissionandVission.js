import React from 'react'
import Image from 'next/image'

const OurMissionandVission = () => {
    return (
        <>
            <div className='w-full bg-white py-10 border-b border-gray-200'>
                <div className='container mx-auto px-4 lg:px-0'>
                    {/* Our Vision Section */}
                    <div>
                        <div className='items-center grid grid-cols-1 lg:grid-cols-3'>
                            {/* Left - Profile Image */}
                            <div className='flex justify-center w-full'>
                                <div className='relative'>
                                    <div className='rounded-full bg-gradient-to-br from-purple-400 to-purple-600'>
                                        <div>
                                            <Image
                                                src="/rotaract-club/our-vision-sanjay.png"
                                                alt="Rtr. Sanjay - President 2022-2023"
                                                width={300}
                                                height={300}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <p className='font-bold text-lg text-gray-800'>Rtr. Sanjay</p>
                                        <p className='text-gray-600'>President, 2022-2023</p>
                                    </div>
                                </div>
                            </div>

                            {/* Right - Content */}
                            <div className='col-span-2 lg:mt-0 mt-10'>
                                <h2 className='text-4xl lg:text-5xl font-bold text-[#0C2165] lg:mb-4 mb-4'>
                                    Our Vision
                                </h2>
                                <blockquote className='text-2xl lg:text-3xl font-bold text-[#0C2165] mb-4 italic'>
                                    "Empowering young leaders for change."
                                </blockquote>
                                <div className='text-gray-800 leading-relaxed space-y-4'>
                                    <p>
                                        The Rotaract Club envisions a world where young leaders are empowered to create positive change in their communities and beyond. We strive to foster a culture of service, leadership, and innovation that inspires the next generation of changemakers.
                                    </p>
                                    <p>
                                        Through our comprehensive programs including service projects, leadership development initiatives, networking opportunities, mentorship programs, and skill-building workshops, we aim to create a more just, equitable, and sustainable world.
                                    </p>
                                    <p>
                                        Our vision extends beyond traditional community service to encompass personal growth, professional development, and global citizenship, ensuring that every member has the tools and confidence to make a meaningful impact.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='w-full bg-white py-10 border-b border-gray-200'>
                <div className='container mx-auto px-4 lg:px-8'>
                    {/* Our Mission Section */}
                    <div>
                        <div className='items-center grid grid-cols-1 lg:grid-cols-3 '>
                            {/* Left - Content */}
                            <div className='order-2 lg:order-1 col-span-2 lg:mt-0 mt-10'>
                                <h3 className='text-4xl lg:text-5xl font-bold text-[#0C2165] mb-4'>
                                    Our Mission
                                </h3>
                                <blockquote className='text-2xl lg:text-3xl font-bold text-[#0C2165] mb-6 italic'>
                                    "To do everything possible to expand the Exuberant potential in today's youth."
                                </blockquote>
                                <div className='text-gray-800 leading-relaxed space-y-4'>
                                    <p>
                                        Our mission is centered on expanding the exuberant potential within today's youth through comprehensive community service initiatives, personal development programs, and leadership opportunities that foster growth and empowerment.
                                    </p>
                                    <p>
                                        We are committed to creating a supportive and inclusive environment where young individuals can discover their strengths, develop essential life skills, and cultivate a sense of social responsibility. Through our programs, we empower youth to become emotionally intelligent leaders who can navigate complex challenges with confidence and compassion.
                                    </p>
                                    <p>
                                        We uphold the core Rotaract values of service above self, leadership development, diversity and inclusion, and friendship, ensuring that every member's journey contributes to building a stronger, more connected community and a brighter future for all.
                                    </p>
                                </div>
                            </div>

                            {/* Right - Profile Image */}
                            <div className='flex justify-center order-1 lg:order-2 w-full'>
                                <div className='relative'>
                                    <div className='rounded-full bg-gradient-to-br from-purple-400 to-purple-600'>
                                        <div className='w-full h-full'>
                                            <Image
                                                src="/rotaract-club/our-mission-lakshmi.png"
                                                alt="Rtr. Lakshmi V - Secretary 2022-2023"
                                                width={300}
                                                height={300}
                                                className="object-cover"
                                            />
                                        </div>
                                    </div>
                                    <div className='text-center mt-4'>
                                        <p className='font-bold text-lg text-gray-800'>Rtr. Lakshmi V</p>
                                        <p className='text-gray-600'>Secretary, 2022-2023</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurMissionandVission
