import React from "react"
import InfoBoxes from "../shared/BBA-MBA-BBA-Aviation/InfoBoxes"

const WhyChoose = () => {
    const naacBoxes = [
        {
            number: "01",
            title: "University-Approved Centre",
            description:
                "Approved research centre under the University of Mysore",
        },
        {
            number: "02",
            title: "Expert Faculty Guides",
            description:
                "Guided by experienced supervisors from academia and industry",
        },
        {
            number: "03",
            title: "End-to-End Research Support",
            description:
                "Structured support at every stage, from proposal to publication",
        },
        {
            number: "04",
            title: "Premium Resources",
            description:
                "Full access to research tools, journals, and databases",
        },
        {
            number: "05",
            title: "Conference Presentation",
            description:
                "Opportunities to present at leading conferences",
        },
    ]

    return (
        <div className="bg-[#e1f9f4] md:py-10 py-6 px-4 lg:px-8">
            <div className="container mx-auto">
                {/* Header */}
                <div className="text-center py-4 md:py-6">
                    <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165]">
                        Why Choose the <br />
                        <span style={{ fontWeight: '600', color: '#a22978' }} className="italic playfair-400 -mt-6 md:-mt-10">AIMS PhD?</span>
                    </h3>
                </div>
            </div>
            <InfoBoxes
                boxes={naacBoxes}
                className="py-0 px-0"
                boxBg="bg-[#e1f9f4]"
                boxHoverBg="hover:bg-[#C9FFF4]"
                numberColor="text-black"
                titleColor="text-black"
                descColor="text-black"
            />

        </div>
    )
}

export default WhyChoose
