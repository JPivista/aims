import React from 'react'

const CareerOpportunities = () => {
    const careerData = [
        {
            title: "Chartered Accountant (CA)",
            role: "Specialising in accounting, auditing, and taxation, CAs are crucial for financial management and compliance in any business",
            skills: "Expertise in financial planning, audit procedures, tax regulations, and financial reporting",
            opportunities: "Work in accounting firms, corporate finance, or as independent financial advisors"
        },
        {
            title: "Company Secretary (CS)",
            role: "CS professionals play a key role in ensuring corporate governance and compliance with legal and statutory regulations",
            skills: "Proficiency in corporate laws, corporate governance, and secretarial practices",
            opportunities: "Employment in public and private sector companies, law firms, or independent consulting"
        },
        {
            title: "Chartered Financial Analyst (CFA)",
            role: "CFAs specialise in investment management, financial analysis, and portfolio strategy",
            skills: "Expertise in investment analysis, portfolio management, and financial modeling",
            opportunities: "Roles in investment banking, portfolio management, financial consulting, and risk analysis"
        },
        {
            title: "Business Accounting and Taxation Professional",
            role: "Focuses on managing financial records, preparing tax returns, and devising tax strategies",
            skills: "Knowledge of accounting principles, taxation laws, and financial reporting",
            opportunities: "Opportunities in accounting departments, tax consultancy firms, and financial organisations"
        },
        {
            title: "Certified Management Accountant (CMA)",
            role: "CMAs are responsible for strategic financial management and decision-making",
            skills: "Skills in management accounting, financial analysis, and strategic planning",
            opportunities: "Varied roles in corporate management, financial strategy, and consulting services"
        },
        {
            title: "Financial Risk Manager (FRM)",
            role: "Specialising in risk assessment and management, particularly in financial institutions",
            skills: "Expertise in financial risk management, market risk, credit risk, and risk control",
            opportunities: "Roles in banks, asset management firms, credit rating agencies, and insurance companies"
        },
        {
            title: "Business Analyst",
            role: "Bridging the gap between IT and business, using data analytics to improve processes and systems",
            skills: "Analytical thinking, <br /> problem-solving, data analysis, and project management",
            opportunities: "Opportunities in diverse industries including IT, consulting, financial services, and healthcare"
        },
        {
            title: "Investment Banker",
            role: "Specialising in financial advisory services, mergers and acquisitions, and raising capital",
            skills: "Expertise in financial modeling, market analysis, and strategic financial planning",
            opportunities: "Work in investment banks, private equity firms, corporate finance departments, and financial consultancies"
        }
    ]

    return (
        <div className="py-8 bg-white px-4 lg:px-8">
            <div className="container mx-auto">
                {/* Header Section */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-2 mb-10">
                    <h3 className="text-[#0C2165] text-3xl lg:text-4xl font-serif font-bold">
                        Career <br className='md:block hidden' />
                        Opportunities
                    </h3>
                    <p className="text-gray-700 leading-relaxed text-base lg:text-lg">
                        The Bachelor of Commerce from AIMS Institutes, one of the best B.Com colleges in Bangalore, sharpens your business acumen and sets you on a clear career path, readying you to aim for and achieve success in diverse professional fields.
                    </p>
                </div>

                {/* Desktop Table View */}
                <div className="hidden lg:block">
                    <div className="overflow-x-auto">
                        <table className="w-full border-separate border-spacing-0">
                            <thead>
                                <tr className="">
                                    <th></th>
                                    <th className="px-6 py-4 text-left font-semibold text-lg bg-gradient-to-r from-[#0C2165] to-[#5522A1] text-white rounded-t-md border-r border-white md:text-center">Role</th>
                                    <th className="px-6 py-4 text-left font-semibold text-lg bg-gradient-to-r from-[#0C2165] to-[#5522A1] text-white rounded-t-md border-r border-white md:text-center">Skills Developed</th>
                                    <th className="px-6 py-4 text-left font-semibold text-lg bg-gradient-to-r from-[#0C2165] to-[#5522A1] text-white rounded-t-md border-r border-white md:text-center">Opportunities</th>
                                </tr>
                            </thead>
                            <tbody>
                                {careerData.map((career, index) => (
                                    <tr key={index} className=" ">
                                        <td className="px-6 py-3 bg-[#FFE4E1] align-center rounded-l-lg border-b-4 border-b-white">
                                            <h5 className="font-bold text-black text-lg mb-1 monser-600">
                                                {career.title}
                                            </h5>
                                        </td>
                                        <td className="px-6 py-3 bg-[#E1F9F4] align-top border-b-4 border-white border-r-2 border-r-gray-200">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {career.role}
                                            </p>
                                        </td>
                                        <td className="px-6 py-3 bg-[#E1F9F4] align-top border-b-4 border-white border-r-2 border-r-gray-200">
                                            <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: career.skills }} />
                                        </td>
                                        <td className="px-6 py-3 bg-[#E1F9F4] align-top rounded-r-lg border-b-4 border-white">
                                            <p className="text-gray-700 text-sm leading-relaxed">
                                                {career.opportunities}
                                            </p>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>

                {/* Mobile Card View */}
                <div className="lg:hidden space-y-6 pb-8">
                    {careerData.map((career, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
                            {/* Career Title Header */}
                            <div className="bg-[#FFE4E1] px-4 py-4">
                                <h5 className="font-bold text-black text-lg mb-1 monser-600">
                                    {career.title}
                                </h5>
                            </div>

                            {/* Content Sections */}
                            <div className="p-4 space-y-4">
                                {/* Role Section */}
                                <div>
                                    <h4 className="font-semibold text-[#A22877] text-sm uppercase tracking-wide mb-2">
                                        Role
                                    </h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {career.role}
                                    </p>
                                </div>

                                {/* Skills Section */}
                                <div>
                                    <h4 className="font-semibold text-[#A22877] text-sm uppercase tracking-wide mb-2">
                                        Skills Developed
                                    </h4>
                                    <p className="text-gray-700 text-sm leading-relaxed" dangerouslySetInnerHTML={{ __html: career.skills }} />
                                </div>

                                {/* Opportunities Section */}
                                <div>
                                    <h4 className="font-semibold text-[#A22877] text-sm uppercase tracking-wide mb-2">
                                        Opportunities
                                    </h4>
                                    <p className="text-gray-700 text-sm leading-relaxed">
                                        {career.opportunities}
                                    </p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default CareerOpportunities 