import Image from 'next/image'
import React from 'react'

const AeecOffers = () => {
    return (
        <>
            <div className='justify-center items-center py-10 mb-10 flex flex-col relative overflow-hidden bg-[#E1F9F4]'>
                <div className='px-4 lg:px-8'>
                    <div className='container mx-auto'>
                        <div className=' flex flex-col gap-0'>
                            <div>
                                <h3 className='text-center playfair-300 text-[#002561]'>
                                    What AEEC Offers
                                </h3>
                                <h5 className="monser-300 text-center">
                                    AEEC is a vibrant platform where AIMers can:
                                </h5>
                            </div>
                            <div className='mt-4 text-center'>
                                <Image
                                    src="/entrepreneurship-excellence-centre/aeec-offers.svg"
                                    alt="AEEC Offers"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover hidden md:block"
                                />

                                <Image
                                    src="/entrepreneurship-excellence-centre/aeec-offers-mob.svg"
                                    alt="AEEC Offers"
                                    width={1000}
                                    height={1000}
                                    className="w-full h-full object-cover md:hidden block"
                                />
                                <p className='text-center mt-4 md:w-[55%] w-full mx-auto'>
                                    To date, over 80 businesses have been launched with guidance from AEEC, a testament to the centre’s enduring impact.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AeecOffers
