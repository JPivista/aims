import React from "react";

const WhatYouFind = () => {
  const items = [
    { text: <>Over <span className="font-[700]" style={{ fontWeight: 700 }}>25,000</span> print books and 30 academic journals</> },
    { text: <><span className="font-[700]" style={{ fontWeight: 700 }}>1.6 million</span> e-books and 6,000+ e-journals</> },
    { text: <>Subscription-based databases: <span className="font-[700]" style={{ fontWeight: 700 }}>DELNET</span> and <span className="font-[700]" style={{ fontWeight: 700 }}>NLIST</span></> },
    { text: <>Access to open platforms like <span style={{ fontWeight: 700 }}>NDLI</span>, <span style={{ fontWeight: 700 }}>Shodhganga</span>, NPTEL, and Swayam</> },
    { text: <>Faculty publications, theses, dissertations, and student projects</> },
    { text: <>ICT-enabled study spaces, KOHA software, <span className="font-[700]" style={{ fontWeight: 700 }}>CCTV, Wi-Fi</span>, fire alarms</> },
    { text: <>Qualified support staff to guide academic and research activities</> },
  ];

  return (
    <div className="lg:px-8 px-4">
      <div className="container mx-auto">
        <div className="bg-[#FEEBEB] rounded-xl overflow-hidden border border-[#f2d0cf]">

          {/* Header */}
          <div className="p-6 md:p-10">
            <h3 className="text-3xl md:text-4xl font-[800] text-[#0d2352] mb-6" style={{ fontWeight: 300 }}>
              What You’ll Find Here
            </h3>

            {/* Grid Items */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 text-gray-900">
              {items.map((item, index) => {
                const isLastCol = (index + 1) % 4 === 0;
                const totalCols = 4;
                const totalRows = Math.ceil(items.length / totalCols);
                const currentRow = Math.floor(index / totalCols) + 1;
                const isLastRow = currentRow === totalRows;

                return (
                  <div
                    key={index}
                    className={`
                      flex items-start gap-2 p-4
                      border-[#f2d0cf]
                      lg:border-r ${isLastCol ? "lg:border-r-0" : ""}
                      border-b ${isLastRow ? "border-b-0" : ""}
                      text-base leading-relaxed
                    `}
                  >
                    {/* Bullet */}
                    <span className="text-[#0d2352] text-4xl -mt-[8px] ">•</span>

                    {/* Content */}
                    <h5 className="text-gray-900 text-lg" style={{ fontWeight: 400 }}>
                      {item.text}
                    </h5>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Footer */}
          <div className="bg-[#f2d0cf] px-6 py-4 text-center text-sm font-[600] text-gray-900" style={{ fontWeight: 600 }}>
            Library Hours:{" "}
            <span className="font-[700]" style={{ fontWeight: 700 }}>
              9:00 AM – 5:30 PM (Monday to Saturday)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatYouFind;
