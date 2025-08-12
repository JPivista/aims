'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Button from '@/shared/Button'


const QuickLinks = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleAccordion = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const links = [
        { title: 'New Arrivals', content: 'Check the latest additions to our library collection.' },
        { title: 'WEB OPAC', content: 'Search our online catalog for books and resources.' },
        { title: 'Library Rules & Regulations', content: 'Read our complete library policy and usage guidelines.' },
        { title: 'Subscribed Journals List', content: 'View the list of journals and magazines we subscribe to.' },
    ];

    return (
        <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
            {/* Right Side Image (comes first in mobile view) */}
            <div className="relative w-full h-[300px] md:h-[350px] rounded-xl overflow-hidden order-1 md:order-2">
                <Image
                    src="/library-and-information-centre/quick_links.png"
                    alt="Library services"
                    fill
                    className="object-cover"
                    priority
                />
            </div>

            {/* Left Side */}
            <div className="order-2 md:order-1">
                <h3 className="text-4xl font-bold text-[#0d2352] mb-6">Quick Links:</h3>

                <div className="space-y-4">
                    {links.map((link, index) => (
                        <div key={index} className="border-b border-purple-700 pb-2">
                            <button
                                onClick={() => toggleAccordion(index)}
                                className="w-full flex justify-between items-center text-lg font-medium text-black cursor-pointer"
                            >
                                {link.title}
                                {openIndex === index ? (
                                    <FaMinus className="text-purple-700" />
                                ) : (
                                    <FaPlus className="text-purple-700" />
                                )}
                            </button>
                            <div
                                className={`overflow-hidden transition-all duration-500 ease-in-out ${openIndex === index ? 'max-h-40 opacity-100 mt-2' : 'max-h-0 opacity-0'
                                    }`}
                            >
                                <p className="text-gray-700 text-sm">{link.content}</p>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Subscribe Button */}
                <div className='lg:pt-8 pt-5'>
                    <Button showReadMore={false}>Subscribe to Our Digital Library </Button>
                </div>

                <p className="mt-3 text-gray-800 text-sm text-center">
                    Sign up with your email to receive login credentials for our digital platforms.
                </p>
            </div>
        </div>


    );
};

export default QuickLinks;
