import Button from "@/shared/Button";
import { FaInstagram, FaFacebookF, FaXTwitter, FaYoutube } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="bg-[#0a1a54] text-white">
      {/* Top Section */}
      <div className="container mx-auto py-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 lg:px-0 px-5 lg:gap-0 gap-5">
        <div>
          <h6 className="font-semibold text-2xl mb-4">Students</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#">University Rank Holders</a></li>
            <li><a href="#">Student Handbook</a></li>
            <li><a href="#">Student Exit Formalities</a></li>
            <li><a href="#">Examinations</a></li>
            <li><a href="#">Academic Calendar</a></li>
            <li><a href="#">Program and Course Outcome</a></li>
            <li><a href="#">Code of Conduct (Students)</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-2xl mb-4">Faculty & Staff</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Articles/Publications</a></li>
            <li><a href="#">Code of Conduct & Ethics</a></li>
            <li><a href="#">Faculty Members Details</a></li>
            <li><a href="#">Patents</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-2xl mb-4">Disclosures</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#">IQAC</a></li>
            <li><a href="#">IACBE Accreditation</a></li>
            <li><a href="#">NAAC Accreditation</a></li>
            <li><a href="#">AICTE</a></li>
            <li><a href="#">NIRF</a></li>
            <li><a href="#">UGC 2(f) & 12B</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-2xl mb-4">Committees</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#">Grievance Redressal</a></li>
            <li><a href="#">Anti-Ragging Cell</a></li>
            <li><a href="#">Anti-Sexual Harassment Committee</a></li>
            <li><a href="#">Equal Opportunity Cell</a></li>
          </ul>
        </div>
        <div>
          <h6 className="font-semibold text-2xl mb-4">General Information</h6>
          <ul className="space-y-2 text-sm">
            <li><a href="#">AIMS Journal of Research</a></li>
            <li><a href="#">NEWS</a></li>
            <li><a href="#">Newsletter</a></li>
            <li><a href="#">Events</a></li>
            <li><a href="#">Blogs</a></li>
            <li><a href="#">Environment & Sustainability</a></li>
            <li><a href="#">Rotaract Club of AIMS</a></li>  
          </ul>
        </div>
      </div>

      {/* Middle Section */}
      <div className="border-t border-b border-gray-600">

    
      <div className="container mx-auto grid grid-cols-1 lg:px-0 px-5">
       <div className="lg:flex gap-4 space-x-2.5">
       <div className="lg:flex gap-4 lg:w-[50%] lg:border-r border-gray-600 py-8 pe-4">
       <div>
          <h6 className="font-semibold text-2xl mb-2">AIMS Institutes</h6>
          <span className="text-sm">
            1st Cross, 1st Stage, Peenya, Bengaluru 560058,<br /> Karnataka, INDIA.
          </span>
        </div>
        <div className="lg:pt-0 pt-5">
          <h6 className="font-semibold text-2xl mb-2">Contact US</h6>
          <span className="text-sm">Admissions Centre: +91-815-000-1994</span>
          <span className="text-sm">C&PR Centre: +91 70261 91114</span>
          <span className="text-sm">Reception: 080 28390433/34</span>
        </div>
        <div className="lg:pt-0 pt-5">
          <h6 className="font-semibold text-2xl mb-2">Follow Us</h6>
          <div className="flex space-x-4 mt-2 text-2xl">
            <a href="#" className="hover:text-gray-300"><FaInstagram /></a>
            <a href="#" className="hover:text-gray-300"><FaFacebookF /></a>
            <a href="#" className="hover:text-gray-300"><FaXTwitter /></a>
            <a href="#" className="hover:text-gray-300"><FaYoutube /></a>
          </div>
        </div>
       </div>
       <div className="lg:w-[50%] lg:flex justify-start items-start lg:py-8">
         <div>
         <h6 className="font-semibold text-2xl mb-2">
            Happy to keep you updated.<br />Sign up for our newsletter.
          </h6>
          <span className="text-sm mb-3">Sign up to be the first to know about our events, achievements, and new initiatives.</span>
         </div>
          <div className="flex flex-col gap-5">
            <input
              type="email"
              placeholder="Email Address"
              className="flex-1 px-3 py-2 rounded focus:outline-none text-white border"
            />
            <Button className="rounded hover:text-white hover:border-white w-40">Sign Up</Button>
          </div>
        </div>
       </div>
       
      </div>

      </div>
      {/* Bottom Section */}
      <div className="bg-[#0a1a54] py-4 text-center text-sm">
        © AIMS Institutes 2025
        <a href="#" className="ml-4 hover:underline">Terms & Conditions</a>
        <a href="#" className="ml-4 hover:underline">Privacy</a>
        <a href="#" className="ml-4 hover:underline">Refund & Cancellations</a>
      </div>
    </footer>
  );
}
