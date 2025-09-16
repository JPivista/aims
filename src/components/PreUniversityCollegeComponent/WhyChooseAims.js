import React from "react";

const leftPoints = [
    "Established in 1994, AIMS Institutes boasts a rich legacy of 3 Decades in imparting Quality Education",
    "Located at the prime location in Peenya, Bengaluru – The Largest Industrial Hub",
    "Highly Qualified, Experienced, and Dedicated faculty fraternity",
    "Vast Campus with well-equipped Classrooms, Library, Laboratories, Seminar Hall, Auditorium, Playground, Cafeteria, Gym, and Health Care Centre",
    "Dedicated Hostels available for Boys and Girls with free transport facility",
    "Consistent delivery of Meritorious Results, producing Toppers in increasing numbers each year",
    "Counselling and Mentorship Program to provide individual attention to the needs of Students",
];

const rightPoints = [
    "Add-on courses, Industrial Visits, Personality Development Programs, Career Counselling Sessions, Seminars and Symposiums",
    "Integrated Coaching For CET, NEET and JEE – making us one of the best colleges for PU with CET coaching and JEE coaching in Bangalore",
    "Extra-coaching facility for High Performers to enhance their Competence",
    "Extra-Curricular Activities with the Sports Club and the Cultural Club",
    "Remedial classes to support students via additional revision of portions",
    "Regular Parent-Teacher Meetings",
    "Transportation convenience via Metro Connectivity alongside the College Van facility",
];

const WhyChooseAims = () => {
    return (
        <div className="py-12 px-4 lg:px-8">
            <div className="container mx-auto ">
                <h3 className="text-3xl md:text-4xl font-semibold text-left text-[#0c2165] lg:mb-12 lg:pb-5">
                    Why Choose <br />
                    AIMS PUC?
                </h3>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left Box */}
                    <div className="bg-[#FAE5E6] border border-[#A22877] rounded-lg p-6 lg:w-1/2">
                        <ul className="list-disc pl-5 space-y-3 text-gray-800">
                            {leftPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Box */}
                    <div className="bg-[#FAE5E6] border border-[#A22877] rounded-lg p-6 lg:w-1/2">
                        <ul className="list-disc pl-5 space-y-3 text-gray-800">
                            {rightPoints.map((point, index) => (
                                <li key={index}>{point}</li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default WhyChooseAims;
