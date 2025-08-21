"use client";
import React, { useState } from 'react';
import Link from 'next/link';

const SemesterAccordion = ({ semester }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex items-center justify-between p-3 text-left border bg-white gap-0 "
            >
                <span className="font-medium text-green-800">{semester.title}</span>
                {/* Plus/Minus icon */}
                <svg
                    className="w-6 h-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                >
                    {/* horizontal line (always shown) */}
                    <path
                        d="M5 12h14"
                        strokeWidth="2"
                        strokeLinecap="round"
                    />
                    {/* vertical line (hidden when open to show minus) */}
                    <path
                        d="M12 5v14"
                        strokeWidth="2"
                        strokeLinecap="round"
                        className={`transition-opacity duration-200 ${isOpen ? 'opacity-0' : 'opacity-100'}`}
                    />
                </svg>
            </button>

            {isOpen && (

                <div className="space-y-4">
                    {semester.years.map((year) => (
                        <div key={year.id} className="ml-4">
                            <div className="p-3 rounded-r-lg">
                                <h4 className="font-medium text-blue-800 mb-3">{year.title}</h4>
                                <div className="space-y-2">
                                    {year.pdfs.map((pdf, index) => (
                                        <Link
                                            key={index}
                                            href={pdf.url}
                                            target="_blank"
                                            className="flex items-center space-x-3 p-2 bg-white rounded-lg hover:bg-gray-50 transition-colors text-gray-700 hover:text-blue-600"
                                        >
                                            <svg className="w-4 h-4 text-red-500" fill="currentColor" viewBox="0 0 20 20">
                                                <path fillRule="evenodd" d="M4 4a2 2 0 012-2h4.586A2 2 0 0112 2.586L15.414 6A2 2 0 0116 7.414V16a2 2 0 01-2 2H6a2 2 0 01-2-2V4zm2 6a1 1 0 011-1h6a1 1 0 110 2H7a1 1 0 01-1-1zm1 3a1 1 0 100 2h6a1 1 0 100-2H7z" clipRule="evenodd" />
                                            </svg>
                                            <span className="text-sm">{pdf.name}</span>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

            )}
        </div>
    );
};

export default SemesterAccordion; 