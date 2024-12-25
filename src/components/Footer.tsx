import React from "react";
import {
  FaFacebook,
  FaYoutube,
  FaTwitter,
  FaInstagram,
  FaTiktok,
} from "react-icons/fa";
import { MdMailOutline } from "react-icons/md";

const Footer = () => {
  return (
    <div className="w-full py-10 bg-gray-100 h-[410px] mt-12">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mt-10 px-8 md:px-20">
        {/* Core Courses Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Core Courses</h2>
          <ul className="space-y-2">
            <li>Programming Fundamentals</li>
            <li>Web2 Using NextJS</li>
            <li>Earn as You Learn</li>
          </ul>
        </div>

        {/* Advanced Courses Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Advanced Courses</h2>
          <ul className="space-y-2">
            <li>Web 3 and Metaverse</li>
            <li>Cloud-Native Computing</li>
            <li>Artificial Intelligence (AI) and Deep Learning</li>
            <li>Ambient Computing and IoT</li>
            <li>Genomics and Bioinformatics</li>
            <li>Network Programmability and Automation</li>
          </ul>
        </div>

        {/* Social Links Section */}
        <div>
          <h2 className="text-xl font-bold mb-4">Social Links</h2>
          <div className="flex space-x-4">
            <a href="#" className="text-blue-600">
              <FaFacebook size={32} />
            </a>
            <a href="#" className="text-red-600">
              <FaYoutube size={32} />
            </a>
            <a href="#" className="text-blue-400">
              <FaTwitter size={32} />
            </a>
            <a href="#" className="text-pink-600">
              <FaInstagram size={32} />
            </a>
            <a href="#" className="text-black">
              <FaTiktok size={32} />
            </a>
          </div>
          <div className="flex items-center mt-[10px] space-x-2">
            <MdMailOutline className="text-cyan-800 text-[25px]" />
            <a href="#" className="text-cyan-800 text-[15px] underline">
              education@governorsindh.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
