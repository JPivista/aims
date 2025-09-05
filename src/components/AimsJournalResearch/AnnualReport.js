import React from 'react'

const AnnualReport = () => {
    return (
        <>
            <div className='w-full border-t border-black px-4 lg:px-8'>
                <div className='container mx-auto py-10'>
                    <div className='flex flex-col gap-4'>
                        <div>
                            <h2 className='text-2xl font-bold'>Annual Report</h2>
                        </div>
                        <div className='lg:pl-5'>
                            <ul className='list-disc list-inside'>
                                <li>
                                    Annual Report 2023-24 - <a href='/iqac/Annual+Report+2020-21.pdf' target='_blank' className='text-black underline'>Download</a>
                                </li>
                                <li>
                                    Annual Report 2020-21 - <a href='/iqac/Annual+Report+2020-21.pdf' target='_blank' className='text-black underline'>Download</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default AnnualReport
