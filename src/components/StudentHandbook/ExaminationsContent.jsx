import React from "react"

const ExaminationsContent = () => {
  return (
    <div className="space-y-6">
      {/* Main Title */}
      <h2 className="text-2xl md:text-[36px] font-bold text-[#A22877] mb-4">
        Examinations
      </h2>

      {/* Introductory Paragraph */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed monser-400 text-black mb-6">
        We assess students through a structured, outcomes-based model that keeps
        your progress in focus.
      </p>

      {/* Main Heading */}
      <h5 className="text-xl md:text-[28px] monser-500 text-[#0C2165] mb-3">
        Two-Part Evaluation System
      </h5>

      {/* Introductory sentence */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed monser-400 text-[#0C2165] mb-3">
        Each semester is evaluated through:
      </p>

      {/* Numbered List */}
      <ol className="list-decimal list-inside px-4 md:pl-8 lg:px-8 font-monser-400 text-base sm:text-lg md:text-[18px] space-y-3 sm:space-y-4 md:space-y-4 leading-relaxed ml-4 mb-6">
        <li className="mb-2 text-base sm:text-lg md:text-[20px] monser-500">
          Continuous Internal Assessment (CIA)
        </li>
        <li className="mb-2 text-base sm:text-lg md:text-[20px] monser-500">
          Semester-End University Examinations (UE)
        </li>
      </ol>

      {/* Sub-Heading */}
      <h5 className="text-lg md:text-[28px] text-[#0C2165] monser-500 mb-3">
        Continuous Internal Assessment (CIA)
      </h5>

      {/* Paragraph with bold text */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed monser-400 mb-3">
        This is an ongoing process that tracks how well you're hitting your
        academic targets. CIA is designed to measure how well students meet the{" "}
        <span className="monser-500">Intended Learning Outcomes (ILOs)</span>{" "}
        for each course.
      </p>

      {/* Standard paragraph */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed text-gray-800 mb-4">
        Faculty regularly monitor performance and take corrective action when
        needed, helping you adjust your course and stay on target.
      </p>

      {/* Sub-Sub-Heading (not bold) */}
      <h5 className="text-base sm:text-lg md:text-[24px] text-[#0C2165] monser-500 mb-3">
        CIA Includes:
      </h5>

      {/* Sub-Sub-Sub-Heading with letter */}
      <h5 className="text-base sm:text-lg md:text-[22px] monser-500 mb-2">
        a. Formative Assessments (FA):
      </h5>

      {/* Introductory sentence */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxedmb-3">
        These are short-term activities to assess learning progress, including:
      </p>

      {/* Bulleted List */}
      <ul
        className="space-y-2 sm:space-y-3 list-disc list-outside ml-6 lg:ml-8 pl-2 mb-4"
        style={{ fontSize: "0.7em" }}
      >
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Unit/Monthly/Online Tests
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Quizzes
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Assignments & Presentations
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Projects & Research
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Case Studies
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Seminars
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-black leading-relaxed">
          Activities with professional bodies
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          Co-curricular & extracurricular initiatives
        </li>
      </ul>

      {/* Sub-Sub-Sub-Heading with letter */}
      <h6 className="text-base sm:text-lg md:text-[22px] monser-500 mb-2">
        b. Summative Assessments (SA):
      </h6>

      {/* Introductory sentence */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed mb-3">
        These are the sessional and pre-final examinations conducted by the
        department:
      </p>

      {/* Bulleted List */}
      <ul
        className="space-y-2 sm:space-y-3 list-disc list-outside ml-6 lg:ml-8 pl-2 mb-4"
        style={{ fontSize: "0.7em" }}
      >
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          UG Programs: Two sessional exams, class tests, and a pre-final exam
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          PG Programs: Two sessional exams and/or pre-final exams
        </li>
      </ul>

      {/* Paragraph with bold text */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed text-gray-800 mb-3">
        CIA results also form the basis of your{" "}
        <span className="monser-500">Internal Assessment (IA)</span> scores,
        which significantly impact your final semester results.
      </p>

      {/* Standard paragraph */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed text-gray-800 mb-6">
        IA evaluation schemes are shared on departmental notice boards and
        explained during orientation sessions.
      </p>

      {/* Sub-Heading */}
      <h5 className="text-lg md:text-[28px] text-[#0C2165] monser-500 mb-3">
        Semester-End University Examinations (UE)
      </h5>

      {/* Standard paragraph */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed text-gray-800 mb-6">
        These final exams are conducted as per the Bangalore University's
        schedule and regulations.
      </p>

      {/* Sub-Heading */}
      <h5 className="text-lg md:text-[22px] monser-500 mb-3">
        Eligibility to Appear for University Examinations
      </h5>

      {/* Introductory sentence */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed text-gray-800 mb-3">
        To receive your hall ticket and appear for university exams, you must:
      </p>

      {/* Bulleted List */}
      <ul
        className="space-y-2 sm:space-y-3 list-disc list-outside ml-6 lg:ml-8 pl-2 mb-4"
        style={{ fontSize: "0.7em" }}
      >
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          Complete all CIA (Continuous Internal Assessment) requirements
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          Clear all outstanding fees
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          Avoid any form of cheating or malpractice, violations lead to
          disciplinary action
        </li>
        <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
          Attend all class tests, sessional exams, and pre-final exams
        </li>
      </ul>

      {/* Note section */}
      <div className="mb-4">
        <h5 className="text-base sm:text-lg md:text-[22px] monser-500 mb-2">
          Note: Failure to meet the above criteria may result in:
        </h5>
        <ul
          className="space-y-2 sm:space-y-3 list-disc list-outside ml-6 lg:ml-8 pl-2"
          style={{ fontSize: "0.7em" }}
        >
          <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
            Denial of your hall ticket
          </li>
          <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
            Disqualification from university examinations
          </li>
          <li className="text-base sm:text-lg md:text-xl lg:text-[18px] monser-400 text-gray-800 leading-relaxed">
            Loss of eligibility for scholarships, awards, or academic
            recognition
          </li>
        </ul>
      </div>

      {/* Sub-Heading */}
      <h5 className="text-lg md:text-[22px] monser-500 mb-3">
        Bangalore University Digital Evaluation Centre
      </h5>

      {/* Paragraph with bold text */}
      <p className="text-base sm:text-lg md:text-xl lg:text-[18px] leading-relaxed text-gray-800">
        AIMS proudly serves as a{" "}
        <span className="monser-500">preferred digital valuation centre</span>{" "}
        for Bangalore University. In 2021–22, AIMS facilitated the digital
        evaluation of{" "}
        <span className="monser-500">1,95,397 answer scripts</span>, earning
        recognition for excellence and efficiency.
      </p>
    </div>
  )
}

export default ExaminationsContent
