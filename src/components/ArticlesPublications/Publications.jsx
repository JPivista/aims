"use client"
import React, { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"

const Publications = () => {
  const [activeTab, setActiveTab] = useState(0)
  const [visibleCount, setVisibleCount] = useState(30)
  const [isMobile, setIsMobile] = useState(false)
  const [isClient, setIsClient] = useState(false)

  // Check if we're on the client side
  useEffect(() => {
    setIsClient(true)
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768)
    }

    // Set initial mobile state
    checkMobile()

    // Add resize listener
    window.addEventListener("resize", checkMobile)

    return () => window.removeEventListener("resize", checkMobile)
  }, [])

  // Reset visible count when switching tabs
  useEffect(() => {
    if (isClient) {
      setVisibleCount(isMobile ? 10 : 31)
    }
  }, [activeTab, isMobile, isClient])

  // Function to get the next batch size based on screen size
  const getNextBatchSize = () => {
    return isMobile ? 10 : 31
  }

  // Sample data - replace with actual data
  const tabsData = [
    {
      title: "Journal Publications",
      heading: "Journal Publications",
      points: [
        `Dr. R. Jayaprakash Reddy, A study on Financial Literacy in India, International Journal of Research and Analytical Reviews (IJRAR), Vol.9,1, ISSN- 2349 5138, 2022`,
        `Dr. R. Jayaprakash Reddy, Costing, Activity-Based Costing and Time-Driven Activity-Based Costing - AComparative and Conceptual study, International Journal of Creative Research Thoughts (IJCRT), Vol.10,1, ISSN - 2320 2882, 2022`,
        `Dr.  Haritha. M, Dr. B.M. Ramamurthy, Ravi V, An Empirical Study on Evaluation of FinTech Industry in Bengaluru, Philosophical Readings, Vol.6, S1, ISSN - 2036 4989, 2022`,
        `Dr. R. Jayaprakash Reddy, Dr. Saravana Kumar, A Study on the Present Status of Scheduled Castes and Scheduled Tribes in India, Internation Journal of All Research Education and Scientific Methods (IJARESM), Vol.10, 2, ISSN- 2455 6211, 2022`,
        `Dr. Roja Reddy, A Comparative Analysis of Teaching, Learning & Research Practices of International Vs Indian Universities experiences: A Way Forward, International journal of special education, Vol.37,3, ISSN- 0827 3383, 2022`,
        `Dr. Kiran Reddy, Mr. Priyanandan Reddy, Dr. Saravana Kumar, An Empirical Investigation on Problems in Agricultural Marketing with Special Reference to Rural Bangalore, INTERNATIONAL JOURNAL OF CREATIVE RESEARCH THOUGHTS – IJCRT, Vol.10,2, ISSN - 2320 2882, 2022`,
        `Dr. Dara Yoganand, History and culture of Ahom Community, Akshara Multidisciplinary Research Journal, Vol.5,3(B), ISSN -2582 5429, 2022`,
        `Ms. Geetha R, A Study on Impact of Pandaemic Covid-19 on Education System, Akshara Multidisciplinary Research Journal, Vol.5, 3(B), ISSN - 2582 5429, 2022`,
        `Dr. Kalpana Venugopal, Dr. Saravana Kumar, Gradutes Employability Skills and Placements - Mediating Role of Career Adaptability, International Journal of Management and Humanities, Vol.8,9, ISSN - 2394 0913, 2022`,
        `Mr. Gourav Koundal, Impact of Task Performance on Job Satisfaction of Information Technology Employees in Bengaluru City, The Review of Contemporary Scientific and Academic Studies, Vol.2,6, ISSN- 2583 1380, 2022`,
        `Dr.  Kalpana Venugopal, Predictive Role of Job Satisfaction On Organisational Citizenship Behaviour, Journal of Positive School Psychology, Vol.6,6, ISSN - 2717 7564, 2022`,
        `Dr.  Dara Yoganand, Seema par vyapar per bahu bhashaye prabhav, Bina Shodh Sangam, Vol. 10,1-2, ISSN -2321 8037, 2022`,
        `Dr. Dara Yoganand, Hind Upanyaso mei stree vimarsh, Bohal Shodh Manjusha, Vol.15,3, ISSN - 2395 7115,2022`,
        `Dr. Dara Yoganand, Premachandra Ke Hahaniye Me Dalith Chitrana, Bohal Shodh Manjusha, Vol.6(3),15, ISSN – 23957115, 2022`,
        `Ms. Ishrath Anjum, Ms.  Geetha R, A Study of Impact of Budget 2022 With Respect to Income Tax on the Tax payers of India Bangalore, Akshara Multidisciplinary Research Journal, Vol.1,6, ISSN - 2582 5429, 2022`,
        `Dr. Javad Ghalambor, Role of Platform Economy in Agricultural Sector in India, The Review of Contemporary Scientific and Academic Studies, Vol.2,8, ISSN - 2583 1380, 2022`,
        `Dr. Ramesh raj Ayer, Digital Banking: Current trends and Prospects in India, International Journal of Advance Research, Ideas and Innovations in Technology, Vol.8,2, ISSN - 2454 132x, 2022`,
        `Ms. Deepa V H, Evaluation of the Antimicrobial Effect of Raphanus Sativus  Beta Vulgaris and Allium Cepa on Pathogenic Bacteria Isolated  from Street-Side Cut Fruits, International Journal of Health Sciences  and Research, Vol.12,10, ISSN- 2249 9571, 2022`,
        `Dr. Javad Ghalambor, Performance of Mutual Funds with reference to Private Banks in India, International Journal of Scientific Development and Research (IJSDR), Vol.7,11, ISSN - 2455 2631, 2022`,
        `Dr. R Jayaprakash Reddy, Corporate Governance Theoritical Framework and Models – review, Journal of Emerging Technical Framework and Models - A review(JETIR), Vol.9,12, ISSN – 23495162, 2022`,
        `Dr. R Jayaprakash Reddy, Issues and Challenges Faced by SMEs in India: A Case for Regulating Corporate Goverenance for SMEs (unlisted) in India, Pramana Research Journal, Vol.12,12 ISSN – 2249 2976, 2022`,
        `Dr. Jayashree Nair, Iot Alert Observation of Prohibited Deforestation Regions with Drone Surveillance, Computer Integrated Manufacturing System, Vol. 28,11, ISSN - 1006 5911, 2022`,
        `Ms. Anushree Banerjee, Ms.  Sanjana C Jacob, Need for a New Marketing Blue Print for a Pandemic Induced New Normal, Turkish Online Journal of Qualitative Inquiry, Vol.12,8, ISSN- 1309 6591, 2021`,
        `Dr. Javad Ghalambor, Bankruptcy Prediction Model: A Special Focus on Indian Public Banks, Bulletin Monumental, Vol. 22, 11, ISSN - 0007 473X, 2021`,
        `Dr. Ravi. V, NEP 2020 - An Innovative Future Building Tool: Challenges and Opportunities, AIMS Journal of Research, Vol.16,2, ISSN-2321 8487, 2021`,
        `Dr. Vijay Bhaskar, A Study of Accounting Standard - 28 and International Accounting Standard - 36 (Impairment of Assets), AIMS Journal of Research, Vol.16,2, ISSN- 2321 8487, 2021`,
        `Dr. Roja Reddy, Global Competitiveness of Indian Higher Education: A Review Analysis, AIMS Journal of Research, Vol.16,2, ISSN - 2321 8487, 2021`,
        `Dr. Govindaraj Pandith, Digital Transformation, IOTs and AI Applications in Electric and Electrical Engineering Sector with respect to Industry 4.0, Vidyabharati International Interdisciplinary Research Journal, Special Issue, ISSN - 2319 4979, 2021`,
        `Mr. Chaco P J, A significant study on major aspects and insight on digital marketing with specific reference to Flipkart.com, International Journal of Advance Research and Innovative Ideas in Education (IJARIIE), Vol.7,6, ISSN- 2395 4396, 2021`,
        `Mr. Lakshminarayana.S, A Study on "Microfinance Institutions Effectiveness towards Economic Status of the Beneficiaries", Seshadipuram Journal of Social Sciences (SJSS), Vol.3,1, ISSN-2581 6748, 2021`,
        `Dr. B.A. KarunakaraReddy, Impact of Collaborative Space on User Productivity, Design Engineering, Vol.2021,9, ISSN- 0011 9342, 2021`,
        `Dr. Haritha.M, Dr. Ravi V, Dr. B.M. Ramamurthy, An empirical study on the benefits, Challenges and growth of digitalization in Banking industry, International Journal of Multidisciplinary Education Research, Vol.10,12(2), ISSN - 2277 7881, 2021`,
        `Dr. Kiran Reddy, Financial Inclusion as a tool for Sustainable Development, KALA:  The journal of Indian Art History Congress, Vol. 27,1(III), ISSN -0975 7945, 2021`,
        `Dr. Kiran Reddy, Assessing the impact and effectiveness of micro finance based self-help groups in mitigating urban poverty with reference to Bangalore city, Wesleyan Journal of Research, Vol. 14,1(IV), ISSN -0975 1386, 2021`,
        `Dr. R. Jayaprakash Reddy, Assessing the requirement of infrastructure and related capabilities to implement time-driven activity-based costing in selected Jordanian Cement Companies, GIS Science Journal, Vol. 8,2, ISSN -1869 9391, 2021`,
        `Dr. R. Jayaprakash Reddy, Comparision between existing cost system and proposed model of time-driven activity-based costing in selected Jordanian Cement companies, Pramana Research Journal, Vol. 11,2, ISSN -2249 2976, 2021`,
        `Mr. Lakshminarayana S, A Study on The Purpose of Joining Self Help Groups by Prospective Members in Rural Bengaluru, INTERNATIONAL JOURNAL OF MULTIDISCIPLINARY EDUCATIONAL RESEARCH, Vol. 10,2(1), ISSN -2277 7881, 2021`,
        `Mr. Lakshminarayana S, Impact of Covid-19 Pandemic on Self Help Groups (SHGs) and Microfinance Institutions (MFIs), International Journal of All Research Education and Scientific Methods (IJARESM), Vol. 9,7, ISSN -2455 6211, 2021`,
        `Ms. Sanjana Jacob, Impact of Customer Relation in Banking Industry in New Normal, AIMS Journal of Research, Vol. 16,1, ISSN -2321 8487, 2021`,
        `Dr. B A Karunakara Reddy, Application of Text Analytics on Leadership from Social Media Network - Twitter, AIMS Journal of Research, Vol. 16,1, ISSN -2321 8487, 2021`,
        `Dr. BM Ramamurthy, NEP 2020 - An Innovative Tool for Changing the Higher Education System, AIMS Journal of Research, Vol. 16,1, ISSN -2321 8487, 2021`,
        `Dr. HarithaM, A Study on the Impact of Pandemic on Working Women - Challenges and Issues Faced, Vidyabharati International Interdisciplinary Research Journal, Vol. Special Issue, ISSN -2319 4979, 2021`,
        `Ms. Pallavi N, Impact of COVID -19 on Green Marketing: Challenges and Adoption of Green Marketing Strategies -(A Study W.R.T. Bengaluru Urban), International Journal of Academic Research, Vol. 7, 11(2), ISSN-2348 7666, 2020`,
        `Ms. Anitha B, Impact of COVID -19 on Green Marketing: Challenges and Adoption of Green Marketing Strategies -(A Study W.R.T. Bengaluru Urban), International Journal of Academic Research, Vol. 7, 11(2), ISSN-2348 7666, 2020`,
        `Dr. Ranjitha Kumar, On Wedderburn Principal Theorem for Jordan Algebra Bundles, Taylor & Francis Online, Vol., ISSN-0092 7872, 2020`,
        `Dr. Dara Yoganand, RavindraKaliyake Katha SahityakiAlochana, AE International Journal of Multi-Disciplinary Research, Vol. 8, 3, ISSN-2348 6724, 2020`,
        `Ms. Sanjana Jacob, The Impact of Attitude, Behaviour and Emotional Intelligence on Performance, AIMS Journal of Research, Vol. 15, 1, ISSN-2321 8487, 2020`,
        `Dr. Jayaprakash Reddy R, An Insight to Financial Literacy in India - A Review of Literature, Journal of Emerging Technologies and Innovative Research, Vol. 7, 9, ISSN-2349 5162, 2020`,
        `Dr. Jayaprakash Reddy R, Source of Information and Investment Decision by Individual Investors - A Review of Literature, Journal of Emerging Technologies and Innovative Research, Vol. 7, 12, ISSN-2349 5162, 2020`,
        `Dr. Somanath V S, Factors Influencing Expected Retirement income - An Empirical Analysis, PIMT Journal of Research, Vol. 12, 2, ISSN-2278 7925, 2020`,
        `Dr. Neelima Raj Marella, Effect of the Vitamin D Receptor Polymorphism on Bone Mineral Density and Bone Metabolism, Journal of Clinical and Diagnostic Research, Vol. 14, 2, ISSN-0973 709X, 2020`,
        `Ms. Arthi R, Work-Family Conflict and Professional Commitment: Proactive Effect of Transformational Leadership, Problems and Perspectives in Management, Vol. 18, 1, ISSN-1727-7051, 2020`,
        `Dr. B A Karunakara Reddy, Lead lag relationship between commodities spot and futures market in India, Studies in Indian Place Names, Vol. 40, Special Issue 25, ISSN-2394 3114, 2020`,
        `Ms. Anushree Banerjee, Digital Marketing - A Conceptual New, AIMS Journal of Research, Vol. 15, 2, ISSN-2321 8487, 2020.`,
        `Dr. Kiran Reddy, Important e-tail aspects Influencing Consumer Decision-making Process: A Conceptual Model, Research Review International Journal of Multidisciplinary, Vol. 4, 6, ISSN-2455 3085, 2019`,
        `Dr. Kiran Reddy, Marketing of Renewable Energy: Solar Energy Users in Mysore City, Online International Interdisciplinary Research Journal, Vol. 9, Special, ISSN-2249 9598, 2019`,
        `Dr. Kiran Reddy, Solar Energy Users and Customer Satisfaction, Online International Interdisciplinary Research Journal, Vol. 9, Special, ISSN-2249 9598, 2019`,
        `Dr. Kiran Reddy, Role of AI in Electronic Retail, International Journal of Research and Analytical Reviews, Vol. 6, 2, ISSN-2348 1269, 2019`,
        `Dr. Kiran Reddy, Recruitment Process Outsourcing in information Technology Sector, IMPACT: International Journal of Research in Humanities, Arts and Literature, Vol. 7, 5, ISSN-2321 8878, 2019`,
        `Dr. Kiran Reddy, Role of Governance in Accountability of NGOs (Non-Governmental Organizations), International Journal of Advanced Scientific Research and Management, Vol. 4, 4, ISSN-2455 6378, 2019`,
        `Dr. Kiran Reddy, Importance of Accreditation in NGOs Accountability, International Journal for Research in Engineering Application &Management, Vol. 4, 12, ISSN-2454 9150, 2019`,
        `Ms. Madhuri U, MVA: A Business Valuation model for Sustainable Growth, with Reference to NIFTY top 10 IT Companies, India. An Empirical Study, Think India (Quarterly Journal), Vol. 22, 4, ISSN-0971 1260, 2019`,
        `Mr. Bhaskar Sailesh, Climate Influenced Travel Decisions among Hospitality Students, COMPASS: Peer Reviewed Journal of Dept. Of Tourism School of Professional Studies, Vol. 2, 1, ISSN-2394 0646, 2019`,
        `Mr. Bhaskar Sailesh, Millennials in Travel Industry, RIPPLES, Vol. 8, 1, ISSN-2229 6794, 2019`,
        `Mr. Bhaskar Sailesh, Chatbots in Tourism Industry, RIPPLES, Vol. 8, 1, ISSN-2229 6794, 2019`,
        `Mr. Venkatesh Kattimani, Managing Electronic Resources in the Modern Libraries: An Overview, Online International Interdisciplinary Research Journal, Vol. 9, 1, ISSN-2249 9598, 2019`,
        `Dr. Somanath V S, Assessment of Pension funds with Respect to Countries and Types of Plan - An International Perspective, Journal of Emerging Technologies and Innovative Research, Vol. 6, 6, ISSN-2349 5162, 2019`,
        `Dr. Somanath V S, Fringe Benefits and Employee Performance - A Perspective Analysis of Employees Working in Public Sector Companies in India, International Journal of Research and Analytical Reviews, Vol. 6, 2, ISSN-2349 5138, 2019`,
        `Dr. Somanath V S, A Study on Social Entrepreneurship in India, European Journal of Business & Social Sciences, Vol. 7, 4, ISSN-2235 767X, 2019`,
        `Dr. Somanath V S, Risk Management Challenges of Remotely Created Cheques in the Indian Banking System, International Journal of Research and Analytical Reviews, Vol. 6, 1, ISSN-2348 1269, 2019`,
        `Ms. Geethanjali G, Opportunities and Challenges with Industry 4.0 - A Conceptual Framework, International Journal of Advance and Innovative Research, Vol. 6, 2, ISSN-2394 7780, 2019`,
        `Ms. Anushree Banerjee, Business Analytics in Manufacturing Industry with Special Reference to Xiaomi, International Journal of Advance and Innovative Research, Vol. 6, 2, ISSN-2394 7780, 2019`,
        `Ms. Varshini S, Literature - Collaborative Learning, Bodhi International Journal of Research in Humanities, Arts and Science, Vol. 3, Special, ISSN-2456 5571, 2019`,
        `Dr. Basappa Y Bangari, Modern Electronic Gadgets and Advancement of ICT are Increasing Opportunities for Lifelong Learning with Special Emphasis on English Language, AIMS Journal of Research, Vol. 14, 1, ISSN-2321 8487, 2019`,
        `Dr. Siddaiah T, Changing Landscape of Education in Response to Technological Advances, AIMS Journal of Research, Vol. 14, 1, ISSN-2321 8487, 2019`,
        `Ms. Pallavi M O, Sparx - Data Processing Module, 5th international Conference for Convergence in Technology, ISBN-9781538680759, 2019`,
        `Mr. Manjunatha K S, Bibliometric Analysis of Annals of Library and Information Studies, 9th KSCLA National Conference on Library in the Life of User, ISBN-9789381979327, 2019`,
        `Dr. Jayaprakash Reddy R, The Domains of Startup Ecosystem: Is the Focal Point, The Customer or The Idea, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019`,
        `Dr. Jayaprakash Reddy R, A Study on Prospects and Challenges of MSMEs in India, International Journal of Research and Analytical Reviews, Vol. 6, 1, ISSN-2348 1269, 2019`,
        `Dr. Hemanth K S, A New Approach to Automate the Traffic Signal Lights using Deep Learning, International Journal of Research in Electronics and Computer Engineering, Vol. 7, 1, ISSN-2348 2281, 2019`,
        `Dr. Hemanth K S, Hydroponic Farming using Leafy Green Machines for Agriculture by Applying Deep Learning Methods, International Journal of Research in Electronics and Computer Engineering, Vol. 7, 1, ISSN-2348 2281, 2019`,
        `Ms. Pallavi M, A Study on the Impact of E-Tailing: A Paradigm Shift to Supply Chain Management Towards Customer Satisfaction, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019`,
        `Mr. Sandesh Ramakanth Bhat, Effect of Dollar Price on Crude Oil Price Fluctuation with Reference to India, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019`,
        `Ms. Sanjana Jacob, Smart Parking in Smart City, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019`,
        `Ms. Bindu Narayan V, Entrepreneurship and Sustainable Development: A Study on Sustainable Development a New Paradigm among Entrepreneurs and Restraints of Sustainopreneurs, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019`,
        `Dr. Karunakara Reddy, Relationship between agriculture commodities futures prices and spot market prices in India, International Journal of Research in Engineering Application & Management, Special, ISSN-2454 9150, 2019`,
        `Dr. Karunakara Reddy B A, Research Paper on Education and Sustainable Development in Yemen, Online International Interdisciplinary Research Journal, Vol. 9, 1, ISSN-2249 9598, 2019`,
        `Mr. Ravi V, Employee's View on Job Satisfaction: A Study on Garments Industry in Bangalore, International Journal of Recent Technology and Engineering, Vol. 7, 5S, ISSN-2277 3878, 2019`,
        `Mr. Lakshminarayana S, A School work on Whistle blowing policies and Performance of Ujjivan Small Finance Bank, International Journal of Research and Analytical Reviews, Vol. 6, 1, ISSN-2348 1269, 2019`,
        `Mr. Lakshminarayana S, A Study on need & Awareness Levels of Health Insurance among Lecturers in Bangalore North, 3rd Annual Convention of ICBE and International Conference, ISBN-9781513605951, 2019`,
        `Mr. Chaco P J, An Insight on Digital Marketing with Specific Reference to Flipkart.com, 3rd Annual Convention of ICBE and International Conference, ISBN-9781513605951, 2019`,
        `Mr. Saurabh Srivastava, The Effectiveness of Social Media Marketing on Consumer Behavior of Smart Phone Buyer's with Reference to Age Group 18 Years to 30 Years, Review of Research, ISSN-2249 894X, 2019`,
        `Ms. Rituparna Chakraborty, be(com)ing a Woman: Body, Authority and Society, Psychology and Developing Societies, Vol. 31, 2, ISSN-0971 3336, 2019`,
        `Ms. Lakshmi J V N, Optimizing Quality and Outputs by Improving Variable Rate Prescriptions in Agriculture using UAVs, Procedia Computer Science: International Conference on Computational Intelligence and Data Science, ISSN-1877 0509, 2019`,
        `Mr. Basavaraja K P, BendreKavanagalalliSaamaajikaPragne, National Conference on D R BendreBaduku and Baraha, ISBN-9788193841587, 2019`,
        `Dr. Brahm Sharma, Wash Right Limited, Journal of Emerging Technologies and Innovative Research, Vol. 5, 12, ISSN-2349 5162, 2018`,
        `Mr. Ravi V, Problems faced by Garment Workers in Bengaluru - A Study, International Journal of Research in Engineering, Science and Management, Vol. 1, 12, ISSN-2581 5792, 2018`,
        `Dr. Jayaprakash Reddy R, Influence of Knowledge on Intellectual Capital, Benefits and Challenges to be faced at the Time of Managing Intellectual Capital - A Study W R T Bengaluru, Online International Interdisciplinary Research Journal, Vol. 8, Special, ISSN-2249 9598, 2018`,
        `Dr. Jayaprakash Reddy R, Intellectual Capital Drivers Affecting Business Profit Performance and Future value creation - A Study W R T Software and Pharmaceutical Companies IT, Bengaluru, Online International Interdisciplinary Research Journal, Vol. 8, Special, ISSN-2249 9598, 2018`,
        `Dr.Jayaprakash Reddy R, Impact of Challenges faced by Micro, Small and Medium Enterprises Challenges on its decline - A Special Reference to Peenya Industrial Area, Bangalore, International Journal of Research in Social Sciences, Vol. 8, 9(1), ISSN-2249 2496, 2018`,
        `Dr.Jayaprakash Reddy R, Online Shopping - Its Growth and Status in India, International Journal of Engineering and Management Research, Vol. 8, 3, ISSN-2250 0758, 2018`,
        `Dr. Jayaprakash Reddy R, Contribution and Survival of SMES in India and Thailand, The 7th International Conference on Advancement of Development Administration 2018 - Social Sciences and Interdisciplinary Studies, ISBN-9786164820074, 2018`,
        `Mr. Subramanyam Upadhyay, Modelling and Simulation of a Moving Boundary Problem Arising During Immersion Frying of Foods, Natl. Acad. Sci. Lett. (Springer), ISSN-0250 541X, 2018`,
        `Dr. Jayashree Nair, Semi Fragile Watermarking for Content based Image Authentication and Recovery in the DWT-DCT Domains, The International Arab Journal of Information Technology, Vol. 15, 6, ISSN-1683 3198, 2018`,
        `Ms. Pallavi N, A Study on Impact of Digitalization of Service Sector - Banking in Indian Economy, International Journal of Scientific Research and Review, Vol. 7, 13, ISSN-2279 543X, 2018`,
        `Mr. Lakshminarayana S, An Empirical Study on Problems Faced by the Farmers in Agri-Storage Facilities with Special Reference to Rural Bangalore, EPRA International Journal of Economic and Business Review, Vol. 6, 8, ISSN-2349 0187, 2018`,
        `Dr. Bhaskar Sailesh, Role of Tourism Sector in Conservation of Coral Reef Ecosystems, Proceedings of ARSSS International Conference, ISSN-2229 5518, 2018`,
        `Dr. Bhaskar Sailesh, Role of Tourism Stakeholders in Conservation of Coral Reef Ecosystems, International Journal of Scientific & Engineering Research, Vol. 9, 7, ISSN-2229 5518, 2018`,
        `Dr. Kiran Reddy, Emerging Face of E-tailing: Online food delivery, International Journal of Advace Research, ideas and Innovations in Technology, Vol. 4, 6, ISSN-2454 132X, 2018`,
        `Dr. Kiran Reddy, VolatalitySpillover in Indian Spot - Future Aluminium Market, Research Directions, Vol. 5, 11, ISSN-2321 5486, 2018`,
        `Dr. Kiran Reddy, Causality in Indian Spot - Futures Commodity Market, Review of Research, Vol. 7, 8, ISSN-2249 894X, 2018`,
        `Dr. Karunakara Reddy B A, Tourism Planning - A tool for Sustainability of Tourism Destinations, International Conference on Augmenting Tourism Infrastructure, Assurance of Quality Standards in Tourist Services and Opportunities in the Context of Sustainable Tourism in India, 2018`,
        `Dr. Karunakara Reddy B A, A Study on Indian Commodity Market with Special reference to Commodity Exchange, International Journal of Research Science & Management, Vol. 5, 6, ISSN-234 5197, 2018`,
        `Dr. Karunakara Reddy B A, Impact of Balanced Score Card on the Competitive Advantage in the Jordanian Telecommunication, International Journal for Research in Applied Science & Engineering Technology, Vol. 6, 4, ISSN-2321 9653, 2018`,
        `Dr. Karunakara Reddy B A, Impact of Activity-based costing (ABC) on Competitive Advantage in the Jordanian Telecommunication, International Journal for Research in Applied Science & Engineering Technology, Vol. 6, 4, ISSN-2321 9653, 2018`,
        `Dr. Karunaara Reddy B A, Ecotourism in Yemen, The International Manager, Vol. 5, 17, ISSN-2348 9413, 2018`,
        `Dr. Karunakara Reddy B A, Impact of Applying Six Sigma Systems to Measure Quality for the Competitive Advantage in the Jordanian Telecommunications, International Journal of Science and Economic Research, Vol. 3, 10, ISSN-2455 8834, 2018`,
        `Dr. Somanath V S, Fringe Benefits and Employee Performance - A Perceptive analysis of Employees working in Private Sector Companies in India, International Journal of Research and Analytical Reviews, Vol. 5, 2, ISSN-2348 1269, 2018`,
        `Mr. Sandesh Bhat, Smart Education for Smart India, IJEMR, Special, ISSN-2249 2585, 2018`,
        `Dr. Subramanyam T, Efficiency and Risk Management in Indian Banks: A Method to Decompose the Risk, International Journal of Advances in Management and Economics, Vol. 7, 2, ISSN-2278 3369, 2018`,
        `Dr. Vijay Bhasker V, Implementation of GST and its impact on Automobile Dealers, AIMS Journal of Research, Vol. 13, 1, ISSN-2321 8487, 2018`,
        `Mr. Arijit Roy, A Model to Integrate Internet based Platforms in Class Rooms for Modern Management Education, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018`,
        `Dr. Rama Murthy B M, Millennials Concern Toward Green Business, Journal of Advance Management Research, Vol. 6, 4, ISSN-2393 9664, 2018`,
        `Dr. Rama Murthy B M, FDI and Its Collision on Retail Zone within India: Issues and Challenges, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018`,
        `Ms. Eti Khatri, Investors Preference towards Mutual Funds, Shanlax International Journal of Arts, Science and Humanities, Vol. 5, 6, ISSN-2321 788X, 2018`,
        `Ms. Vandana Bhagat, Impact of Data Storage Trends on Query Execution, International Journal of Research in Computer Applications and Robotics, Vol. 6, 2, ISSN-2320 7345, 2018`,
        `Dr. Lakshmi J V N, Comparative Analysis on a Predictive Model using tree based Machine Learning Techniques for Big Data Analytics, i-manager's Journal on Information Technology, Vol. 7, 2, ISSN-2277 5110, 2018`,
        `Dr. Lakshmi J V N, A Review on Developing Tech-Agriculture using Deep Learning Methods by Applying UAVs, International Journal of Scientific Research in Computer Science, Engineering and Information Technology, Vol. 3, 1, ISSN-2456 3307, 2018`,
        `Dr. Lakshmi J V N, A Review on Impact of Deep Learning and TensorFlow in medical Image Processing, Grenze International Journal of Engineering and technology, Special, ISSN-2395 5287, 2018`,
        `Mr. Basavaraja K P, UnnataShikshanadalli Kannada, Current Problems of Karnataka and Kannada Langauage: A Review, ISBN-9788192068176, 2018`,
        `Mr. Basavaraja K P, VachanaSahityadalliKaayaka – DasohaParikalpane, Saamaajika Nyaya, National Conference on VachanaSahitya: BahumukhiAdhyayanadaNelegalu, ISBN-9788193344729, 2018`,
        `Ms. Anushree Banerjee, Best Practices in Managing Human Capital, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018`,
        `Ms. Anushree Banerjee, Understanding the Scope of Artificial Intelligence and Change in Leadership Goals - A Theoretical Perspective, International Journal of Arts Science and Humanities, Vol. 6, 1, ISSN-2321 788X, 2018`,
        `Ms. Sanjana Jacob, Impact of Digital Marketing Towards Customer Loyality, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018`,
        `Dr. Ranjitha Kumar, On Derivation Algebra Bundle of and Algebra Bundle, Proceedings of the Jangjeon Mathematical Society, Vol. 21, ISSN-1598 7264, 2018`,
        `Dr. Basappa Y Bangari, Girish Karnad's Play Taledandaia s fine Example for Subaltern Literature, International Journal of Research Culture Society, Vol. 2, 2, ISSN-2456 6683, 2018`,
        `Dr. Basappa Y Bangari, Morality and Virtue based Leadership and Marketing would gain Consumers Confidence in the Current Global Competition, IJEMR, Special, ISSN-2249 2585, 2018`,
        `Dr. Basappa Y Bangari, Few Observations on Quality of Management and Demand for Management Education in Digital Era, IJEMR, Special, ISSN-2249 2585, 2018`,
        `Dr. Basappa Y Bangari, Few Observations on Present Education System and Roots of Public Intellectuals in India, AIMS Journal of Research, Vol. 13, 2, ISSN-2321 8487, 2018`,
        `Dr. Basappa Y Bangari, T S Eliot's Thoughts in his Writings Are Clear Mirror of Modern Life, International Journal of Research Culture Society, Vol. 2, 1, ISSN-2456 6683, 2018`,
        `Dr. Basappa Y Bangari, Khushwant Singh's Train to Pakistan Depicted Tracks of Multicultural Milliu, International Journal of Research Culture Society, Vol. 2, 1, ISSN-2456 6683, 2018`,
        `Dr. Basappa Y Bangari, Semiotic Observations of Language, Advertisements and Human Culture, Bodhi International Journal of Multidisciplinary Researches, Vol. 2, 8, ISSN-2456 5571, 2018`,
        `Dr. Basappa Y Bangari, Marketing Possibilities of Traditional and Ethnic Products Via Digital Media, International Journal of Research Culture Society, Vol. 2, 3, ISSN-2456 6683, 2018`,
        `Dr. Kiran Reddy, Role of Non-Governmental Organisations to Empower the Women and Development of Children through Karnataka Governments Programmes, International Journal of Advance Engineering and Research Development, Vol. 4, 7, ISSN-2348 6406, 2017`,
        `Dr. Kiran Reddy, Efficacy of Recruitment Process Outsourcing, Emperor International of Finance and Management Research, Vol. 3, 12, ISSN-2395 5929, 2017`,
        `Dr. Kiran Reddy, Impact of Celebrity Endorsement on Online Shopping Behaviour, International Journal of B-Digest, Vol. 8, 3, ISSN-0975 2617, 2017`,
        `Dr. Karunakara Reddy B A, Local Community Attitude towards Tourism Impacts in Yemen - A Study on IBB Province, EPRA International Journal of Economic and Business Review, Vol. 5, 12, ISSN-2347 9671, 2017`,
        `Dr. Karunakara Reddy B A, Impact of Balanced Score Card on the Competitive Advantage in the Jordanian Telecommunication, Research Journal of Finance and Accounting, Vol. 8, 18, ISSN-2222 1697, 2017`,
        `Dr. Karunakara Reddy B A, Impact of Activity-based Costing (ABC) on Competitive Advantage in the Jordanian Telecommunication, Research Journal of Finance and Accounting, Vol. 8, 20, ISSN-2222 1697, 2017`,
        `Dr. Karunakara Reddy B A, Sustainable Development and Population Growth in Yemen: A Study on IBB Province, EPRA International Journal of Research and Development, Vol. 2, 11, ISSN-2455 7838, 2017`,
        `Dr. Somanath V S, Green Finance: Contemporary Issues and Challenges for Economic Sustainability in Indian Green Growth, Research Revolution: International Journal of Social Science &Management, Vol. 6, 1, ISSN-2319 300X, 2017`,
        `Mr. Lakshminarayana S, GST - A New Facilift for Indirect Taxation System of India, EPRA International Journal of Economic and Business Review, Vol. 5, 11, ISSN-2347 9671, 2017`,
        `Ms. Anushree Banerjee, Payment Gateways with Special Reference to Paytm, Journal of Exclusive Management Science, Vol. 6, 1, ISSN-2277 5684, 2017`,
        `Dr. Rama Murthy B M, A Study of Investor's Awareness and Selection of Different Financial Investment Avenues for the Investor in Bangalore City, International Journal of Research in Management & Social Science, Vol. 5, 4, ISSN-2322 0899, 2017`,
        `Mr. Ramesh Raj Ayer, Adaptation of E-Commerce Channel by MSME in India, International Journal of Business and General Management, Vol. 6, 6, ISSN-2319 2267, 2017`,
        `Dr. Neelima Raj Marella, Impact of Severity of Illness on the Function of the Hypothalamo-Pituitary-gonadal Axis in Postmenopausal Women with Acute Severe Illness: Implications for Predicting Disease Outcome, Indian Journal of Endocrinology and Metabolism, Vol. 21, 5, ISSN-2230 8210, 2017`,
        `Dr. Neelima Raj Marella, Prevalence of Thyroid Autoimmunity in Type 1 Diabetes Mellitus: Thyroid Autoimmunity in Type 1 Diabetes, Thyroid Research practice, ISSN-0973 0354, 2017`,
        `Dr. Basappa Y Bangari, Folk and Tribal Foods: Possibilities of Marketing and Patent Issues, International Journal of Research Culture Society, Vol. 1, 7, ISSN-2456 6683, 2017`,
        `Dr. Basappa Y Bangari, Quilt Production and Marketing Strategies in Urban Sectors, International Journal of Research Culture Society, Vol. 1, 7, ISSN-2456 6683, 2017`,
        `Dr. Basappa Y Bangari, Cultural Tourism: Possibilities and Problems in India, International Journal of Research Culture Society, Vol. 1, 10, ISSN-2456 6683, 2017`,
        `Ms. Pallavi N, A Study on Consumer Relational mode of Shopping at Shopper's Stop, IJEMR, Vol. 7, 5, ISSN-2249 8672, 2017`,
        `Mr. Atul Kumar Pandey, PraacheentakeSthar par Bharatiya Samskrutiki Visheshata aur Uska Vaishik Prasar, Hindi Anatarashtriya Sanghoshti, ISSN-935268630-6, 2017`,
        `Mr. Atul Kumar Pandey, Sthree Purush Sambandhoke Banthe Bigadte Roopaur Satottari Natak, National Conference Prayas 2017, ISBN-9788191074840, 2017`,
        `Ms. Anitha B, Role of Non-Governmental Organisations to Empower the Women in Karnataka, International Journal of Academic Research, Vol. 4, 2, ISSN-2348 7666, 2017`,
        `Dr. Govindaraj Pandith T G, Mutually Nearest Vertex Clusters for Solving TSP, International Journal of Computer Applications, Vol. 169, 6, ISSN-0975 8887, 2017`,
        `Dr. Subramanyam T, Is the Working environment matter in assessing the Performance of Public and Private Sector Banks of India? - an Application of Data Envelopment Analysis, International Journal of Computer & Mathematical Sciences, Vol. 6, 6, ISSN-2347 8527, 2017`,
        `Dr. Lakshmi J V N, A Big Data Analytical Approach for Analyzing Temperature Dataset using Machine Learning Techniques, International Journal of Scientific Research in Computer Science and Engineering, Vol. 5, 3, ISSN-2320 7639, 2017`,
        `Dr. Lakshmi J V N, Hadoop Spark Framework for Machine Learning using Python, International Journal of Scientific & Engineering Research, Vol. 8, 5, ISSN-2229 5518, 2017`,
        `Dr. Lakshmi J V N, An Insight to Tree Based Machine Learning Techniques for Big Data Analytics Using Apache Spark, IEEE International Conference on Intelligent Computing, Instrumentation and Control Technologies, ISBN-9781509061068, 2017`,
        `Ms. Uma Devi T, Is HR Audit a Diagnostic tool for Improvement? - A Study, Internatinal Journal of Research in Applied Management Science &Technology, Vol. 2, 2, ISSN-2455 7331, 2017`,
        `Dr. Siddaiah T, Cluster of Optimal Chains of All-Pairs Shortest Paths to Deduce Minimum Cost Tour, International Journal of Advanced Research in Computer Science, Vol. 8, 3, ISSN-0976 5697, 2017`,
        `Dr. Hemanth K S, Predictive Model for Meterial Behaviour Prediction, International Journal of Advanced Research in Computer Science, Vol. 8, 3, ISSN-0976 5697, 2017`,
        `Dr. Jayaprakash Reddy R, Role of Government Schemes and Programmes in the Growth of MSMEs, International Journal of Finance Research Review, Vol. 5, 7, ISSN-2321 0354, 2017`,
        `Dr. Jayaprakash Reddy R, The Need for a Permanent Definition of MSMEs in India, International Journal in Management and Social Science, Vol. 5, 2, ISSN-2321 1784, 2017`,
        `Dr. Jayaprakash Reddy R, Use of ICT in Indian MSMEs, International Journal in Commerce, IT & Social Sciences, Vol. 4, 2, ISSN-2394 5702, 2017`,
        `Dr. Govindaraj Pandith T G, Multidimensional Scaling and Visualization of Similarities to Solve TSP, International Journal of Multidisciplinary Research Centre, Vol. 3, 2, ISSN-2454 3659, 2017`,
        `Ms. Rituparna Chakraborty, Predicament of Contemporary Women: Convergence of Inner and Outer Space, Reaching the Unreached Through Science and Technology, ISBN-9788193190715, 2017`,
        `Dr. Jayashree Nair, Diophantine Equations for Enhanced Security in Watermarking Scheme for Image Authentication, Advanced Image Processing Techniques and Applications, ISBN-9781522520535, 2017`,
        `Ms. Jyothirmayee R, Measurement of Employability Skills and Job Readiness Perception of Post - Graduate Management Students: Results from a Pilot Study, International Journal in Management and Social Science, Vol. 5, 8, ISSN-2321 1784, 2017`,
        `Ms. Anuradha B S, LEAN - An Enabler in Managing Workforce Effectively, 5th International Conference on Managing Human Resources at the Workplace, ISBN-9789383302192, 2016`,
        `Ms. Sanjana Jacob, Emerging Trends in Human Resource Management, International Conference on Recent Developments Emerging Trends in Management Research & Information Science, ISBN-9789385640834, 2016`,
        `Ms. Vedavathi M, A Study of Issues & Challenges of Implementation of Information Technology in HRM, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016`,
        `Ms. Vedavathi M, Impact of Stress on Employees Working in IT, Manufacturing and Service Industries in Bengaluru Urban: A Study, International Joournal of Information Technology and Computer Sciences Perspectives, Vol. 5, 3, ISSN-2319 9016, 2016`,
        `Dr. Jayashree Nair, The Analysis of PQ Sequences Generated from Continued Fractions for Use as Pseudorandom Sequences in Cryptographic Applications,Springer, ISBN-978-81-322-2654-3, 2016`,
        `Dr. Jayashree Nair, Performace Analysis of a Novel Image Content Authentication Scheme using multiple Watermarks in Dual Domains, Adarsh Journal of Information Technology, Vol. 5, 2, ISSN-2320 0340, 2016`,
        `Dr. Jayaprakash Reddy R, Reforms in Indian Banking Sector during the Pre & Post - Reforms Period - An Analysis, International Journal of Business and Administration Research Review, Vol. 2, 1, ISSN-2347 856X, 2016`,
        `Dr. Jayaprakash Reddy R, Growth and Development of Micro, Small and Medium enterprises in Karnataka, International Journal of Commerce and Management Research, Vol. 2, 8, ISSN-2453 1627, 2016`,
        `Dr. Jayaprakash Reddy R, Impact of Basel Norm in Indian Banking Sector During the Post-Reforms Period - A Review, International Journal of Marketing and Technology, Vol. 6, 6, ISSN-2249 1058, 2016`,
        `Dr. Karunakara Reddy B A, Emerging Trends in Green Marketing, International Conference on Recent Developments Emerging Trends in Management Research & Information Science, ISBN-9789385640834, 2016`,
        `Dr. Karunakara Reddy B A, Buying Styles of Two wheelers at Bengaluru: A Study, International Journal of Logistics and Supply Chain Management Perspectives, Vol. 5, 3, ISSN-2319 9032, 2016`,
        `Dr. Karunakara Reddy B A, Recent Trends in HRM, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016`,
        `Dr. Karunakara Reddy B A, Recent Trends in Human Resource Manager to Sustain Global Competition, Vanijya Sammelana - 2016, ISBN-9781944820145, 2016`,
        `Ms. Mamatha R, Remedies for Breach of Alien Rights under International Law - A Critical Appraisal, Advances in Colloborative Research, ISBN-9781535287715, 2016`,
        `Dr. Subramanyam T, Selection of Input - Output Variables in Data Envelopment Analysis - Indian Commercial Banks, International Journal of Computer & Mathematical Sciences, Vol. 5, 6, ISSN-2347 8527, 2016`,
        `Mr. Mahantesh B, Numerical Solutions for magnetohydrodynamic Flow of nanofluid over a Bidirectional non-linear stretching Surface with prescribed surface heat flux boundary, Journal of Magnetism and Magnetic Materials, ISSN-0304-8853, 2016`,
        `Ms. Pallavi N, Neuro Marketing - Shoppers Buy Button, Primax International Journal of Marketing, Vol. 4, 1, ISSN-2348 0491, 2016`,
        `Ms. Pallavi N, Human Resource Management - The Emerging Trends - A Study on Performance Management Through Case Study Analysis, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016`,
        `Ms. Pallavi N, HR Analytics - Descriptive to Predictive, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016`,
        `Ms. Vandana Bhagat, Roll of Relational Algebra and Query Optimizer in Different Types of DBMS, International Journal of Computer Science and Mobile Computing, Vol. 5, 3, ISSN-2320 088X, 2016`,
        `Mr. Manjunatha K S, Google Apps for Librarians, Innovative Practices in Libraries, ISBN-9789382694304, 2016`,
        `Mr. Manjunatha K S, An Overview of Open Courseware Initiatives in India, Knowledge Librarian, Vol. 3, 1, ISSN-2394 2479, 2016`,
        `Mr. Manjunatha K S, Users Perception Towards Diigital Library Resources and Services: A Case Study of Bangalore University, Karnataka, International Conference on Re-Engineering of Library Resources and Services: Challenges and Opportunities, ISBN-9788190880497, 2016`,
        `Mr. Guravaiah P, Entrepreneurship - Indian Scenario, Global Journal for Research Analysis, Vol. 5, 2, ISSN-2277 8160, 2016`,
        `Mr. Parveen A H, Use of Tpack Framework Model in English Language Teaching, The Global Journal of English Studies, Vol. 2, 1, ISSN-2395 4795, 2016`,
        `Ms. Jyothirmayee R, Educated Women as Transformation Agents of Society, National Conference on Higher Education of Women in India - Opportunities and Challenges, 2016`,
        `Ms. Tenzin Tsekyi, Tibetans in Karnataka: An Empirical Study, Journal of Media and Social Development, Vol. 4, 1, ISSN-2320 8244, 2016`,
        `Mr. Venkatesh S K, A Study on Rising trend of Digitization in Libraries, International Journal of Library and Information Studies, Vol. 6, 1, ISSN-2231 4911, 2016`,
        `Dr. Somanath V S, Management of Intangible Asset, Southern Economist, Vol. 54, 18, ISSN-0038 4046, 2016`,
        `Dr. Somanath V S, Green Human Resource Management: Corporate Strategy and its Implications, International Journal of Social Science &Management, Vol. 4, 8, ISSN-2319 300X, 2016`,
        `Dr. Lakshmi J V N, Machine Learning Techniques using Python for Data Analysis in Performance Evaluation, International Conference on Innovative Systems, 2016`,
        `Dr. Lakshmi J V N, Improving the Map and Shuffle Phases in Hadoop MapReduce, Smart Computing and Informatics: Proceedings of the First International Conference on SCI 2016, ISBN-9789811055430, 2016`,
        `Dr. Lakshmi J V N, Stochastic Gradient Descent using Linear Regression with Python, International Journal of Advanced Engineering Research and Applications, Vol. 2, 8, ISSN-2454 2377, 2016`,
        `Dr. Shivaprasad N S, An Empirical Study on the Institutional Social and Material Environment Impact on Physical Education in B-Schools, International Journal of Physical Education, Sports and Health, Vol. 3, 3, ISSN-2391 1685, 2016`,
        `Dr. Shivaprasad N S, Modern Lifestyle and its Impact on Well-being of B-School Students: A Case Study of AIMS, Bangalore, International Journal of Physical Education, Sports and Health, Vol. 3, 2, ISSN-2391 1685, 2016`,
        `Dr. Brahm Sharma, Solid Waste Management Process for Sustainable Development, Sustainable Business Development: Strategies and Initiatives, ISBN-9788180943201, 2016`,
        `Ms. Kalpana Jayakrishnan, Organizational Citizenship Behavior (OCB): A Comprehensive Literature Review, SUMEDHA Journal of Management, Vol. 5, 1, ISSN-2277-6753, 2016.`,
        `Mr. Ravi V, A Study of Consciousness of E-Banking in India, International Conference on Strategies for Business Excellence, Challenges and Opportunities, ISBN-9789383038299, 2015`,
        `Ms. Jayashree Nair, Secure Watermarking Diophantine Equations for Authentication and Recovery, Journal of Network and Information Security, Vol. 3, 2, ISSN-2321 6859, 2015`,
        `Ms. Jayashree Nair, ParQuoSCI: Pseudorandom Partial Quotient Sequences for Content based Image Authentication, BonfringInterntional Journal of Advances in Image Processing, Vol. 5, 2, ISSN-2277 503X, 2015`,
        `Ms. Jayashree Nair, Recognizing Image Authenticity using DCT based Watermarking, International Journal of Computer Applications, ISSN-0975 8887, 2015`,
        `Ms. Lakshmi J V N, A Comparative Analysis on Machine Learning Algorithms Implemented on Map Reduce Paradigm, International Journal of Data Mining and Emerging Technologies, Vol. 5, 1, 2015`,
        `Dr. Lakshmi J V N, Improving the Map Phase in Hadoop Map Reduce, International Conference on Signal Processing, Control and Data Analytics, ISBN-9789811055447, 2015`,
        `Dr. Lakshmi J V N, A Study of Machine Learning Algorithm on Map Reduce for Improving Performance, International Conference on Innovations in Contemporary IT Research, ISBN-9789381899038. 2015`,
        `Dr. Lakshmi J V N, An Analysis on Efficient Column based Storage Structures in Big Data Analytics, International Journal of Computer Science Engineering, Vol. 4, 1, ISSN-2319 7323, 2015`,
        `Dr. Lakshmi J V N, A Theoretical Model for Big Data Analytics using Machine Learning Algorithms, ISBN-9781450333610, 2015`,
        `Dr. Lakshmi J V N, Machine Learning Approaches on Map Reduce for Big Data Analytics, International Conference on Green Computing and Internet of Things, 2015`,
        `Dr. Lakshmi J V N, Comparison of Machine Learning Algorithm on Map Reduction for Performance Improvement in Big Data, Indian Journal of Science and Technology, Vol. 8, 29, ISSN-0974 6846, 2015`,
        `Ms. Pallavi N, Role of CSR in SB Activities and Creation of Swatch Bharat Awareness and Role of Media, The Paradigm Annual Journal, Vol. 4, ISSN-2249 2534, 2015`,
        `Mr. Mahantesh B, Effects of Diffusion-Thermo and Thermo-Diffusion on two-phase boundary layer flow past a stretching sheet with fluid-particle suspension and Chemical Reaction: A Numerical Study, Journal of Nigerian Mathematical Society, ISSN-0189 8965, 2015`,
        `Mr. Mahantesh B, Melting Heat Transfer in Boundary Layer Stagnition-Point flow of Nanofield toward a Stretching sheet with Induced Magnetic field, Engineering Science and Technology and International Journal, Elsevier, ISSN-2215 0986, 2015`,
        `Mr. Mahantesh B, Numerical Solution for Hydromagnetic Boundary Layer Flow and Heat Transfer past a Stretching Surface embedded in Non-Darcy Porous Medium with Fluid-Particle Suspension, Journal of Nigerian Mathematical Society, ScienceDirect, ISSN-0304-8853, 2015`,
        `Mr. Mahantesh B, Thermal Radiation and Hall Effects on Boundary Layer flow past a non-isothermal stretching surface embedded in porous medium with non-uniform sources/sink and fluid-particle suspension,Springer, ISSN-0947 7411, 2015`,
        `Mr. Mahantesh B, Effect of Suspended Nanoparticles on Three-Dimensional MHD Flow, Heat and Mass Transfer of Radiating Eyring-Powell Fluid Over a Stretching Sheet, Journal of Nanofluids, Vol. 4, ISSN-2169 432X, 2015`,
        `Mr. Mahantesh B, Effects of nonlinear thermal radiation on hydromagneticupperconvected Maxwell fluid flow due to a convectively heated stretching sheet with fluid-particle suspension, Communication in Numerical Analysis, Vol. 2015, 2, 2015`,
        `Dr. Karunakara Reddy B A, Consumers Buying Behaviour towards Online Shopping - A Case Study of Snapdeal.com Users in Bangalore City, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015`,
        `Dr. Karunakara Reddy B A, Role of Corporate Social Responsibility in Developing Business and Society: A Study at Bengaluru, International Journal of Trade & Global Business Perspectives, Vol. 4, 4, ISSN-2319 9059, 2015`,
        `Dr. Karunakara Reddy B A, Role of Skill Based Learning for the Growth of Higher Education, International Conference on Higher Education - A Vision for Higher Education - 2030, ISBN-9789352028818, 2015`,
        `Dr. Karunakara Reddy B A, Talent Management, Work Life Balance and Retention Strategies, AIMS Journal of Research, Vol. 10, 1, ISSN-2321 8487, 2015`,
        `Mr. Lakshminarayana S, A School Work on Accelerating the Pace of Rural Development of Through microfinance in India, EPRA International Journal of Economic and Business Review, Vol. 3, 5, ISSN-2347 9671, 2015`,
        `Mr. Lakshminarayana S, Green Marketing Strategies: A Way Out for Better Life, International Conference on Innovative Marketing Strategies for Sustainable Growth Issues and Challenges, ISBN-9789385477140, 2015`,
        `Ms. Minu Harlalka, Risk Management Measures of Central Banks for the Foreign Exchange Reserve, International Journal of Physical and Social Sciences, Vol. 5, 9, ISSN-2249 5894, 2015`,
        `Mr. Arun Mudhol, Embedding Unique Identication in IoT, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015`,
        `Dr. Siddaiah T, Disingenuous Corporate Activism, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015`,
        `Dr. Vijay Bhasker V, Individuals Personality - Multiple Affects - Gender Differentiation!?, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015`,
        `Dr. Somanath V S, A Study on Impact of Crude Oil and Its Concomitant Impact on Home Currency, 4th International Conference on Emerging Trends in Finance &Accounting, ISBN-9789383302093, 2015`,
        `Dr. Somanath V S, Signs of Corporate Collapse: An Assessment, Southern Economist, Vol. 54, 8, ISSN-0038 4046, 2015`,
        `Ms. Rituparna Chakraborty, Body Dissatisfaction among Female University Students: Metacognitive Awareness, Psychol Stud, Springer, ISSN-0033 2968, 2015`,
        `Dr. Sheri Kurian, Benchmarking on Global Practices in Higher Education - A Study on Hospitality and Tourism Education, International Conference on Higher Education - A Vision for Higher Education - 2030, ISBN-9789352028818, 2015`,
        `Mr. Prabhas Pandith T S, Jungle Villages in the Writings of Kenneth Anderson, AIMS Journal of Research, Vol. 10, 1, ISSN-2321 8487, 2015`,
        `Mr. Prabhas Pandith T S, Educational Misery and the Panacea of Technology: A Case of Fence Feeding on the Field? International Conference on Creating a Sustainable Lens for Higher Education: The New Urgency, ISBN-9789384869687, 2015`,
        `Ms. Mahalakshmi S, A Study on Education for Sustainable Development, International Conference on Creating a Sustainable Lens for Higher Education: The New Urgency, ISBN-9789384869687, 2015`,
        `Dr. Brahm Sharma, Context Aware Marketing a Creative Destructive tool for Consumer Psychology, International Scientific Symposium Economics, Business and Finance, ISBN-9789934145759, 2015`,
        `Dr. Jayaprakash Reddy R, An Urgent Need for a Change in Definitions of MSMEs, International Conference on transitional Entrepreneurs & International SMEs in Emerging Economies: Drivers and Strategies, ISBN-9789384743819, 2015`,
        `Ms. Lakshmi D, Exploring the Relationship between Academic Performances and Brain Dominances, Indian Journal of Science and Technology, Vol. 8, 9, ISSN-0974 6846, 2015`,
        `Ms. Lakshmi D, Exploring the Relationship between Thinking and Learning Styles an Experimental Study towards Improving Learning of Theoretical Courses in Engineering, International Conference on Computer Communication and Informatics, ISBN-9781479968053, 2015`,
        `Ms. Lakshmi D, Use of Multiple Intelligences and Instructional Technologies in Learning Theory of Computation: An Experimental Case Study, International Conference on Advanced Computing and Communication Systems, ISBN-9781479964383, 2015`,
        `Ms. Lakshmi D, Casual Effect Analysis Between Brain Dominances and Multiple Intelligences, International Journal of Applied Engineering Research, Vol. 10, 1, ISSN-0973 4562, 2015`,
        `Dr. Rama Murthy BM, Human Resource Accounting: A Frame Work for Better Financial Accounting and Reporting, International Conference on "Strategies for Sustainable Global Economy" Game Plan, ISBN-9789352122264, 2015`,
        `Ms. Mamatha R, Womens's Empowerment for the Development of Society: The Gap between Law and Society in India, Gender Identity and Roles in India: Issues and Challenges, 2015`,
        `Ms. Mamatha R, Empowerment of Women in India Through Better Health and Safe Motherwood for the Welfare of Community, Community Empowerment in Challanging World - Issues and Challenges, ISBN-9783736820210, 2015`,
        `Ms. Mamatha R, Critical Issues for Compensation and Incentives Management: Theoretical Approach, National Conference on Emerging Indian Scenario Harnessing the Opportunities,Vol., ISBN-9789383241828, 2015`,
        `Ms. Mamatha R, Humanitarian Law in Ancient Indian Jurisprudence - Role of Dharma, Legal Opus, Vol., 9, 2015`,
        `Dr. Saravana Kumar V, A Study on Investment and Savings among Investors in Coimbatore City, Intercontinental Journal of Finance Research Review, Vol. 3, 2, ISSN-2321 0354, 2015`,
        `Mr. Parveen A H, Insulated and Suffocating Life of a Neglected Wife, Human Rights International Research Journal, Vol. 3, 1, ISSN-2320 6942, 2015`,
        `Mr. Guravaiah P, Corporate Governance and Corporate Ethics, Corporate Governance in Emerging Economies, ISBN-9789350567173, 2015`,
        `Mr. Ranjitha Kumar, On Completely Semisimple Lie Algebra Bundles, Journal of Algebra and Its Applications, Vol. 14, 2, 2015`,
        `Ms. Eti Khatri, Impact of Result Announcements on the Performace of Stock Prices: A Study of Banking Stocks, Vidyasagar University Journal of Commerce, Vol. 20, ISSN-0973 5917, 2015`,
        `Dr. Subramanyam T, Efficiency Evaluation of Total Manufacturing Sectors of India - DEA Approach, Global Journal of Pure and Applied Mathematics, Vol. 11, 5, ISSN-0973 1768, 2015`,
        "Dr. R. Jayaprakash Reddy, A study on Financial Literacy in India, International Journal of Research and Analytical Reviews (IJRAR), Vol.9,1, ISSN- 2349 5138, 2022",
        "Dr. R. Jayaprakash Reddy, Costing, Activity-Based Costing and Time-Driven Activity-Based Costing - AComparative and Conceptual study, International Journal of Creative Research Thoughts (IJCRT), Vol.10,1, ISSN - 2320 2882, 2022",
        "Dr. Haritha. M, Dr. B.M. Ramamurthy, Ravi V, An Empirical Study on Evaluation of FinTech Industry in Bengaluru, Philosophical Readings, Vol.6, S1, ISSN - 2036 4989, 2022",
        "Dr. R. Jayaprakash Reddy, Dr. Saravana Kumar, A Study on the Present Status of Scheduled Castes and Scheduled Tribes in India, Internation Journal of All Research Education and Scientific Methods (IJARESM), Vol.10, 2, ISSN- 2455 6211, 2022",
        "Dr. Roja Reddy, A Comparative Analysis of Teaching, Learning & Research Practices of International Vs Indian Universities experiences: A Way Forward, International journal of special education, Vol.37,3, ISSN- 0827 3383, 2022",
        "Dr. Kiran Reddy, Mr. Priyanandan Reddy, Dr. Saravana Kumar, An Empirical Investigation on Problems in Agricultural Marketing with Special Reference to Rural Bangalore, INTERNATIONAL JOURNAL OF CREATIVE RESEARCH THOUGHTS – IJCRT, Vol.10,2, ISSN - 2320 2882, 2022",
        "Dr. Dara Yoganand, History and culture of Ahom Community, Akshara Multidisciplinary Research Journal, Vol.5,3(B), ISSN -2582 5429, 2022",
        "Ms. Geetha R, A Study on Impact of Pandaemic Covid-19 on Education System, Akshara Multidisciplinary Research Journal, Vol.5, 3(B), ISSN - 2582 5429, 2022",
        "Dr. Kalpana Venugopal, Dr. Saravana Kumar, Gradutes Employability Skills and Placements - Mediating Role of Career Adaptability, International Journal of Management and Humanities, Vol.8,9, ISSN - 2394 0913, 2022",
        "Mr. Gourav Koundal, Impact of Task Performance on Job Satisfaction of Information Technology Employees in Bengaluru City, The Review of Contemporary Scientific and Academic Studies, Vol.2,6, ISSN- 2583 1380, 2022",
        "Dr. Kalpana Venugopal, Predictive Role of Job Satisfaction On Organisational Citizenship Behaviour, Journal of Positive School Psychology, Vol.6,6, ISSN - 2717 7564, 2022",
        "Dr. Dara Yoganand, Seema par vyapar per bahu bhashaye prabhav, Bina Shodh Sangam, Vol. 10,1-2, ISSN -2321 8037, 2022",
        "Dr. Dara Yoganand, Hind Upanyaso mei stree vimarsh, Bohal Shodh Manjusha, Vol.15,3, ISSN - 2395 7115,2022",
        "Dr. Dara Yoganand, Premachandra Ke Hahaniye Me Dalith Chitrana, Bohal Shodh Manjusha, Vol.6(3),15, ISSN – 23957115, 2022",
        "Ms. Ishrath Anjum, Ms. Geetha R, A Study of Impact of Budget 2022 With Respect to Income Tax on the Tax payers of India Bangalore, Akshara Multidisciplinary Research Journal, Vol.1,6, ISSN - 2582 5429, 2022",
        "Dr. Javad Ghalambor, Role of Platform Economy in Agricultural Sector in India, The Review of Contemporary Scientific and Academic Studies, Vol.2,8, ISSN - 2583 1380, 2022",
        "Dr. Ramesh raj Ayer, Digital Banking: Current trends and Prospects in India, International Journal of Advance Research, Ideas and Innovations in Technology, Vol.8,2, ISSN - 2454 132x, 2022",
        "Ms. Deepa V H, Evaluation of the Antimicrobial Effect of Raphanus Sativus Beta Vulgaris and Allium Cepa on Pathogenic Bacteria Isolated from Street-Side Cut Fruits, International Journal of Health Sciences and Research, Vol.12,10, ISSN- 2249 9571, 2022",
        "Dr. Javad Ghalambor, Performance of Mutual Funds with reference to Private Banks in India, International Journal of Scientific Development and Research (IJSDR), Vol.7,11, ISSN - 2455 2631, 2022",
        "Dr. R Jayaprakash Reddy, Corporate Governance Theoritical Framework and Models – review, Journal of Emerging Technical Framework and Models - A review(JETIR), Vol.9,12, ISSN – 23495162, 2022",
        "Dr. R Jayaprakash Reddy, Issues and Challenges Faced by SMEs in India: A Case for Regulating Corporate Goverenance for SMEs (unlisted) in India, Pramana Research Journal, Vol.12,12 ISSN – 2249 2976, 2022",
        "Dr. Jayashree Nair, Iot Alert Observation of Prohibited Deforestation Regions with Drone Surveillance, Computer Integrated Manufacturing System, Vol. 28,11, ISSN - 1006 5911, 2022",
        "Ms. Anushree Banerjee, Ms. Sanjana C Jacob, Need for a New Marketing Blue Print for a Pandemic Induced New Normal, Turkish Online Journal of Qualitative Inquiry, Vol.12,8, ISSN- 1309 6591, 2021",
        "Dr. Javad Ghalambor, Bankruptcy Prediction Model: A Special Focus on Indian Public Banks, Bulletin Monumental, Vol. 22, 11, ISSN - 0007 473X, 2021",
        "Dr. Ravi. V, NEP 2020 - An Innovative Future Building Tool: Challenges and Opportunities, AIMS Journal of Research, Vol.16,2, ISSN-2321 8487, 2021",
        "Dr. Vijay Bhaskar, A Study of Accounting Standard - 28 and International Accounting Standard - 36 (Impairment of Assets), AIMS Journal of Research, Vol.16,2, ISSN- 2321 8487, 2021",
        "Dr. Roja Reddy, Global Competitiveness of Indian Higher Education: A Review Analysis, AIMS Journal of Research, Vol.16,2, ISSN - 2321 8487, 2021",
        "Dr. Govindaraj Pandith, Digital Transformation, IOTs and AI Applications in Electric and Electrical Engineering Sector with respect to Industry 4.0, Vidyabharati International Interdisciplinary Research Journal, Special Issue, ISSN - 2319 4979, 2021",
        "Mr. Chaco P J, A significant study on major aspects and insight on digital marketing with specific reference to Flipkart.com, International Journal of Advance Research and Innovative Ideas in Education (IJARIIE), Vol.7,6, ISSN- 2395 4396, 2021",
        'Mr. Lakshminarayana.S, A Study on "Microfinance Institutions Effectiveness towards Economic Status of the Beneficiaries", Seshadipuram Journal of Social Sciences (SJSS), Vol.3,1, ISSN-2581 6748, 2021',
        "Dr. B.A. KarunakaraReddy, Impact of Collaborative Space on User Productivity, Design Engineering, Vol.2021,9, ISSN- 0011 9342, 2021",
        "Dr. Haritha.M, Dr. Ravi V, Dr. B.M. Ramamurthy, An empirical study on the benefits, Challenges and growth of digitalization in Banking industry, International Journal of Multidisciplinary Education Research, Vol.10,12(2), ISSN - 2277 7881, 2021",
        "Dr. Kiran Reddy, Financial Inclusion as a tool for Sustainable Development, KALA: The journal of Indian Art History Congress, Vol. 27,1(III), ISSN -0975 7945, 2021",
        "Dr. Kiran Reddy, Assessing the impact and effectiveness of micro finance based self-help groups in mitigating urban poverty with reference to Bangalore city, Wesleyan Journal of Research, Vol. 14,1(IV), ISSN -0975 1386, 2021",
        "Dr. R. Jayaprakash Reddy, Assessing the requirement of infrastructure and related capabilities to implement time-driven activity-based costing in selected Jordanian Cement Companies, GIS Science Journal, Vol. 8,2, ISSN -1869 9391, 2021",
        "Dr. R. Jayaprakash Reddy, Comparision between existing cost system and proposed model of time-driven activity-based costing in selected Jordanian Cement companies, Pramana Research Journal, Vol. 11,2, ISSN -2249 2976, 2021",
        "Mr. Lakshminarayana S, A Study on The Purpose of Joining Self Help Groups by Prospective Members in Rural Bengaluru, INTERNATIONAL JOURNAL OF MULTIDISCIPLINARY EDUCATIONAL RESEARCH, Vol. 10,2(1), ISSN -2277 7881, 2021",
        "Mr. Lakshminarayana S, Impact of Covid-19 Pandemic on Self Help Groups (SHGs) and Microfinance Institutions (MFIs), International Journal of All Research Education and Scientific Methods (IJARESM), Vol. 9,7, ISSN -2455 6211, 2021",
        "Ms. Sanjana Jacob, Impact of Customer Relation in Banking Industry in New Normal, AIMS Journal of Research, Vol. 16,1, ISSN -2321 8487, 2021",
        "Dr. B A Karunakara Reddy, Application of Text Analytics on Leadership from Social Media Network - Twitter, AIMS Journal of Research, Vol. 16,1, ISSN -2321 8487, 2021",
        "Dr. BM Ramamurthy, NEP 2020 - An Innovative Tool for Changing the Higher Education System, AIMS Journal of Research, Vol. 16,1, ISSN -2321 8487, 2021",
        "Dr. HarithaM, A Study on the Impact of Pandemic on Working Women - Challenges and Issues Faced, Vidyabharati International Interdisciplinary Research Journal, Vol. Special Issue, ISSN -2319 4979, 2021",
        "Ms. Pallavi N, Impact of COVID -19 on Green Marketing: Challenges and Adoption of Green Marketing Strategies -(A Study W.R.T. Bengaluru Urban), International Journal of Academic Research, Vol. 7, 11(2), ISSN-2348 7666, 2020",
        "Ms. Anitha B, Impact of COVID -19 on Green Marketing: Challenges and Adoption of Green Marketing Strategies -(A Study W.R.T. Bengaluru Urban), International Journal of Academic Research, Vol. 7, 11(2), ISSN-2348 7666, 2020",
        "Dr. Ranjitha Kumar, On Wedderburn Principal Theorem for Jordan Algebra Bundles, Taylor & Francis Online, Vol., ISSN-0092 7872, 2020",
        "Dr. Dara Yoganand, RavindraKaliyake Katha SahityakiAlochana, AE International Journal of Multi-Disciplinary Research, Vol. 8, 3, ISSN-2348 6724, 2020",
        "Ms. Sanjana Jacob, The Impact of Attitude, Behaviour and Emotional Intelligence on Performance, AIMS Journal of Research, Vol. 15, 1, ISSN-2321 8487, 2020",
        "Dr. Jayaprakash Reddy R, An Insight to Financial Literacy in India - A Review of Literature, Journal of Emerging Technologies and Innovative Research, Vol. 7, 9, ISSN-2349 5162, 2020",
        "Dr. Jayaprakash Reddy R, Source of Information and Investment Decision by Individual Investors - A Review of Literature, Journal of Emerging Technologies and Innovative Research, Vol. 7, 12, ISSN-2349 5162, 2020",
        "Dr. Somanath V S, Factors Influencing Expected Retirement income - An Empirical Analysis, PIMT Journal of Research, Vol. 12, 2, ISSN-2278 7925, 2020",
        "Dr. Neelima Raj Marella, Effect of the Vitamin D Receptor Polymorphism on Bone Mineral Density and Bone Metabolism, Journal of Clinical and Diagnostic Research, Vol. 14, 2, ISSN-0973 709X, 2020",
        "Ms. Arthi R, Work-Family Conflict and Professional Commitment: Proactive Effect of Transformational Leadership, Problems and Perspectives in Management, Vol. 18, 1, ISSN-1727-7051, 2020",
        "Dr. B A Karunakara Reddy, Lead lag relationship between commodities spot and futures market in India, Studies in Indian Place Names, Vol. 40, Special Issue 25, ISSN-2394 3114, 2020",
        "Ms. Anushree Banerjee, Digital Marketing - A Conceptual New, AIMS Journal of Research, Vol. 15, 2, ISSN-2321 8487, 2020",
        "Dr. Kiran Reddy, Important e-tail aspects Influencing Consumer Decision-making Process: A Conceptual Model, Research Review International Journal of Multidisciplinary, Vol. 4, 6, ISSN-2455 3085, 2019",
        "Dr. Kiran Reddy, Marketing of Renewable Energy: Solar Energy Users in Mysore City, Online International Interdisciplinary Research Journal, Vol. 9, Special, ISSN-2249 9598, 2019",
        "Dr. Kiran Reddy, Solar Energy Users and Customer Satisfaction, Online International Interdisciplinary Research Journal, Vol. 9, Special, ISSN-2249 9598, 2019",
        "Dr. Kiran Reddy, Role of AI in Electronic Retail, International Journal of Research and Analytical Reviews, Vol. 6, 2, ISSN-2348 1269, 2019",
        "Dr. Kiran Reddy, Recruitment Process Outsourcing in information Technology Sector, IMPACT: International Journal of Research in Humanities, Arts and Literature, Vol. 7, 5, ISSN-2321 8878, 2019",
        "Dr. Kiran Reddy, Role of Governance in Accountability of NGOs (Non-Governmental Organizations), International Journal of Advanced Scientific Research and Management, Vol. 4, 4, ISSN-2455 6378, 2019",
        "Dr. Kiran Reddy, Importance of Accreditation in NGOs Accountability, International Journal for Research in Engineering Application &Management, Vol. 4, 12, ISSN-2454 9150, 2019",
        "Ms. Madhuri U, MVA: A Business Valuation model for Sustainable Growth, with Reference to NIFTY top 10 IT Companies, India. An Empirical Study, Think India (Quarterly Journal), Vol. 22, 4, ISSN-0971 1260, 2019",
        "Mr. Bhaskar Sailesh, Climate Influenced Travel Decisions among Hospitality Students, COMPASS: Peer Reviewed Journal of Dept. Of Tourism School of Professional Studies, Vol. 2, 1, ISSN-2394 0646, 2019",
        "Mr. Bhaskar Sailesh, Millennials in Travel Industry, RIPPLES, Vol. 8, 1, ISSN-2229 6794, 2019",
        "Mr. Bhaskar Sailesh, Chatbots in Tourism Industry, RIPPLES, Vol. 8, 1, ISSN-2229 6794, 2019",
        "Mr. Venkatesh Kattimani, Managing Electronic Resources in the Modern Libraries: An Overview, Online International Interdisciplinary Research Journal, Vol. 9, 1, ISSN-2249 9598, 2019",
        "Dr. Somanath V S, Assessment of Pension funds with Respect to Countries and Types of Plan - An International Perspective, Journal of Emerging Technologies and Innovative Research, Vol. 6, 6, ISSN-2349 5162, 2019",
        "Dr. Somanath V S, Fringe Benefits and Employee Performance - A Perspective Analysis of Employees Working in Public Sector Companies in India, International Journal of Research and Analytical Reviews, Vol. 6, 2, ISSN-2349 5138, 2019",
        "Dr. Somanath V S, A Study on Social Entrepreneurship in India, European Journal of Business & Social Sciences, Vol. 7, 4, ISSN-2235 767X, 2019",
        "Dr. Somanath V S, Risk Management Challenges of Remotely Created Cheques in the Indian Banking System, International Journal of Research and Analytical Reviews, Vol. 6, 1, ISSN-2348 1269, 2019",
        "Ms. Geethanjali G, Opportunities and Challenges with Industry 4.0 - A Conceptual Framework, International Journal of Advance and Innovative Research, Vol. 6, 2, ISSN-2394 7780, 2019",
        "Ms. Anushree Banerjee, Business Analytics in Manufacturing Industry with Special Reference to Xiaomi, International Journal of Advance and Innovative Research, Vol. 6, 2, ISSN-2394 7780, 2019",
        "Ms. Varshini S, Literature - Collaborative Learning, Bodhi International Journal of Research in Humanities, Arts and Science, Vol. 3, Special, ISSN-2456 5571, 2019",
        "Dr. Basappa Y Bangari, Modern Electronic Gadgets and Advancement of ICT are Increasing Opportunities for Lifelong Learning with Special Emphasis on English Language, AIMS Journal of Research, Vol. 14, 1, ISSN-2321 8487, 2019",
        "Dr. Siddaiah T, Changing Landscape of Education in Response to Technological Advances, AIMS Journal of Research, Vol. 14, 1, ISSN-2321 8487, 2019",
        "Ms. Pallavi M O, Sparx - Data Processing Module, 5th international Conference for Convergence in Technology, ISBN-9781538680759, 2019",
        "Mr. Manjunatha K S, Bibliometric Analysis of Annals of Library and Information Studies, 9th KSCLA National Conference on Library in the Life of User, ISBN-9789381979327, 2019",
        "Dr. Jayaprakash Reddy R, The Domains of Startup Ecosystem: Is the Focal Point, The Customer or The Idea, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019",
        "Dr. Jayaprakash Reddy R, A Study on Prospects and Challenges of MSMEs in India, International Journal of Research and Analytical Reviews, Vol. 6, 1, ISSN-2348 1269, 2019",
        "Dr. Hemanth K S, A New Approach to Automate the Traffic Signal Lights using Deep Learning, International Journal of Research in Electronics and Computer Engineering, Vol. 7, 1, ISSN-2348 2281, 2019",
        "Dr. Hemanth K S, Hydroponic Farming using Leafy Green Machines for Agriculture by Applying Deep Learning Methods, International Journal of Research in Electronics and Computer Engineering, Vol. 7, 1, ISSN-2348 2281, 2019",
        "Ms. Pallavi M, A Study on the Impact of E-Tailing: A Paradigm Shift to Supply Chain Management Towards Customer Satisfaction, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019",
        "Mr. Sandesh Ramakanth Bhat, Effect of Dollar Price on Crude Oil Price Fluctuation with Reference to India, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019",
        "Ms. Sanjana Jacob, Smart Parking in Smart City, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019",
        "Ms. Bindu Narayan V, Entrepreneurship and Sustainable Development: A Study on Sustainable Development a New Paradigm among Entrepreneurs and Restraints of Sustainopreneurs, International Journal of Advance and Innovative Research, Vol. 6, 1, ISSN-2394 7780, 2019",
        "Dr. Karunakara Reddy, Relationship between agriculture commodities futures prices and spot market prices in India, International Journal of Research in Engineering Application & Management, Special, ISSN-2454 9150, 2019",
        "Dr. Karunakara Reddy B A, Research Paper on Education and Sustainable Development in Yemen, Online International Interdisciplinary Research Journal, Vol. 9, 1, ISSN-2249 9598, 2019",
        "Mr. Ravi V, Employee's View on Job Satisfaction: A Study on Garments Industry in Bangalore, International Journal of Recent Technology and Engineering, Vol. 7, 5S, ISSN-2277 3878, 2019",
        "Mr. Lakshminarayana S, A School work on Whistle blowing policies and Performance of Ujjivan Small Finance Bank, International Journal of Research and Analytical Reviews, Vol. 6, 1, ISSN-2348 1269, 2019",
        "Mr. Lakshminarayana S, A Study on need & Awareness Levels of Health Insurance among Lecturers in Bangalore North, 3rd Annual Convention of ICBE and International Conference, ISBN-9781513605951, 2019",
        "Mr. Chaco P J, An Insight on Digital Marketing with Specific Reference to Flipkart.com, 3rd Annual Convention of ICBE and International Conference, ISBN-9781513605951, 2019",
        "Mr. Saurabh Srivastava, The Effectiveness of Social Media Marketing on Consumer Behavior of Smart Phone Buyer's with Reference to Age Group 18 Years to 30 Years, Review of Research, ISSN-2249 894X, 2019",
        "Ms. Rituparna Chakraborty, be(com)ing a Woman: Body, Authority and Society, Psychology and Developing Societies, Vol. 31, 2, ISSN-0971 3336, 2019",
        "Ms. Lakshmi J V N, Optimizing Quality and Outputs by Improving Variable Rate Prescriptions in Agriculture using UAVs, Procedia Computer Science: International Conference on Computational Intelligence and Data Science, ISSN-1877 0509, 2019",
        "Mr. Basavaraja K P, BendreKavanagalalliSaamaajikaPragne, National Conference on D R BendreBaduku and Baraha, ISBN-9788193841587, 2019",
        "Dr. Brahm Sharma, Wash Right Limited, Journal of Emerging Technologies and Innovative Research, Vol. 5, 12, ISSN-2349 5162, 2018",
        "Mr. Ravi V, Problems faced by Garment Workers in Bengaluru - A Study, International Journal of Research in Engineering, Science and Management, Vol. 1, 12, ISSN-2581 5792, 2018",
        "Dr. Jayaprakash Reddy R, Influence of Knowledge on Intellectual Capital, Benefits and Challenges to be faced at the Time of Managing Intellectual Capital - A Study W R T Bengaluru, Online International Interdisciplinary Research Journal, Vol. 8, Special, ISSN-2249 9598, 2018",
        "Dr. Jayaprakash Reddy R, Intellectual Capital Drivers Affecting Business Profit Performance and Future value creation - A Study W R T Software and Pharmaceutical Companies IT, Bengaluru, Online International Interdisciplinary Research Journal, Vol. 8, Special, ISSN-2249 9598, 2018",
        "Dr.Jayaprakash Reddy R, Impact of Challenges faced by Micro, Small and Medium Enterprises Challenges on its decline - A Special Reference to Peenya Industrial Area, Bangalore, International Journal of Research in Social Sciences, Vol. 8, 9(1), ISSN-2249 2496, 2018",
        "Dr.Jayaprakash Reddy R, Online Shopping - Its Growth and Status in India, International Journal of Engineering and Management Research, Vol. 8, 3, ISSN-2250 0758, 2018",
        "Dr. Jayaprakash Reddy R, Contribution and Survival of SMES in India and Thailand, The 7th International Conference on Advancement of Development Administration 2018 - Social Sciences and Interdisciplinary Studies, ISBN-9786164820074, 2018",
        "Mr. Subramanyam Upadhyay, Modelling and Simulation of a Moving Boundary Problem Arising During Immersion Frying of Foods, Natl. Acad. Sci. Lett. (Springer), ISSN-0250 541X, 2018",
        "Dr. Jayashree Nair, Semi Fragile Watermarking for Content based Image Authentication and Recovery in the DWT-DCT Domains, The International Arab Journal of Information Technology, Vol. 15, 6, ISSN-1683 3198, 2018",
        "Ms. Pallavi N, A Study on Impact of Digitalization of Service Sector - Banking in Indian Economy, International Journal of Scientific Research and Review, Vol. 7, 13, ISSN-2279 543X, 2018",
        "Mr. Lakshminarayana S, An Empirical Study on Problems Faced by the Farmers in Agri-Storage Facilities with Special Reference to Rural Bangalore, EPRA International Journal of Economic and Business Review, Vol. 6, 8, ISSN-2349 0187, 2018",
        "Dr. Bhaskar Sailesh, Role of Tourism Sector in Conservation of Coral Reef Ecosystems, Proceedings of ARSSS International Conference, ISSN-2229 5518, 2018",
        "Dr. Bhaskar Sailesh, Role of Tourism Stakeholders in Conservation of Coral Reef Ecosystems, International Journal of Scientific & Engineering Research, Vol. 9, 7, ISSN-2229 5518, 2018",
        "Dr. Kiran Reddy, Emerging Face of E-tailing: Online food delivery, International Journal of Advace Research, ideas and Innovations in Technology, Vol. 4, 6, ISSN-2454 132X, 2018",
        "Dr. Kiran Reddy, VolatalitySpillover in Indian Spot - Future Aluminium Market, Research Directions, Vol. 5, 11, ISSN-2321 5486, 2018",
        "Dr. Kiran Reddy, Causality in Indian Spot - Futures Commodity Market, Review of Research, Vol. 7, 8, ISSN-2249 894X, 2018",
        "Dr. Karunakara Reddy B A, Tourism Planning - A tool for Sustainability of Tourism Destinations, International Conference on Augmenting Tourism Infrastructure, Assurance of Quality Standards in Tourist Services and Opportunities in the Context of Sustainable Tourism in India, 2018",
        "Dr. Karunakara Reddy B A, A Study on Indian Commodity Market with Special reference to Commodity Exchange, International Journal of Research Science & Management, Vol. 5, 6, ISSN-234 5197, 2018",
        "Dr. Karunakara Reddy B A, Impact of Balanced Score Card on the Competitive Advantage in the Jordanian Telecommunication, International Journal for Research in Applied Science & Engineering Technology, Vol. 6, 4, ISSN-2321 9653, 2018",
        "Dr. Karunakara Reddy B A, Impact of Activity-based costing (ABC) on Competitive Advantage in the Jordanian Telecommunication, International Journal for Research in Applied Science & Engineering Technology, Vol. 6, 4, ISSN-2321 9653, 2018",
        "Dr. Karunaara Reddy B A, Ecotourism in Yemen, The International Manager, Vol. 5, 17, ISSN-2348 9413, 2018",
        "Dr. Karunakara Reddy B A, Impact of Applying Six Sigma Systems to Measure Quality for the Competitive Advantage in the Jordanian Telecommunications, International Journal of Science and Economic Research, Vol. 3, 10, ISSN-2455 8834, 2018",
        "Dr. Somanath V S, Fringe Benefits and Employee Performance - A Perceptive analysis of Employees working in Private Sector Companies in India, International Journal of Research and Analytical Reviews, Vol. 5, 2, ISSN-2348 1269, 2018",
        "Mr. Sandesh Bhat, Smart Education for Smart India, IJEMR, Special, ISSN-2249 2585, 2018",
        "Dr. Subramanyam T, Efficiency and Risk Management in Indian Banks: A Method to Decompose the Risk, International Journal of Advances in Management and Economics, Vol. 7, 2, ISSN-2278 3369, 2018",
        "Dr. Vijay Bhasker V, Implementation of GST and its impact on Automobile Dealers, AIMS Journal of Research, Vol. 13, 1, ISSN-2321 8487, 2018",
        "Mr. Arijit Roy, A Model to Integrate Internet based Platforms in Class Rooms for Modern Management Education, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018",
        "Dr. Rama Murthy B M, Millennials Concern Toward Green Business, Journal of Advance Management Research, Vol. 6, 4, ISSN-2393 9664, 2018",
        "Dr. Rama Murthy B M, FDI and Its Collision on Retail Zone within India: Issues and Challenges, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018",
        "Ms. Eti Khatri, Investors Preference towards Mutual Funds, Shanlax International Journal of Arts, Science and Humanities, Vol. 5, 6, ISSN-2321 788X, 2018",
        "Ms. Vandana Bhagat, Impact of Data Storage Trends on Query Execution, International Journal of Research in Computer Applications and Robotics, Vol. 6, 2, ISSN-2320 7345, 2018",
        "Dr. Lakshmi J V N, Comparative Analysis on a Predictive Model using tree based Machine Learning Techniques for Big Data Analytics, i-manager's Journal on Information Technology, Vol. 7, 2, ISSN-2277 5110, 2018",
        "Dr. Lakshmi J V N, A Review on Developing Tech-Agriculture using Deep Learning Methods by Applying UAVs, International Journal of Scientific Research in Computer Science, Engineering and Information Technology, Vol. 3, 1, ISSN-2456 3307, 2018",
        "Dr. Lakshmi J V N, A Review on Impact of Deep Learning and TensorFlow in medical Image Processing, Grenze International Journal of Engineering and technology, Special, ISSN-2395 5287, 2018",
        "Mr. Basavaraja K P, UnnataShikshanadalli Kannada, Current Problems of Karnataka and Kannada Langauage: A Review, ISBN-9788192068176, 2018",
        "Mr. Basavaraja K P, VachanaSahityadalliKaayaka – DasohaParikalpane, Saamaajika Nyaya, National Conference on VachanaSahitya: BahumukhiAdhyayanadaNelegalu, ISBN-9788193344729, 2018",
        "Ms. Anushree Banerjee, Best Practices in Managing Human Capital, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018",
        "Ms. Anushree Banerjee, Understanding the Scope of Artificial Intelligence and Change in Leadership Goals - A Theoretical Perspective, International Journal of Arts Science and Humanities, Vol. 6, 1, ISSN-2321 788X, 2018",
        "Ms. Sanjana Jacob, Impact of Digital Marketing Towards Customer Loyality, International Journal of Research in Management & Social Science, Vol. 6, 1, ISSN-2322 0899, 2018",
        "Dr. Ranjitha Kumar, On Derivation Algebra Bundle of and Algebra Bundle, Proceedings of the Jangjeon Mathematical Society, Vol. 21, ISSN-1598 7264, 2018",
        "Dr. Basappa Y Bangari, Girish Karnad's Play Taledandaia s fine Example for Subaltern Literature, International Journal of Research Culture Society, Vol. 2, 2, ISSN-2456 6683, 2018",
        "Dr. Basappa Y Bangari, Morality and Virtue based Leadership and Marketing would gain Consumers Confidence in the Current Global Competition, IJEMR, Special, ISSN-2249 2585, 2018",
        "Dr. Basappa Y Bangari, Few Observations on Quality of Management and Demand for Management Education in Digital Era, IJEMR, Special, ISSN-2249 2585, 2018",
        "Dr. Basappa Y Bangari, Few Observations on Present Education System and Roots of Public Intellectuals in India, AIMS Journal of Research, Vol. 13, 2, ISSN-2321 8487, 2018",
        "Dr. Basappa Y Bangari, T S Eliot's Thoughts in his Writings Are Clear Mirror of Modern Life, International Journal of Research Culture Society, Vol. 2, 1, ISSN-2456 6683, 2018",
        "Dr. Basappa Y Bangari, Khushwant Singh's Train to Pakistan Depicted Tracks of Multicultural Milliu, International Journal of Research Culture Society, Vol. 2, 1, ISSN-2456 6683, 2018",
        "Dr. Basappa Y Bangari, Semiotic Observations of Language, Advertisements and Human Culture, Bodhi International Journal of Multidisciplinary Researches, Vol. 2, 8, ISSN-2456 5571, 2018",
        "Dr. Basappa Y Bangari, Marketing Possibilities of Traditional and Ethnic Products Via Digital Media, International Journal of Research Culture Society, Vol. 2, 3, ISSN-2456 6683, 2018",
        "Dr. Kiran Reddy, Role of Non-Governmental Organisations to Empower the Women and Development of Children through Karnataka Governments Programmes, International Journal of Advance Engineering and Research Development, Vol. 4, 7, ISSN-2348 6406, 2017",
        "Dr. Kiran Reddy, Efficacy of Recruitment Process Outsourcing, Emperor International of Finance and Management Research, Vol. 3, 12, ISSN-2395 5929, 2017",
        "Dr. Kiran Reddy, Impact of Celebrity Endorsement on Online Shopping Behaviour, International Journal of B-Digest, Vol. 8, 3, ISSN-0975 2617, 2017",
        "Dr. Karunakara Reddy B A, Local Community Attitude towards Tourism Impacts in Yemen - A Study on IBB Province, EPRA International Journal of Economic and Business Review, Vol. 5, 12, ISSN-2347 9671, 2017",
        "Dr. Karunakara Reddy B A, Impact of Balanced Score Card on the Competitive Advantage in the Jordanian Telecommunication, Research Journal of Finance and Accounting, Vol. 8, 18, ISSN-2222 1697, 2017",
        "Dr. Karunakara Reddy B A, Impact of Activity-based Costing (ABC) on Competitive Advantage in the Jordanian Telecommunication, Research Journal of Finance and Accounting, Vol. 8, 20, ISSN-2222 1697, 2017",
        "Dr. Karunakara Reddy B A, Sustainable Development and Population Growth in Yemen: A Study on IBB Province, EPRA International Journal of Research and Development, Vol. 2, 11, ISSN-2455 7838, 2017",
        "Dr. Somanath V S, Green Finance: Contemporary Issues and Challenges for Economic Sustainability in Indian Green Growth, Research Revolution: International Journal of Social Science &Management, Vol. 6, 1, ISSN-2319 300X, 2017",
        "Mr. Lakshminarayana S, GST - A New Facilift for Indirect Taxation System of India, EPRA International Journal of Economic and Business Review, Vol. 5, 11, ISSN-2347 9671, 2017",
        "Ms. Anushree Banerjee, Payment Gateways with Special Reference to Paytm, Journal of Exclusive Management Science, Vol. 6, 1, ISSN-2277 5684, 2017",
        "Dr. Rama Murthy B M, A Study of Investor's Awareness and Selection of Different Financial Investment Avenues for the Investor in Bangalore City, International Journal of Research in Management & Social Science, Vol. 5, 4, ISSN-2322 0899, 2017",
        "Mr. Ramesh Raj Ayer, Adaptation of E-Commerce Channel by MSME in India, International Journal of Business and General Management, Vol. 6, 6, ISSN-2319 2267, 2017",
        "Dr. Neelima Raj Marella, Impact of Severity of Illness on the Function of the Hypothalamo-Pituitary-gonadal Axis in Postmenopausal Women with Acute Severe Illness: Implications for Predicting Disease Outcome, Indian Journal of Endocrinology and Metabolism, Vol. 21, 5, ISSN-2230 8210, 2017",
        "Dr. Neelima Raj Marella, Prevalence of Thyroid Autoimmunity in Type 1 Diabetes Mellitus: Thyroid Autoimmunity in Type 1 Diabetes, Thyroid Research practice, ISSN-0973 0354, 2017",
        "Dr. Basappa Y Bangari, Folk and Tribal Foods: Possibilities of Marketing and Patent Issues, International Journal of Research Culture Society, Vol. 1, 7, ISSN-2456 6683, 2017",
        "Dr. Basappa Y Bangari, Quilt Production and Marketing Strategies in Urban Sectors, International Journal of Research Culture Society, Vol. 1, 7, ISSN-2456 6683, 2017",
        "Dr. Basappa Y Bangari, Cultural Tourism: Possibilities and Problems in India, International Journal of Research Culture Society, Vol. 1, 10, ISSN-2456 6683, 2017",
        "Ms. Pallavi N, A Study on Consumer Relational mode of Shopping at Shopper's Stop, IJEMR, Vol. 7, 5, ISSN-2249 8672, 2017",
        "Mr. Atul Kumar Pandey, PraacheentakeSthar par Bharatiya Samskrutiki Visheshata aur Uska Vaishik Prasar, Hindi Anatarashtriya Sanghoshti, ISSN-935268630-6, 2017",
        "Mr. Atul Kumar Pandey, Sthree Purush Sambandhoke Banthe Bigadte Roopaur Satottari Natak, National Conference Prayas 2017, ISBN-9788191074840, 2017",
        "Ms. Anitha B, Role of Non-Governmental Organisations to Empower the Women in Karnataka, International Journal of Academic Research, Vol. 4, 2, ISSN-2348 7666, 2017",
        "Dr. Govindaraj Pandith T G, Mutually Nearest Vertex Clusters for Solving TSP, International Journal of Computer Applications, Vol. 169, 6, ISSN-0975 8887, 2017",
        "Dr. Subramanyam T, Is the Working environment matter in assessing the Performance of Public and Private Sector Banks of India? - an Application of Data Envelopment Analysis, International Journal of Computer & Mathematical Sciences, Vol. 6, 6, ISSN-2347 8527, 2017",
        "Dr. Lakshmi J V N, A Big Data Analytical Approach for Analyzing Temperature Dataset using Machine Learning Techniques, International Journal of Scientific Research in Computer Science and Engineering, Vol. 5, 3, ISSN-2320 7639, 2017",
        "Dr. Lakshmi J V N, Hadoop Spark Framework for Machine Learning using Python, International Journal of Scientific & Engineering Research, Vol. 8, 5, ISSN-2229 5518, 2017",
        "Dr. Lakshmi J V N, An Insight to Tree Based Machine Learning Techniques for Big Data Analytics Using Apache Spark, IEEE International Conference on Intelligent Computing, Instrumentation and Control Technologies, ISBN-9781509061068, 2017",
        "Ms. Uma Devi T, Is HR Audit a Diagnostic tool for Improvement? - A Study, Internatinal Journal of Research in Applied Management Science &Technology, Vol. 2, 2, ISSN-2455 7331, 2017",
        "Dr. Siddaiah T, Cluster of Optimal Chains of All-Pairs Shortest Paths to Deduce Minimum Cost Tour, International Journal of Advanced Research in Computer Science, Vol. 8, 3, ISSN-0976 5697, 2017",
        "Dr. Hemanth K S, Predictive Model for Meterial Behaviour Prediction, International Journal of Advanced Research in Computer Science, Vol. 8, 3, ISSN-0976 5697, 2017",
        "Dr. Jayaprakash Reddy R, Role of Government Schemes and Programmes in the Growth of MSMEs, International Journal of Finance Research Review, Vol. 5, 7, ISSN-2321 0354, 2017",
        "Dr. Jayaprakash Reddy R, The Need for a Permanent Definition of MSMEs in India, International Journal in Management and Social Science, Vol. 5, 2, ISSN-2321 1784, 2017",
        "Dr. Jayaprakash Reddy R, Use of ICT in Indian MSMEs, International Journal in Commerce, IT & Social Sciences, Vol. 4, 2, ISSN-2394 5702, 2017",
        "Dr. Govindaraj Pandith T G, Multidimensional Scaling and Visualization of Similarities to Solve TSP, International Journal of Multidisciplinary Research Centre, Vol. 3, 2, ISSN-2454 3659, 2017",
        "Ms. Rituparna Chakraborty, Predicament of Contemporary Women: Convergence of Inner and Outer Space, Reaching the Unreached Through Science and Technology, ISBN-9788193190715, 2017",
        "Dr. Jayashree Nair, Diophantine Equations for Enhanced Security in Watermarking Scheme for Image Authentication, Advanced Image Processing Techniques and Applications, ISBN-9781522520535, 2017",
        "Ms. Jyothirmayee R, Measurement of Employability Skills and Job Readiness Perception of Post - Graduate Management Students: Results from a Pilot Study, International Journal in Management and Social Science, Vol. 5, 8, ISSN-2321 1784, 2017",
        "Ms. Anuradha B S, LEAN - An Enabler in Managing Workforce Effectively, 5th International Conference on Managing Human Resources at the Workplace, ISBN-9789383302192, 2016",
        "Ms. Sanjana Jacob, Emerging Trends in Human Resource Management, International Conference on Recent Developments Emerging Trends in Management Research & Information Science, ISBN-9789385640834, 2016",
        "Ms. Vedavathi M, A Study of Issues & Challenges of Implementation of Information Technology in HRM, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016",
        "Ms. Vedavathi M, Impact of Stress on Employees Working in IT, Manufacturing and Service Industries in Bengaluru Urban: A Study, International Joournal of Information Technology and Computer Sciences Perspectives, Vol. 5, 3, ISSN-2319 9016, 2016",
        "Dr. Jayashree Nair, The Analysis of PQ Sequences Generated from Continued Fractions for Use as Pseudorandom Sequences in Cryptographic Applications,Springer, ISBN-978-81-322-2654-3, 2016",
        "Dr. Jayashree Nair, Performace Analysis of a Novel Image Content Authentication Scheme using multiple Watermarks in Dual Domains, Adarsh Journal of Information Technology, Vol. 5, 2, ISSN-2320 0340, 2016",
        "Dr. Jayaprakash Reddy R, Reforms in Indian Banking Sector during the Pre & Post - Reforms Period - An Analysis, International Journal of Business and Administration Research Review, Vol. 2, 1, ISSN-2347 856X, 2016",
        "Dr. Jayaprakash Reddy R, Growth and Development of Micro, Small and Medium enterprises in Karnataka, International Journal of Commerce and Management Research, Vol. 2, 8, ISSN-2453 1627, 2016",
        "Dr. Jayaprakash Reddy R, Impact of Basel Norm in Indian Banking Sector During the Post-Reforms Period - A Review, International Journal of Marketing and Technology, Vol. 6, 6, ISSN-2249 1058, 2016",
        "Dr. Karunakara Reddy B A, Emerging Trends in Green Marketing, International Conference on Recent Developments Emerging Trends in Management Research & Information Science, ISBN-9789385640834, 2016",
        "Dr. Karunakara Reddy B A, Buying Styles of Two wheelers at Bengaluru: A Study, International Journal of Logistics and Supply Chain Management Perspectives, Vol. 5, 3, ISSN-2319 9032, 2016",
        "Dr. Karunakara Reddy B A, Recent Trends in HRM, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016",
        "Dr. Karunakara Reddy B A, Recent Trends in Human Resource Manager to Sustain Global Competition, Vanijya Sammelana - 2016, ISBN-9781944820145, 2016",
        "Ms. Mamatha R, Remedies for Breach of Alien Rights under International Law - A Critical Appraisal, Advances in Colloborative Research, ISBN-9781535287715, 2016",
        "Dr. Subramanyam T, Selection of Input - Output Variables in Data Envelopment Analysis - Indian Commercial Banks, International Journal of Computer & Mathematical Sciences, Vol. 5, 6, ISSN-2347 8527, 2016",
        "Mr. Mahantesh B, Numerical Solutions for magnetohydrodynamic Flow of nanofluid over a Bidirectional non-linear stretching Surface with prescribed surface heat flux boundary, Journal of Magnetism and Magnetic Materials, ISSN-0304-8853, 2016",
        "Ms. Pallavi N, Neuro Marketing - Shoppers Buy Button, Primax International Journal of Marketing, Vol. 4, 1, ISSN-2348 0491, 2016",
        "Ms. Pallavi N, Human Resource Management - The Emerging Trends - A Study on Performance Management Through Case Study Analysis, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016",
        "Ms. Pallavi N, HR Analytics - Descriptive to Predictive, National Conference on Human Resource Management - The Emerging Trends, ISBN-9789385291111, 2016",
        "Ms. Vandana Bhagat, Roll of Relational Algebra and Query Optimizer in Different Types of DBMS, International Journal of Computer Science and Mobile Computing, Vol. 5, 3, ISSN-2320 088X, 2016",
        "Mr. Manjunatha K S, Google Apps for Librarians, Innovative Practices in Libraries, ISBN-9789382694304, 2016",
        "Mr. Manjunatha K S, An Overview of Open Courseware Initiatives in India, Knowledge Librarian, Vol. 3, 1, ISSN-2394 2479, 2016",
        "Mr. Manjunatha K S, Users Perception Towards Diigital Library Resources and Services: A Case Study of Bangalore University, Karnataka, International Conference on Re-Engineering of Library Resources and Services: Challenges and Opportunities, ISBN-9788190880497, 2016",
        "Mr. Guravaiah P, Entrepreneurship - Indian Scenario, Global Journal for Research Analysis, Vol. 5, 2, ISSN-2277 8160, 2016",
        "Mr. Parveen A H, Use of Tpack Framework Model in English Language Teaching, The Global Journal of English Studies, Vol. 2, 1, ISSN-2395 4795, 2016",
        "Ms. Jyothirmayee R, Educated Women as Transformation Agents of Society, National Conference on Higher Education of Women in India - Opportunities and Challenges, 2016",
        "Ms. Tenzin Tsekyi, Tibetans in Karnataka: An Empirical Study, Journal of Media and Social Development, Vol. 4, 1, ISSN-2320 8244, 2016",
        "Mr. Venkatesh S K, A Study on Rising trend of Digitization in Libraries, International Journal of Library and Information Studies, Vol. 6, 1, ISSN-2231 4911, 2016",
        "Dr. Somanath V S, Management of Intangible Asset, Southern Economist, Vol. 54, 18, ISSN-0038 4046, 2016",
        "Dr. Somanath V S, Green Human Resource Management: Corporate Strategy and its Implications, International Journal of Social Science &Management, Vol. 4, 8, ISSN-2319 300X, 2016",
        "Dr. Lakshmi J V N, Machine Learning Techniques using Python for Data Analysis in Performance Evaluation, International Conference on Innovative Systems, 2016",
        "Dr. Lakshmi J V N, Improving the Map and Shuffle Phases in Hadoop MapReduce, Smart Computing and Informatics: Proceedings of the First International Conference on SCI 2016, ISBN-9789811055430, 2016",
        "Dr. Lakshmi J V N, Stochastic Gradient Descent using Linear Regression with Python, International Journal of Advanced Engineering Research and Applications, Vol. 2, 8, ISSN-2454 2377, 2016",
        "Dr. Shivaprasad N S, An Empirical Study on the Institutional Social and Material Environment Impact on Physical Education in B-Schools, International Journal of Physical Education, Sports and Health, Vol. 3, 3, ISSN-2391 1685, 2016",
        "Dr. Shivaprasad N S, Modern Lifestyle and its Impact on Well-being of B-School Students: A Case Study of AIMS, Bangalore, International Journal of Physical Education, Sports and Health, Vol. 3, 2, ISSN-2391 1685, 2016",
        "Dr. Brahm Sharma, Solid Waste Management Process for Sustainable Development, Sustainable Business Development: Strategies and Initiatives, ISBN-9788180943201, 2016",
        "Ms. Kalpana Jayakrishnan, Organizational Citizenship Behavior (OCB): A Comprehensive Literature Review, SUMEDHA Journal of Management, Vol. 5, 1, ISSN-2277-6753, 2016",
        "Mr. Ravi V, A Study of Consciousness of E-Banking in India, International Conference on Strategies for Business Excellence, Challenges and Opportunities, ISBN-9789383038299, 2015",
        "Ms. Jayashree Nair, Secure Watermarking Diophantine Equations for Authentication and Recovery, Journal of Network and Information Security, Vol. 3, 2, ISSN-2321 6859, 2015",
        "Ms. Jayashree Nair, ParQuoSCI: Pseudorandom Partial Quotient Sequences for Content based Image Authentication, BonfringInterntional Journal of Advances in Image Processing, Vol. 5, 2, ISSN-2277 503X, 2015",
        "Ms. Jayashree Nair, Recognizing Image Authenticity using DCT based Watermarking, International Journal of Computer Applications, ISSN-0975 8887, 2015",
        "Ms. Lakshmi J V N, A Comparative Analysis on Machine Learning Algorithms Implemented on Map Reduce Paradigm, International Journal of Data Mining and Emerging Technologies, Vol. 5, 1, 2015",
        "Dr. Lakshmi J V N, Improving the Map Phase in Hadoop Map Reduce, International Conference on Signal Processing, Control and Data Analytics, ISBN-9789811055447, 2015",
        "Dr. Lakshmi J V N, A Study of Machine Learning Algorithm on Map Reduce for Improving Performance, International Conference on Innovations in Contemporary IT Research, ISBN-9789381899038. 2015",
        "Dr. Lakshmi J V N, An Analysis on Efficient Column based Storage Structures in Big Data Analytics, International Journal of Computer Science Engineering, Vol. 4, 1, ISSN-2319 7323, 2015",
        "Dr. Lakshmi J V N, A Theoretical Model for Big Data Analytics using Machine Learning Algorithms, ISBN-9781450333610, 2015",
        "Dr. Lakshmi J V N, Machine Learning Approaches on Map Reduce for Big Data Analytics, International Conference on Green Computing and Internet of Things, 2015",
        "Dr. Lakshmi J V N, Comparison of Machine Learning Algorithm on Map Reduction for Performance Improvement in Big Data, Indian Journal of Science and Technology, Vol. 8, 29, ISSN-0974 6846, 2015",
        "Ms. Pallavi N, Role of CSR in SB Activities and Creation of Swatch Bharat Awareness and Role of Media, The Paradigm Annual Journal, Vol. 4, ISSN-2249 2534, 2015",
        "Mr. Mahantesh B, Effects of Diffusion-Thermo and Thermo-Diffusion on two-phase boundary layer flow past a stretching sheet with fluid-particle suspension and Chemical Reaction: A Numerical Study, Journal of Nigerian Mathematical Society, ISSN-0189 8965, 2015",
        "Mr. Mahantesh B, Melting Heat Transfer in Boundary Layer Stagnition-Point flow of Nanofield toward a Stretching sheet with Induced Magnetic field, Engineering Science and Technology and International Journal, Elsevier, ISSN-2215 0986, 2015",
        "Mr. Mahantesh B, Numerical Solution for Hydromagnetic Boundary Layer Flow and Heat Transfer past a Stretching Surface embedded in Non-Darcy Porous Medium with Fluid-Particle Suspension, Journal of Nigerian Mathematical Society, ScienceDirect, ISSN-0304-8853, 2015",
        "Mr. Mahantesh B, Thermal Radiation and Hall Effects on Boundary Layer flow past a non-isothermal stretching surface embedded in porous medium with non-uniform sources/sink and fluid-particle suspension,Springer, ISSN-0947 7411, 2015",
        "Mr. Mahantesh B, Effect of Suspended Nanoparticles on Three-Dimensional MHD Flow, Heat and Mass Transfer of Radiating Eyring-Powell Fluid Over a Stretching Sheet, Journal of Nanofluids, Vol. 4, ISSN-2169 432X, 2015",
        "Mr. Mahantesh B, Effects of nonlinear thermal radiation on hydromagneticupperconvected Maxwell fluid flow due to a convectively heated stretching sheet with fluid-particle suspension, Communication in Numerical Analysis, Vol. 2015, 2, 2015",
        "Dr. Karunakara Reddy B A, Consumers Buying Behaviour towards Online Shopping - A Case Study of Snapdeal.com Users in Bangalore City, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015",
        "Dr. Karunakara Reddy B A, Role of Corporate Social Responsibility in Developing Business and Society: A Study at Bengaluru, International Journal of Trade & Global Business Perspectives, Vol. 4, 4, ISSN-2319 9059, 2015",
        "Dr. Karunakara Reddy B A, Role of Skill Based Learning for the Growth of Higher Education, International Conference on Higher Education - A Vision for Higher Education - 2030, ISBN-9789352028818, 2015",
        "Dr. Karunakara Reddy B A, Talent Management, Work Life Balance and Retention Strategies, AIMS Journal of Research, Vol. 10, 1, ISSN-2321 8487, 2015",
        "Mr. Lakshminarayana S, A School Work on Accelerating the Pace of Rural Development of Through microfinance in India, EPRA International Journal of Economic and Business Review, Vol. 3, 5, ISSN-2347 9671, 2015",
        "Mr. Lakshminarayana S, Green Marketing Strategies: A Way Out for Better Life, International Conference on Innovative Marketing Strategies for Sustainable Growth Issues and Challenges, ISBN-9789385477140, 2015",
        "Ms. Minu Harlalka, Risk Management Measures of Central Banks for the Foreign Exchange Reserve, International Journal of Physical and Social Sciences, Vol. 5, 9, ISSN-2249 5894, 2015",
        "Mr. Arun Mudhol, Embedding Unique Identication in IoT, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015",
        "Dr. Siddaiah T, Disingenuous Corporate Activism, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015",
        "Dr. Vijay Bhasker V, Individuals Personality - Multiple Affects - Gender Differentiation!?, AIMS Journal of Research, Vol. 10, 2, ISSN-2321 8487, 2015",
        "Dr. Somanath V S, A Study on Impact of Crude Oil and Its Concomitant Impact on Home Currency, 4th International Conference on Emerging Trends in Finance &Accounting, ISBN-9789383302093, 2015",
        "Dr. Somanath V S, Signs of Corporate Collapse: An Assessment, Southern Economist, Vol. 54, 8, ISSN-0038 4046, 2015",
        "Ms. Rituparna Chakraborty, Body Dissatisfaction among Female University Students: Metacognitive Awareness, Psychol Stud, Springer, ISSN-0033 2968, 2015",
        "Dr. Sheri Kurian, Benchmarking on Global Practices in Higher Education - A Study on Hospitality and Tourism Education, International Conference on Higher Education - A Vision for Higher Education - 2030, ISBN-9789352028818, 2015",
        "Mr. Prabhas Pandith T S, Jungle Villages in the Writings of Kenneth Anderson, AIMS Journal of Research, Vol. 10, 1, ISSN-2321 8487, 2015",
        "Mr. Prabhas Pandith T S, Educational Misery and the Panacea of Technology: A Case of Fence Feeding on the Field? International Conference on Creating a Sustainable Lens for Higher Education: The New Urgency, ISBN-9789384869687, 2015",
        "Ms. Mahalakshmi S, A Study on Education for Sustainable Development, International Conference on Creating a Sustainable Lens for Higher Education: The New Urgency, ISBN-9789384869687, 2015",
        "Dr. Brahm Sharma, Context Aware Marketing a Creative Destructive tool for Consumer Psychology, International Scientific Symposium Economics, Business and Finance, ISBN-9789934145759, 2015",
        "Dr. Jayaprakash Reddy R, An Urgent Need for a Change in Definitions of MSMEs, International Conference on transitional Entrepreneurs & International SMEs in Emerging Economies: Drivers and Strategies, ISBN-9789384743819, 2015",
        "Ms. Lakshmi D, Exploring the Relationship between Academic Performances and Brain Dominances, Indian Journal of Science and Technology, Vol. 8, 9, ISSN-0974 6846, 2015",
        "Ms. Lakshmi D, Exploring the Relationship between Thinking and Learning Styles an Experimental Study towards Improving Learning of Theoretical Courses in Engineering, International Conference on Computer Communication and Informatics, ISBN-9781479968053, 2015",
        "Ms. Lakshmi D, Use of Multiple Intelligences and Instructional Technologies in Learning Theory of Computation: An Experimental Case Study, International Conference on Advanced Computing and Communication Systems, ISBN-9781479964383, 2015",
        "Ms. Lakshmi D, Casual Effect Analysis Between Brain Dominances and Multiple Intelligences, International Journal of Applied Engineering Research, Vol. 10, 1, ISSN-0973 4562, 2015",
        'Dr. Rama Murthy BM, Human Resource Accounting: A Frame Work for Better Financial Accounting and Reporting, International Conference on "Strategies for Sustainable Global Economy" Game Plan, ISBN-9789352122264, 2015',
        "Ms. Mamatha R, Womens's Empowerment for the Development of Society: The Gap between Law and Society in India, Gender Identity and Roles in India: Issues and Challenges, 2015",
        "Ms. Mamatha R, Empowerment of Women in India Through Better Health and Safe Motherwood for the Welfare of Community, Community Empowerment in Challanging World - Issues and Challenges, ISBN-9783736820210, 2015",
        "Ms. Mamatha R, Critical Issues for Compensation and Incentives Management: Theoretical Approach, National Conference on Emerging Indian Scenario Harnessing the Opportunities,Vol., ISBN-9789383241828, 2015",
        "Ms. Mamatha R, Humanitarian Law in Ancient Indian Jurisprudence - Role of Dharma, Legal Opus, Vol., 9, 2015",
        "Dr. Saravana Kumar V, A Study on Investment and Savings among Investors in Coimbatore City, Intercontinental Journal of Finance Research Review, Vol. 3, 2, ISSN-2321 0354, 2015",
        "Mr. Parveen A H, Insulated and Suffocating Life of a Neglected Wife, Human Rights International Research Journal, Vol. 3, 1, ISSN-2320 6942, 2015",
        "Mr. Guravaiah P, Corporate Governance and Corporate Ethics, Corporate Governance in Emerging Economies, ISBN-9789350567173, 2015",
        "Mr. Ranjitha Kumar, On Completely Semisimple Lie Algebra Bundles, Journal of Algebra and Its Applications, Vol. 14, 2, 2015",
        "Ms. Eti Khatri, Impact of Result Announcements on the Performace of Stock Prices: A Study of Banking Stocks, Vidyasagar University Journal of Commerce, Vol. 20, ISSN-0973 5917, 2015",
        "Dr. Subramanyam T, Efficiency Evaluation of Total Manufacturing Sectors of India - DEA Approach, Global Journal of Pure and Applied Mathematics, Vol. 11, 5, ISSN-0973 1768, 2015",
      ],
    },
    {
      title: "Books Publications",
      heading: "Books Publications",
      points: [
        "Ms. Deepa V H, Environmental Science, Dharshan Publishers, 2022",
        "Dr. Javad Ghalambor, Principles of Research Methodology, Red'Shine publication Pvt. Ltd, 2022",
        "Dr. V Saravana Kumar, Dr. Lakshminarayana S, Entrepreneurship Beginner's Guide to Business, Scientific International Publishing House, 2022",
        "Dr. Ravi V, Financial Management, Vision Book House, 2021",
        "Dr. Haritha M, Elements of Costing, Vision Book House, 2021",
        "Dr. Haritha M, Business Management and Startups, Vision Book House, 2021",
        "Dr. Haritha M, Financial Institution and Regulatory Bodies, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Business Finance, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Advanced Financial Accounting, Vision Book House, 2021",
        "Dr. B.M. RamaMurthy, Production and Inventory Management, Vision Book House, 2021",
        "Ms. Anushree Banerjee, Human Resource Management Practices, Vision Book House, 2021",
        "Dr. B.M. Rama Murthy, Monetary System, Himalaya Publishing House, 2021",
        "Dr. Karunakara Reddy, Marketing and Event Management, Phoenix Publishing House, 2021",
        "Dr. Haritha M, Quantitative Analysis for Business Decisions, Vision Book House, 2021",
        "Dr. Haritha M, Principles and Practices of Business Decisions, Himalaya Publishing House, 2021",
        "Dr. Haritha M, Risk Management and Derivatives, Himalaya Publishing House, 2021",
        "Dr. Ravi V, Modern Indian Banking, Himalaya Publishing House, 2021",
        "Dr. Ravi V, International Business Environment, Himalaya Publishing House, 2021",
        "Dr. Ravi V, Enerprise Management, Vision Book House, 2020",
        "Dr. Karunakara Reddy B aBusiness Ethics and Corporate Governance, Himalaya Publishing House, Mumbai, 2018",
        "Dr. Kiran Reddy, Pathways to Global Sustainability: Strategies and Frame Works, AIMS Publications, 2017",
        "Dr. Kiran Reddy, Basic Accounting: Principles and Practices, AIMS Publications, 2017",
        "Dr. Kiran Reddy, Emerging Trends in Revenue Management in Service Industry, AIMS Publications, 2016",
        "Dr. Kiran Reddy, Research Trends in Computer Applications and Information Management, AIMS Publications, 2015",
        "Dr. Kiran Reddy, Emerging Trends and Challenges in Commerce and Management, AIMS Publications, 2015",
        "Dr. Kiran Reddy, Sustainable Development: New Perspectives and Emerging Trends, AIMS Publications, 2015",
        "Ms. Arul Jyothi, Managerial Research Methods, Himalaya Publishing House, Mumbai, 2015",
        "Dr. Karunakara Reddy B A, Pushpa N, Archana M N, Business Ethics, Vision Book House, New Delhi, 2015",
        "Dr. Karunakara Reddy B A, Risk Management, Himalaya Publishing House, Mumbai, 2015",
        "Ms. Arul Jyothi, Human Resource Management, Himalaya Publishing House, Mumbai, 2015",
        "Dr. Somanath V S, International Financial Management, I K International Publishing House, 2015",
      ],
    },
  ]

  return (
    <div className="container mx-auto px-4 md:px-0 pb-6 md:pb-10">
      <div className="max-w-8xl mx-auto">
        {/* Buttons Row */}
        <motion.div
          className="flex flex-col sm:grid sm:grid-cols-2 lg:flex lg:flex-row mb-0 gap-2 sm:gap-0"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          {tabsData.map((tab, index) => (
            <motion.button
              key={index}
              onClick={() => setActiveTab(index)}
              className={`flex items-center justify-center space-x-2 sm:space-x-3 px-4 sm:px-4 md:px-6 py-3 sm:py-3 transition-all duration-300 rounded-lg sm:rounded-none flex-1 ${
                activeTab === index
                  ? "bg-white/20 text-[#A22877] border border-black shadow-lg"
                  : "bg-[#A22877] text-white hover:bg-[#8B1F5F] shadow-md"
              }`}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <span className="font-semibold text-base sm:text-base md:text-[18px] monser-400 text-center">
                {tab.title}
              </span>
              <Image
                src={
                  activeTab === index
                    ? "/admission-process/up-arrow.svg"
                    : "/admission-process/down-arrow.svg"
                }
                alt={tab.title}
                width={24}
                height={24}
                className="w-5 h-5 sm:w-5 sm:h-5 md:w-6 md:h-6 flex-shrink-0"
              />
            </motion.button>
          ))}
        </motion.div>

        {/* Content Area */}

        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{
              type: "tween",
              ease: "easeOut",
              duration: 0.5,
            }}
            className="p-4 sm:p-6 md:p-8 bg-[#E1F9F4] rounded-lg"
          >
            <div className="ml-2 sm:ml-4 md:ml-10">
              {/* Heading */}
              <motion.h5
                className="text-lg sm:text-xl md:text-2xl lg:text-[24px] mb-4 sm:mb-6 monser-600 text-[#A22877] leading-tight"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.4, delay: 0.2 }}
              >
                {tabsData[activeTab].heading}
              </motion.h5>

              {/* Numbered Points */}
              <div className="space-y-3 sm:space-y-4 ">
                <div className="monser-400">
                  {tabsData[activeTab].points
                    .slice(0, visibleCount)
                    .map((point, index) => (
                      <motion.div
                        key={index}
                        className="flex items-start space-x-2 sm:space-x-3 md:space-x-4 text-sm sm:text-base md:text-lg lg:text-[20px] mb-3"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{
                          duration:
                            index < (isClient && isMobile ? 10 : 30)
                              ? 0.8
                              : 0.2,
                          delay:
                            index < (isClient && isMobile ? 10 : 30)
                              ? 0.2 + index * 0.15
                              : 0.02 +
                                (index - (isClient && isMobile ? 10 : 30)) *
                                  0.02,
                          ease: "easeOut",
                        }}
                      >
                        <span className="flex-shrink-0 text-[#A22877] font-semibold text-[16px] leading-tight">
                          {index + 1}.
                        </span>
                        <p className="text-[16px] md:text-[25px] leading-tight">
                          {point}
                        </p>
                      </motion.div>
                    ))}
                </div>

                {/* View More Text with Arrows - Only for Journal Publications */}
                {activeTab === 0 &&
                  visibleCount < tabsData[activeTab].points.length && (
                    <motion.div
                      className="flex justify-center mt-8"
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.4, delay: 0.5 }}
                    >
                      <motion.button
                        onClick={() =>
                          setVisibleCount((prev) =>
                            Math.min(
                              prev + getNextBatchSize(),
                              tabsData[activeTab].points.length
                            )
                          )
                        }
                        className="flex items-center space-x-2 text-[#A22877] hover:text-[#8B1F5F] transition-colors duration-300 monser-600 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <span className="text-lg md:text-lg">Read More...</span>
                        <motion.div
                          className="mt-3"
                          animate={{ y: [0, -8, 0] }}
                          transition={{
                            duration: 1.5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          }}
                        >
                          <Image
                            src="/admission-process/up-arrow.svg"
                            alt="View More"
                            width={20}
                            height={20}
                            className="w-4 h-4 sm:w-5 sm:h-5 rotate-180"
                          />
                        </motion.div>
                      </motion.button>
                    </motion.div>
                  )}
              </div>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  )
}

export default Publications
