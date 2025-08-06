'use client';

import Button from '@/shared/Button';

const AboutAims = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="font-playfair text-5xl font-bold text-aims-purple mb-8">About AIMS</h1>

                <div className="space-y-6">
                    <p className="font-montserrat text-lg text-foreground/80 leading-relaxed">
                        Welcome to AIMS - our comprehensive platform designed to deliver
                        exceptional user experiences with modern typography and elegant design.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-8">
                        <Button onClick={handleClick}>
                            Get Started
                        </Button>

                        <Button variant="secondary" onClick={() => console.log('Learn more clicked')}>
                            Learn More
                        </Button>

                        <Button showArrow={false} onClick={() => console.log('No arrow button')}>
                            No Arrow
                        </Button>
                    </div>

                    <div className="mt-12 p-6 bg-foreground/5 rounded-lg">
                        <h2 className="font-playfair text-3xl font-bold text-aims-purple mb-6">Typography & Button Features</h2>
                        <ul className="space-y-2 text-foreground/80">
                            <li>• Background Color: #A22877</li>
                            <li>• Border Radius: 20px</li>
                            <li>• Padding: px-20 (80px horizontal), py-8 (32px vertical)</li>
                            <li>• Hover Effect: Transparent background with colored text and border</li>
                            <li>• Smooth transitions with duration-300</li>
                            <li>• Two variants: primary and secondary</li>
                            <li>• Arrow Icons: Down-right arrow (normal) → Up-right arrow (hover)</li>
                            <li>• Optional showArrow prop to hide/show arrows</li>
                        </ul>
                    </div>

                    {/* Font Showcase Section */}
                    <div className="mt-12 p-6 bg-aims-purple/5 rounded-lg border border-aims-purple/10">
                        <h2 className="font-playfair text-3xl font-bold text-aims-purple mb-6">Typography Showcase</h2>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                            {/* Playfair Display Examples */}
                            <div className="space-y-4">
                                <h3 className="font-montserrat text-lg font-semibold text-aims-blue mb-3">Playfair Display (Headlines)</h3>
                                <h1 className="font-playfair text-4xl font-bold text-gray-800">Elegant Headlines</h1>
                                <h2 className="font-playfair text-3xl font-semibold text-aims-purple">Beautiful Subheadings</h2>
                                <h3 className="font-playfair text-2xl font-medium text-aims-orange">Sophisticated Titles</h3>
                                <p className="font-playfair text-lg font-normal text-gray-700 italic">Decorative serif text for special emphasis</p>
                            </div>

                            {/* Montserrat Examples */}
                            <div className="space-y-4">
                                <h3 className="font-montserrat text-lg font-semibold text-aims-teal mb-3">Montserrat (Body & UI)</h3>
                                <p className="font-montserrat text-base font-normal text-gray-800">Regular body text - highly readable and clean</p>
                                <p className="font-montserrat text-base font-medium text-aims-purple">Medium weight for emphasis</p>
                                <p className="font-montserrat text-sm font-semibold text-aims-orange uppercase tracking-wide">UI Elements & Labels</p>
                                <div className="font-montserrat text-xs text-gray-600 space-y-1">
                                    <div>Light (300) • Regular (400) • Medium (500)</div>
                                    <div>Semibold (600) • Bold (700) • Black (900)</div>
                                </div>
                            </div>
                        </div>

                        <div className="mt-6 p-4 bg-white rounded border-l-4 border-aims-purple">
                            <p className="font-montserrat text-sm text-gray-700">
                                <span className="font-semibold text-aims-purple">Font System:</span>
                                Montserrat for body text ensures excellent readability, while Playfair Display adds elegance to headlines and creates visual hierarchy.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AboutAims;
