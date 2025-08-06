'use client';

import Button from '@/shared/Button';

const AboutAims = () => {
    const handleClick = () => {
        alert('Button clicked!');
    };

    return (
        <div className="bg-background p-8">
            <div className="max-w-4xl mx-auto">
                <h1 className="text-4xl font-bold text-foreground mb-8">About AIMS</h1>

                <div className="space-y-6">
                    <p className="text-lg text-foreground/80">
                        Welcome to AIMS - our comprehensive platform designed to deliver
                        exceptional user experiences.
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
                        <h2 className="text-2xl font-semibold mb-4">Button Features</h2>
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
                </div>
            </div>
        </div>
    );
};

export default AboutAims;
