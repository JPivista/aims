'use client';

import Link from 'next/link';
import Button from '@/shared/Button';

const Header = () => {
    const handleGetStarted = () => {
        console.log('Get Started clicked from Header');
    };

    return (
        <header className="bg-white shadow-sm border-b border-foreground/10 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    {/* Logo/Brand */}
                    <div className="flex items-center">
                        <Link href="/" className="text-2xl font-bold text-foreground">
                            AIMS
                        </Link>
                    </div>

                    {/* Navigation */}
                    <nav className="hidden md:flex items-center space-x-8">
                        <Link
                            href="/"
                            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                        >
                            Home
                        </Link>
                        <Link
                            href="/about-aims"
                            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                        >
                            About
                        </Link>
                        <Link
                            href="/services"
                            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                        >
                            Services
                        </Link>
                        <Link
                            href="/contact"
                            className="text-foreground/80 hover:text-foreground transition-colors duration-200"
                        >
                            Contact
                        </Link>
                    </nav>

                    {/* CTA Button */}
                    <div className="flex items-center">
                        <Button
                            onClick={handleGetStarted}
                            className="text-sm"
                        >
                            Get Started
                        </Button>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button className="text-foreground/80 hover:text-foreground">
                            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;