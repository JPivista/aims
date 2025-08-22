"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { FaWhatsapp, FaPlus, FaFacebook } from "react-icons/fa";
import { SiOpenai } from "react-icons/si";

const QuickActionsButton = () => {
    const [isVisible, setIsVisible] = useState(false);
    const [isInitialized, setIsInitialized] = useState(false);

    useEffect(() => {
        let scrollTimeout;

        const handleScroll = () => {
            // Clear previous timeout
            clearTimeout(scrollTimeout);

            // Use multiple methods to get scroll position for better compatibility
            const scrollTop = window.pageYOffset ||
                document.documentElement.scrollTop ||
                document.body.scrollTop ||
                0;

            // Set visibility based on 10px threshold with debouncing
            scrollTimeout = setTimeout(() => {
                // Show button only when scrolled 10px or more
                const shouldShow = scrollTop >= 10;

                // Always update visibility based on scroll position
                setIsVisible(shouldShow);

                // Mark as initialized after first scroll
                if (!isInitialized) {
                    setIsInitialized(true);
                }

                // Debug log (remove this in production)
                console.log('Scroll position:', scrollTop, 'Should show:', shouldShow, 'Initialized:', isInitialized);
            }, 50); // Small delay to prevent immediate triggering
        };

        // Add scroll event listener
        window.addEventListener('scroll', handleScroll, { passive: true });

        // Check initial scroll position
        handleScroll();

        // Cleanup
        return () => {
            window.removeEventListener('scroll', handleScroll);
            clearTimeout(scrollTimeout);
        };
    }, []);

    // Debug: Always show for testing, remove this line when working
    // if (!isVisible) return null;

    return (
        <div className={`fixed right-6 bottom-6 z-[9999] group transition-all duration-500 ${isVisible
            ? 'opacity-100 translate-x-0'
            : 'opacity-0 translate-x-full pointer-events-none'
            }`}>
            {/* Invisible Hover Zone - Larger area to prevent quick hiding */}
            <div className="absolute -inset-8 pointer-events-auto"></div>

            {/* Main + Button with Beautiful Gradient and Glow */}
            <div className="relative">
                {/* Glow Effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 rounded-full blur-xl opacity-0 group-hover:opacity-75 transition-all duration-700 scale-150 group-hover:scale-100"></div>

                {/* Main Button */}
                <div className="relative bg-[#9c2474] text-white w-14 h-14 rounded-full shadow-2xl hover:bg-[#FF7F02] transition-all duration-500 flex items-center justify-center border-2 border-white/20 backdrop-blur-sm">
                    <FaPlus className="w-5 h-5 transition-all duration-500 group-hover:rotate-90 group-hover:scale-110" />

                    {/* Ripple Effect */}
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-400/20 to-pink-500/20 opacity-0 group-hover:opacity-100 group-hover:animate-ping transition-all duration-700"></div>
                </div>

                {/* Beautiful Floating Action Buttons with Enhanced Animations */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none group-hover:pointer-events-auto group-hover:delay-300 group-hover:delay-1000">

                    {/* WhatsApp Button - Top */}
                    <Link
                        href="https://wa.me/918150001994"
                        target="_blank"
                        className="absolute bg-gradient-to-br from-green-400 to-green-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-green-500/50 transition-all duration-1000 flex items-center justify-center 
                        transform opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100
                        group-hover:translate-y-[-100px] group-hover:animate-bounce
                        border-2 border-green-300/30 backdrop-blur-sm hover:scale-110
                        hover:opacity-100 hover:scale-100"
                        style={{ transitionDelay: '0ms' }}
                    >
                        <FaWhatsapp className="w-7 h-7" />
                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-full bg-green-400/30 animate-ping"></div>
                    </Link>

                    {/* Lyro AI Button - Top Left */}
                    <Link
                        href="https://lyro.ai"
                        target="_blank"
                        className="absolute bg-gradient-to-br from-blue-400 to-blue-600 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-1000 flex items-center justify-center
                        transform opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100
                        group-hover:translate-x-[-80px] group-hover:translate-y-[-80px] group-hover:animate-pulse
                        border-2 border-blue-300/30 backdrop-blur-sm hover:scale-110
                        hover:opacity-100 hover:scale-100"
                        style={{ transitionDelay: '100ms' }}
                    >
                        <SiOpenai className="w-7 h-7" />
                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" style={{ animationDelay: '0.5s' }}></div>
                    </Link>

                    {/* Facebook Button - Left */}
                    <Link
                        href="https://www.facebook.com/theaims.ac.in"
                        target="_blank"
                        className="absolute bg-gradient-to-br from-blue-500 to-blue-700 text-white w-14 h-14 rounded-full shadow-2xl hover:shadow-blue-500/50 transition-all duration-1000 flex items-center justify-center
                        transform opacity-0 scale-0 group-hover:scale-100 group-hover:opacity-100
                        group-hover:translate-x-[-100px] group-hover:animate-bounce
                        border-2 border-blue-300/30 backdrop-blur-sm hover:scale-110
                        hover:opacity-100 hover:scale-100"
                        style={{ transitionDelay: '200ms' }}
                    >
                        <FaFacebook className="w-7 h-7" />
                        {/* Glow Ring */}
                        <div className="absolute inset-0 rounded-full bg-blue-400/30 animate-ping" style={{ animationDelay: '1s' }}></div>
                    </Link>

                    {/* Decorative Floating Particles */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
                        <div className="absolute top-0 left-1/2 w-2 h-2 bg-yellow-400 rounded-full animate-ping" style={{ animationDelay: '0s' }}></div>
                        <div className="absolute top-1/4 left-1/4 w-1.5 h-1.5 bg-pink-400 rounded-full animate-ping" style={{ animationDelay: '0.3s' }}></div>
                        <div className="absolute top-1/2 left-3/4 w-1 h-1 bg-purple-400 rounded-full animate-ping" style={{ animationDelay: '0.6s' }}></div>
                        <div className="absolute top-3/4 left-1/2 w-1.5 h-1.5 bg-blue-400 rounded-full animate-ping" style={{ animationDelay: '0.9s' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default QuickActionsButton;
