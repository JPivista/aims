import React from 'react';

const WhatYouFind = () => {
    const items = [
        { text: <>Over <span style={{ fontWeight : "600"}}>25,000</span> print books and 30 academic journals</> },
        { text: <><span style={{ fontWeight : "600"}}>1.6 million</span> e-books and 6,000+ e-journals</> },
        { text: <>Subscription-based databases: <span style={{ fontWeight : "600"}}>DELNET</span> and <span style={{ fontWeight : "600"}}>NLIST</span></> },
        { text: <>Access to open platforms like NDLI, Shodhganga, NPTEL, and Swayam</> },
        { text: <>Faculty publications, theses, dissertations, and student projects</> },
        { text: <>ICT-enabled study spaces, KOHA software, <span style={{ fontWeight : "600"}}>CCTV, Wi-Fi</span>, fire alarms</> },
        { text: <>Qualified support staff to guide academic and research activities</> },
    ];

    return (
        <div className='container mx-auto px-4 '>
        <div className="bg-[#FEEBEB] rounded-xl overflow-hidden border border-[#f2d0cf]">
            {/* Header */}
            <div className="p-6 md:p-10">
                <h3 className="text-3xl md:text-4xl font-bold text-[#0d2352] mb-6">
                    What You’ll Find Here:
                </h3>

                {/* Grid Items */}
                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8 text-gray-900">
                    {items.map((item, index) => (
                        <div key={index} className="text-base leading-relaxed">
                            {item.text}
                        </div>
                    ))}
                </div>
            </div>

            {/* Footer */}
            <div className="bg-[#f2d0cf] px-6 py-4 text-center text-sm font-medium text-gray-900">
                Library Hours: <span className="" style={{ fontWeight: "600" }}>9:00 AM – 5:30 PM (Monday to Saturday)</span>
            </div>
        </div>
        </div>
    );
};

export default WhatYouFind;
