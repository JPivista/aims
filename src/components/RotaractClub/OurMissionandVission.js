import React from "react";
import Image from "next/image";

const OurMissionandVission = () => {
  return (
    <>
      <div className="w-full bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-0">
          {/* Our Vision Section */}
          <div>
            <div className="items-center grid grid-cols-1 lg:grid-cols-3">
              {/* Left - Profile Image */}
              <div className="flex justify-center w-full">
                <div className="relative">
                  <div className="rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
                    <div>
                      <Image
                        src="/rotaract-club/our-vision-sanjay.png"
                        alt="Rtr. Sanjay - President 2022-2023"
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-bold text-lg text-gray-800">
                      Rtr. Sanjay
                    </p>
                    <p className="text-gray-600">President, 2022-2023</p>
                  </div>
                </div>
              </div>

              {/* Right - Content */}
              <div className="col-span-2 lg:mt-0 mt-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#0C2165] lg:mb-4 mb-4">
                  Our Vision
                </h3>
                <blockquote className="text-2xl lg:text-3xl font-bold text-[#0C2165] mb-4 italic">
                  &quot;Empowering young leaders for change.&quot;
                </blockquote>
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p>
                    At the Rotaract Club, we believe in the power of young
                    people to make a positive difference in the world. Our
                    vision is to empower young leaders with the skills,
                    resources, and opportunities they need to drive change and
                    create a better future for themselves and others. Through
                    our service projects, leadership development programs, and
                    networking opportunities, we aim to cultivate a culture of
                    service and leadership among our members. By investing in
                    the next generation of leaders, we hope to create a more
                    just, equitable, and sustainable world for all.
                  </p>
                  <p>
                    We believe that everyone has the potential to be a leader
                    and to make a positive impact in their community. Our club
                    is committed to providing our members with the resources and
                    support they need to develop their leadership skills, take
                    on meaningful projects, and make a difference in the world.
                    We offer opportunities for personal and professional growth,
                    such as mentorship programs, workshops, and networking
                    events. By empowering young leaders, we hope to create a
                    ripple effect of positive change that will extend far beyond
                    our club and benefit society as a whole.
                  </p>
                  {/* <p>
                    Our vision extends beyond traditional community service to
                    encompass personal growth, professional development, and
                    global citizenship, ensuring that every member has the tools
                    and confidence to make a meaningful impact.
                  </p> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full bg-white py-10 border-b border-gray-200">
        <div className="container mx-auto px-4 lg:px-0">
          {/* Our Mission Section */}
          <div>
            <div className="items-center grid grid-cols-1 lg:grid-cols-3 ">
              {/* Left - Content */}
              <div className="order-2 lg:order-1 col-span-2 lg:mt-0 mt-10">
                <h3 className="text-4xl lg:text-5xl font-bold text-[#0C2165] mb-4">
                  Our Mission
                </h3>
                <blockquote className="text-2xl lg:text-3xl font-bold text-[#0C2165] mb-6 italic">
                  &quot;To do everything possible to expand the Exuberant
                  potential in today&apos;s youth.&quot;
                </blockquote>
                <div className="text-gray-800 leading-relaxed space-y-4">
                  <p>
                    Our mission is to expand the exuberant potential of today’s
                    youth through community service, personal development, and
                    leadership opportunities. We strive to create a supportive
                    and inclusive environment where young people can explore
                    their passions, learn new skills, and make a positive impact
                    in their communities and the world.
                  </p>
                  <p>
                    We believe that by empowering youth to be socially
                    responsible and emotionally intelligent leaders, we can
                    create a brighter future for all. Our club is dedicated to
                    providing our members with access to quality education,
                    mentorship, and volunteer opportunities that help them
                    develop the skills, knowledge, and confidence they need to
                    succeed in life.{" "}
                  </p>
                  <p>
                    We are committed to upholding the values of Rotaract, which
                    include service, leadership, diversity, and friendship.
                    Through our projects and activities, we aim to make a
                    difference in the lives of those around us and promote peace
                    and goodwill in the world.
                  </p>
                  <p>
                    Join us in our mission to expand the exuberant potential of
                    today’s youth and make a positive impact in the world!
                  </p>
                </div>
              </div>

              {/* Right - Profile Image */}
              <div className="flex justify-center order-1 lg:order-2 w-full">
                <div className="relative">
                  <div className="rounded-full bg-gradient-to-br from-purple-400 to-purple-600">
                    <div className="w-full h-full">
                      <Image
                        src="/rotaract-club/our-mission-lakshmi.png"
                        alt="Rtr. Lakshmi V - Secretary 2022-2023"
                        width={300}
                        height={300}
                        className="object-cover"
                      />
                    </div>
                  </div>
                  <div className="text-center mt-4">
                    <p className="font-bold text-lg text-gray-800">
                      Rtr. Lakshmi V
                    </p>
                    <p className="text-gray-600">Secretary, 2022-2023</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default OurMissionandVission;
