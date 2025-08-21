import Button from "@/shared/Button";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#0C2165] text-white">
      {/* Top Section - Navigation Links */}
      <div className="container mx-auto py-10 px-5 lg:px-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-4">
          <div>
            <h6 className="font-semibold text-xl lg:text-2xl mb-4">Students</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/student-university-rank-holders" className="hover:text-gray-300 transition-colors">University Rank Holders</Link></li>
              <li><Link href="/student-information-zone" className="hover:text-gray-300 transition-colors">Student Handbook</Link></li>
              <li><Link href="/student-exit-formalities" className="hover:text-gray-300 transition-colors">Student Exit Formalities</Link></li>
              <li><Link href="/examinations" className="hover:text-gray-300 transition-colors">Examinations</Link></li>
              <li><Link href="/aims-academic-calendar" className="hover:text-gray-300 transition-colors">Academic Calendar</Link></li>
              <li><Link href="/programs-course-outcome" className="hover:text-gray-300 transition-colors">Program and Course Outcome</Link></li>
              <li><Link href="/code-of-conduct-students" className="hover:text-gray-300 transition-colors">Code of Conduct (Students)</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl lg:text-2xl mb-4">Faculty & Staff</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/articles-publications" className="hover:text-gray-300 transition-colors">Articles/Publications</Link></li>
              <li><Link href="/code-of-conduct-ethics" className="hover:text-gray-300 transition-colors">Code of Conduct & Ethics</Link></li>
              <li><Link href="/aims-list-of-faculty" className="hover:text-gray-300 transition-colors">Faculty Members Details</Link></li>
              <li><Link href="/patents" className="hover:text-gray-300 transition-colors">Patents</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl lg:text-2xl mb-4">Disclosures</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/iqac-internal-quality-assurance-cell" className="hover:text-gray-300 transition-colors">IQAC</Link></li>
              <li><Link href="/iacbe-accreditation" className="hover:text-gray-300 transition-colors">IACBE Accreditation</Link></li>
              <li><Link href="/naac-accreditation" className="hover:text-gray-300 transition-colors">NAAC Accreditation</Link></li>
              <li><Link href="/aicte-aims" className="hover:text-gray-300 transition-colors">AICTE</Link></li>
              <li><Link href="/nirf-ranking" className="hover:text-gray-300 transition-colors">NIRF</Link></li>
              <li><Link href="/ugc-preparation" className="hover:text-gray-300 transition-colors">UGC 2(f) & 12B</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl lg:text-2xl mb-4">Committees</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/grievance-redressal" className="hover:text-gray-300 transition-colors">Grievance Redressal</Link></li>
              <li><Link href="/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity" className="hover:text-gray-300 transition-colors">Anti-Ragging Cell</Link></li>
              <li><Link href="/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity" className="hover:text-gray-300 transition-colors">Anti-Sexual Harassment Committee</Link></li>
              <li><Link href="/cells-committees-antiragging-sexual-harassment-grievances-equal-opportunity" className="hover:text-gray-300 transition-colors">Equal Opportunity Cell</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-semibold text-xl lg:text-2xl mb-4">General Information</h6>
            <ul className="space-y-2 text-sm">
              <li><Link href="/aims-journal-of-research" className="hover:text-gray-300 transition-colors">AIMS Journal of Research</Link></li>
              <li><Link href="/news" className="hover:text-gray-300 transition-colors">NEWS</Link></li>
              <li><Link href="/gallery" className="hover:text-gray-300 transition-colors">Gallery</Link></li>
              <li><Link href="/events" className="hover:text-gray-300 transition-colors">Events</Link></li>
              <li><Link href="/blogs" className="hover:text-gray-300 transition-colors">Blogs</Link></li>
              <li><Link href="/environment-sustainability-policy-report" className="hover:text-gray-300 transition-colors">Environment & Sustainability</Link></li>
              <li><Link href="/rotaract-club" className="hover:text-gray-300 transition-colors">Rotaract Club of AIMS</Link></li>
            </ul>
          </div>
        </div>
      </div>

      {/* Middle Section - Contact, Social, Newsletter */}
      <div className="border-t border-b border-whtie">
        <div className="container mx-auto px-2 lg:px-0">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6">
              {/* AIMS Institutes */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">AIMS Institutes</h6>
                <h5 className="text-sm text-gray-300 text-[14px]">
                  1st Cross, 1st Stage, Peenya,<br /> Bengaluru 560058,<br /> Karnataka, INDIA.
                </h5>
              </div>

              {/* Contact US */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">Contact US</h6>
                <div className="space-y-2 text-sm text-gray-300">
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    Admissions Centre: <br />
                    <a href="tel:+918150001994" className="hover:text-white transition-colors">+91-815-000-1994</a>
                  </h5>
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    C&PR Centre: <a href="tel:+917026191114" className="hover:text-white transition-colors">+91 70261 91114</a>
                  </h5>
                  <h5 className="text-sm text-gray-300 text-[14px]">
                    Reception: 080 28390433/34
                  </h5>
                </div>
              </div>

              {/* Follow Us */}
              <div className="py-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">Follow Us</h6>
                <div className="flex space-x-4 mt-2 text-2xl">
                  <a href="#" className="hover:text-gray-300 transition-colors"><FaInstagram /></a>
                  <a href="#" className="hover:text-gray-300 transition-colors"><FaFacebookF /></a>
                  <a href="#" className="hover:text-gray-300 transition-colors"><FaXTwitter /></a>
                  <a href="#" className="hover:text-gray-300 transition-colors"><FaYoutube /></a>
                </div>
              </div>

              {/* Newsletter */}
              <div className="lg:col-span-2 lg:border-l border-white py-4 lg:pl-4">
                <h6 className="font-semibold text-xl lg:text-2xl mb-4">
                  Happy to keep you updated.<br />Sign up for our newsletter.
                </h6>
                <h5 className="text-sm text-gray-300 text-[14px]">
                  Sign up to be the first to know about our events, achievements, and new initiatives.
                </h5>
              </div>
              <div className="space-y-3 py-4">
                <input
                  type="email"
                  placeholder="Email Address"
                  className="w-full px-3 py-2 rounded border border-gray-400 bg-transparent text-white placeholder-gray-400 focus:outline-none focus:border-white transition-colors"
                />
                <Button className="bg-[#A22877] hover:bg-[#8B1F6A] text-white border-[#A22877] hover:border-[#8B1F6A] w-full transition-colors">
                  Sign Up
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Section - Copyright */}
      <div className="py-4 text-center text-sm">
        <div className="container mx-auto px-5 lg:px-0">
          <span>© AIMS Institutes {new Date().getFullYear()}</span>
          <Link href="/terms-conditions" className="ml-4 hover:underline transition-colors">Terms & Conditions</Link>
          <Link href="/privacy-policy" className="ml-4 hover:underline transition-colors">Privacy</Link>
          <Link href="/refund-cancellations" className="ml-4 hover:underline transition-colors">Refund & Cancellations</Link>
        </div>
      </div>
    </footer>
  );
}
