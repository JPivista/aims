'use client'
import React, { useState } from 'react';
import { FaPlus, FaMinus } from 'react-icons/fa';
import Image from 'next/image';
import Button from '@/shared/Button';

const QuickLinks = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const links = [
    {
      title: 'New Arrivals',
      contents: [
        { type: 'text', value: 'Check the latest additions to our library collection.' },
        { type: 'link', value: 'Browse new arrivals', href: '/library/new-arrivals' },
      ],
    },
    {
      title: 'WEB OPAC',
      contents: [
        { type: 'text', value: 'Search our online catalog for books and resources.' },
        { type: 'link', value: 'Go to OPAC', href: 'https://opac.yourlibrary.com' },
      ],
    },
    {
      title: 'Library Rules & Regulations',
      contents: [
        { type: 'text', value: 'All students and staff of AIMS, Peenya, Bengaluru, are eligible for library membership, while others require prior permission from the Principal and Chief Librarian; membership is linked to your college ID, and can be obtained by submitting the Google form on the AIMS Library website.' },
        {
          type: 'table',
          headers: ['User Categories', 'No of Books Issued', 'Duration', 'Fine'],
          rows: [
            ['UG Students', '2', '15 days', '1'],
            ['PG Students', '3', '15 days', '1'],
            ['Faculty Members', '5', '30 days', '1'],
          ],
        },
        {
          type: 'bullets',
          title: 'Books Issue/Borrowing Policies',
          items: [
            'College ID card is a must and should be shown for borrowing library resources.',
            'Return books on or before the due date.',
            'Reference books, journals, theses and dissertations are not issued for home reading.',
            'Students are not permitted to take two books with the same title and author.',
            'Do not mark, write, or cut pages.',
            'Report immediately lost/damaged books to the librarian.',
            'Lost or damaged books: The borrower is responsible for replacing them.',
          ],
        },
        {
          type: 'bullets',
          title: 'General Rules',
          items: [
            'Students must present their College ID upon entering or when requested by the Librarian.',
            'Deposit bags, gowns, umbrellas, etc., at the Property Counter. Valuables are allowed, but the library is not responsible for loss or damage.',
            'Enter your name and details in the gate register at the entrance.',
            'Keep mobile phones on silent mode before entering; no eatables or drinks allowed (water facilities available).',
            'Loud talking, conversations, and discussions are strictly prohibited.',
            'Report any library issues to the librarian.',
          ],
        },
      ],
    },
    {
      title: 'Subscribed Journals List',
      contents: [
        { type: 'text', value: 'View the list of journals and magazines we subscribe to.' },
        { type: 'link', value: 'See Journals', href: '/library/journals' },
      ],
    },
  ];

  return (
    <div className="container mx-auto px-6 py-12 grid md:grid-cols-2 gap-8 items-center">
      {/* Right Side Image */}
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
              {/* Accordion Header */}
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

              {/* Accordion Body */}
              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? 'max-h-[1000px] opacity-100 mt-2' : 'max-h-0 opacity-0'
                }`}
              >
                <div className="space-y-3">
                  {link.contents.map((item, i) => {
                    if (item.type === 'text') {
                      return <p key={i} className="text-gray-700 text-sm">{item.value}</p>;
                    }
                    if (item.type === 'link') {
                      return (
                        <a
                          key={i}
                          href={item.href}
                          className="text-purple-700 text-sm font-semibold underline block"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          {item.value}
                        </a>
                      );
                    }
                    if (item.type === 'table') {
                      return (
                        <table key={i} className="w-full text-sm border-collapse border border-gray-300 my-2">
                          <thead className="bg-gray-100">
                            <tr>
                              {item.headers.map((header, j) => (
                                <th key={j} className="border border-gray-300 px-2 py-1 text-left">
                                  {header}
                                </th>
                              ))}
                            </tr>
                          </thead>
                          <tbody>
                            {item.rows.map((row, rIdx) => (
                              <tr key={rIdx}>
                                {row.map((cell, cIdx) => (
                                  <td key={cIdx} className="border border-gray-300 px-2 py-1">
                                    {cell}
                                  </td>
                                ))}
                              </tr>
                            ))}
                          </tbody>
                        </table>
                      );
                    }
                    if (item.type === 'bullets') {
                      return (
                        <div key={i} className="mt-2">
                          <h4 className="font-semibold text-gray-800 text-sm mb-1">{item.title}</h4>
                          <ul className="list-disc list-inside text-gray-700 text-sm space-y-1">
                            {item.items.map((point, pIdx) => (
                              <li key={pIdx}>{point}</li>
                            ))}
                          </ul>
                        </div>
                      );
                    }
                    return null;
                  })}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Subscribe Button */}
        <div className="lg:pt-8 pt-5">
          <Button showReadMore={false}>Subscribe to Our Digital Library</Button>
        </div>

        <p className="mt-3 text-gray-800 text-sm text-center">
          Sign up with your email to receive login credentials for our digital platforms.
        </p>
      </div>
    </div>
  );
};

export default QuickLinks;
