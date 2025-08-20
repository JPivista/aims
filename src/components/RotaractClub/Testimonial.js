'use client'
import React, { useState } from 'react'

const Testimonial = () => {
    const [currentIndex, setCurrentIndex] = useState(0)

    const testimonials = [
        {
            text: "Our club's passion for social impact is truly contagious. Together, we're fostering an environment of empowerment, where each member's unique talents and ideas contribute to a brighter future.",
            name: "Rtr Kiran SM",
            title: "President 2023-24"
        },
        {
            text: "Being part of this club has transformed my perspective on leadership and community service. The opportunities for growth and the supportive environment have been incredible.",
            name: "Rtr Priya Sharma",
            title: "Vice President 2023-24"
        },
        {
            text: "The Rotaract Club has given me a platform to make real change in our community. Every project we undertake brings us closer to our vision of a better world.",
            name: "Rtr Amit Kumar",
            title: "Secretary 2023-24"
        },
        {
            text: "Through this club, I've learned that leadership is about empowering others. The mentorship and networking opportunities have been invaluable for my personal development.",
            name: "Rtr Sneha Patel",
            title: "Treasurer 2023-24"
        }
    ]

    const nextTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
        )
    }

    const prevTestimonial = () => {
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
        )
    }

    return (
        <div className='w-full bg-[#4A148C] py-10'>
            <div className='container mx-auto px-4 lg:px-8'>
                <div className='flex flex-col items-center text-center relative'>
                    {/* Title */}
                    <h2 className='text-4xl lg:text-6xl playfair-300 text-white mb-8'>
                        Testimonials
                    </h2>

                    {/* Testimonial Content */}
                    <div className='max-w-4xl mx-auto mb-8'>
                        <p className='text-xl lg:text-2xl text-white leading-relaxed font-light'>
                            {testimonials[currentIndex].text}
                        </p>
                    </div>

                    {/* Attribution */}
                    <div>
                        <p className='text-lg lg:text-xl text-white font-bold'>
                            {testimonials[currentIndex].name}
                        </p>
                        <p className='text-base lg:text-lg text-white font-medium'>
                            {testimonials[currentIndex].title}
                        </p>
                    </div>

                    {/* Navigation Arrows */}
                    <div className='flex items-center justify-between w-full max-w-6xl px-4 lg:px-0 lg:absolute lg:top-1/2 lg:transform lg:-translate-y-1/2 '>
                        {/* Left Arrow */}
                        <button
                            onClick={prevTestimonial}
                            className='w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer'
                        >
                            <svg
                                className='w-6 h-6 text-black'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M15 19l-7-7 7-7'
                                />
                            </svg>
                        </button>

                        {/* Right Arrow */}
                        <button
                            onClick={nextTestimonial}
                            className='w-12 h-12 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors duration-300 shadow-lg cursor-pointer'
                        >
                            <svg
                                className='w-6 h-6 text-black'
                                fill='none'
                                stroke='currentColor'
                                viewBox='0 0 24 24'
                            >
                                <path
                                    strokeLinecap='round'
                                    strokeLinejoin='round'
                                    strokeWidth={2}
                                    d='M9 5l7 7-7 7'
                                />
                            </svg>
                        </button>
                    </div>

                    {/* Dots Indicator */}
                    {/* <div className='flex space-x-2 mt-8'>
                        {testimonials.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={`w-3 h-3 rounded-full transition-colors duration-300 ${index === currentIndex ? 'bg-white' : 'bg-white/30'
                                    }`}
                            />
                        ))}
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default Testimonial
