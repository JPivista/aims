"use client"
import React from "react"
import TabCourseStructure from "../../Tab/TabCourseStructure"

const CourseStructure = ({ programKey = "mba" }) => {
  const courseData = {
    mba: [
      {
        key: "first-year",
        title: "First Year",
        tabs: [
          {
            key: "semester-1",
            label: "SEMESTER 1",
            image: "/MBA/first-year.jpg",
            courses: [
              "Economics for Managers",
              "Organisational Behaviour",
              "Accounting for Managers",
              "Statistics for Management",
              "Marketing for Customer Value",
              "Legal Aspects and IPR",
              "Managerial Skills - 1",
            ],
          },
          {
            key: "semester-2",
            label: "SEMESTER 2",
            image: "/MBA/first-year.jpg",
            courses: [
              "Economics for Managers",
              "Organisational Behaviour",
              "Accounting for Managers",
              "Statistics for Management",
              "Marketing for Customer Value",
              "Legal Aspects and IPR",
              "Managerial Skills - 1",
            ],
          },
        ],
      },
      {
        key: "second-year",
        title: "Second Year",
        tabs: [
          {
            key: "semester-3",
            label: "SEMESTER 3",
            image: "/MBA/first-year.jpg",
            courses: [
              "Economics for Managers",
              "Organisational Behaviour",
              "Accounting for Managers",
              "Statistics for Management",
              "Marketing for Customer Value",
              "Legal Aspects and IPR",
              "Managerial Skills - 1",
            ],
          },
          {
            key: "semester-4",
            label: "SEMESTER 4",
            image: "/MBA/first-year.jpg",
            courses: [
              "Economics for Managers",
              "Organisational Behaviour",
              "Accounting for Managers",
              "Statistics for Management",
              "Marketing for Customer Value",
              "Legal Aspects and IPR",
              "Managerial Skills - 1",
            ],
          },
        ],
      },
      {
        key: "specialization-tracks",
        title: "Specialisation Tracks",
        tabs: [
          {
            key: "finance",
            label: "FINANCE",
            image: "/MBA/first-year.jpg",
            courses: [
              "Financial Management",
              "Investment Analysis",
              "Risk Management",
              "Corporate Finance",
              "Financial Markets",
              "Portfolio Management",
              "Financial Modeling",
              "International Finance",
              "Financial Derivatives",
              "Banking Operations",
              "SOFT CORE Financial Software Training",
              "SOFT CORE Advanced Financial Analytics",
            ],
          },
          {
            key: "marketing",
            label: "MARKETING",
            image: "/MBA/first-year.jpg",
            courses: [
              "Marketing Strategy",
              "Brand Management",
              "Digital Marketing",
              "Customer Relationship Management",
              "Market Research",
              "Sales Management",
              "Advertising and Promotion",
              "Pricing Strategies",
              "Distribution Channels",
              "Marketing Analytics",
              "SOFT CORE Marketing Tools",
              "SOFT CORE Advanced Marketing Analytics",
            ],
          },
          {
            key: "human-resources",
            label: "HUMAN RESOURCES",
            image: "/MBA/first-year.jpg",
            courses: [
              "Human Resource Management",
              "Organizational Development",
              "Talent Acquisition",
              "Performance Management",
              "Compensation and Benefits",
              "Employee Relations",
              "Training and Development",
              "HR Analytics",
              "Labor Laws",
              "Strategic HRM",
              "SOFT CORE HR Software",
              "SOFT CORE Advanced HR Analytics",
            ],
          },
          {
            key: "business-analytics",
            label: "BUSINESS ANALYTICS",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Analytics",
              "Data Mining",
              "Statistical Analysis",
              "Predictive Modeling",
              "Data Visualization",
              "Machine Learning",
              "Business Intelligence",
              "Quantitative Methods",
              "Operations Research",
              "Analytics Strategy",
              "SOFT CORE Analytics Tools",
              "SOFT CORE Advanced Analytics",
            ],
          },
          {
            key: "logistics-supply-chain",
            label: "LOGISTICS & SUPPLY CHAIN MANAGEMENT",
            image: "/MBA/first-year.jpg",
            courses: [
              "Supply Chain Management",
              "Logistics Operations",
              "Inventory Management",
              "Transportation Management",
              "Warehouse Management",
              "Procurement",
              "Supply Chain Analytics",
              "Global Logistics",
              "Quality Management",
              "Operations Management",
              "SOFT CORE SCM Software",
              "SOFT CORE Advanced SCM Analytics",
            ],
          },
        ],
      },
    ],
    bba: [
      {
        key: "first-year",
        title: "First Year",
        tabs: [
          {
            key: "semester-1",
            label: "SEMESTER 1",
            image: "/MBA/first-year.jpg",
            courses: [
              "Principles of Management",
              "Business Communication",
              "Financial Accounting",
              "Business Mathematics",
              "Business Environment",
              "Introduction to Business",
              "SOFT CORE Professional Skills Development",
            ],
          },
          {
            key: "semester-2",
            label: "SEMESTER 2",
            image: "/MBA/first-year.jpg",
            courses: [
              "Organizational Behavior",
              "Business Statistics",
              "Cost Accounting",
              "Marketing Management",
              "Business Law",
              "Business Fundamentals",
              "SOFT CORE Leadership and Team Management",
            ],
          },
        ],
      },
      {
        key: "second-year",
        title: "Second Year",
        tabs: [
          {
            key: "semester-3",
            label: "SEMESTER 3",
            image: "/MBA/first-year.jpg",
            courses: [
              "Human Resource Management",
              "Financial Management",
              "Operations Management",
              "Business Research Methods",
              "Managerial Economics",
              "Business Operations",
              "SOFT CORE Advanced Excel and Business Tools",
            ],
          },
          {
            key: "semester-4",
            label: "SEMESTER 4",
            image: "/MBA/first-year.jpg",
            courses: [
              "Strategic Management",
              "International Business",
              "Business Analytics",
              "Corporate Governance",
              "Elective Course I",
              "Business Marketing and Sales",
              "SOFT CORE Industry Project and Internship",
            ],
          },
        ],
      },
      {
        key: "third-year",
        title: "Third Year",
        tabs: [
          {
            key: "semester-5",
            label: "SEMESTER 5",
            image: "/MBA/first-year.jpg",
            courses: [
              "Entrepreneurship Development",
              "Business Ethics and Sustainability",
              "Project Management",
              "Elective Course III",
              "Elective Course IV",
              "Business Safety and Security",
              "SOFT CORE Advanced Business Tools",
            ],
          },
          {
            key: "semester-6",
            label: "SEMESTER 6",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Strategy",
              "Global Business Environment",
              "Elective Course VI",
              "Elective Course VII",
              "Elective Course VIII",
              "Business Industry Project",
              "SOFT CORE Industry Internship",
            ],
          },
        ],
      },
      {
        key: "specialization-tracks",
        title: "Specialisation Tracks",
        tabs: [
          {
            key: "business-management",
            label: "BUSINESS MANAGEMENT",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Operations Management",
              "Business Management",
              "Business Safety and Security",
              "Business Law and Regulations",
              "Business Finance and Economics",
              "Business Marketing and Sales",
              "Business Human Resource Management",
              "Business Technology and Innovation",
              "Business Customer Service",
              "Business Supply Chain Management",
              "SOFT CORE Business Software Training",
              "SOFT CORE Advanced Business Analytics",
            ],
          },
          {
            key: "business-finance",
            label: "BUSINESS FINANCE",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Financial Management",
              "Business Financial Analysis",
              "Business Investment and Risk Management",
              "Business Insurance and Claims",
              "Business Taxation",
              "Business Mergers and Acquisitions",
              "Business Financial Modeling",
              "Business Cost Management",
              "Business Revenue Management",
              "Business Financial Regulations",
              "SOFT CORE Business Financial Software",
              "SOFT CORE Advanced Financial Analytics",
            ],
          },
          {
            key: "business-marketing",
            label: "BUSINESS MARKETING",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Marketing Strategy",
              "Business Brand Management",
              "Business Digital Marketing",
              "Business Customer Relationship Management",
              "Business Market Research",
              "Business Sales Management",
              "Business Advertising and Promotion",
              "Business Pricing Strategies",
              "Business Distribution Channels",
              "Business Marketing Analytics",
              "SOFT CORE Business Marketing Tools",
              "SOFT CORE Advanced Marketing Analytics",
            ],
          },
          {
            key: "business-operations",
            label: "BUSINESS OPERATIONS",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Operations Management",
              "Business Operations and Management",
              "Business Logistics and Supply Chain",
              "Business Quality Management",
              "Business Project Management",
              "Business Maintenance Management",
              "Business Fleet Management",
              "Business Route Planning",
              "Business Scheduling and Planning",
              "Business Operations Analytics",
              "SOFT CORE Business Operations Software",
              "SOFT CORE Advanced Operations Analytics",
            ],
          },
        ],
      },
    ],
    "bba-aviation": [
      {
        key: "first-year",
        title: "First Year",
        tabs: [
          {
            key: "semester-1",
            label: "SEMESTER 1",
            image: "/MBA/first-year.jpg",
            courses: [
              "Principles of Management",
              "Business Communication",
              "Financial Accounting",
              "Business Mathematics",
              "Business Environment",
              "Introduction to Aviation Industry",
              "SOFT CORE Professional Skills Development",
            ],
          },
          {
            key: "semester-2",
            label: "SEMESTER 2",
            image: "/MBA/first-year.jpg",
            courses: [
              "Organizational Behavior",
              "Business Statistics",
              "Cost Accounting",
              "Marketing Management",
              "Business Law",
              "Aviation Business Fundamentals",
              "SOFT CORE Leadership and Team Management",
            ],
          },
        ],
      },
      {
        key: "second-year",
        title: "Second Year",
        tabs: [
          {
            key: "semester-3",
            label: "SEMESTER 3",
            image: "/MBA/first-year.jpg",
            courses: [
              "Human Resource Management",
              "Financial Management",
              "Operations Management",
              "Business Research Methods",
              "Managerial Economics",
              "Aviation Operations Management",
              "SOFT CORE Advanced Excel and Business Tools",
            ],
          },
          {
            key: "semester-4",
            label: "SEMESTER 4",
            image: "/MBA/first-year.jpg",
            courses: [
              "Strategic Management",
              "International Business",
              "Business Analytics",
              "Corporate Governance",
              "Elective Course I",
              "Aviation Marketing and Sales",
              "SOFT CORE Industry Project and Internship",
            ],
          },
        ],
      },
      {
        key: "third-year",
        title: "Third Year",
        tabs: [
          {
            key: "semester-5",
            label: "SEMESTER 5",
            image: "/MBA/first-year.jpg",
            courses: [
              "Entrepreneurship Development",
              "Business Ethics and Sustainability",
              "Project Management",
              "Elective Course III",
              "Elective Course IV",
              "Aviation Safety and Security",
              "SOFT CORE Advanced Business Tools",
            ],
          },
          {
            key: "semester-6",
            label: "SEMESTER 6",
            image: "/MBA/first-year.jpg",
            courses: [
              "Business Strategy",
              "Global Business Environment",
              "Elective Course VI",
              "Elective Course VII",
              "Elective Course VIII",
              "Aviation Industry Project",
              "SOFT CORE Industry Internship",
            ],
          },
        ],
      },
      {
        key: "specialization-tracks",
        title: "Specialisation Tracks",
        tabs: [
          {
            key: "aviation-management",
            label: "AVIATION MANAGEMENT",
            image: "/MBA/first-year.jpg",
            courses: [
              "Airline Operations Management",
              "Airport Management",
              "Aviation Safety and Security",
              "Aviation Law and Regulations",
              "Aviation Finance and Economics",
              "Aviation Marketing and Sales",
              "Aviation Human Resource Management",
              "Aviation Technology and Innovation",
              "Aviation Customer Service",
              "Aviation Supply Chain Management",
              "SOFT CORE Aviation Software Training",
              "SOFT CORE Advanced Aviation Analytics",
            ],
          },
          {
            key: "aviation-finance",
            label: "AVIATION FINANCE",
            image: "/MBA/first-year.jpg",
            courses: [
              "Aviation Financial Management",
              "Airline Financial Analysis",
              "Aviation Investment and Risk Management",
              "Aviation Insurance and Claims",
              "Aviation Taxation",
              "Aviation Mergers and Acquisitions",
              "Aviation Financial Modeling",
              "Aviation Cost Management",
              "Aviation Revenue Management",
              "Aviation Financial Regulations",
              "SOFT CORE Aviation Financial Software",
              "SOFT CORE Advanced Financial Analytics",
            ],
          },
          {
            key: "aviation-marketing",
            label: "AVIATION MARKETING",
            image: "/MBA/first-year.jpg",
            courses: [
              "Aviation Marketing Strategy",
              "Airline Brand Management",
              "Aviation Digital Marketing",
              "Aviation Customer Relationship Management",
              "Aviation Market Research",
              "Aviation Sales Management",
              "Aviation Advertising and Promotion",
              "Aviation Pricing Strategies",
              "Aviation Distribution Channels",
              "Aviation Marketing Analytics",
              "SOFT CORE Aviation Marketing Tools",
              "SOFT CORE Advanced Marketing Analytics",
            ],
          },
          {
            key: "aviation-operations",
            label: "AVIATION OPERATIONS",
            image: "/MBA/first-year.jpg",
            courses: [
              "Airline Operations Management",
              "Airport Operations and Management",
              "Aviation Logistics and Supply Chain",
              "Aviation Quality Management",
              "Aviation Project Management",
              "Aviation Maintenance Management",
              "Aviation Fleet Management",
              "Aviation Route Planning",
              "Aviation Scheduling and Planning",
              "Aviation Operations Analytics",
              "SOFT CORE Aviation Operations Software",
              "SOFT CORE Advanced Operations Analytics",
            ],
          },
        ],
      },
    ],
  }

  const getProgramTitle = (programKey) => {
    const titles = {
      mba: "MBA Program",
      bba: "BBA Program",
      "bba-aviation": "BBA Aviation Program",
    }
    return titles[programKey] || "Program"
  }

  const getProgramDescription = (programKey) => {
    const descriptions = {
      mba: "Comprehensive two-year curriculum with specialisation options",
      bba: "Foundation program that builds strong business fundamentals and prepares students for diverse career opportunities.",
      "bba-aviation":
        "Specialized program combining business management with aviation industry knowledge for future aviation leaders.",
    }
    return descriptions[programKey] || "Program description"
  }

  const sampleCourseData = courseData[programKey] || courseData.mba

  return (
    <>
      <div className="py-8 bg-white">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="">
            <h3 className="text-[#A22877] text-2xl lg:text-3xl font-serif mb-2 ">
              <span className="italic playfair-300">
                {getProgramTitle(programKey)}
              </span>{" "}
              <br />
              <span className="text-[#0C2165] playfair-300">
                Course Structure
              </span>
            </h3>
            <p className="text-gray-600 text-base lg:text-lg mb-6">
              {getProgramDescription(programKey)}
            </p>
          </div>
        </div>
        <TabCourseStructure courseData={sampleCourseData} />
      </div>
    </>
  )
}

export default CourseStructure
