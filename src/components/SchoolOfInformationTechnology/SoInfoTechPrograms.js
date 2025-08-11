import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Button from '@/shared/Button'

const SoInfoTechPrograms = () => {
    const undergraduateProgram = {
        id: 'bca',
        title: 'Bachelor of Computer Applications (BCA)',
        description: 'Our BCA program lays a solid foundation in programming, databases, networking, and system design. With certifications and industry exposure, students are ready to take on roles in software development, tech support, or pursue further specialisation.',
        image: '/school-of-info-tech/bca.png', // You'll need to add this image
        link: '/information-technology-school/bachelor-computer-applications'
    }

    const postgraduateProgram = {
        id: 'bca',
        title: 'BCA with AI & ML',
        description: 'Our BCA program focuses on Artificial Intelligence and Machine Learning - two of the most sought-after tech skills globally. Students get to experiment, build, and deploy intelligent systems that solve real-world problems.',
        image: '/school-of-info-tech/bca-with-ai-ml.png', // You'll need to add this image
        link: '/information-technology-school/bca-plus-ai-ml-data-science-full-stack-development',
    }

    const doctoralProgram = {
        id: 'doctoral',
        title: 'Master of Computer Applications(MCA)',
        description: 'Our MCA program transforms learners into capable IT professionals with a sharp eye for innovation. The program is accredited by AICTE and designed to meet global IT standards.',
        image: '/school-of-info-tech/mca.png', // You'll need to add this image
        link: '/information-technology-school/master-computer-applications'
    }

    return (
        <div className="py-10 relative overflow-hidden">
            {/* Background SVG */}
            {/* background svg left */}
            <div className='absolute top-[20%] left-0 md:block hidden'>
                <Image
                    src="/school-circle.svg"
                    alt="School Circle Background"
                    width={200}
                    height={100}
                    className="rotate-180"
                />
            </div>
            {/* background svg right */}
            <div className='absolute bottom-[20%] right-0 md:block hidden rotate-180'>
                <Image
                    src="/school-circle.svg"
                    alt="School Circle Background"
                    width={200}
                    height={100}
                    className="rotate-180"
                />
            </div>

            <div className="container mx-auto px-6 lg:px-8 relative z-10">
                <h3 className="text-[#0C2165] text-2xl lg:text-3xl font-bold mb-10 text-center">
                    Programs Offered
                </h3>

                {/* Section 1: Image Left, Text Right */}
                <section className="mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="order-1 relative md:h-[350px] h-52">
                            <Image
                                src={undergraduateProgram.image}
                                alt={undergraduateProgram.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-2 md:p-8 p-4">
                            <h5 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left mb-4">
                                {undergraduateProgram.title}
                            </h5>
                            <p
                                className="text-gray-700 text-left mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: undergraduateProgram.description }}
                            />
                            <Link href={undergraduateProgram.link}>
                                <Button variant="primary" className="text-left">
                                    Explore Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Section 2: Text Left, Image Right (Opposite of Section 1) */}
                <section className="mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="lg:order-1 order-2 md:p-8 p-4">
                            <h5 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left mb-4">
                                {postgraduateProgram.title}
                            </h5>
                            <p
                                className="text-gray-700 text-left mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: postgraduateProgram.description }}
                            />
                            <Link href={postgraduateProgram.link}>
                                <Button variant="primary" className="text-left">
                                    Explore Now
                                </Button>
                            </Link>
                        </div>
                        <div className="lg:order-2 order-1 relative md:h-[350px] h-52">
                            <Image
                                src={postgraduateProgram.image}
                                alt={postgraduateProgram.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </section>

                {/* Section 3: Image Left, Text Right (Same as Section 1) */}
                <section className="mb-10">
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 items-center bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                        <div className="order-1 relative md:h-[350px] h-52">
                            <Image
                                src={doctoralProgram.image}
                                alt={doctoralProgram.title}
                                fill
                                className="object-cover"
                            />
                        </div>
                        <div className="order-2 md:p-8 p-4">
                            <h5 className="text-2xl lg:text-[24px] font-bold text-[#0C2165] monser-600 text-left mb-4">
                                {doctoralProgram.title}
                            </h5>
                            <p
                                className="text-gray-700 text-left mb-6 leading-relaxed"
                                dangerouslySetInnerHTML={{ __html: doctoralProgram.description }}
                            />
                            <Link href={doctoralProgram.link}>
                                <Button variant="primary" className="text-left">
                                    Explore Now
                                </Button>
                            </Link>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default SoInfoTechPrograms
